<template>
  <div class="home">
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://slack-imgs.com/?c=1&url=https%3A%2F%2Fs.abcnews.com%2Fimages%2FUS%2Fraw-chicken02-gty-hb-181017_hpEmbed_3x2_992.jpg" class="d-block w-100" alt="">
        </div>
        <div class="carousel-item">
          <img src="https://slack-imgs.com/?c=1&url=https%3A%2F%2Fs.abcnews.com%2Fimages%2FUS%2FGTY_ground_beef_jt_151105_hpMain_2_16x9_992.jpg" class="d-block w-100" alt="">
        </div>
        <div class="carousel-item">
          <img src="https://slack-imgs.com/?c=1&url=https%3A%2F%2Fwww.quickanddirtytips.com%2Fsites%2Fdefault%2Ffiles%2Fimages%2F1523%2Ffresh-raw-fish.jpg" class="d-block w-100" alt="">
        </div>
        <div class="carousel-item">
          <img src="https://slack-imgs.com/?c=1&url=http%3A%2F%2Fessexct.com%2Fwp-content%2Fuploads%2F2016%2F03%2F549_geodir_featured_image_Casatica-Cheese-Display-475x320.jpg" alt="">
        </div>        
        <div class="carousel-item">
          <img src="https://files.slack.com/files-pri/TEEPVPS6L-FGEM43EAF/gettyimages-73781690.jpg" class="d-block w-100" alt="">
        </div>
        <div class="carousel-item">
          <img src="https://slack-imgs.com/?c=1&url=https%3A%2F%2Fimg.purch.com%2Fw%2F660%2FaHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzAzOS8zNDMvb3JpZ2luYWwvcmF3LW1lYXQtMTIwNjA3LmpwZw%3D%3D" class="d-block w-100" alt="">
        </div>
        <div class="carousel-item">
          <img src="https://slack-imgs.com/?c=1&url=https%3A%2F%2Fwww.ingredientsnetwork.com%2F47%2Fpdcnewsitem%2F04%2F88%2F06%2Fmilk-day-625_625x350_71433091943.jpg" class="d-block w-100" alt="">
        </div>
        <div class="carousel-item">
          <img src="https://slack-imgs.com/?c=1&url=https%3A%2F%2Fwww.dartagnan.com%2Fon%2Fdemandware.static%2F-%2FSites-dartagnan-Library%2Fdefault%2Fdwd326084f%2Fimages%2Fcontent%2Fhow-to-make-a-charcuterie-plate.jpg" class="d-block w-100" alt="">
        </div>        <div class="carousel-item">
          <img src="https://slack-imgs.com/?c=1&url=https%3A%2F%2Fr.hswstatic.com%2Fw_907%2Fgif%2Feggs-colors.jpg" class="d-block w-100" alt="">
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
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
      fridge_items: []
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

