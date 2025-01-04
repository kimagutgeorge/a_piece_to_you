<div class="footer four-vh">
    <div class="hero-84 row">
        <div class="col-6">
            <h4 class="text-third">Newsletter</h4>
            <p class="text-third">Subscribe us and get news, events and all updates from A Piece To You to your inbox.</p>
            <form class="form-group flexed" id="regSubscriber">
                <input type="text" class="form-control" name="subscriber" placeholder="Your Name" required>
                <input type="email" class="form-control" name="email" placeholder="Your Email" required>
                <button type="submit" class="btn btn-primary">SUBSCRIBE</button>
            </form>
            <div class="form-group">
                <p class="text-primary" id="footer_response"></p>
            </div>
           
        </div>
        <div class="col-6">
            <h4 class="text-third ">Quick Links</h4>
            <span>
            <router-link class="text-white r-px-20 font-16" to="/">HOME</router-link>
            </span><br>
            <span>
                <router-link class="text-white r-px-20 font-16" to="/about">ABOUT US</router-link>
            </span><br>
            <span>
                <router-link class="text-white r-px-20 font-16" to="/events">EVENTS</router-link>
            </span><br>
            <span>
                <router-link class="text-white r-px-20 font-16" to="/blogs">BLOG</router-link>
            </span>
            <h4 class="text-third">We Are Social</h4>
            <div class="icons">
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-tiktok"></i>
                <i class="fa-brands fa-linkedin"></i>
            </div>
        </div>
    </div>
</div>
<div class="bottom-banner">
    &copy; A Piece To You 2024
</div>
<button onclick="topFunction()" id="myBtn"><i class="fa-solid fa-angle-up"></i></button>
<!-- back to top -->

<!-- js links -->
<script src="assets/js/jquery.js"></script>
<script src="https://cdn.datatables.net/1.13.6/js/jquery.dataTables.min.js"></script>
<script src="https://cdn.datatables.net/1.13.6/js/dataTables.bootstrap5.min.js"></script>
<script src="assets/js/forms.js?v=<?php echo time()?>" ></script>
<script src="assets/js/style.js?v=<?php echo time()?>" ></script>
</html>