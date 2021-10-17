<template>
    <div>
        <b-alert v-show="validacMsg!=''" show variant="warning">{{ validacMsg }}</b-alert>
        <b-form-group 
            label="Nombre" 
            label-for="nombremrc">
            <b-form-input
                name="nombremrc"
                v-model="nommrc" 
                :disabled="esDisabled"
                required 
                autofocus>
            </b-form-input>
        </b-form-group>
        <b-form-group 
            label="Logo (imágen)" 
            label-for="logo"
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
            label-for="imglogo">
            <b-col v-show="modoEdicion=='U' && !bolUpdMut" lg="4" class="pb-2 position-absolute float-right">
                <b-button @click="bolCambiarImg=!bolCambiarImg" pill variant="outline-info" class="float-right mr-4" size="sm">{{ lblBtnChgImg }}</b-button>
            </b-col>
            <b-img 
                name="imglogo"
                :src="url_imagen_lowres_uid" 
                v-show="!(url_imagen_lowres_uid==='')" 
                fluid 
                alt="fluid">
            </b-img>
        </b-form-group>
	</div>
</template>
<script>
    import axios from 'axios';

    export default {
		props: ['modoEdicion', 'bolValsRegGets', 'id', 'nombre', 'url_imagen_lowres_uid'],
        data() {
            return {
                idmrc: null,
                nommrc: '',
                logoimg: '',
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
            nommrc: function(n, o) { this.$emit('update:nombre', n); },
            logoimg: function(n, o) { this.$emit('update:logo_img', n); },
            bolCambiarImg: function(n, o) {
                if (n) this.lblBtnChgImg = 'Mantener imágen...';
                else { this.lblBtnChgImg = 'Cambiar imágen...'; this.validacMsg=''; }
            },
        },
        methods: {
            syncVals() {
                this.nommrc = this.nombre;
                this.logoimg = this.logo_img;
            },
            onFileChanged (event) {
                this.selectedFile = event.target.files[0];
            },
            uploadLogoImg() {
                return new Promise((resolve, reject) => {
                    const fd = new FormData();
                    var that = this;

                    if (this.nommrc.trim()=='') {
                        this.validacMsg = 'Especifíque un nombre';
                        reject('NoPasaVal');
                        return;
                    } else { this.validacMsg = ''; }
                    if (this.bolCambiarImg && (typeof this.selectedFile == 'undefined' || this.selectedFile==null)) {
                        console.log('NO this.selectedFile');
                        this.validacMsg = 'El logo de la marca es requerido';
                        reject('NoPasaVal');
                        return;
                    } else { this.validacMsg = ''; }
                    if (!this.bolCambiarImg && this.modoEdicion=='U') {
                        resolve('USameImg');
                        return;
                    }
                    console.log(this.modoEdicion);
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