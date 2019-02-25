<template>
  <div class="fridge-items-index">
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>
    <h1 class="d-flex justify-content-center">Your Fridge</h1>
    
    <div class="row">
      <div class="col-md-4" v-for="fridge_item in fridge_items">
        <router-link class="text-dark" v-bind:to="'/fridge_items/' + fridge_item.id">
          <div class="card mt-4 text-white text-center bg-info">
            <div class="card-body">
              <h3 class="card-title">
                  {{ fridge_item.name }}
              </h3>
                <p>Added {{ fridge_item.purchase_date }}</p>
            </div>
            <span class="badge badge-danger" v-if="fridge_item.status === 'spoiled!'">Spoiled!</span>
            <span class="badge badge-warning" v-if="fridge_item.status === 'spoiling soon!'">Spoiling soon!</span>
            <span class="badge badge-success" v-if="fridge_item.status === 'Good to eat!'">Good to eat!</span>
          </div>
        </router-link>
      </div>
    </div>
    <div class="d-flex justify-content-center mt-4">
      <router-link :to="'/fridge_items/new'" class="btn btn-primary">Add Item</router-link>
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
      fridge_items: [],
      currentFridgeItem: {},
      errors: []
    };
  },
  created: function() {
    axios.get("/api/fridge_items")
      .then(response => {
        this.fridge_items = response.data;
      }).catch(error => {
        this.errors = error.response.data.errors;
      });
  },
  methods: {
  }
};
</script>

