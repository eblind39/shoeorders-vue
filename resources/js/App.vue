<template>
    <div>
		<header-menu></header-menu>
		<!-- <font-awesome-icon icon="user-secret" /> -->
        <transition>
            <router-view></router-view>
        </transition>
        <!-- <custom-footer></custom-footer> -->
    </div>
</template>
<script>
	import HeaderMenu from './components/HeaderMenu.vue';
    import CustomFooter from './components/CustomFooter.vue';

    export default {
        components: {
			HeaderMenu,
            CustomFooter
        }
    }
</script>