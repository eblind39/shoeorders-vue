<template>
  <div>
    <div class="container d-flex justify-content-center">
      <b-navbar id="nvMainSearch" toggleable="lg" variant="info" style="background-color: #4e4e4e !important; max-width: 680px; padding: 10px;">
        <b-navbar-brand style="width: 100%; margin-right: 0.1rem;">
          <b-input-group>
            <b-form-select 
              v-model="selCategoria" 
              :options="optCategorias" 
              value-field="id_catalogo"
              text-field="valor"
              size="sm" 
              style="height: 37px; font-size: 0.8em;">
            </b-form-select>
            <b-form-select 
              v-model="selMarca" 
              :options="optMarcas" 
              value-field="id_marca"
              text-field="nombre_marca"
              size="sm" 
              style="height: 37px; font-size: 0.8em;">
            </b-form-select>
          </b-input-group>
        </b-navbar-brand>
        <b-navbar-brand style="width: 100%; margin-right: 0.1rem;">
          <b-input-group id="iptgrpSearch">
            <vue-instant :suggestOnAllWords="true"
                        :suggestion-attribute="suggestionAttribute" 
                        v-model="nombdescr" 
                        :disabled="false"  
                        @input="changed" 
                        @click-input="clickInput" 
                        @click-button="clickButton" 
                        @selected="selected"  
                        @enter="enter" 
                        @key-up="keyUp" 
                        @key-down="keyDown" 
                        @key-right="keyRight" 
                        @clear="clear" 
                        @escape="escape" 
                        :show-autocomplete="true" 
                        :autofocus="false" 
                        :suggestions="suggestions" 
                        name="customName" 
                        placeholder="Buscar producto..." 
                        type="amazon">
                </vue-instant>
                <router-link to="/products-incart"  style="color: white;" class="ml-2">
                    <span class="fa-layers fa-fw" style="font-size: 2.2em; background:none;">
                        <i class="fas fa-shopping-cart"></i>
                        <span v-show="totalProductosInCart" class="fa-layers-counter" style="font-size: 1.3em; background:#ffbf58;color:#202f40;">{{ totalProductosInCart }}</span>
                    </span>
                </router-link>
          </b-input-group>
        </b-navbar-brand>
      </b-navbar>
    </div>
    <listOfProducts :products="productosTodos" @addedToCart="getTotalProductsInCart()" @removedFromCart="getTotalProductsInCart()" />
  </div>
</template>

<script>
import axios from 'axios';
import listOfProducts from './components/ListOfProducts';
import { GET_PRODUCTO_BY_ID } from '../../graphql/productoGetById.gql';
import { GET_CATALOGOSHJS_BY_CODFTHR } from '../../graphql/catalogoGetHijosByCod.gql';
import { GET_CARTTOTALPRODS_BY_USRID } from '../../graphql/carritoGetTotalProductosXUsrId.gql';
import { GET_MARCAXCLIENTE_BY_IDCLI } from '../../graphql/marcaxclienteGetById.gql';
import Vue from 'vue'
import VueInstant from 'vue-instant';
import 'vue-instant/dist/vue-instant.css';

Vue.use(VueInstant);

export default {
  components: {
    listOfProducts,
  },
  mounted() {
    this.getProductosData();
    this.getCategorias();
    this.getMarcasXCliente();
    this.getTotalProductsInCart();
    
    var element = document.getElementById("nvMainSearch");
    element.className = element.className.replace(/\bnavbar\b/g, "");
  },
  data() {
    return {
      productosTodos: [],
      mainPropsImgCrt: { width: 20, height: 20 },
      nombdescr: '',
      selCategoria: null,
      optCategorias: [],
      selMarca: null,
      optMarcas: [],
      totalProductosInCart: null,

      suggestionAttribute: 'nombre_producto',
      suggestions: [],
      selectedEvent: ""
    }
  },

  methods: {
    async getProductosData() {
        // this.vtable.bolLoading = true;
        let prod = await this.$apollo.query({
                                                query: GET_PRODUCTO_BY_ID, 
                                                variables: 
                                                {
                                                    id: null, 
                                                    id_categoria: this.selCategoria,
                                                    id_marca: this.selMarca,
                                                    nombre_descripcion: this.nombdescr,
                                                    es_busqueda: 0,
                                                    es_marcaxcliente: 1
                                                },
                                                fetchPolicy: 'network-only' 
                                            });
        // this.vtable.bolLoading = false;
        if (typeof prod.data != 'undefined') {
            if (prod.data.producto.length>0) {
                this.prdTmp = prod.data.producto;
                this.prdTmp = JSON.parse(JSON.stringify(this.prdTmp).split('"nombre_producto":').join('"name":'));
                this.prdTmp = JSON.parse(JSON.stringify(this.prdTmp).split('"precio":').join('"price":'));
                this.prdTmp = JSON.parse(JSON.stringify(this.prdTmp).split('"url_imagen_lowres_uid":').join('"image":'));
                this.prdTmp = JSON.parse(JSON.stringify(this.prdTmp).split('"id_color":').join('"stars":'));
                this.prdTmp = JSON.parse(JSON.stringify(this.prdTmp).split('"id_categoria":').join('"totalReviews":'));
                this.prdTmp = JSON.parse(JSON.stringify(this.prdTmp).split('"descripcion":').join('"details":'));
                for (var i=0; i<this.prdTmp.length; i++) {
                  this.prdTmp[i].details_trimmed = this.trimIniString(this.prdTmp[i].details, 100);
                }
                this.productosTodos = this.prdTmp;
                return;
            }
        }
        this.productosTodos = [];
    },
    async getCategorias() {
        var that = this;
        let catsTmp = await this.$apollo.query({ query: GET_CATALOGOSHJS_BY_CODFTHR, variables: { codigo_catalogo: 'CTGRS' }, fetchPolicy: 'network-only' }).then(res => {
            if (typeof res.data != 'undefined') {
                if (res.data.catalogosHijosXCod.length>0) {
                    that.optCategorias = res.data.catalogosHijosXCod;
                    var indexSel = that.optCategorias.findIndex(x => x.id_catalogo === 0);
                    if (!(indexSel>=0)) {
                        that.optCategorias.splice(0, 0, {id_catalogo: 0, valor: 'Seleccione una categoría'});
                    }
                    that.selCategoria = 0;
                    return;
                }
            }
            that.optCategorias = [];
            that.selCategoria = null;
        })
        .catch(err => {
            that.optMarcas = [];
            that.selMarca = null;
        });
    },
    async getMarcasXCliente() {
        var that = this;
        let mrcxctmp = await this.$apollo.query({ query: GET_MARCAXCLIENTE_BY_IDCLI, variables: { id_cliente: null }, fetchPolicy: 'network-only' }).then(res => {
            that.optMarcas = res.data.marcasxclienteId;
            var indexSel = that.optMarcas.findIndex(x => x.id_marca === 0);
            if (!(indexSel>=0)) {
                that.optMarcas.splice(0, 0, {id_marca: 0, nombre_marca: 'Seleccione una marca'});
            }
            that.selMarca = 0;
            return;
        })
        .catch(err => {
            that.optMarcas = [];
            that.selMarca = null;
        });
    },
    trimIniString(strOrig) {
      if (strOrig == '') return '';
      if (strOrig.length > 100) return strOrig.substring(0, 100)+'...';
      return strOrig;
    },
    async getTotalProductsInCart() {
      let totPrds = await this.$apollo.query({ query: GET_CARTTOTALPRODS_BY_USRID, fetchPolicy: 'network-only' }); //.then(res => {
          var ttPrds;
          if (typeof totPrds.data != 'undefined') {
              if (totPrds.data.carritoGetTotalProductosXUsrId.length>0) {
                  ttPrds = totPrds.data.carritoGetTotalProductosXUsrId[0].totalprods;
                  this.totalProductosInCart = (ttPrds>0 ? ttPrds : null);
                  return ttPrds;
              }
          }
        //});
      this.totalProductosInCart = null;
    },
            clickInput: function() {
                this.selectedEvent = 'click input'
            },
            clickButton: function() {
                this.selectedEvent = 'click button';
                this.getProductosData();
            },
            selected: function() {
                this.selectedEvent = 'selection changed'
            },
            enter: function() {
                this.selectedEvent = 'enter';
                this.getProductosData();
            },
            keyUp: function() {
                this.selectedEvent = 'keyup pressed'
            },
            keyDown: function() {
                this.selectedEvent = 'keyDown pressed'
            },
            keyRight: function() {
                this.selectedEvent = 'keyRight pressed'
            },
            clear: function() {
                this.selectedEvent = 'clear input';
                this.getProductosData();
            },
            escape: function() {
                this.selectedEvent = 'escape'
            },
            changed: async function() {
                var that = this
                this.suggestions = []
                // this.vtable.bolLoading = true;
                let prod = await this.$apollo.query({ 
                                                        query: GET_PRODUCTO_BY_ID, 
                                                        variables: 
                                                        { 
                                                            id: null, 
                                                            id_categoria: this.selCategoria, 
                                                            id_marca: this.selMarca,
                                                            nombre_descripcion: this.nombdescr,
                                                            es_busqueda: 1,
                                                            es_marcaxcliente: 1
                                                        }, 
                                                        fetchPolicy: 'network-only' 
                                                    });
                // this.vtable.bolLoading = false;
                if (typeof prod.data != 'undefined') {
                    if (prod.data.producto.length>0) {
                        prod.data.producto.forEach(function(a) {
                            that.suggestions.push(a)
                        })
                    }
                }
            },
  },
  computed: {
    // ...mapGetters([
    //   'getProductsInCart',
    //   'getPopupCart',
    // ]),
    imgCart() {
      return `${window.cdn_url || ''}images/cart.svg`; 
    },
  },
};
</script>

<style>
  @import './assets/css/normalize.css';
  body {
    font-family: 'Roboto', sans-serif;
    background-color: #FAFAFA;
  }

  a {
    color: #000;
    text-decoration: none;
  }

  .container {
    width: 100%;
  }

  .cart {
    position: absolute;
    top: 75px;
    right: 300px;
  }

  .btn-circle {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    position: absolute;
    top: -5px;
    right: -5px;
    background-color: #fff;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 26px;
    margin-top: 5px;
  }

  .leave-enter-active, .leave-leave-active {
    transition: all 1.2s;
  }
  .leave-enter, .leave-leave-to {
    opacity: 0;
    transform: translateX(-50%);
  }

  .appear-enter-active {
    animation: appear-animation .5s;
  }

  .appear-leave-active {
    animation: appear-animation .5s reverse;
  }

  @keyframes appear-animation {
    0% {
      transform: translateY(-50%);
      opacity: 0;
    }
    100% {
      transform: translateY(0%);
      opacity: 1;
    }
  }

  .sbx-amazon {
      width: inherit !important;
  }

  #iptgrpSearch div {
      width: 86%;
  }
  #iptgrpSearch div div {
      width: 100%;
  }

</style>
