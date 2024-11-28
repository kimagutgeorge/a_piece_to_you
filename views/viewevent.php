<div class="wrapper about">
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
<h4 class="text-third">{{ event_name }}</h4>
<img
v-if="banner"
class="w-100 two-vh"
:src="require(`../../assets/images/bg/events/${banner}`)"
:alt="`Preview Image`"
/>
<h4 class="text-third two-vh">Overview</h4>
<div v-html="event_description"></div>
<h4 class="text-third four-vh">Speaker(s) & Chief Guest(s)</h4>
<div class="col-12 four-vh">
<div class="card" v-for="(speaker, index) in speakers" :key="index">
<img :src="require(`../../assets/images/bg/members/${speaker.photo}`)" alt="">
<h4 class="card-title two-vh">{{speaker.name}}</h4>
<p class="text-third">Speaker</p>
</div>
</div>
</div>
</div>
<div class="col-4">
<div class="card col-12">
<h4 class="text-third two-vh">Event Details</h4>
<p class="text-primary fw-bold four-vh">Date & Time</p>
<p class="text-muted"><i class="fa-regular fa-clock"></i> {{ formatEventTime(event_date, event_duration) }}</p>
<p class="text-primary fw-bold" style="margin-top:20px !important">Location</p>
<p class="text-muted"><i class="fa-solid fa-location-crosshairs"></i> {{event_location}}</p>
<div class="inner-card">
<img v-if="banner" :src="require(`../../assets/images/bg/events/${banner}`)" class="w-100" alt="">
<div class="w-100 organizer">
<h3 class="text-white">Contact Us</h3>
</div>
<div class="w-100 organizer-details">
<p class="text-primary fw-bold">Phone</p>
<p class="text-white"><i class="fa-solid fa-phone"></i> +254 {{phone}}</p>
<p class="text-primary fw-bold">Email</p>
<p class="text-white"><i class="fa-solid fa-envelope"></i>  {{email}}</p>
</div>
</div>
<RouterLink :to="{ name: 'Register', params: { id: localId }}" :key="$route.fullPath">
<button class="btn btn-primary-box btn-primary">REGISTER</button>
</RouterLink>
</div>
</div>
</div>
<!-- other events -->
<div class="col-12 centered-div ten-vh">
<h3 class="text-primary fw-bold">OTHER <span class="text-black">EVENTS</span></h3>
</div>
<div class="events hero-90 row">
<div class="row event-panel ten-vh">
<div class="col-3" v-for="(event, index) in events.slice(0, 4)" :key="index">
<div class="card">
<img :src="require(`../../assets/images/bg/events/${event.event_banner}`)" alt="" class="card-img-top">
<div class="card-body">
<div class="card-body-inner">
<h3 class="text-third">{{ event.event_name }}</h3>
<div class="col-12">
<p class="text-primary fw-bold">Date & Time</p>
<p class="text-muted"><i class="fa-regular fa-clock"></i> {{ formatEventTime(event.event_start_date, event.event_duration) }}</p>
<p class="text-primary fw-bold" style="margin-top:20px !important">Location</p>
<p class="text-muted"><i class="fa-solid fa-location-crosshairs"></i> {{ event.event_location }}</p>
</div>
<div class="col-12" style="border-top:1px solid rgb(230,230,230)">
<RouterLink :to="{ name: 'View Event', params: { id: event.events_id }}" :key="$route.fullPath">
<button class="btn btn-primary-box btn-primary">
READ MORE
</button>
</RouterLink>
</div>
</div>
</div>
</div>
</div>

</div>
</div>
</div>