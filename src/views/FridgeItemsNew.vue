<template>
  <div class="fridge-items-new">
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>

    <form v-on:submit.prevent="submit()">
      <div>
        Name: <input v-model="newFridgeItemName">
      </div>
      <div>
        Purchase_date: <input v-model="newFridgeItemPurchaseDate">
      </div>
      <div>
        Price: <input v-model="newFridgeItemPrice">
      </div>
      <input type="submit" value="Create" class="btn btn-warning">
    </form>
  </div>
</template>

<script>
  var axios = require('axios');

  export default {
    data: function() {
      return {
        newFridgeItemName: "",
        newFridgeItemPurchaseDate: "",
        newFridgeItemPrice: "",
        errors: []
      };
    },
    created: function() {},
    methods: {
      submit: function() {
        console.log("Create the FridgeItem...");
        var params = {
          name: this.newFridgeItemName,
          purchase_date: this.newPurchaseDate,
          price: this.newPrice
        };
        axios.post("/api/fridge_items", params)
          .then(response => {
            console.log("Success", response.data);
            this.$router.push("/");
          }).catch(error => {
            this.errors = error.response.data.errors;
          });
      }
    }
  };
</script>