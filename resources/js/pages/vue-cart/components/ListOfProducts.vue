<template>
    <div>
    <ul class="listOfProducts">
        <li v-for="(product, index) in products" :key="index" class="product">
        <div class="prodOuterContainer">
            <div class="prodInnerContainer">
                <div class="imgProdContainer">
                    <b-img 
                        v-bind="mainPropsImg"
                        :src="product.image" 
                        fluid 
                        alt="fluid">
                    </b-img>
                </div>
                <h2 class="product-name"
                    @click="addCurrentProduct(product)">
                    {{ product.name }}
                </h2>
            <div class="mb-2">{{ product.details_trimmed }}</div>
            <div class="product-price">
                <span style="color: green;" v-show="(product.tiene_producto_desc==0 && product.tiene_marca_desc==0)">C$ {{ product.price }} </span>
                <span style="color: blue;" v-show="(product.tiene_producto_desc==1 && product.tiene_marca_desc==0)">C$ {{ product.price - (product.price * (product.descuento_producto_cliente / 100)) }} </span>
                <span style="color: black;" v-show="(product.tiene_producto_desc==0 && product.tiene_marca_desc==1)">C$ {{ product.price - (product.price * (product.descuento_marca_prod / 100)) }} </span>
                <span style="color: blue;" v-show="(product.tiene_producto_desc==1 && product.tiene_marca_desc==1)">C$ {{ product.price - (product.price * (product.descuento_producto_cliente / 100)) }} </span>
                <span>{{ product.nombre_marca }}</span>
            </div>
            <ApolloMutation
                :ref="'mutAddToCart'+product.id"
                :mutation="require('../../../graphql/carritoCreate.gql').default"
                @done="onDoneAddCart">
                <template v-slot="{mutate, loading, called , error}">
                    <b-alert v-show="error" variant="danger" show>{{ error }}</b-alert>
                    <b-input-group prepend="" class="mt-3">
                    <b-input-group-append>
                        <b-button 
                        v-show="!product.esta_en_carrito_draft"
                        :id="'btnAddCart' + product.id" 
                        v-bind="mainPropsImgCrt"
                        @click="addProductToCart(product)"
                        variant="primary" 
                        class="align-bottom">
                            <b-spinner 
                            v-show="false"
                            :id="'spnrAddCart' + product.id"
                            type="border" 
                            small >
                            </b-spinner>
                            <b-img 
                                :id="'imgAddCart' + product.id"
                                v-bind="mainPropsImgCrt"
                                :src="imgCart" 
                                fluid 
                                alt="Carrito">
                            </b-img>
                            Agregar al carrito
                        </b-button>
                        </b-input-group-append>
                    <b-form-input
                        v-show="!product.esta_en_carrito_draft"
                        :id="'txtCantSol' + product.id"
                        required
                        placeholder="Cantidad">
                    </b-form-input>
                </b-input-group>
                <b-alert :id="'lrtMsg' + product.id" class="msgValCantSol" show variant="danger"></b-alert>
                </template>
            </ApolloMutation>
            <ApolloMutation
                :ref="'mutDelFromCart'+product.id"
                :mutation="require('../../../graphql/carritoDelete.gql').default"
                :variables="{
                                id_producto: product.id
                            }"
                @done="onDoneDelCart">
                <template v-slot="{mutate, loading, called , error}">
                    <b-alert v-show="error" variant="danger" show>{{ error }}</b-alert>
                    <b-button 
                        v-show="product.esta_en_carrito_draft"
                        :id="'btnDelCart' + product.id" 
                        v-bind="mainPropsImgCrt"
                        @click="delProductFromCart(product)"
                        variant="light" 
                        class="align-bottom">
                        <b-spinner 
                            v-show="false"
                            :id="'spnrDelCart' + product.id"
                            type="border" 
                            small >
                        </b-spinner>
                        Quitar del carrito
                    </b-button>
                </template>
            </ApolloMutation>
            </div>
        </div>
        </li>
    </ul>
    <product :showModalProdDatail.sync="showModalProdDatail"></product>
    </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import Product from './Product';

  export default {
    props: ['products'],

    components: {
      Product,
    },
    data() {
      return {
        showModalProdDatail: false,
        showSpnrMut: false,
        mainPropsImg: { width: 250, height: 250 },
        mainPropsImgCrt: { width: 20, height: 20 },
        idProdDel: null,
        prodAdd: null,
      }
    },
    computed: {
      imgCart() {
        return `${window.cdn_url || ''}images/cart.svg`; 
      },
    },
    methods: {
      ...mapActions([
        'addProduct',
        'currentProduct',
      ]),
      addProductToCart(product) {
        // this.addProduct(product);
        // agregar a la tabla de carrito en estado: DRAFT
        var nodeTxt = document.getElementById('txtCantSol'+ product.id);
        var cant = nodeTxt.value;
        var reg = /^\d+$/;  // Prueba si es un número entero
        if (typeof cant == 'undefined' || cant==null || cant=='' || !reg.test(cant)) { // VALIDAR CANTIDAD A PEDIR
            nodeTxt.style.borderColor = 'red';
            nodeTxt.focus();
            return;
        }
        nodeTxt.style.display = 'none';
        nodeTxt.style.borderColor = '#ced4da'; 
        document.getElementById('spnrAddCart'+ product.id).style.display = 'block';
        document.getElementById('imgAddCart'+ product.id).style.display = 'none';
        document.getElementById('btnAddCart' + product.id).disabled = true;
        var intCant = parseInt(nodeTxt.value);
        this.prodAdd = product;
        this.$refs['mutAddToCart'+product.id][0].mutate({ 
              variables: {
                          cod_estado_carrito: 'DRAFT', 
                          id_producto: product.id, 
                          cantidad: intCant
                        }
                      });
      },
      onDoneAddCart(data) {
        var newval = data.data.carritoCreate;
        var msgDgr = document.getElementById('lrtMsg' + this.prodAdd.id);
        if (newval==null) {
          this.shwHdNode('btnAddCart' + this.prodAdd.id, 'block');
          this.shwHdNode('btnDelCart' + this.prodAdd.id, 'none');
          this.shwHdNode('spnrDelCart' + this.prodAdd.id, 'none');
          this.shwHdNode('spnrAddCart' + this.prodAdd.id, 'none');
          this.shwHdNode('imgAddCart' + this.prodAdd.id, 'block');
          this.shwHdNode('txtCantSol'+ this.prodAdd.id, 'block');
          document.getElementById('btnDelCart' + this.prodAdd.id).disabled = false;
          document.getElementById('btnAddCart' + this.prodAdd.id).disabled = false;
          this.shwHdNode('lrtMsg' + this.prodAdd.id, 'block');
          msgDgr.innerHTML = 'Cantidad solicitada no disponible';
          var nodeTxt = document.getElementById('txtCantSol'+ this.prodAdd.id);
          nodeTxt.style.borderColor = 'red';
          nodeTxt.focus();
          return;
        }
        document.getElementById('txtCantSol'+ this.prodAdd.id).value = '';
        this.shwHdNode('lrtMsg' + this.prodAdd.id, 'none');
        msgDgr.innerHTML = '';
        if (Object.keys(newval).length > 0) {
          this.shwHdNode('spnrAddCart'+ newval.id_producto, 'none');
          this.shwHdNode('imgAddCart'+ newval.id_producto, 'block');
          this.shwHdNode('btnAddCart' + newval.id_producto, 'none');
          this.shwHdNode('btnDelCart' + newval.id_producto, 'block');
          this.shwHdNode('spnrDelCart' + newval.id_producto, 'none');
          document.getElementById('btnAddCart' + newval.id_producto).disabled = false;
          this.$emit('addedToCart');
        }
      },
      delProductFromCart(product) {
        this.shwHdNode('spnrDelCart' + product.id, 'block');
        document.getElementById('btnDelCart' + product.id).disabled = true;
        this.idProdDel = product.id;
        this.$refs['mutDelFromCart'+product.id][0].mutate();
      },
      onDoneDelCart(data) {
        var resDelCrt = data.data.carritoDelete;
        if (resDelCrt==='OK') {
          this.shwHdNode('btnAddCart' + this.idProdDel, 'block');
          this.shwHdNode('btnDelCart' + this.idProdDel, 'none');
          this.shwHdNode('spnrDelCart' + this.idProdDel, 'none');
          this.shwHdNode('txtCantSol'+ this.idProdDel, 'block');
          document.getElementById('btnDelCart' + this.idProdDel).disabled = false;
          this.$emit('removedFromCart');
        }
      },
      shwHdNode(strId, strDisp) {
          document.getElementById(strId).style.display = strDisp;
      },
      addCurrentProduct(product) {
        this.currentProduct(product);
        this.showModalProdDatail = true;
      },
    },
  };
</script>

<style scoped>
  .listOfProducts {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 0;
  }

  .product {
    width: 300px;
    background-color: #fff;
    list-style: none;
    box-sizing: border-box;
    padding: 1em;
    margin: 1em 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 7px;
  }

  .product-name {
    color: #0909bf;
    font-size: 1.2em;
    font-weight: normal;
  }

  .product-name:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  .product-price {
    width: 100%;
    align-self: flex-start;
    display: flex;
    justify-content: space-between;
    margin-bottom: .5em;
  }

  .msgValCantSol {
    display: none;
  }

  .prodOuterContainer {
    border-color: #ced4da;
    background-color: #ced4da;
    padding: 1px;
  }
  .prodInnerContainer {
    border-color: white;
    background-color: white;
    margin: 0px;
    padding: 10px;
  }

  .imgProdContainer {
    height: 290px;
  }

</style>

