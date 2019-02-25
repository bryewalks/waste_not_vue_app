<template>
  <div class="fridge-items-show">
    <div class="text-center">
      <h1>{{ fridge_item.name }}</h1>
      <h2>
        <p class="badge badge-danger" v-if="fridge_item.status === 'spoiled!'">Spoiled!</p>
        <p class="badge badge-warning" v-if="fridge_item.status === 'spoiling soon!'">Spoiling soon!</p>
        <p class="badge badge-success" v-if="fridge_item.status === 'Good to eat!'">Good to eat!</p>  
      </h2>
      <p>Category: {{ fridge_item.category }}</p>
      <p>Purchase Date: {{ fridge_item.purchase_date }}</p> 
      <p>Spoil Date: {{ fridge_item.spoil_date }}</p> 
      <p>Quantity: {{ fridge_item.quantity }}</p> 
      <router-link :to=" '/fridge_items/' + fridge_item.id + '/edit' " class="btn btn-warning">Edit</router-link>
      <button v-on:click="destroyFridgeItem()" class="btn btn-danger">Throw Out</button>
    </div>

  </div>
</template>

<style>
</style>
<script>
  var axios = require('axios')

  export default {
    data: function() {
      return {
        fridge_item: {
                     id: "",
                     name: "",
                     price: "",
                     purchase_date: "",
                     category_id: "",
                     quantity: "",
                     category: ""
                     }
      };
    },
    created: function() {
      axios.get("/api/fridge_items/" + this.$route.params.id)
        .then(response => {
          console.log(response.data);
          this.fridge_item = response.data;
        });
    },
    methods: {
      destroyFridgeItem: function() {
        axios.delete("/api/fridge_items/" + this.fridge_item.id)
          .then(response => {
            console.log("Success", response.data);
            this.$router.push("/fridge_items");
          });
      }
    }
  }
</script>

