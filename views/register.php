<div class="wrapper about">
        <div class="nav-bar-wrapper">
        <?php include("components/smallbar.php");?>
        <div class="cover"></div>
        <div class="hero-84">
        <?php include("components/navbar.php");?>
          </div>
        </div>
        <div class="contact hero-84 row ten-vh register">
            <div class="col-7">
                <div class="card">
                    <h4 class="text-primary two-vh">Register</h4>
                    <p class="text-muted two-vh">Fill out this form to register for the event. An invite link and Details will be sent to your Email</p>
                    <div class="form-group">
                        <input type="text" class="form-control" v-model="name" placeholder="Your Name">
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" v-model="email" placeholder="Your Email Address">
                    </div>
                        <div class="form-group">
                            <textarea placeholder="Any Enquiries?" v-model="enquiries" class="form-control"></textarea>
                        </div>
                        <div class="form-group">
                            <p class="text-primary">{{response}}</p>
                        </div>
                        <div class="form-group">
                            <button class="btn btn-primary-box btn-primary" @click="register">REGISTER <i class="fa-solid fa-paper-plane"></i></button>
                        </div>
                        
                    </div>
            </div>
        </div>
    
    </div>