<template>

<div class="wrapper">

 <div class="stores">
 <div>

 <table class="table table-striped table-bordered">
           <thead>
               <tr>
                   <th width="20%">Name</th>
                   <th>Phone</th>
                   <th width="60%">Reviews</th>
                   <th>Contact</th>
               </tr>
           </thead>
           <tbody>
               <tr v-for="store in stores" :key="store.id">
                   <td>{{store.name}}</td>
                   <td>{{store.phone}}</td>
                   <td>{{store.review_1}} <br>
                   <br>{{store.review_2}} <br>
                   <br>{{store.review_3}}
                   </td>
                   <td class="align">
                   <div class="price">
                      <router-link :to="{name: 'Store' , params:{ id: store.id }}"><button @click="click_contact(id)" class="auto">More Details</button>
                      </router-link>
                    </div>
                  </td>
               </tr>
           </tbody>
       </table>
  </div>
</div>
<div class="footer">
   <footer class="site-footer navbar-dark bg-dark">
     <a href="https://github.com/paolopoemape/grocery-store-project">Github Link</a><i class="fab fa-github"></i>
   </footer>
 </div>
</div>


</template>

<script>
// import { eventBus } from '../main';

export default {
  name: 'StoreList',
  data(){
    return{
    id: '',
    }
 },
  props: {
    stores: Array,
    },
  methods: {
    click_contact(id){
      this.id = id;
    }
  }
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
td{
  font-size:10px;
}
.align{
  padding: 50px;
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
  padding: 10px 30px;
  height: 80px;
}

.info h1 {
  font-size: 16px;
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
