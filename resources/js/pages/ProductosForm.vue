<template>
    <div>
        <b-alert v-show="validacMsg!=''" show variant="warning">{{ validacMsg }}</b-alert>
        <b-form-group 
            label="Cód. Referencia proveedor" 
            label-for="codprv">
            <b-form-input
                name="codprv"
                v-model="codprov" 
                :disabled="esDisabled"
                required 
                autofocus>
            </b-form-input>
        </b-form-group>
        <b-form-group 
            label="Nombre" 
            label-for="nmbr">
            <b-form-input
                name="nmbr"
                v-model="nmbrr" 
                :disabled="esDisabled"
                required>
            </b-form-input>
        </b-form-group>
        <b-form-group 
            label="Descripcion" 
            label-for="descr">
            <b-form-textarea
                name="descr"
                v-model="descrpr"
                rows="3"
                max-rows="6"
                :disabled="esDisabled">
            </b-form-textarea>
        </b-form-group>
        <b-form-group 
            label="Imágen"
            label-for="imgprod"
            v-show="bolCambiarImg || modoEdicion=='C'">
            <b-form-file
                v-model="selectedFile"
                :state="Boolean(selectedFile)"
                placeholder="Seleccione un archivo o arrástrelo aquí..."
                drop-placeholder="Arrastrar aquí..."
                @change="onFileChanged">
            </b-form-file>
            <b-progress height="9px" :max="percmax" show-progress>
                <b-progress-bar :value="percprog" :label="porctjprog"></b-progress-bar>
            </b-progress>
        </b-form-group>
        <b-form-group 
            label="" 
            label-for="imgprd">
            <b-col v-show="modoEdicion=='U' && !bolUpdMut" lg="4" class="pb-2 position-absolute float-right">
                <b-button @click="bolCambiarImg=!bolCambiarImg" pill variant="outline-info" class="float-right mr-4" size="sm">{{ lblBtnChgImg }}</b-button>
            </b-col>
            <b-img 
                name="imgprd"
                v-bind="mainPropsImgFrm"
                :src="url_imagen_lowres_uid" 
                v-show="!(url_imagen_lowres_uid==='')" 
                fluid 
                alt="fluid">
            </b-img>
        </b-form-group>
        <b-form-group 
            label="Color" 
            label-for="clr">
            <b-form-select
                ref="cmbColor"
                name="clr"
                v-model="idclr"
                :options="colores"
                :disabled="esDisabled">
            </b-form-select>
        </b-form-group>
        <b-form-group 
            label="Marca" 
            label-for="mrc">
            <b-form-select
                name="mrc"
                v-model="idmrc"
                :options="marcas"
                :disabled="esDisabled">
            </b-form-select>
        </b-form-group>
        <b-form-group 
            label="Tipo material" 
            label-for="tmat">
            <b-form-select
                name="tmat"
                v-model="idtmat"
                :options="materiales"
                :disabled="esDisabled"
                required>
            </b-form-select>
        </b-form-group>
        <b-form-group 
            label="Género" 
            label-for="gnr">
            <b-form-select
                name="gnr"
                v-model="idgnr"
                :options="generos"
                :disabled="esDisabled"
                required>
            </b-form-select>
        </b-form-group>
        <b-form-group 
            label="Categoría" 
            label-for="catgr">
            <b-form-select
                name="catgr"
                v-model="idcat"
                :options="categorias"
                :disabled="esDisabled"
                required>
            </b-form-select>
        </b-form-group>
        <b-form-group 
            label="Precio" 
            label-for="prc">
            <b-form-input
                name="prc"
                v-model.number="prcc" 
                :disabled="esDisabled"
                required >
            </b-form-input>
        </b-form-group>
        <b-form-group 
            label="Total unidades" 
            label-for="totndd">
            <b-form-input
                name="totndd"
                v-model.number="ttlndd" 
                :disabled="esDisabled"
                required>
            </b-form-input>
        </b-form-group>
	</div>
</template>
<script>
    import axios from 'axios';
    import { GET_CATALOGOSHJS_BY_CODFTHR } from '../graphql/catalogoGetHijosByCod.gql';
    import { GET_MARCAS } from '../graphql/marcaGetAll.gql';

    export default {
        props: ['modoEdicion', 'bolValsRegGets', 'id', 'referencia_cod_prov', 'nombre', 'descripcion', 
                'id_archivo_subido_img', 'id_color', 'id_marca',
                'id_tipo_material', 'id_genero', 
                'id_categoria', 'precio', 'total_unidades', 'url_imagen_lowres_uid'],
        mounted() {
            this.getDataCatsForm();
        },
        data() {
            return {
                codprov: '',
                nmbrr: '',
                descrpr: '',
                idimg: null,
                idclr: null,
                idmrc: null,
                idtmat: null,
                idgnr: null,
                idcat: null,
                prcc: null,
                ttlndd: null,
                colores: [],
                marcas: [],
                materiales: [],
                generos: [],
                categorias: [],
                mainPropsImgFrm: { width: 50, height: 50 },
                percprog: 0,
                percmax: 100,
                selectedFile: null,
                urlImgLogo: '',
                validacMsg: '', //'Mensaje de prueba',
                bolCambiarImg: false,
                lblBtnChgImg: 'Cambiar imágen...',
                bolUpdMut: false,
            }
        },
        computed: {
            esDisabled() {
                return (this.modoEdicion==='R');
            },
            porctjprog() {
                return `${this.percprog.toString()} %`;
            },
        },
		watch: {
            bolValsRegGets: function(n, o) { if (n) this.syncVals(); },
            codprov: function(n, o) { this.$emit('update:referencia_cod_prov', n); },
            nmbrr: function(n, o) { this.$emit('update:nombre', n); },
            descrpr: function(n, o) { this.$emit('update:descripcion', n); },
            idimg: function(n, o) { this.$emit('update:id_archivo_subido_img', n); },
            idclr: function(n, o) { this.$emit('update:id_color', n); },
            idmrc: function(n, o) { this.$emit('update:id_marca', n); },
            idtmat: function(n, o) { this.$emit('update:id_tipo_material', n); },
            idgnr: function(n, o) { this.$emit('update:id_genero', n); },
            idcat: function(n, o) { this.$emit('update:id_categoria', n); },
            prcc: function(n, o) { this.$emit('update:precio', n); },
            ttlndd: function(n, o) { this.$emit('update:total_unidades', n); },
            bolCambiarImg: function(n, o) {
                if (n) this.lblBtnChgImg = 'Mantener imágen...';
                else { this.lblBtnChgImg = 'Cambiar imágen...'; this.validacMsg=''; }
            },
        },
        methods: {
            getDataCatsForm() {
                this.getColores();
                this.getMateriales();
                this.getGeneros();
                this.getCategorias();
                this.getMarcas();
            },
            async getColores() {
                let colsTmp = await this.$apollo.query({ query: GET_CATALOGOSHJS_BY_CODFTHR, variables: { codigo_catalogo: 'CLRS' }, fetchPolicy: 'network-only' });
                if (typeof colsTmp.data != 'undefined') {
                    if (colsTmp.data.catalogosHijosXCod.length>0) {
                        this.coloresTmp = colsTmp.data.catalogosHijosXCod;
                        this.coloresTmp = JSON.parse(JSON.stringify(this.coloresTmp).split('"id_catalogo":').join('"value":'));
                        this.coloresTmp = JSON.parse(JSON.stringify(this.coloresTmp).split('"valor":').join('"text":'));
                        this.colores = this.coloresTmp;
                        this.idclr = this.id_color;
                        return;
                    }
                }
                this.colores = [];
                this.idclr = null;
            },
            async getMateriales() {
                let tmatTmp = await this.$apollo.query({ query: GET_CATALOGOSHJS_BY_CODFTHR, variables: { codigo_catalogo: 'TPMTRL' }, fetchPolicy: 'network-only' });
                if (typeof tmatTmp.data != 'undefined') {
                    if (tmatTmp.data.catalogosHijosXCod.length>0) {
                        this.materialesTmp = tmatTmp.data.catalogosHijosXCod;
                        this.materialesTmp = JSON.parse(JSON.stringify(this.materialesTmp).split('"id_catalogo":').join('"value":'));
                        this.materialesTmp = JSON.parse(JSON.stringify(this.materialesTmp).split('"valor":').join('"text":'));
                        this.materiales = this.materialesTmp;
                        this.idtmat = this.id_tipo_material;
                        return;
                    }
                }
                this.materiales = [];
                this.idtmat = null;
            },
            async getGeneros() {
                let mtrlTmp = await this.$apollo.query({ query: GET_CATALOGOSHJS_BY_CODFTHR, variables: { codigo_catalogo: 'GNRR' }, fetchPolicy: 'network-only' });
                if (typeof mtrlTmp.data != 'undefined') {
                    if (mtrlTmp.data.catalogosHijosXCod.length>0) {
                        this.generosTmp = mtrlTmp.data.catalogosHijosXCod;
                        this.generosTmp = JSON.parse(JSON.stringify(this.generosTmp).split('"id_catalogo":').join('"value":'));
                        this.generosTmp = JSON.parse(JSON.stringify(this.generosTmp).split('"valor":').join('"text":'));
                        this.generos = this.generosTmp;
                        this.idgnr = this.id_genero;
                        return;
                    }
                }
                this.generos = [];
                this.idgnr = null;
            },
            async getCategorias() {
                let catsTmp = await this.$apollo.query({ query: GET_CATALOGOSHJS_BY_CODFTHR, variables: { codigo_catalogo: 'CTGRS' }, fetchPolicy: 'network-only' });
                if (typeof catsTmp.data != 'undefined') {
                    if (catsTmp.data.catalogosHijosXCod.length>0) {
                        this.categoriasTmp = catsTmp.data.catalogosHijosXCod;
                        this.categoriasTmp = JSON.parse(JSON.stringify(this.categoriasTmp).split('"id_catalogo":').join('"value":'));
                        this.categoriasTmp = JSON.parse(JSON.stringify(this.categoriasTmp).split('"valor":').join('"text":'));
                        this.categorias = this.categoriasTmp;
                        this.idcat = this.id_categoria;
                        return;
                    }
                }
                this.categorias = [];
                this.idcat = null;
            },
            async getMarcas() {
                let mrcsTmp = await this.$apollo.query({ query: GET_MARCAS, fetchPolicy: 'network-only' });
                if (typeof mrcsTmp.data != 'undefined') {
                    if (mrcsTmp.data.marcas.length>0) {
                        this.marcasTmp = mrcsTmp.data.marcas;
                        this.marcasTmp = JSON.parse(JSON.stringify(this.marcasTmp).split('"id":').join('"value":'));
                        this.marcasTmp = JSON.parse(JSON.stringify(this.marcasTmp).split('"nombre_marca":').join('"text":'));
                        this.marcas = this.marcasTmp;
                        this.idmrc = this.id_marca;
                        return;
                    }
                }
                this.marcas = [];
                this.idmrc = null;
            },
            syncVals() {
                this.codprov = this.referencia_cod_prov;
                this.nmbrr = this.nombre;
                this.descrpr = this.descripcion;
                this.idimg = this.id_archivo_subido_img;
                this.prcc = this.precio;
                this.ttlndd = this.total_unidades;
                this.idclr = this.id_color;
                this.idtmat = this.id_tipo_material;
                this.idgnr = this.id_genero;
                this.idcat = this.id_categoria;
                this.idmrc = this.id_marca;
            },
            onFileChanged (event) {
                this.selectedFile = event.target.files[0];
            },
            uploadLogoImg() {
                return new Promise((resolve, reject) => {
                    const fd = new FormData();
                    var that = this;

                    if (this.codprov.trim()=='') {
                        this.validacMsg = 'Especifíque un código de proveedor';
                        reject('NoPasaVal');
                        return;
                    } else { this.validacMsg = ''; }
                    if (this.nmbrr.trim()=='') {
                        this.validacMsg = 'Especifíque un nombre';
                        reject('NoPasaVal');
                        return;
                    } else { this.validacMsg = ''; }
                    if (this.bolCambiarImg && (typeof this.selectedFile == 'undefined' || this.selectedFile==null)) {
                        this.validacMsg = 'Adjunte una imágen';
                        reject('NoPasaVal');
                        return;
                    } else { this.validacMsg = ''; }
                    if (!this.bolCambiarImg && this.modoEdicion=='U') {
                        resolve('USameImg');
                        return;
                    }
                    if (typeof this.idtmat=='undefined' || this.idtmat==null) {
                        this.validacMsg = 'Especifíque un tipo de material';
                        reject('NoPasaVal');
                        return;
                    } else { this.validacMsg = ''; }
                   if (typeof this.idgnr=='undefined' || this.idgnr==null) {
                        this.validacMsg = 'Especifíque un género';
                        reject('NoPasaVal');
                        return;
                    } else { this.validacMsg = ''; }
                   if (typeof this.idcat=='undefined' || this.idcat==null) {
                        this.validacMsg = 'Especifíque una categoría';
                        reject('NoPasaVal');
                        return;
                    } else { this.validacMsg = ''; }
                   if (typeof this.prcc=='undefined' || this.prcc==null) {
                        this.validacMsg = 'Especifíque el precio';
                        reject('NoPasaVal');
                        return;
                    } else { this.validacMsg = ''; }
                   if (typeof this.ttlndd=='undefined' || this.ttlndd==null) {
                        this.validacMsg = 'Especifíque el total de unidades';
                        reject('NoPasaVal');
                        return;
                    } else { this.validacMsg = ''; }

                    if (this.modoEdicion=='U') this.bolUpdMut = true;
                    axios.defaults.headers.common = {
                        'X-Requested-With': 'XMLHttpRequest',
                        'X-CSRF-TOKEN': window.csrf_token,
                    };
                    var urlFile = this.$store.getters.getBaseUrl+'/'+this.$store.getters.getFolderUpload+'/';
                    axios.defaults.baseURL = this.$store.getters.getBaseUrl;
                    axios.defaults.headers.post['Accept'] = 'application/json';
                    axios.defaults.headers.post['Authorization'] = 'Bearer ' + this.$store.getters.getAuthAccessToken;
                    fd.append('image', this.selectedFile, this.selectedFile.name);
                    fd.append('esimagen', 1);
                    fd.append('nombre_original', this.selectedFile.name);
                    fd.append('modelobd_imagen', 'marca');
                    axios.post('/fileupload', fd, {
                        onUploadProgress: uploadEvent => {
                            that.percprog = Math.round((uploadEvent.loaded / uploadEvent.total) * 100);
                        }
                    })
                        .then(res => {
                            // mostrar la imágen recien subida
                            that.urlImgLogo = urlFile+res.data.img_uploaded.imagen_lowres_uid;
                            if (that.modoEdicion=='U') that.bolUpdMut = false;
                            resolve(res);
                        })
                        .catch(err => {
                            that.urlImgLogo = '';
                            if (that.modoEdicion=='U') that.bolUpdMut = false;
                            reject(err);
                        });
                });
            },
        }
	}
</script>