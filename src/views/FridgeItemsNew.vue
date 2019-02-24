<template>
  <div class="fridge-items-new">
    <h1>New Fridge Item</h1>
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>

    <form v-on:submit.prevent="submit()">
      <div>
        Name: <input v-model="newFridgeItemName">
      </div>
      <div>
        Price: <input v-model="newFridgeItemPrice">
      <div class="form-group row">
        <label for="purchase-date-input" class="col-2 col-form-label">Purchase Date</label>
        <div class="col-10">
          <input v-model="newFridgeItemPurchaseDate" class="form-control" type="date" value="08-19-2011" id="purchase-date-input">
        </div>
      </div>
      </div>
      <div>
        <select v-model="newFridgeItemCategoryId" class="custom-select mr-sm-4">
          <option disabled value="">Choose Category...</option>
          <option value="1">Produce</option>
          <option value="2">Fresh Dairy</option>
          <option value="3">Cultured Dairy</option>
          <option value="4">Raw Poultry</option>
          <option value="5">Raw Ground Meat</option>
          <option value="6">Raw Seafood</option>
          <option value="7">Raw Red Meat</option>
          <option value="8">Eggs</option>
          <option value="9">Cooked Food</option>
          <option value="10">Preserved</option>
        </select>
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
        newFridgeItemCategoryId: "",
        errors: []
      };
    },
    created: function() {},
    methods: {
      submit: function() {
        console.log("Create the FridgeItem...");
        var params = {
          name: this.newFridgeItemName,
          purchase_date: this.newFridgeItemPurchaseDate,
          price: this.newFridgeItemPrice,
          category_id: this.newFridgeItemCategoryId
        };
        axios.post("/api/fridge_items", params)
          .then(response => {
            console.log("Success", response.data);
            this.$router.push("/fridge_items");
          }).catch(error => {
            this.errors = error.response.data.errors;
          });
      }
    }
  };
</script>
