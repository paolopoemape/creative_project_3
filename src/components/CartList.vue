<template>
<div class="wrapper">
  <div class="products">
  <h1 v-if="this.$root.$data.cart.length === 0">Cart is empty!</h1>

    <div class="product" v-for="item in sortedCategories" :key="item.id">
      <div class="info">
        <h1>{{item.name}}</h1>
        <h1>{{item.country}}</h1>
        <h1>Quantity: {{getProductQuanlity(item.id)}}</h1>

      </div>
      <div class="image">
        <img :src="'/images/products/'+item.image">
      </div>
      <div class="price">
        <button @click="remove(item)" class="auto">Remove</button>
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

export default {
  name: 'CartList',

  props: {
    cart: Array
          },

computed: {
  sortedCategories() {
    const filteredProducts = this.cart.reduce((p,c) => {
      p[c.name] = c
      return p
    }, {})
    return Object.values(filteredProducts).sort((a,b) => a.name.localeCompare(b.name))
  }
},
  methods: {
    remove(item) {
      this.$root.$data.cart.splice(this.$root.$data.cart.indexOf(item),1);
    },
    getProductQuanlity(itemid) {
         var qty = 0;
         for(var k =0; k < this.$root.$data.cart.length; k++){

            if(this.$root.$data.cart[k].id == itemid){
              qty++;
            }

        }
          return qty;
      },


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
  height: 150px;
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
