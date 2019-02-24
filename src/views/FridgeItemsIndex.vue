<template>
  <div class="fridge-items-index">
    <h1>Your Fridge</h1>
    
    <div class="row">
      <div class="col-md-4" v-for="fridge_item in fridge_items">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">
          <router-link v-bind:to="'/fridge_items/' + fridge_item.id">
              {{ fridge_item.name }}
          </router-link>
            </h5>
          </div>
        </div>
      </div>
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


