<div class="wrapper about">
<?php include("components/response.php");?>
<div class="nav-bar-wrapper">
<?php include("components/smallbar.php");?>
<div class="cover"></div>
<div class="hero-84">
<?php include("components/navbar.php");?>
</div>
</div>
<div class="view-event hero-84 row ten-vh">
<div class="col-8 row">
<div class="col-11">
<p hidden id="event_id"></p>
<h4 class="text-third" id="event_name"><!-- insert data --></h4>
<img class="w-100 two-vh" id="event_img" src="" alt="`Preview Image`"
/>
<h4 class="text-third two-vh">Overview</h4>
<div id="event_description"><!-- insert data here --></div>
<h4 class="text-third four-vh">Speaker(s) & Chief Guest(s)</h4>
<div class="col-12 four-vh" id="client_speakers">
<!-- insert data here -->
</div>
</div>
</div>
<div class="col-4">
<div class="card col-12">
<h4 class="text-third two-vh">Event Details</h4>
<p class="text-primary fw-bold four-vh">Date & Time</p>
<p class="text-muted" id="event_time"></p>
<p class="text-primary fw-bold" style="margin-top:20px !important">Location</p>
<p class="text-muted" id="event_location"></p>
<div class="inner-card">
<img id="event_details_banner" src="" class="w-100" alt="">
<div class="w-100 organizer">
<h3 class="text-white">Contact Us</h3>
</div>
<div class="w-100 organizer-details">
<p class="text-primary fw-bold">Phone</p>
<p class="text-white"><i class="fa-solid fa-phone"></i> +254 <span id="event_phone"></span></p>
<p class="text-primary fw-bold">Email</p>
<p class="text-white"><i class="fa-solid fa-envelope"></i>  <span id="event_email"></span></p>
</div>
</div>

<button class="btn btn-primary-box btn-primary" id="register-event">REGISTER</button>
</div>
</div>
</div>
<!-- other events -->
<div class="col-12 centered-div ten-vh">
<h3 class="text-primary fw-bold">OTHER <span class="text-black">EVENTS</span></h3>
</div>
<div class="events hero-90 row">
<div class="row event-panel ten-vh" id="event_details_events">
<!-- <insert data here -->
</div>
</div>
</div>