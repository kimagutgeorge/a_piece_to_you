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
                    <form id="registerEvent">
                    <div class="form-group">
                        <input type="text" class="form-control" name="name" placeholder="Your Name" required>
                    </div>
                    <div class="form-group">
                        <input type="email" class="form-control" name="email" placeholder="Your Email Address" required>
                    </div>
                        <div class="form-group">
                            <textarea placeholder="Any Enquiries?" name="enquiries" class="form-control"></textarea>
                        </div>
                        <div class="form-group">
                            <p class="text-primary" id="contact_response"></p>
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn btn-primary-box btn-primary" >REGISTER <i class="fa-solid fa-paper-plane"></i></button>
                        </div>
                    </form>
                        
                    </div>
            </div>
        </div>
    
    </div>