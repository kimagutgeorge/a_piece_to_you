<div class="container col-12 lg-page">
<?php include("components/admin/response.php");?>
        <div class="login-panel">
            <form id="loginUser" method="POST">
            <div class="form-group">
            <input type="email" class="form-control" maxlength = "40"  placeholder="Username" name="email" required>
            </div>
            <div class="form-group">
            <input type="password" name="password" maxlength = "60"  class="form-control" placeholder="Password" required>
            </div>
            <div class="form-group">
            <button type="submit" class="col-md-12 form-control btn btn-primary">Login <i class="fa-solid fa-unlock"></i></button>
            </div>
            <div class="fgt-text">
                <a href="?p=forgot" class="text-sm-left">Forgot Password?</a>
            </div>
            
        </form>
        </div>
</div>