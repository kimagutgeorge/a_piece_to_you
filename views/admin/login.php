<div class="container col-12 lg-page">
        <div class="login-panel">
            <form @submit.prevent="loginUser" method="POST">
            <div class="form-group">
            <input type="text" class="form-control" placeholder="Username" v-model="email" required>
            </div>
            <div class="form-group">
            <input type="password" v-model="password" class="form-control" placeholder="Password" required>
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