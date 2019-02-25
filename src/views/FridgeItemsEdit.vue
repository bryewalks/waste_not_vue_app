<template>
  <div class="fridge-items-edit">
    <h1>Edit Fridge Item</h1>
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>

    <form v-on:submit.prevent="submit()">
      <div>
        Name: <input v-model="fridge_item.name">
      </div>
      <div class="form-group row">
        <label for="purchase-date-input text-center" class="col-2 col-form-label">Purchase Date: </label>
        <div class="col-3">
          <input v-model="fridge_item.purchase_date" class="form-control" type="date" value="08-19-2011" id="purchase-date-input">
        </div>
      </div>
      <div class="form-group row">
        <label class="col-1 col-form-label">Quantity: </label>
        <div class="col-1">
          <input v-model="fridge_item.quantity" class="text-center form-control" type="number" value="1">
        </div>
      </div>
      <div>
        <select v-model="fridge_item.category_id" class="custom-select mr-sm-4">
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

<style>
  
</style>

<script>
var axios = require('axios');

export default {
  data: function() {
    return {
      fridge_item: {
                id: "",
                name: "",
                purchase_date: "",
                price: "",
                status: "",
                category_id: "",
                quantity: ""  
              },
      errors: []
    };
  },
  created: function() {
    axios.get("/api/fridge_items/" + this.$route.params.id )
      .then(response => {
        console.log(response.data);
        this.fridge_item = response.data;
      });
  },
  methods: {
    submit: function() {
      var params = {
                    name: this.fridge_item.name,
                    purchase_date: this.fridge_item.purchase_date,
                    price: this.fridge_item.price,
                    category_id: this.fridge_item.category_id,
                    quantity: this.fridge_item.quantity
                    };

      axios.patch("/api/fridge_items/" + this.fridge_item.id, params)
        .then(response => {
          this.$router.push("/fridge_items/" + this.fridge_item.id);
        }).catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
}
</script>

