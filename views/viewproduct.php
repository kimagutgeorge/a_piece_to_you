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
<div class="custom-eight row">
<div class="custom-eleven">
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
<div class="custom-four">
<div class="card custom-twelve">
<h4 class="text-third two-vh">Product Details</h4>
<div class="custom-eleven row two-vh">
<p id="product_id" hidden></p>
<p class="custom-six"><i class="fa-solid fa-tag"></i> Price</p>
<p class="custom-six"><span id="product_price"></span> <span id="product_currency"></span></p>
</div>
<div class="custom-eleven row two-vh">
<p class="custom-six"><i class="fa-solid fa-minus"></i> Discount</p>
<p class="custom-six"><span id="product_discount"></span> <span id="product_discount_currency"></span></p>
</div>
<div class="custom-eleven row two-vh">
<p class="custom-six"><i class="fa-solid fa-boxes"></i> In Stock</p>
<p class="custom-six" id="product_stock"></p>
</div>
<div class="custom-eleven row two-vh">
<p class="custom-six"><i class="fa-solid fa-tags"></i> Category</p>
<p class="custom-six" id="product_category"></p>
</div>
<button class="btn btn-primary-box btn-primary btn-add-product-cart">ADD TO CART</button>
</div>
</div>
</div>

</div>