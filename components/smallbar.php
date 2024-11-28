<div class="nav-bar small-nav row" id="small-nav">
<div class="col-8 four-vh">
    <div class="navigation-icon">
        <i class="fa-solid fa-bars" @click="showNavbar"></i>
    </div>
    <div class="navigation" v-if="isHidden">
    <a class="text-white r-px-20 font-16" active-class="active" to="/">HOME</a>
    <a class="text-white r-px-20 font-16" active-class="active" to="/about">ABOUT US</a>
    <a class="text-white r-px-20 font-16" active-class="active" to="/events">EVENTS</a>
    <a class="text-white r-px-20 font-16" active-class="active" to="/shop">SHOP</a>
    <a class="text-white r-px-20 font-16" active-class="active" to="/blogs">BLOG</a>
    <button class="" @click="$router.push('/contact')">CONTACT US</button>
    </div>
</div>
</div>