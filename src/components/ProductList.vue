<template>
<div class="wrapper">
  <div class="products">
    <div class="product" v-for="product in products" :key="product.id">
      <div class="info">
        <h1>{{product.name}}</h1>
        <p>{{product.country}}</p>
      </div>
      <div class="image">
        <img :src="'/images/products/'+product.image">
      </div>
      <div class="price">
        <h2>{{product.price}}</h2>
        <button @click="add(product)" class="auto">Add to Cart</button>
      </div>
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
import { eventBus } from '../main';

export default {
  name: 'ProductList',
  props: {
    products: Array,
    clicks: Number,
    },
  methods: {
    add(product){
      this.$root.$data.cart.push(product);
      this.$root.$data.clicks += 1;
      eventBus.$emit('clicked', this.clickCount);
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
