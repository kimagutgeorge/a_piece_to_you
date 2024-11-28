<div class="row col-12 top-bar">
        <div class="col-12">
            <p class="text-sm text-muted">Pages / 
                <?php
                    if($_GET["p"] == "adminhome"){
                        echo "Dashboard";
                    }else if($_GET["p"] == 'locations'){
                        echo "Locations";
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