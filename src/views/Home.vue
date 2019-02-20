<template>
  <div class="home">
    <h1>Fridge Items</h1>
    <div v-for="fridge_item in fridge_items">
      <h2>{{ fridge_item.name }}</h2>
      <p>{{ fridge_item.price }}</p>
      <p>{{ fridge_item.purchase_date }}</p>

  
    </div>
  </div>
</template>

<style>
</style>

<script>
var axios = require('axios');

export default {
  data: function() {
    return {
      fridge_items: []
    };
  },
  created: function() {
    axios.get("/api/fridge_items")
      .then(response => {
        this.fridge_items = response.data;
      });
  },
  methods: {

  }
};
</script>

