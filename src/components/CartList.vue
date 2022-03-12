<template>
<div class="wrapper">

  <div class="products">
      <div class="info">
      <div>
      <button class="btn btn-info" @click="openModal">Map <font-awesome-icon icon="fa-solid fa-map" /></button>
        <ModalC v-model="modalOpen"></ModalC>
      </div>
        <h1>{{showStore.name}}</h1>
        <h1>{{showStore.country}}</h1>
        <h1>Phone number: {{showStore.phone}}</h1>
        <div class="image">
            <img :src="'/images/products/'+ showStore.image">
        </div>


      </div>
      <div class="footer">
         <footer class="site-footer navbar-dark bg-dark">
           <a href="https://github.com/paolopoemape/grocery-store-project">Github Link</a><i class="fab fa-github"></i>
         </footer>
       </div>
  </div>
</div>


</template>

<script>
import ModalC from "@/components/ModalC.vue";

export default {
  name: 'CartList',
  components:{
    ModalC
  },
data(){
  return{
    modalOpen: false,
    id: '',
    name: '',

  }
},

  props: {
    store: Array
  },
  computed: {
  showStore() {
    const id = this.$route.params.id;
    const store = this.$root.$data.stores.find((p) => p.id == id);
    return store;
  },
},

mounted() {
   this.geolocate();
 },
methods: {
  openModal() {
       this.modalOpen = !this.modalOpen;
   },
   geolocate: function() {
       this.center = {
         lat: this.$root.$data.stores.lat,
         lng:  this.$root.$data.stores.lat,
       };
   },
},




}

</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 100px;
}
.footer{
  clear: both;
  margin-top: 100px;
}
.site-footer{
  background-color: #DDE0E3;
  border-top: 1px solid;
  position: fixed;
  left:0px;
  bottom:0px;
  height:100px;
  width:100%;
  text-align: center;
  clear: both;
}
.products {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.product {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}
img{
  width: 100%;
}
.product img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.product .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background: #F2921D;
  color: #000;
  height: 300px;
  width: 400px;
  align-text: center;
}

.info h1 {
  font-size: 16px;
  text-align: center;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}


.price {
  display: flex;
}

button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
}

.auto {
  margin-left: auto;
}
</style>
