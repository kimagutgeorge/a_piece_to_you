<div class="row col-12 top-bar">
        <div class="col-12">
            <p class="text-sm text-muted">Pages / 
                <?php
                    include("conn.php");
                    if($_GET["p"] == "adminhome"){
                        echo "Dashboard";
                    }else if($_GET["p"] == 'locations'){
                        echo "Locations";
                    }else if($_GET["p"] == 'categories'){
                        echo "Categories";
                    }else if($_GET["p"] == 'members'){
                        echo "Members";
                    }else if($_GET["p"] == 'settings'){
                        echo "Settings";
                    }else if($_GET["p"] == 'add-event'){
                        echo "Add Event";
                    }else if($_GET["p"] == 'adminevents'){
                        echo "Events";
                    }else if($_GET["p"] == 'view-event'){
                        echo "Event Details";
                    }else if($_GET["p"] == 'adminshop'){
                        echo "Shop";
                    }else if($_GET["p"] == 'add-product-category'){
                        echo "Add Product Category";
                    }else if($_GET["p"] == 'add-product'){
                        echo "Add Product";
                    }else if($_GET["p"] == 'view-product'){
                        echo "Product Details";
                    }else if($_GET["p"] == 'adminblogs'){
                        echo "Blogs";
                    }else if($_GET["p"] == 'add-blog'){
                        echo "Add Blog";
                    }else if($_GET["p"] == 'view-blog'){
                        echo "Blog Details";
                    }else if($_GET["p"] == 'newsletters'){
                        echo "Newsletters";
                    }else if($_GET["p"] == 'subscribers'){
                        echo "Subscribers";
                    }else if($_GET["p"] == 'profile'){
                        echo "Profile";
                    }else if($_GET["p"] == 'add-newsletter'){
                        echo "Create Newsletter";
                    }else if($_GET["p"] == 'website'){
                        echo "Website";
                    }
                ?>
            </p></div>
        <div class="row col-12">
            <div class="col-7">
            <h3 class="font-weight-bold text-secondary">
            <?php
                    if($_GET["p"] == "adminhome"){
                        echo "Dashboard";
                    }else if($_GET["p"] == 'locations'){
                        echo "Locations";
                    }else if($_GET["p"] == 'categories'){
                        echo "Categories";
                    }else if($_GET["p"] == 'members'){
                        echo "Members";
                    }else if($_GET["p"] == 'settings'){
                        echo "Settings";
                    }else if($_GET["p"] == 'add-event'){
                        echo "Add Event";
                    }else if($_GET["p"] == 'adminevents'){
                        echo "Events";
                    }else if($_GET["p"] == 'view-event'){
                        $result = $conn->query("select event_name from events where event_id =".$_SESSION['event-id']." limit 1" );
                        $product = mysqli_fetch_assoc($result);
                        $product_name = $product["event_name"];
                        echo $product_name;
                    }else if($_GET["p"] == 'adminshop'){
                        echo "Shop";
                    }else if($_GET["p"] == 'add-product-category'){
                        echo "Add Product Category";
                    }else if($_GET["p"] == 'add-product'){
                        echo "Add Product";
                    }else if($_GET["p"] == 'view-product'){
                        $result = $conn->query("select product_name from products where product_id =".$_SESSION['product-id']." limit 1" );
                        $product = mysqli_fetch_assoc($result);
                        $product_name = $product["product_name"];
                        echo $product_name;
                    }else if($_GET["p"] == 'adminblogs'){
                        echo "Blogs";
                    }else if($_GET["p"] == 'add-blog'){
                        echo "Add Blog";
                    }else if($_GET["p"] == 'view-blog'){
                        $result = $conn->query("select blog_name from blogs where blog_id =".$_SESSION['blog-id']." limit 1" );
                        $product = mysqli_fetch_assoc($result);
                        $product_name = $product["blog_name"];
                        echo $product_name;
                    }else if($_GET["p"] == 'subscribers'){
                        echo "Subscribers";
                    }else if($_GET["p"] == 'newsletters'){
                        echo "Newsletters";
                    }else if($_GET["p"] == 'profile'){
                        echo "Profile";
                    }else if($_GET["p"] == 'add-newsletter'){
                        echo "Create Newsletter";
                    }else if($_GET["p"] == 'website'){
                        echo "Website";
                    }
                ?>
            </h3>
        </div>
        <div class="col-5">
            <div class="bar-panel row">
                <div class="col-8">
                <form action="">
                    <input type="text" class="form-control" placeholder="Search">
                </form>
            </div>
            <div class="col-4 position-relative">
                <i class="fa-solid fa-bell text-secondary"></i>
                <i class="fa-solid fa-message text-secondary"></i>
                <i class="fa-solid fa-user float-end" onclick="toggleHidden()"></i>
            <div class="row col-12 position-absolute" id="profile-panel">
                <li><a href="?p=profile" class="text-secondary"><i class="fa-solid fa-user"></i>Profile</a></li>
                <li><a href="?p=settings" class="text-secondary"><i class="fa-solid fa-gear"></i>Settings</a></li>
                <li style="cursor:pointer !important" @click="logout" class="text-secondary"><i class="fa-solid fa-right-from-bracket"></i>Logout
                </li>
            </div>
            </div>
            </div>
        </div>
        </div>
    </div>