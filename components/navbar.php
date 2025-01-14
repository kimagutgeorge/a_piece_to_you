<div class="nav-bar big-nav row">
<div class="custom-four four-vh"></div>
<div class="custom-eight four-vh">
    <a href="?p=home"  style="margin-right:10px !important" <?php if($_GET["p"] == "home"){?> class="text-dark fw-bold" <?php }else{?> class="text-white" <?php } ?>>HOME</a>
    <a href="?p=about-us" style="margin-right:10px !important" <?php if($_GET["p"] == "about-us"){?> class="text-dark fw-bold" <?php }else{?> class="text-white" <?php } ?>>ABOUT US</a>
    <a href="?p=events" style="margin-right:10px !important" <?php if($_GET["p"] == "events"){?> class="text-dark fw-bold" <?php }else{?> class="text-white" <?php } ?>>EVENTS</a>
    <a href="?p=shop" style="margin-right:10px !important" <?php if($_GET["p"] == "shop"){?> class="text-dark fw-bold" <?php }else{?> class="text-white" <?php } ?>>SHOP</a>
    <a href="?p=blogs" style="margin-right:10px !important" <?php if($_GET["p"] == "blogs"){?> class="text-dark fw-bold" <?php }else{?> class="text-white" <?php } ?>>BLOG</a>
    <button class="btn btn-primary" onclick="goToContact()">CONTACT US</button>
    </div>
</div>