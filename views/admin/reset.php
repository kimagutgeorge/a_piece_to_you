<div class="container col-12 lg-page">
<?php include("components/admin/response.php");?>
        <div class="login-panel" style="margin-top:200px !important">
            <form id="changeLoginPass" method="POST">
            <div class="form-group">
            <input type="email" class="form-control" placeholder="Username" name="email" required>
            </div>
            <div class="form-group">
            <input type="number" name="otp" class="form-control" placeholder="Verification Code" required>
            </div>
            <div class="form-group">
            <input type="password" name="password" class="form-control" id="new_password" placeholder="New Password" required>
            </div>
            <div class="form-group">
            <input type="password" name="confirm_password" id="confirm_password" class="form-control" placeholder="Confirm New Password" required>
            </div>
            <div class="form-group">
            <button type="submit" class="col-md-12 form-control btn btn-primary">Login <i class="fa-solid fa-unlock"></i></button>
            </div>
            <div class="fgt-text">
                <a href="?p=adminhub" class="text-sm-left">Back to login</a>
            </div>
            
        </form>
        </div>
</div>