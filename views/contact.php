<div class="wrapper about">
<?php include("components/response.php");?>
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
                    <form id="addContact">
                    <div class="form-group">
                        <input type="text" name="contact_name" class="form-control" placeholder="Your Name" required>
                    </div>
                    <div class="form-group">
                        <input type="email" name="contact_email" class="form-control" placeholder="Your Email Address" required>
                    </div>
                        <div class="form-group">
                            <input type="text" name="contact_subject" class="form-control" placeholder="Subject" required>
                        </div>
                        <div class="form-group">
                            <textarea placeholder="Your Message" class="form-control" name="contact_message" required></textarea>
                        </div>
                        <div class="form-group">
                            <button class="btn btn-primary-box btn-primary" >SUBMIT <i class="fa-solid fa-paper-plane"></i></button>
                        </div>
                        </form>
                        <div class="form-group">
                            <p class="text-primary" id="contact_response"></p>
                        </div>
                    </div>
            </div>
        </div>
    <div class="col-12 contact-map ten-vh">
    <?php include("components/map.php");?>
    </div>
    
    </div>