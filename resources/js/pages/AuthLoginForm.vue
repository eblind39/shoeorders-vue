<template>
    <div>
		<form role="form" method="POST" action="#" @submit.prevent="login">
			<input type="hidden" name="_token" :value="form._token">

			<b-alert v-show="errormsg" variant="danger" show>{{ errormsg }}</b-alert>
			
			<b-form-group
				id="igEmail"
				label="Correo electrónico:"
				label-for="txtEMail">
				<b-form-input
					id="email"
					name="email"
					v-model="form.email"
					type="email"
					value=""
					required
					autocomplete="email" 
					autofocus
					placeholder="">
				</b-form-input>
			</b-form-group>
			
			<b-form-group
				id="igPWD"
				label="Contraseña:"
				label-for="password">
				<b-input 
					type="password" 
					id="password" 
					name="password"
					v-model="form.password"
					required
					autocomplete="current-password">
				</b-input>
			</b-form-group>
			
			<!-- <b-form-group
				id="igRecordarme">
				<b-form-checkbox 
					name="remember" 
					id="remember" 
					v-model="form.remember">
					Recordarme
				</b-form-checkbox>
			</b-form-group> -->
			<b-alert v-show="bolErrLogIn" variant="warning" show>{{ strMsgErrLogin }}</b-alert>
			<div class="float-right" :style="[cssCompGrpBtns]">
				<b-button type="submit" variant="primary" :disabled="bolProcessLogin">
                    <b-spinner type="border" small v-show="bolProcessLogin"></b-spinner>
                    <span v-show="!bolProcessLogin" style="font-size: 1em; color: #CFFF68;">
                        <font-awesome-icon icon="key" />
                    </span>
                    Entrar
                </b-button>
				<b-button :disabled="bolProcessLogin" @click="closeFormAction()" variant="light">Cancelar</b-button>
			</div>
			<br class="clear-float">
		</form>
	</div>
</template>
<script>
	import axios from 'axios';

    export default {
		mounted() {
			this.onReset();
		},
		props: ['showLoginModal', 'showLoginPopOver'],
        data() {
            return {
				form: {
					_token: window.csrf_token,
					email: '',
					password: '',
					remember: false
				},
				show: true,
                errormsg: '',
                bolProcessLogin: false,
                bolErrLogIn: false,
                strMsgErrLogin: null,
            }
        },
		computed: {
			cssCompGrpBtns() {
				if (this.showLoginPopOver) return { marginBottom: '1rem' };
			}
		},
		methods: {
			handleChkClick() {
				if (this.showLoginModal) {
					console.log('click en checkGroup');
				}
			},
			closeFormAction() {
				this.$emit('update:showLoginModal', false);
				this.$emit('update:showLoginPopOver', false);
			},
			login(evt) {
                var that = this;
                this.bolProcessLogin = true;
				this.$store.dispatch('retrieveToken', this.form)
					.then(res => {
						if (res.status == 200) {
							if (typeof res.data != 'undefined') {
                                if (typeof res.data.user != 'undefined') {
                                    that.$emit('loggedIn');
                                    that.closeFormAction();
                                    that.bolErrLogIn = false;
                                    that.strMsgErrLogin = null;
                                }
                                if (typeof res.data.message != 'undefined') {
                                    that.bolErrLogIn = true;
                                    that.strMsgErrLogin = res.data.message;
                                }
                            }
						}
                        that.bolProcessLogin = false;
					})
                    .catch(err => {
                        console.log(err); 
                        that.bolProcessLogin = false;
                    });
			},
			onReset(evt) {
				if (typeof evt != 'undefined') evt.preventDefault();
				// Reset our form values
				this.form.email = '';
				this.form.password = '';
				// Trick to reset/clear native browser form validation state
				this.show = false;
				this.$nextTick(() => {
					this.show = true;
				})
			}
		}
	}
</script>