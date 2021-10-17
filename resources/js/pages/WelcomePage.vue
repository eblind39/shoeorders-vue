<template>
	<div>
		<!-- <passport-clients></passport-clients>
		<passport-authorized-clients></passport-authorized-clients>
		<passport-personal-access-tokens></passport-personal-access-tokens>-->
		<section id="intro" class="clearfix">
			<div class="container d-flex h-100">
				<div class="row justify-content-center align-self-center">
					<div class="col-md-6 intro-info order-md-first order-last">
						<h2>Bienvenido<br>al sistema de pedidos <br><span>en línea!</span></h2>
						<div>
							<a href="#about" class="btn-get-started scrollto">INFORMACION</a>
						</div>
					</div>
					<div class="col-md-6 intro-img order-md-last order-first">
						<img :src="imgBackGrnd" alt="" class="img-fluid">
					</div>
				</div>
			</div>
		</section>
	</div>
</template>
<script>
    export default {
		computed: {
			imgBackGrnd() {
				return `${window.cdn_url || ''}images/intro-img.svg`; 
			},
			imgBackGrndSec() {
				return `${window.cdn_url || ''}images/intro-bg.jpg`; 
			}
		}
    }
</script>
<style>
	#intro {
		width: 100%;
		/*height: 100vh;*/
		position: relative;
		background: #f5f8fd center top no-repeat;
		background-size: cover;
		margin-bottom: 1rem;
	}
	/*@media (min-width: 992px)
	#intro .intro-info {
		padding-top: 80px;
	}*/
	#intro .intro-info h2 {
		color: #413e66;
		margin-bottom: 40px;
		font-size: 48px;
		font-weight: 700;
		margin: 0 0 20px 0;
		padding: 0;
	}
	h2 {
		display: block;
		font-size: 1.5em;
		margin-block-start: 0.83em;
		margin-block-end: 0.83em;
		margin-inline-start: 0px;
		margin-inline-end: 0px;
		font-weight: bold;
	}
	#intro .intro-info h2 span {
		color: #1bb1dc;
	}
	#intro .intro-info h2 {
		color: #413e66;
		margin-bottom: 40px;
		font-size: 48px;
		font-weight: 700;
	}
	#intro .intro-info .btn-get-started {
		font-family: "Montserrat", sans-serif;
		font-size: 13px;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 1px;
		display: inline-block;
		padding: 10px 32px;
		border-radius: 4px;
		transition: 0.5s;
		color: #fff;
		background: #1bb1dc;
		color: #fff;
		cursor: pointer;
	}
	.card-header {
		color: #53708e;
		background-color: rgba(164, 179, 210, 0.4) !important;
	}
	.card-body {
		padding: 0.5rem;
	}
	.tree {
		font-size: 1.2em;
	}
	.tree-content {
		padding: 0px;
	}
	.tree-anchor {
		color: #777272;
	}
	.tree-filter-empty {
		font-size: 0.8em;
		color: #e3342f;
	}
	.tree-checkbox.checked:after {
		left: 7px;
		top: 3px;
		height: 8px;
		width: 3px;
	}
	.tree-checkbox {
		width: 20px;
    	height: 20px;
	}
	/* Removes the arrow or chevron (expanded || collapsed) */
	/* .tree-arrow.has-child:after {
		border: none;
	} */
	.v-card__title {
		font-size: 1rem;
		padding: 12px 12px 2px;
	}
	.v-text-field {
		padding-top: 0px;
    	margin-top: 0px;
		margin-left: 3px;
		margin-right: 3px;
	}
	.v-data-table th {
		height: 24px;
	}
	.v-input input {
		max-height: 0px;
	}
	.v-text-field input {
		padding: 28px 0 8px;
	}
</style>