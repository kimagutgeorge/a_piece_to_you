<div class="wrapper about">
<div class="nav-bar-wrapper">
<?php include("components/smallbar.php");?>
<div class="cover"></div>
<div class="hero-84">
<?php include("components/navbar.php");?>
</div>
</div>
<div class="hero-84 row four-vh">
<div class="col-12 centered-div">
<h3 class="text-primary fw-bold">OUR CORE <span class="text-black">VALUES</span></h3>
<p class="text-third">We believe in the power of</p>
</div>
<div class="col-12 row values four-vh">
<div class="col-3 value bg-gradient">
<div class="inner-value">
<i class="fa-solid fa-person-praying text-white"></i>
<p class="text-white">PRAYER</p>
</div>
</div>
<div class="col-3 value bg-gradient">
<div class="inner-value">
<i class="fa-solid fa-scroll text-white"></i>
<p class="text-white">PROPHECY</p>
</div>
</div>
<div class="col-3 value bg-gradient">
<div class="inner-value">
<i class="fa-solid fa-handshake text-white"></i>
<p class="text-white">PARTNERSHIP</p>
</div>
</div>
</div>
</div>
<div class="main-about row ten-vh">
<div class="col-5 five-vh">
<h3 class="text-primary fw-bold">ABOUT<span class="text-black"> US</span></h3>
<h4 class="text-third four-vh">OUR VISION</h4>
<p class="text-secondary col-10 two-vh">To reconnect individuals to their original identity in Christ. We strive to raise five hundred thousand leaders who are passionate, purpose-driven, and impactful in their communities.</p>
</div>
<div class="col-7 bg-black position-relative">
<div class="about-bg position-absolute w-100 h-100"></div>
<div class="about-cover position-absolute w-100 h-100"></div>
<div class="bg-front position-absolute w-100 h-100">
<h4 class="text-white col-10">JOIN OUR MISSION</h4>
<p class="text-primary four-vh col-10">Partner with us in raising leaders who will impact communities. Together, we can transform lives and inspire lasting change.</p>
<RouterLink to="/contact">
<button class="btn btn-primary btn-primary-box four-vh">CONTACT US</button>
</RouterLink>
</div>
</div>
</div>
<div class="hero-84 row fifteen-vh">
<div class="col-12 centered-div">
<h3 class="text-primary fw-bold">OUR CORE <span class="text-black">VALUES</span></h3>
<p class="text-third">We believe in the power of</p>
</div>
<div class="col-12 row core-values">
<div class="col-4 card four-vh">
  <div class="icon-holder">
    <i class="fa-solid fa-person-praying"></i>
  </div>
      <p class="two-vh text-third fw-bold">PRAYER</p>
      <p class="text-muted two-vh">Our foundation is built on a strong connection with God.</p>
  </div>
  <div class="col-4 card four-vh">
    <div class="icon-holder">
        <i class="fa-solid fa-scroll"></i>
      </div>
          <p class="two-vh text-third fw-bold">PROPHECY</p>
          <p class="text-muted two-vh">We align our individual purposes with God's greater plan for reconciliation.</p>
          </div>
  <div class="col-4 card four-vh">
    <div class="icon-holder">
      <i class="fa-solid fa-handshake"></i>
    </div>
        <p class="two-vh text-third fw-bold">PARTNERSHIP</p>
        <p class="text-muted two-vh">Building authentic relationships within the body of Christ to support and uplift one another.</p>
  </div>
</div>

</div>
<div class="main-about about-2 row ten-vh">
<div class="col-5 two-vh">
<h4 class="text-primary four-vh">OUR <span class="text-black">MISSION</span></h4>
<p class="text-third</span>">Our Mission is two-fold: </p>
<p class="text-secondary col-10 two-vh">1. Help individuals understand their <span class="fw-bold text-primary">SHAPE— </span>Spiritual gifts, Heart, Abilities, Personality,
and Experience—so they can fulfill their unique calling.</p>
<p class="text-secondary col-10 two-vh">2. Foster a <span class="fw-bold text-primary">FLEXI</span> mindset—growing the Fire of the Spirit, Leadership of Self,
Entrepreneurial X-factor, and Impactful community influence.</p>

<h4 class="text-primary four-vh">OUR <span class="text-black">APPROACH</span></h4>
<p class="text-third</span>">We provide structured programs that combine personal development and
creative expression through our initiatives—APY Crafts and Pepali Defined. Our model
encourages discipleship, fostering growth in individuals who then inspire others.</p>
</div>
<div class="col-7 bg-black position-relative">
<div class="about-bg position-absolute w-100 h-100"></div>
<div class="about-cover position-absolute w-100 h-100"></div>
<div class="bg-front position-absolute w-100 h-100">

</div>
</div>
</div>
<!-- join us --> 
<div class="join-us row w-100 fifteen-vh">
<div class="col-6 join-bg"></div>
<div class="col-6 join position-relative">
<div class="inner-join position-absolute row w-100">
<div class="col-6">
  <div class="card">
      <h4 class="text-primary"><span class="text-black fw-bold">Join Us </span>As A Volunteer</h4>
      <p class="text-third">If you wish to help us, join us</p>
      <div class="form-group">
        <label>Your Name</label>
        <input type="text" v-model="volunteer_name" placeholder="Your Name" class="form-control">
      </div>
      <div class="form-group">
        <label>Your Phone</label>
        <input type="number" v-model="volunteer_phone" placeholder="Your Phone" class="form-control">
      </div>
      <div class="form-group">
        <button class="btn btn-primary-box" @click="volunteer">JOIN US</button>
      </div>
      <div class="form-group">
        <p class="text-primary">{{response}}</p>
      </div>
  </div>
</div>
<div class="col-6">
  <div class="card bg-primary">
    <h4 class="text-white">Got Some <span class="text-black fw-bold">Questions?</span> </h4>
    <p class="text-white">If you wish to help us, join us</p>
    <div class="form-group">
      <input type="text" v-model="contact_name" placeholder="Your Name" class="form-control">
    </div>
    <div class="form-group">
      <input type="text" v-model="contact_email" placeholder="Email Address" class="form-control">
    </div>
    <div class="form-group">
      <input type="text" v-model="contact_subject"  placeholder="Subject" class="form-control">
    </div>
    <div class="form-group">
      <textarea class="form-control" v-model="contact_message" placeholder="Your Message"></textarea>
    </div>
    <div class="form-group">
      <button @click="contactUs" class="btn btn-primary-box bg-black">SUBMIT</button>
    </div>
    <div class="form-group">
      <p class="text-white">{{contact_response}}</p>
    </div>
</div>
</div>
</div>
</div>
</div>
<!-- Members -->
<div class="hero-84 col-12 centered-div fifteen-vh">
<h3 class="text-primary fw-bold">MEET OUR <span class="text-black">TEAM</span></h3>
</div>
<div class="members four-vh">

<div class="col-3" v-for="(member, index) in db_members" :key="index" style="margin-bottom:20px !important">
<div class="member-inner">
<img :src="require(`../../assets/images/bg/members/${member.photo}`)" alt=""><br>
<h4 class="text-black">{{ member.name }}</h4>
<p class="text-third">{{ member.role_name }}</p>
<div class="col-12">
<a :href="member.facebook.startsWith('http') ? member.facebook : 'https://' + member.facebook" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-facebook-f"></i></a>

<a :href="member.instagram.startsWith('http') ? member.instagram : 'https://' + member.instagram" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-instagram"></i></a>

<a :href="member.linkedin.startsWith('http') ? member.linkedin : 'https://' + member.linkedin" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin"></i></a>

<a :href="'mailto:' + member.email"><i class="fa-solid fa-envelope"></i></a>


<a :href="member.twitter.startsWith('http') ? member.twitter : 'https://' + member.twitter" target="_blank" rel="noopener noreferrer">
<i class="fa-brands fa-twitter"></i>
</a>
</div>
</div>
</div>

</div>
<!-- end of wrapper -->
</div>