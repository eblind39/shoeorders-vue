<template>
	<div :style="[cssComp]">
	  <b-navbar toggleable="lg" type="dark" variant="info">
		<b-navbar-brand>
			<img class="icon" :src="logoUrl">
		</b-navbar-brand>
		<b-navbar-brand>
			<router-link :to="{ name: 'welcome' }">
				<h4>pedidos</h4>
			</router-link>
		</b-navbar-brand>
		<p>Universidad Católica Juan Pablo II.</p>

		<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

		<b-collapse id="nav-collapse" is-nav>
		</b-collapse>
	  </b-navbar>
	</div>
</template>
<script>
    export default {
        data() {
            return {
				cssComp: {
					color: '#004399',
					position: 'fixed',
					bottom: '0px',
					width: '100%'
				}
            }
        },
        computed: {
            containerClass() {
                return `${this.$route.name}-container`;
            },
            logoUrl() {
                return `${window.cdn_url || ''}images/favicon.png`;
            }
        },
    }
</script>