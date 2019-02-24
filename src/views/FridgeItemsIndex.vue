<template>
  <div class="fridge-items-index">
    <h1 class="d-flex justify-content-center">Your Fridge</h1>
    
    <div class="row">
      <div class="col-md-4" v-for="fridge_item in fridge_items">
        <div class="card">
          <div class="card-body">
            <h3 class="card-title">
              <router-link v-bind:to="'/fridge_items/' + fridge_item.id">
                {{ fridge_item.name }}
              </router-link>
            </h3>
              <p>Added {{ fridge_item.purchase_date }}</p>
          </div>
        </div>
      </div>
    </div>
    <router-link :to="'/fridge_items/new'" class="btn btn-primary">Add Item</router-link>
  </div>
</template>

<style>
</style>

<script>
var axios = require('axios');

export default {
  data: function() {
    return {
      fridge_items: [],
      currentfridge_item: {}
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


