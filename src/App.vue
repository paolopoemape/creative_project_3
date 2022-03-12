<template>
<div id="app">
  <div id="menu">
    <div id="brand">
      <router-link to="/">
      <div class="menu-item icon">
        <font-awesome-icon icon="fa-solid fa-scissors" size="6x" />
      </div>
      <div id="sideicon">
      <div class="menu-item title">
       <h1>The Barbershop Review</h1>
       </div>
       </div>
   </router-link>
    </div>
    <div id="side">
      <router-link to="/browse">
        <div class="menu-item browse">
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
          <p>Search</p>
        </div>
      </router-link>

    </div>

  </div>
  <router-view />
</div>
</template>
<style>
* {
  box-sizing: border-box;
}

body {
  margin: 50px 100px;

}

#menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
  margin-bottom: 50px;
}

#menu a {
  color: #B84901;
}

#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
}

#brand img {
  height: 200px;
}

#title{
  width: 180px;
  display:flex;
}
#side {
  grid-area: side;
  display: flex;
  justify-content: flex-end;
}
#sideicon {
  grid-area: side;
  display: flex;
  justify-content: c;
}


#side img {
  width: 50px;
}

.menu-item {
  display: flex;
  flex-direction: column;
}

.menu-item p {
  margin: 0px;
}

.browse {
  margin-right: 50px;
}
</style>
