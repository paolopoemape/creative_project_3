<template>
<div>
  <div class="wrapper">
    </div>
  <StoreList :stores="stores" />
</div>
</template>

<script>
import StoreList from "../components/StoreList.vue"
export default {
  name: 'HomeView',
  components: {
    StoreList
  },
  data() {
    return {
      searchText: '',
    }
  },
  computed: {
    stores() {
      return this.$root.$data.stores.filter(store => store.name.toLowerCase().search(this.searchText.toLowerCase()) >= 0);
    }
  },
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.search {
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 50%;
}

form {
  display: table;
  width: 100%;
}

i {
  display: table-cell;
  padding-left: 10px;
  width: 1px;
}

input {
  display: table-cell;
  font-size: 20px;
  border: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 40px;
}
</style>
