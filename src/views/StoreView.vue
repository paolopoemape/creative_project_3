<template>
<div class="wrapper">
          <CartList :store="store" />

</div>
</template>

<script>
import CartList from "../components/CartList.vue"

export default {
  name: 'StoreView',
  components: {
    CartList
    },

   computed: {
    store() {
      return this.$root.$data.stores
    }


}


}
</script>
