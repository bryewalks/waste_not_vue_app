<template>
  <div class="fridge-items-show">
    <h1>{{ fridge_item.name }}</h1>
    <p>Price: {{ fridge_item.price }}</p>
    <p>Purchase Date: {{ fridge_item.purchase_date }}</p>  
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
                     purchase_date: ""
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
    methods: {}
  }
</script>