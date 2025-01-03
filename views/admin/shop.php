<?php include("components/admin/response.php");?>
    <div class="row dashboard">
    <div class="col-12 row event-search">
    <div class="col-8">
    <form action="" class="row">
    <div class="form-group col-4">
    <select class="form-control col-11" id="shop_product_category">
    <!-- input data here -->
    </select>
    </div>
    </form>
    </div>
    <div class="col-4">
    <a href="?p=add-product"><button class="btn btn-primary" @click="$router.push('/add-product')">ADD PRODUCT</button></a>
    <a href="?p=add-product-category"><button class="btn btn-primary" @click="$router.push('/add-product-category')">CATEGORIES</button></a>
    <button class="btn btn-primary" @click="$router.push('/view-orders')">ORDERS</button>
    </div>
    </div>
    <div class="col-12 events-panel" style="margin-top:15px !important" id="tbl_shop">
    <!-- input data -->
    </div>
    </div>