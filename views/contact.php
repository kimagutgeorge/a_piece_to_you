<div class="wrapper about">
        <div class="nav-bar-wrapper">
        <?php include("components/smallbar.php");?>
        <div class="cover"></div>
        <div class="hero-84">
        <?php include("components/navbar.php");?>
          </div>
        </div>
        <div class="contact hero-84 row ten-vh">
            <div class="col-6 contact-statement">
                <div class="inner-contact-statement">
                    <h3 class="text-primary">Get in Touch</h3>
                <p class="text-third">Have a question? We're here to help! Contact us today for quick and friendly support and response</p>
                <h4 class="text-primary two-vh">Get in Touch Via Socials</h4>
                <div class="col-12 two-vh">
                    <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-tiktok"></i>
                <i class="fa-brands fa-linkedin"></i>
                </div>
                </div>
                
            </div>
            <div class="col-5">
                <div class="card">
                    <h4 class="text-primary two-vh">Send Us A Message</h4>
                    <p class="text-muted two-vh">Fill out this form to send your inquires or complaints.</p>
                    <div class="form-group">
                        <input type="text" v-model="contact_name" class="form-control" placeholder="Your Name">
                    </div>
                    <div class="form-group">
                        <input type="text" v-model="contact_email" class="form-control" placeholder="Your Email Address">
                    </div>
                        <div class="form-group">
                            <input type="text" v-model="contact_subject" class="form-control" placeholder="Subject">
                        </div>
                        <div class="form-group">
                            <textarea placeholder="Your Message" class="form-control" v-model="contact_message"></textarea>
                        </div>
                        <div class="form-group">
                            <button class="btn btn-primary-box btn-primary" @click="contactUs">SUBMIT <i class="fa-solid fa-paper-plane"></i></button>
                        </div>
                        <div class="form-group">
                            <p class="text-primary">{{contact_response}}</p>
                        </div>
                    </div>
            </div>
        </div>
    <div class="col-12 contact-map ten-vh">
        <Map/>
    </div>
    
    </div>