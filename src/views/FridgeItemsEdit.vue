<template>
  <div class="fridge-items-edit">
    <h1>Edit Fridge Items</h1>
    
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>

    <form v-on:submit.prevent="submit()">
      <div>
        Name: <input v-model="fridge_item.name">
      </div>
      <div>
        Purchase Date: <input v-model="fridge_item.purchase_date">
      </div>
      <div>
        Price: <input v-model="fridge_item.price">
      </div>

      <input type="submit" value="Update" class="btn btn-warning">
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
                price: ""
              
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
                    price: this.fridge_item.price
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

