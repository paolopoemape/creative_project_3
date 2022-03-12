<template>
<div>
  <div class="pure-menu pure-menu-horizontal">
    <ul class="pure-menu-list">
    <div class="search">
    <form class="pure-form">
      <i class="fas fa-search"></i><input v-model="searchText" placeholder="Barbershop Name"/>
    </form>
    </div>
    </ul>
  </div>
  <StoreList :stores="stores" />
</div>
</template>

<script>
import StoreList from "../components/StoreList.vue"
export default {
  name: 'BrowseView',
  components: {
    StoreList
  },
  data() {
    return {
      country: '',
      searchText:'',
    }
  },
  computed: {
    stores() {
      return this.$root.$data.stores.filter(store => store.name.toLowerCase().search(this.searchText.toLowerCase()) >=0);
    }
  },
  methods: {
    select(country) {
      this.country = country;
    }
  }
}
</script>

<style scoped>

.search {
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 50%;
}

</style>
