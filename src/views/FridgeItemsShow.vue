<template>
  <div class="fridge-items-show">
    <h1>{{ fridge_item.name }}</h1>
    <p>Price: {{ fridge_item.price }} dollars</p>
    <p>Category: {{ fridge_item.category }}</p>
    <p>Purchase Date: {{ fridge_item.purchase_date }}</p> 
    <p>Spoil Date: {{ fridge_item.spoil_date }}</p> 
    <p>{{ fridge_item.status }}</p>

    <button v-on:click="destroyFridgeItem()" class="btn btn-danger">Throw Out</button>
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

