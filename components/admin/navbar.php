<div class="nav-bar">
        <div class="col-12 title-lg">
            <img src="assets/images/g27.png" alt="">
        </div>
        <div class="col-12">
        <li><a href="?p=adminhome" <?php if($_GET["p"] == 'adminhome'){?> class="row active" <?php }else{?> class="row text-secondary" <?php } ?>><div class="col-2"><i class="fa-solid fa-home"></i></div><div class="col-10">Dashboard</div></a></li>
        <li><a href="?p=adminevents" <?php if($_GET["p"] == 'adminevents'){?> class="row active" <?php }else{?> class="row text-secondary" <?php } ?>><div class="col-2"><i class="fa-solid fa-calendar"></i></div><div class="col-10">Events</div></a></li>
        <li><a href="?p=categories" <?php if($_GET["p"] == 'categories'){?> class="row active" <?php }else{?> class="row text-secondary" <?php } ?>><div class="col-2"><i class="fa-solid fa-shapes"></i></div><div class="col-10">Categories</div></a></li>
        <li><a href="?p=locations" <?php if($_GET["p"] == 'locations'){?> class="row active" <?php }else{?> class="row text-secondary" <?php } ?> ><div class="col-2"><i class="fa-solid fa-location-pin"></i></div><div class="col-10">Locations</div></a></li>
        <li><a href="?p=adminshop" <?php if($_GET["p"] == 'adminshop'){?> class="row active" <?php }else{?> class="row text-secondary" <?php } ?>><div class="col-2"><i class="fa-solid fa-shrefre"></i></div><div class="col-10">Shop</div></a></li>
        <li><a href="?p=adminblogs" <?php if($_GET["p"] == 'adminblogs'){?> class="row active" <?php }else{?> class="row text-secondary" <?php } ?>><div class="col-2"><i class="fa-solid fa-blog"></i></div><div class="col-10">Blogs</div></a></li>
        <li><a href="?p=payments" <?php if($_GET["p"] == 'payments'){?> class="row active" <?php }else{?> class="row text-secondary" <?php } ?>><div class="col-2"><i class="fa-solid fa-coins"></i></div><div class="col-10">Accounts</div></a></li>
        <li><a href="?p=newsletters" <?php if($_GET["p"] == 'newsletters'){?> class="row active" <?php }else{?> class="row text-secondary" <?php } ?>><div class="col-2"><i class="fa-solid fa-envelope"></i></div><div class="col-10">Newsletters</div></a></li>
        <li><a href="?p=members" <?php if($_GET["p"] == 'members'){?> class="row active" <?php }else{?> class="row text-secondary" <?php } ?>><div class="col-2"><i class="fa-solid fa-users"></i></div><div class="col-10">Members</div></a></li>
        <li><a href="?p=reports" <?php if($_GET["p"] == 'reports'){?> class="row active" <?php }else{?> class="row text-secondary" <?php } ?>><div class="col-2"><i class="fa-solid fa-chart-line"></i></div><div class="col-10">Reports</div></a></li>
        <li><a href="?p=profile" <?php if($_GET["p"] == 'profile'){?> class="row active" <?php }else{?> class="row text-secondary" <?php } ?>><div class="col-2"><i class="fa-solid fa-user"></i></div><div class="col-10">Profile</div></a></li>
        <li><a href="?p=settings" <?php if($_GET["p"] == 'settings'){?> class="row active" <?php }else{?> class="row text-secondary" <?php } ?>><div class="col-2"><i class="fa-solid fa-gear"></i></div><div class="col-10">Settings</div></a></li>
        <li><a href="?p=logout" <?php if($_GET["p"] == 'logout'){?> class="row active" <?php }else{?> class="row text-secondary" <?php } ?>><div class="col-2"><i class="fa-solid fa-right-from-bracket"></i></div><div class="col-10">Logout</div></a></li>
    </div>
    </div>