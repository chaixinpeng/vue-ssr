<!-- home.vue -->
<template>
      <div>
        	<span>home</span>
      		<div>{{ homeInfo }}</div>
      </div>
</template>


<script>
	import axios from 'axios';

export default {
    serverRequest(store) {
        return store.dispatch('getHomeInfo')
    },
	mounted() {

	},
    computed: {
    	homeInfo() {
            return this.$store.state.homeInfo
        }
    }
}
</script>


<style scoped>

</style>