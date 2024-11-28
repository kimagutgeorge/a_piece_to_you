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
<p v-else>Loading product images...</p>
<!-- end of carousel -->

<h4 class="text-primary">{{ name }}</h4>
<div class="product-description" v-html="product_description"></div>
</div>
</div>
<!-- end of column one -->
<div class="col-4">
<div class="card col-12">
<h4 class="text-third two-vh">Product Details</h4>
<p class="text-primary fw-bold four-vh"></p>

</div>
</div>
</div>

</div>