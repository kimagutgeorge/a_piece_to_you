<div class="wrapper about">
<div class="nav-bar-wrapper">
<?php include("components/smallbar.php");?>
<div class="cover"></div>
<div class="hero-84">
<?php include("components/navbar.php");?>
</div>
</div>
<div class="view-event hero-84 row ten-vh">
<div class="col-8 row">
<div class="col-11">
<!-- carousel -->
<div class="carousel" v-if="productImages.length">
<div class="carousel-container">
<img
:src="getImagePath(productImages[currentImageIndex])"
:alt="'Image ' + (currentImageIndex + 1)"
class="carousel-image"
/>
</div>
<div class="carousel-controls">
<button class="btn btn-primary-box btn-primary" @click="prevImage" :disabled="currentImageIndex === 0"><i class="fa-solid fa-angle-left"></i> Previous</button>
<button class="btn btn-primary-box btn-primary" @click="nextImage" :disabled="currentImageIndex === productImages.length - 1">Next <i class="fa-solid fa-angle-right"></i></button>
</div>
<div class="carousel-indicators">
<span
v-for="(image, index) in productImages"
:key="index"
class="indicator"
:class="{ active: index === currentImageIndex }"
@click="goToImage(index)"
></span>
</div>
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
<p class="col-6"><i class="fa-solid fa-coins"></i> Price</p>
<p class="col-6" id="product_price"></p>
</div>
<div class="col-11 row two-vh">
<p class="col-6"><i class="fa-solid fa-minus"></i> Discount</p>
<p class="col-6" id="product_discount"></p>
</div>
<div class="col-11 row two-vh">
<p class="col-6"><i class="fa-solid fa-boxes"></i> In Stock</p>
<p class="col-6" id="product_stock"></p>
</div>
<div class="col-11 row two-vh">
<p class="col-6"><i class="fa-solid fa-tags"></i> Category</p>
<p class="col-6" id="product_category"></p>
</div>
</div>
</div>
</div>

</div>