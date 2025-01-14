<div class="wrapper about">
<?php include("components/response.php");?>
<div class="nav-bar-wrapper">
<?php include("components/smallbar.php");?>
<div class="cover"></div>
<div class="hero-84">
<?php include("components/navbar.php");?>
</div>
</div>
<div class="hero-84 row four-vh" style="display:flex;">
<div class="custom-twelve centered-div" >
<h3 class="text-primary fw-bold" style="text-align:center">OUR CORE <span class="text-black">VALUES</span></h3>
<p class="text-third" style="text-align:center">We believe in the power of</p>
</div>
<div class="custom-eleven row values four-vh" id="about_top_values">
<!-- insert data here -->
</div>
</div>
<div class="main-about row ten-vh">
<div class="custom-five five-vh">
<h3 class="text-primary fw-bold">ABOUT<span class="text-black"> US</span></h3>
<h4 class="text-third four-vh">OUR VISION</h4>
<p class="text-secondary custom-ten two-vh" id="about_vision"></p>
</div>
<div class="custom-seven bg-black position-relative">
<div class="about-bg position-absolute w-100 h-100"></div>
<div class="about-cover position-absolute w-100 h-100"></div>
<div class="bg-front position-absolute w-100 h-100">
<h4 class="text-white custom-ten">JOIN OUR MISSION</h4>
<p class="text-primary four-vh custom-ten">Partner with us in raising leaders who will impact communities. Together, we can transform lives and inspire lasting change.</p>
<RouterLink to="/contact">
<button class="btn btn-primary btn-primary-box four-vh">CONTACT US</button>
</RouterLink>
</div>
</div>
</div>
<div class="hero-84 row fifteen-vh">
<div class="custom-twelve centered-div">
<h3 class="text-primary fw-bold">OUR CORE <span class="text-black">VALUES</span></h3>
<p class="text-third">We believe in the power of</p>
</div>
<div class="custom-twelve row core-values" id="bottom_values">
<!-- insert data here -->
</div>

</div>
<div class="main-about about-2 row ten-vh">
<div class="custom-five two-vh" id="mission_approach">
<!-- insert data here -->
</div>
<div class="custom-seven bg-black position-relative">
<div class="about-bg position-absolute w-100 h-100"></div>
<div class="about-cover position-absolute w-100 h-100"></div>
<div class="bg-front position-absolute w-100 h-100">

</div>
</div>
</div>
<!-- join us --> 
<div class="join-us row w-100 fifteen-vh">
<div class="custom-six join-bg"></div>
<div class="custom-six join position-relative">
<div class="inner-join position-absolute row w-100">
<div class="custom-six">
  <div class="card">
      <h4 class="text-primary"><span class="text-black fw-bold">Join Us </span>As A Volunteer</h4>
      <p class="text-third">If you wish to help us, join us</p>
      <form id="addVolunteer">
      <div class="form-group">
        <label>Your Name</label>
        <input type="text" name="volunteer_name" placeholder="Your Name" class="form-control" required>
      </div>
      <div class="form-group">
        <label>Your Phone</label>
        <input type="number" name="volunteer_phone" placeholder="Your Phone" class="form-control" required>
      </div>
      <div class="form-group">
        <button class="btn btn-primary-box" @click="volunteer">JOIN US</button>
      </div>
    </form>
      <div class="form-group">
        <p class="text-primary" id="volunteer_response"></p>
      </div>
  </div>
</div>
<div class="custom-six">
  <div class="card bg-primary">
    <h4 class="text-white">Got Some <span class="text-black fw-bold">Questions?</span> </h4>
    <p class="text-white">If you wish to help us, join us</p>
    <form id="addContact">
    <div class="form-group">
      <input type="text" name="contact_name" placeholder="Your Name" class="form-control" required>
    </div>
    <div class="form-group">
      <input type="email" name="contact_email" placeholder="Email Address" class="form-control" required>
    </div>
    <div class="form-group">
      <input type="text" name="contact_subject"  placeholder="Subject" class="form-control" required>
    </div>
    <div class="form-group">
      <textarea class="form-control" name="contact_message" placeholder="Your Message" required></textarea>
    </div>
    <div class="form-group">
      <button type="submit" class="btn btn-primary-box bg-black">SUBMIT</button>
    </div>
    </form>
    <div class="form-group">
      <p class="text-white" id="contact_response"></p>
    </div>
</div>
</div>
</div>
</div>
</div>
<!-- Members -->
<div class="hero-84 custom-twelve centered-div fifteen-vh">
<h3 class="text-primary fw-bold">MEET OUR <span class="text-black">TEAM</span></h3>
</div>
<div class="members four-vh" id="tbl_members">
<!-- insert data here -->
</div>
<!-- end of wrapper -->
</div>