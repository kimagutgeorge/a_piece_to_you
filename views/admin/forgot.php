<div class="container col-12 lg-page">
<?php include("components/admin/response.php");?>
        <div class="login-panel">
            <form id="forgotPassword" method="POST">
            <div class="form-group">
            <input type="email" class="form-control" placeholder="Input Email" name="email" required>
            </div>
            <div class="form-group">
            <button type="submit" class="col-md-12 form-control btn btn-primary">SEND OTP <i class="fa-solid fa-unlock"></i></button>
            </div>
            <div class="fgt-text">
                <a href="?p=adminhub" class="text-sm-left">Back to login </a>
            </div>
            
        </form>
        </div>
</div>