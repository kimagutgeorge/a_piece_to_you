<div class="footer four-vh">
    <div class="hero-84 row">
        <div class="col-6">
            <h4 class="text-third">Newsletter</h4>
            <p class="text-third">Subscribe us and get news, events and all updates from A Piece To You to your inbox.</p>
            <div class="form-group flexed">
                <input type="text" class="form-control" v-model="name" placeholder="Your Name">
                <input type="text" class="form-control" v-model="email" placeholder="Your Email">
                <button class="btn btn-primary" @click="subscribe">SUBSCRIBE</button>
            </div>
            <div class="form-group">
                <p class="text-primary">{{response}}</p>
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
 <script src="assets/js/style.js?v=<?php echo time()?>" ></script>
</html>