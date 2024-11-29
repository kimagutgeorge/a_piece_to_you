<?php
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
    <?php }else if($_GET["p"] == "adminhome"){?>
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
    <?php }else if($_GET["p"] == "adminevents"){?>
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
    <?php }else if($_GET["p"] == "categories"){?>
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
    <?php }else if($_GET["p"] == "locations"){?>
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
    <?php }else if($_GET["p"] == "adminshop"){?>
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
    <?php }else if($_GET["p"] == "adminblogs"){?>
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
    <?php }else if($_GET["p"] == "payments"){?>
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
    <?php }else if($_GET["p"] == "newsletters"){?>
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
    <?php }else if($_GET["p"] == "members"){?>
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
    <?php }else if($_GET["p"] == "reports"){?>
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
    <?php }else if($_GET["p"] == "profile"){?>
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
    <?php }else if($_GET["p"] == "settings"){?>
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
    <?php }else if($_GET["p"] == "add-event"){?>
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
    <?php }else if($_GET["p"] == "adminhub"){?>
    <div class="other-page">
    <div class="main-page row">
    <?php 
    include("views/admin/login.php");?>
    </div>
    </div>
    <?php }else{?>
    <div class="home-route">
    <?php include("views/home.php");
    include("components/admin/footer.php");?>
    </div>
    <?php } ?> 

