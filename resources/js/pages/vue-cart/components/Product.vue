<template>
    <div>
        <b-modal ref="modalProductDetail" hide-footer title="Detalle del producto" @close="onCloseProdDetail(false)" @hidden="onCloseProdDetail(false)" @click.stop @click.prevent>
            <div class="product-box">
                <div class="product-image">
                    <b-img 
                        v-bind="mainPropsImg"
                        :src="currentProduct.image" 
                        fluid 
                        alt="fluid">
                    </b-img>
                </div>
                <div class="product-info">
                    <h2 class="product-title">{{ currentProduct.name }}</h2>
                    <p class="product-details">{{ currentProduct.details }}</p>
                    <span class="product-price"> C$ {{ currentProduct.price }} </span>
                </div>
            </div>
            <div class="float-right">
                <b-button @click="onCloseProdDetail()" class="float-right" variant="primary">Aceptar</b-button>
            </div>
        </b-modal>
	</div>            
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        props: ['showModalProdDatail'],
        data() {
            return  {
                mainPropsImg: { width: 250, height: 250 },
            }
        },
        computed: {
            ...mapGetters({
                currentProduct: 'getCurrentProduct',
            }),
        },
        watch: {
            'showModalProdDatail': function(newval, oldval) {
                if (newval) this.$refs.modalProductDetail.show();
                else this.$refs.modalProductDetail.hide();
            }
        },
        methods: {
            rated(rate) {
                return `${rate * 20}%`;
            },
            onCloseProdDetail() {
                this.$emit('update:showModalProdDatail', false);
            },
        },
    };
</script>

<style scoped>
  .product-box {
    width: 100%;
    box-sizing: border-box;
    padding: 1.5em;
    background-color: #fff;
    border-radius: 7px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .product-image {
    width: 60%;
  }

  .product-info {
    width: 38%;
    align-self: flex-start;
  }

  .product-title {
    font-weight: normal;
  }

  .product-price {
    font-size: 1.2em;
    font-weight: bolder;
  }

  .product-box button {
    width: 100%;
    margin: .3em 0;
  }

  .product-details {
      font-weight: normal;
  }
</style>
