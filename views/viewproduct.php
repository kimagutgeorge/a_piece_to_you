<div class="wrapper about">
<?php include("components/response.php");?>
<div class="nav-bar-wrapper">
<?php include("components/smallbar.php");?>
<div class="cover"></div>
<div class="hero-84">
<?php include("components/navbar.php");?>
</div>
</div>
<div class="view-event single-product hero-84 row ten-vh">
<div class="col-8 row">
<div class="col-11">
<!-- carousel -->
<div class="carousel">
  <div class="carousel-container">
    <img
      src=""
      alt="Image Not Found"
      class="carousel-image"
      id="carouselImage"
    />
  </div>
  <div class="carousel-controls">
    <button class="btn btn-primary-box btn-primary" id="prevBtn">
      <i class="fa-solid fa-angle-left"></i> Previous
    </button>
    <button class="btn btn-primary-box btn-primary" id="nextBtn">
      Next <i class="fa-solid fa-angle-right"></i>
    </button>
  </div>
  <div class="carousel-indicators" id="indicators"></div>
</div>
<!-- end of carousel -->

<h4 class="text-primary" id="product_name"></h4>
<div class="product-description" id="product_description" style="margin-top: 20px !important"></div>
</div>
</div>
<!-- end of column one -->
<div class="col-4">
<div class="card col-12">
<h4 class="text-third two-vh">Product Details</h4>
<div class="col-11 row two-vh">
<p id="product_id" hidden></p>
<p class="col-6"><i class="fa-solid fa-tag"></i> Price</p>
<p class="col-6"><span id="product_price"></span> <span id="product_currency"></span></p>
</div>
<div class="col-11 row two-vh">
<p class="col-6"><i class="fa-solid fa-minus"></i> Discount</p>
<p class="col-6"><span id="product_discount"></span> <span id="product_discount_currency"></span></p>
</div>
<div class="col-11 row two-vh">
<p class="col-6"><i class="fa-solid fa-boxes"></i> In Stock</p>
<p class="col-6" id="product_stock"></p>
</div>
<div class="col-11 row two-vh">
<p class="col-6"><i class="fa-solid fa-tags"></i> Category</p>
<p class="col-6" id="product_category"></p>
</div>
<button class="btn btn-primary-box btn-primary btn-add-product-cart">ADD TO CART</button>
</div>
</div>
</div>

</div>