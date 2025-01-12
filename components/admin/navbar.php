<div class="nav-bar">
        <div class="col-12 title-lg">
            <img src="assets/images/g27.png" alt="">
        </div>
        <div class="col-12 custom-scrollbar" style="height:82vh !important; overflow-y:scroll;">
        <li><a href="?p=adminhome" <?php if($_GET["p"] == 'adminhome'){?> class="row active" <?php }else{?> class="row text-secondary" <?php } ?>><div class="col-2"><i class="fa-solid fa-home"></i></div><div class="col-10">Dashboard</div></a></li>
        <li><a href="?p=adminevents" <?php if($_GET["p"] == 'adminevents'){?> class="row active" <?php }else{?> class="row text-secondary" <?php } ?>><div class="col-2"><i class="fa-solid fa-calendar"></i></div><div class="col-10">Events</div></a></li>
        <?php if($_GET["p"] == 'view-event' || $_GET["p"] == 'add-event' || $_GET["p"] == 'adminevents' || $_GET["p"] == 'registration'){?><li><a href="?p=add-event" <?php if($_GET["p"] == 'add-event'){?> class="row active" <?php }else{?> class="row text-secondary" <?php } ?>><div class="col-2"><i class="fa-solid fa-plus"></i></div><div class="col-10">Add Event</div></a></li><?php }?>
        <?php if($_GET["p"] == 'view-event' || $_GET["p"] == 'add-event' || $_GET["p"] == 'adminevents' || $_GET["p"] == 'registration'){?><li><a href="?p=registration" <?php if($_GET["p"] == 'registration'){?> class="row active" <?php }else{?> class="row text-secondary" <?php } ?>><div class="col-2"><i class="fa-solid fa-list"></i></div><div class="col-10">Registration</div></a></li><?php }?>
        <li><a href="?p=categories" <?php if($_GET["p"] == 'categories'){?> class="row active" <?php }else{?> class="row text-secondary" <?php } ?>><div class="col-2"><i class="fa-solid fa-shapes"></i></div><div class="col-10">Categories</div></a></li>
        <li><a href="?p=locations" <?php if($_GET["p"] == 'locations'){?> class="row active" <?php }else{?> class="row text-secondary" <?php } ?> ><div class="col-2"><i class="fa-solid fa-location-pin"></i></div><div class="col-10">Locations</div></a></li>
        <li><a href="?p=adminshop" <?php if($_GET["p"] == 'adminshop'){?> class="row active" <?php }else{?> class="row text-secondary" <?php } ?>><div class="col-2"><i class="fa-solid fa-shop"></i></div><div class="col-10">Shop</div></a></li>
        <?php if($_GET["p"] == 'view-product' || $_GET["p"] == 'view-order' || $_GET["p"] == 'add-product' || $_GET["p"] == 'adminshop' || $_GET["p"] == 'add-product-category' || $_GET["p"] == 'orders'){?><li><a href="?p=add-product-category" <?php if($_GET["p"] == 'add-product-category'){?> class="row active" <?php }else{?> class="row text-secondary" <?php } ?>><div class="col-2"><i class="fa-solid fa-plus"></i></div><div class="col-10">Add Category</div></a></li><?php }?>
        <?php if($_GET["p"] == 'view-product' || $_GET["p"] == 'view-order' || $_GET["p"] == 'add-product' || $_GET["p"] == 'adminshop' || $_GET["p"] == 'add-product-category' || $_GET["p"] == 'orders'){?><li><a href="?p=add-product" <?php if($_GET["p"] == 'add-product'){?> class="row active" <?php }else{?> class="row text-secondary" <?php } ?>><div class="col-2"><i class="fa-solid fa-plus"></i></div><div class="col-10">Add Product</div></a></li><?php }?>
        <?php if($_GET["p"] == 'view-product' || $_GET["p"] == 'view-order' || $_GET["p"] == 'add-product' || $_GET["p"] == 'adminshop' || $_GET["p"] == 'add-product-category' || $_GET["p"] == 'orders'){?><li><a href="?p=orders" <?php if($_GET["p"] == 'orders'){?> class="row active" <?php }else{?> class="row text-secondary" <?php } ?>><div class="col-2"><i class="fa-solid fa-shopping-cart"></i></div><div class="col-10">Orders</div></a></li><?php }?>
        <li><a href="?p=adminblogs" <?php if($_GET["p"] == 'adminblogs'){?> class="row active" <?php }else{?> class="row text-secondary" <?php } ?>><div class="col-2"><i class="fa-solid fa-blog"></i></div><div class="col-10">Blogs</div></a></li>
        <?php if($_GET["p"] == 'view-blog' || $_GET["p"] == 'adminblogs' || $_GET["p"] == 'add-blog' ){?><li><a href="?p=add-blog" <?php if($_GET["p"] == 'add-blog'){?> class="row active" <?php }else{?> class="row text-secondary" <?php } ?>><div class="col-2"><i class="fa-solid fa-plus"></i></div><div class="col-10">Add Blog</div></a></li><?php }?>
        <li><a href="?p=payments" <?php if($_GET["p"] == 'payments'){?> class="row active" <?php }else{?> class="row text-secondary" <?php } ?>><div class="col-2"><i class="fa-solid fa-coins"></i></div><div class="col-10">Accounts</div></a></li>
        <li><a href="?p=newsletters" <?php if($_GET["p"] == 'newsletters'){?> class="row active" <?php }else{?> class="row text-secondary" <?php } ?>><div class="col-2"><i class="fa-solid fa-envelope"></i></div><div class="col-10">Newsletters</div></a></li>
        <?php if($_GET["p"] == 'subscribers' || $_GET["p"] == 'newsletters' || $_GET["p"] == 'add-newsletter' ){?><li><a href="?p=add-newsletter" <?php if($_GET["p"] == 'add-newsletter'){?> class="row active" <?php }else{?> class="row text-secondary" <?php } ?>><div class="col-2"><i class="fa-solid fa-plus"></i></div><div class="col-10">Add Newsletter</div></a></li><?php }?>
        <?php if($_GET["p"] == 'subscribers' || $_GET["p"] == 'newsletters' || $_GET["p"] == 'add-newsletter' ){?><li><a href="?p=subscribers" <?php if($_GET["p"] == 'subscribers'){?> class="row active" <?php }else{?> class="row text-secondary" <?php } ?>><div class="col-2"><i class="fa-solid fa-users"></i></div><div class="col-10">Subscribers</div></a></li><?php }?>
        <li><a href="?p=roles" <?php if($_GET["p"] == 'roles'){?> class="row active" <?php }else{?> class="row text-secondary" <?php } ?>><div class="col-2"><i class="fa-solid fa-user-tag"></i></div><div class="col-10">Roles</div></a></li>
        <li><a href="?p=messages" <?php if($_GET["p"] == 'messages'){?> class="row active" <?php }else{?> class="row text-secondary" <?php } ?>><div class="col-2"><i class="fa-solid fa-envelope"></i></div><div class="col-10">Messages</div></a></li>
        <li><a href="?p=members" <?php if($_GET["p"] == 'members'){?> class="row active" <?php }else{?> class="row text-secondary" <?php } ?>><div class="col-2"><i class="fa-solid fa-users"></i></div><div class="col-10">Members</div></a></li>
        <li><a href="?p=contacts" <?php if($_GET["p"] == 'contacts'){?> class="row active" <?php }else{?> class="row text-secondary" <?php } ?>><div class="col-2"><i class="fa-solid fa-phone"></i></div><div class="col-10">Contacts</div></a></li>
        <!-- <li><a href="?p=reports" <?php if($_GET["p"] == 'reports'){?> class="row active" <?php }else{?> class="row text-secondary" <?php } ?>><div class="col-2"><i class="fa-solid fa-chart-line"></i></div><div class="col-10">Reports</div></a></li> -->
        <li><a href="?p=website" <?php if($_GET["p"] == 'website'){?> class="row active" <?php }else{?> class="row text-secondary" <?php } ?>><div class="col-2"><i class="fa-solid fa-globe"></i></div><div class="col-10">Website</div></a></li>
        <li><a href="?p=settings" <?php if($_GET["p"] == 'settings'){?> class="row active" <?php }else{?> class="row text-secondary" <?php } ?>><div class="col-2"><i class="fa-solid fa-gear"></i></div><div class="col-10">Settings</div></a></li>
        <li><a href="?p=profile" <?php if($_GET["p"] == 'profile'){?> class="row active" <?php }else{?> class="row text-secondary" <?php } ?>><div class="col-2"><i class="fa-solid fa-user"></i></div><div class="col-10">Profile</div></a></li>
        <li><a href="?p=logout" <?php if($_GET["p"] == 'logout'){?> class="row active" <?php }else{?> class="row text-secondary" <?php } ?>><div class="col-2"><i class="fa-solid fa-right-from-bracket"></i></div><div class="col-10">Logout</div></a></li>
    </div>
    </div>

<style>
/* Scrollbar styling */
.custom-scrollbar {
    scrollbar-width: thin; /* For Firefox */
    scrollbar-color: #888 #eaeaea; /* Scrollbar and track color for Firefox */
}

/* For Webkit browsers (Chrome, Safari, Edge) */
.custom-scrollbar::-webkit-scrollbar {
    width: 2px; /* Scrollbar width */
    
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background-color: #888; /* Scrollbar thumb color */
    border-radius: 4px; /* Rounded edges */
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background-color: #555; /* Thumb color on hover */
}

.custom-scrollbar::-webkit-scrollbar-track {
    background: #eaeaea; /* Scrollbar track color */
    border-radius:2.5px;
}
</style>