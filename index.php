<?php
error_reporting(E_ERROR | E_PARSE);
session_start();
$if_user = $_SESSION["is_user"];
include("components/header.php");?>
  <?php
    # include main pages
    if($_GET["p"] == "home"){?>
    <div class="home-route">
    <?php include("views/home.php");
    include("components/footer.php");?>
    </div>
    <?php }else if($_GET["p"] == "about-us"){?>
        <div class="home-route">
        <?php include("views/about.php");
        include("components/footer.php");?>
        </div>
    <?php }else if($_GET["p"] == "product-details"){?>
        <div class="home-route">
        <?php include("views/viewproduct.php");
        include("components/footer.php");?>
        </div>
    <?php }else if($_GET["p"] == "event-details"){?>
        <div class="home-route">
        <?php include("views/viewevent.php");
        include("components/footer.php");?>
        </div>
    <?php }else if($_GET["p"] == "cart"){?>
        <div class="home-route">
        <?php include("views/cart.php");
        include("components/footer.php");?>
        </div>
    <?php }else if($_GET["p"] == "read-blog"){?>
        <div class="home-route">
        <?php include("views/viewblog.php");
        include("components/footer.php");?>
        </div>
    <?php }else if($_GET["p"] == "register"){?>
        <div class="home-route">
        <?php include("views/register.php");
        include("components/footer.php");?>
        </div>
    <?php }else if($_GET["p"] == "events"){?>
        <div class="home-route">
        <?php include("views/events.php");
        include("components/footer.php");?>
        </div>
    <?php }else if($_GET["p"] == "shop"){?>
        <div class="home-route">
        <?php include("views/shop.php");
        include("components/footer.php");?>
        </div>
    <?php }else if($_GET["p"] == "blogs"){?>
        <div class="home-route">
        <?php include("views/blogs.php");
        include("components/footer.php");?>
        </div>
    <?php }else if($_GET["p"] == "contact-us"){?>
        <div class="home-route">
        <?php include("views/contact.php");
        include("components/footer.php");?>
        </div>
    <!-- OTHER PAGES -->
    <?php }else if($_GET["p"] == "adminhome"){
        if(empty($if_user)){?><script>location.href = "?p=adminhub";</script><?php }?>
    <div class="other-page">
    <div class="main-page row">
    <div class="col-2">
        <?php include("components/admin/navbar.php");?>
    </div>
    <div class="col-10 side-page overflow-auto">
    <!-- admin routes -->
    <?php 
    include("components/admin/topbar.php");
    include("views/admin/home.php");
    include("components/admin/footer.php");?>
    </div>
    </div>
    </div>
    <?php }else if($_GET["p"] == "adminevents"){
        if(empty($if_user)){?><script>location.href = "?p=adminhub";</script><?php }?>
    <div class="other-page">
    <div class="main-page row">
    <div class="col-2">
    <?php include("components/admin/navbar.php");?>
    </div>
    <div class="col-10 side-page overflow-auto">
    <!-- admin routes -->
    <?php 
    include("components/admin/topbar.php");
    include("views/admin/events.php");
    include("components/admin/footer.php");?>
    </div>
    </div>
    </div>
    <?php }else if($_GET["p"] == "orders"){
        if(empty($if_user)){?><script>location.href = "?p=adminhub";</script><?php }?>
    <div class="other-page">
    <div class="main-page row">
    <div class="col-2">
    <?php include("components/admin/navbar.php");?>
    </div>
    <div class="col-10 side-page overflow-auto">
    <!-- admin routes -->
    <?php 
    include("components/admin/topbar.php");
    include("views/admin/orders.php");
    include("components/admin/footer.php");?>
    </div>
    </div>
    </div>
    <?php }else if($_GET["p"] == "view-order"){
        if(empty($if_user)){?><script>location.href = "?p=adminhub";</script><?php }?>
    <div class="other-page">
    <div class="main-page row">
    <div class="col-2">
    <?php include("components/admin/navbar.php");?>
    </div>
    <div class="col-10 side-page overflow-auto">
    <!-- admin routes -->
    <?php 
    include("components/admin/topbar.php");
    include("views/admin/vieworder.php");
    include("components/admin/footer.php");?>
    </div>
    </div>
    </div>
    <?php }else if($_GET["p"] == "categories"){
        if(empty($if_user)){?><script>location.href = "?p=adminhub";</script><?php }?>
    <div class="other-page">
    <div class="main-page row">
    <div class="col-2">
    <?php include("components/admin/navbar.php");?>
    </div>
    <div class="col-10 side-page overflow-auto">
    <?php 
    include("components/admin/topbar.php");
    include("views/admin/categories.php");
    include("components/admin/footer.php");?>
    </div>
    </div>
    </div>
    <?php }else if($_GET["p"] == "messages"){
        if(empty($if_user)){?><script>location.href = "?p=adminhub";</script><?php }?>
    <div class="other-page">
    <div class="main-page row">
    <div class="col-2">
    <?php include("components/admin/navbar.php");?>
    </div>
    <div class="col-10 side-page overflow-auto">
    <?php 
    include("components/admin/topbar.php");
    include("views/admin/messages.php");
    include("components/admin/footer.php");?>
    </div>
    </div>
    </div>
    <?php }else if($_GET["p"] == "locations"){
        if(empty($if_user)){?><script>location.href = "?p=adminhub";</script><?php }?>
    <div class="other-page">
    <div class="main-page row">
    <div class="col-2">
    <?php include("components/admin/navbar.php");?>
    </div>
    <div class="col-10 side-page overflow-auto">
    <?php 
    include("components/admin/topbar.php");
    include("views/admin/locations.php");
    include("components/admin/footer.php");?>
    </div>
    </div>
    </div>
    <?php }else if($_GET["p"] == "adminshop"){
        if(empty($if_user)){?><script>location.href = "?p=adminhub";</script><?php }?>
    <div class="other-page">
    <div class="main-page row">
    <div class="col-2">
    <?php include("components/admin/navbar.php");?>
    </div>
    <div class="col-10 side-page overflow-auto">
    <?php 
    include("components/admin/topbar.php");
    include("views/admin/shop.php");
    include("components/admin/footer.php");?>
    </div>
    </div>
    </div>
    <?php }else if($_GET["p"] == "add-blog"){
        if(empty($if_user)){?><script>location.href = "?p=adminhub";</script><?php }?>
    <div class="other-page">
    <div class="main-page row">
    <div class="col-2">
    <?php include("components/admin/navbar.php");?>
    </div>
    <div class="col-10 side-page overflow-auto">
    <?php 
    include("components/admin/topbar.php");
    include("views/admin/add-blog.php");
    include("components/admin/footer.php");?>
    </div>
    </div>
    </div>
    <?php }else if($_GET["p"] == "contacts"){
        if(empty($if_user)){?><script>location.href = "?p=adminhub";</script><?php }?>
    <div class="other-page">
    <div class="main-page row">
    <div class="col-2">
    <?php include("components/admin/navbar.php");?>
    </div>
    <div class="col-10 side-page overflow-auto">
    <?php 
    include("components/admin/topbar.php");
    include("views/admin/contacts.php");
    include("components/admin/footer.php");?>
    </div>
    </div>
    </div>
    <?php }else if($_GET["p"] == "roles"){
        if(empty($if_user)){?><script>location.href = "?p=adminhub";</script><?php }?>
    <div class="other-page">
    <div class="main-page row">
    <div class="col-2">
    <?php include("components/admin/navbar.php");?>
    </div>
    <div class="col-10 side-page overflow-auto">
    <?php 
    include("components/admin/topbar.php");
    include("views/admin/roles.php");
    include("components/admin/footer.php");?>
    </div>
    </div>
    </div>
    <?php }else if($_GET["p"] == "website"){
        if(empty($if_user)){?><script>location.href = "?p=adminhub";</script><?php }?>
    <div class="other-page">
    <div class="main-page row">
    <div class="col-2">
    <?php include("components/admin/navbar.php");?>
    </div>
    <div class="col-10 side-page overflow-auto">
    <?php 
    include("components/admin/topbar.php");
    include("views/admin/website.php");
    include("components/admin/footer.php");?>
    </div>
    </div>
    </div>
    <?php }else if($_GET["p"] == "add-newsletter"){
        if(empty($if_user)){?><script>location.href = "?p=adminhub";</script><?php }?>
    <div class="other-page">
    <div class="main-page row">
    <div class="col-2">
    <?php include("components/admin/navbar.php");?>
    </div>
    <div class="col-10 side-page overflow-auto">
    <?php 
    include("components/admin/topbar.php");
    include("views/admin/add-newsletter.php");
    include("components/admin/footer.php");?>
    </div>
    </div>
    </div>
    <?php }else if($_GET["p"] == "profile"){
        if(empty($if_user)){?><script>location.href = "?p=adminhub";</script><?php }?>
    <div class="other-page">
    <div class="main-page row">
    <div class="col-2">
    <?php include("components/admin/navbar.php");?>
    </div>
    <div class="col-10 side-page overflow-auto">
    <?php 
    include("components/admin/topbar.php");
    include("views/admin/profile.php");
    include("components/admin/footer.php");?>
    </div>
    </div>
    </div>
    <?php }else if($_GET["p"] == "subscribers"){
        if(empty($if_user)){?><script>location.href = "?p=adminhub";</script><?php }?>
    <div class="other-page">
    <div class="main-page row">
    <div class="col-2">
    <?php include("components/admin/navbar.php");?>
    </div>
    <div class="col-10 side-page overflow-auto">
    <?php 
    include("components/admin/topbar.php");
    include("views/admin/subscribers.php");
    include("components/admin/footer.php");?>
    </div>
    </div>
    </div>
    <?php }else if($_GET["p"] == "adminblogs"){
        if(empty($if_user)){?><script>location.href = "?p=adminhub";</script><?php }?>
    <div class="other-page">
    <div class="main-page row">
    <div class="col-2">
    <?php include("components/admin/navbar.php");?>
    </div>
    <div class="col-10 side-page overflow-auto">
    <?php 
    include("components/admin/topbar.php");
    include("views/admin/blogs.php");
    include("components/admin/footer.php");?>
    </div>
    </div>
    </div>
    <?php }else if($_GET["p"] == "payments"){
        if(empty($if_user)){?><script>location.href = "?p=adminhub";</script><?php }?>
    <div class="other-page">
    <div class="main-page row">
    <div class="col-2">
    <?php include("components/admin/navbar.php");?>
    </div>
    <div class="col-10 side-page overflow-auto">
    <?php 
    include("components/admin/topbar.php");
    include("views/admin/payments.php");
    include("components/admin/footer.php");?>
    </div>
    </div>
    </div>
    <?php }else if($_GET["p"] == "newsletters"){
        if(empty($if_user)){?><script>location.href = "?p=adminhub";</script><?php }?>
    <div class="other-page">
    <div class="main-page row">
    <div class="col-2">
    <?php include("components/admin/navbar.php");?>
    </div>
    <div class="col-10 side-page overflow-auto">
    <?php 
    include("components/admin/topbar.php");
    include("views/admin/newsletters.php");
    include("components/admin/footer.php");?>
    </div>
    </div>
    </div>
    <?php }else if($_GET["p"] == "registration"){
        if(empty($if_user)){?><script>location.href = "?p=adminhub";</script><?php }?>
    <div class="other-page">
    <div class="main-page row">
    <div class="col-2">
    <?php include("components/admin/navbar.php");?>
    </div>
    <div class="col-10 side-page overflow-auto">
    <?php 
    include("components/admin/topbar.php");
    include("views/admin/attendees.php");
    include("components/admin/footer.php");?>
    </div>
    </div>
    </div>
    <?php }else if($_GET["p"] == "newsletter-details"){
        if(empty($if_user)){?><script>location.href = "?p=adminhub";</script><?php }?>
    <div class="other-page">
    <div class="main-page row">
    <div class="col-2">
    <?php include("components/admin/navbar.php");?>
    </div>
    <div class="col-10 side-page overflow-auto">
    <?php 
    include("components/admin/topbar.php");
    include("views/admin/viewnewsletter.php");
    include("components/admin/footer.php");?>
    </div>
    </div>
    </div>
    <?php }else if($_GET["p"] == "members"){
        if(empty($if_user)){?><script>location.href = "?p=adminhub";</script><?php }?>
    <div class="other-page">
    <div class="main-page row">
    <div class="col-2">
    <?php include("components/admin/navbar.php");?>
    </div>
    <div class="col-10 side-page overflow-auto">
    <?php 
    include("components/admin/topbar.php");
    include("views/admin/members.php");
    include("components/admin/footer.php");?>
    </div>
    </div>
    </div>
    <?php }else if($_GET["p"] == "reports"){
        if(empty($if_user)){?><script>location.href = "?p=adminhub";</script><?php }?>
    <div class="other-page row">
    <div class="main-page row">
    <div class="col-2">
    <?php include("components/admin/navbar.php");?>
    </div>
    <div class="col-10 side-page overflow-auto">
    <?php 
    include("components/admin/topbar.php");
    include("views/admin/reports.php");
    include("components/admin/footer.php");?>
    </div>
    </div>
    </div>
    <?php }else if($_GET["p"] == "profile"){
        if(empty($if_user)){?><script>location.href = "?p=adminhub";</script><?php }?>
    <div class="other-page row">
    <div class="main-page row">
    <div class="col-2">
    <?php include("components/admin/navbar.php");?>
    </div>
    <div class="col-10 side-page overflow-auto">
    <?php 
    include("components/admin/topbar.php");
    include("views/admin/profile.php");
    include("components/admin/footer.php");?>
    </div>
    </div>
    </div>
    <?php }else if($_GET["p"] == "settings"){
        if(empty($if_user)){?><script>location.href = "?p=adminhub";</script><?php }?>
    <div class="other-page">
    <div class="main-page row">
    <div class="col-2">
    <?php include("components/admin/navbar.php");?>
    </div>
    <div class="col-10 side-page overflow-auto">
    <?php 
    include("components/admin/topbar.php");
    include("views/admin/settings.php");
    include("components/admin/footer.php");?>
    </div>
    </div>
    </div>
    <?php }else if($_GET["p"] == "add-event"){
        if(empty($if_user)){?><script>location.href = "?p=adminhub";</script><?php }?>
        <div class="other-page">
    <div class="main-page row">
    <div class="col-2">
    <?php include("components/admin/navbar.php");?>
    </div>
    <div class="col-10 side-page overflow-auto">
    <?php 
    include("components/admin/topbar.php");
    include("views/admin/add-event.php");
    include("components/admin/footer.php");?>
    </div>
    </div>
    </div>
    <?php }else if($_GET["p"] == "view-event"){
        if(empty($if_user)){?><script>location.href = "?p=adminhub";</script><?php }?>
        <div class="other-page">
    <div class="main-page row">
    <div class="col-2">
    <?php include("components/admin/navbar.php");?>
    </div>
    <div class="col-10 side-page overflow-auto">
    <?php 
    include("components/admin/topbar.php");
    include("views/admin/viewevent.php");
    include("components/admin/footer.php");?>
    </div>
    </div>
    </div>
    <?php }else if($_GET["p"] == "view-blog"){
        if(empty($if_user)){?><script>location.href = "?p=adminhub";</script><?php }?>
        <div class="other-page">
    <div class="main-page row">
    <div class="col-2">
    <?php include("components/admin/navbar.php");?>
    </div>
    <div class="col-10 side-page overflow-auto">
    <?php 
    include("components/admin/topbar.php");
    include("views/admin/viewblog.php");
    include("components/admin/footer.php");?>
    </div>
    </div>
    </div>
    <?php }else if($_GET["p"] == "view-product"){
        if(empty($if_user)){?><script>location.href = "?p=adminhub";</script><?php }?>
        <div class="other-page">
    <div class="main-page row">
    <div class="col-2">
    <?php include("components/admin/navbar.php");?>
    </div>
    <div class="col-10 side-page overflow-auto">
    <?php 
    include("components/admin/topbar.php");
    include("views/admin/viewproduct.php");
    include("components/admin/footer.php");?>
    </div>
    </div>
    </div>
    <?php }else if($_GET["p"] == "add-product"){
        if(empty($if_user)){?><script>location.href = "?p=adminhub";</script><?php }?>
        <div class="other-page">
    <div class="main-page row">
    <div class="col-2">
    <?php include("components/admin/navbar.php");?>
    </div>
    <div class="col-10 side-page overflow-auto">
    <?php 
    include("components/admin/topbar.php");
    include("views/admin/add-product.php");
    include("components/admin/footer.php");?>
    </div>
    </div>
    </div>
    <?php }else if($_GET["p"] == "add-product-category"){
        if(empty($if_user)){?><script>location.href = "?p=adminhub";</script><?php }?>
        <div class="other-page">
    <div class="main-page row">
    <div class="col-2">
    <?php include("components/admin/navbar.php");?>
    </div>
    <div class="col-10 side-page overflow-auto">
    <?php 
    include("components/admin/topbar.php");
    include("views/admin/add-product-category.php");
    include("components/admin/footer.php");?>
    </div>
    </div>
    </div>
    <?php }else if($_GET["p"] == "adminhub"){?>
    <div class="other-page">
    <div class="main-page row">
    <?php 
    include("views/admin/login.php");
    include("components/admin/footer.php");?>
    </div>
    </div>
    <?php }else if($_GET["p"] == "forgot"){?>
    <div class="other-page">
    <div class="main-page row">
    <?php 
    include("views/admin/forgot.php");
    include("components/admin/footer.php");?>
    </div>
    </div>
    <?php }else if($_GET["p"] == "change-pass"){?>
    <div class="other-page">
    <div class="main-page row">
    <?php 
    include("views/admin/reset.php");
    include("components/admin/footer.php");?>
    </div>
    </div>
    <?php }else if($_GET["p"] == "logout"){
        session_destroy();?>
    <div class="other-page">
    <div class="main-page row">
    <?php 
    include("views/admin/login.php");
    include("components/admin/footer.php");?>
    </div>
    </div>
    <?php }else{?>
    <div class="home-route">
    <?php include("views/home.php");
    include("components/admin/footer.php");?>
    </div>
    <?php } ?> 

