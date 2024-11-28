<div class="wrapper">
        <div class="main-bg position-absolute w-100">
            <img src="assets/images/bg/rect2.png" alt="">
        </div>
        <div class="home-hero">
            <!-- small navigation -->
            <?php include("components/smallbar.php");?>
            <div class="hero-84">
                <!-- nav bar -->
               <?php include("components/navbar.php");?>
                <div class="row home-page">
                    <div class="col-6">
                        <h2 class="text-white four-vh">DISCOVER YOUR</h2>
                        <h3 class="text-primary">UNIQUE</h3>
                        <h4 class="text-third">SHAPE</h4>
                        <button class="btn-2 btn-secondary" @click="$router.push('/contact')">CONTACT US</button>
                    </div>
                   
                </div>
                <!-- end of 84 -->
            </div>
        </div>
        <!-- home hero end -->
         <div class="home-about row">
            <div class="col-6">
                <div class="w-80">
                    <p class="text-white four-vh">WHO ARE WE?</p>
                    <h4 class="text-white">we believe everyone has a unique purpose and calling.</h4>
                    <p class="text-white">Our
                        mission is to help you discover your SHAPE—your Spiritual gifts, Heart, Abilities, Personality,
                        and Experience—so you can live a fulfilling and impactful life.</p>
                </div>
                
            </div>
            <div class="col-6">
                <div class="bg">
                    <img src="assets/images/bg/rect3.png" alt="">
                </div>
                <div class="front">
                    <div class="w-r-80">
                        <p class="text-white four-vh">WE OFFER</p>
                        <h4 class="text-white">Personal Development Programs</h4>
                        <p class="text-white">Join our workshops and coaching sessions to grow in your faith and leadership skills.</p>
                        <h4 class="text-white">Creative Expression</h4>
                        <p class="text-white">Explore APY Crafts and Pepali Defined, where creativity meets   purpose through crafts and productivity tools.</p>
                        <h4 class="text-white">Community Support</h4>
                        <p class="text-white">Connect with like-minded individuals through our coaching
                            relationships—find a coach, a peer, and become an apprentice.</p>
                    </div>
                    
                </div>
            </div>
         </div>
         <!-- programs -->
          <div class="programs hero-84 four-vh">
            <h3 class="text-third">Explore Our Programs</h3>
            <p class="text-third">Discover your potential and make a positive impact in your community</p>
            <div class="row">
                <div class="card">
                    <div class="text-center">
                        <i class="fa-solid fa-shapes"></i>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title text-primary">SHAPE</h5>
                        <p class="card-text">Identify your unique Spiritual gifts, Heart, Abilities, Personality, and Experience.</p>
                    </div>
                </div>
                <div class="card">
                    <div class="text-center">
                        <i class="fa-solid fa-random"></i>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title text-primary">FLEXI</h5>
                        <p class="card-text">Learn to cultivate a FLEXI mindset, focusing on Fire or Spirit, Leadership Community Influence.</p>
                    </div>
                </div>
                <div class="card">
                    <div class="text-center">
                        <i class="fa-solid fa-tools"></i>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title text-primary">Workshops</h5>
                        <p class="card-text">Through APY Crafts and Pepali Defined, engage in hands-on projects that foster creativity.</p>
                    </div>
                </div>
                <div class="card">
                    <div class="text-center">
                        <i class="fa-solid fa-hands-helping"></i>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title text-primary">Discipleships</h5>
                        <p class="card-text">Our discipleship model emphasizes four critical relationships.</p>
                    </div>
                </div>
                
            </div>
          </div>
          <!-- events -->
           <div class="events-container">
            <div class="event-bg"></div>
          <div class="home-events hero-84 seven-vh">
            <h3 class="text-third">Our Schedules & Routines</h3>
            <p class="text-third">View And Book Our Schedules And Events</p>
            <div class="row four-vh">
                <div class="col-4">
                    <vue-cal
                    class=""
                    xsmall
                    hide-view-selector
                    :time="false"
                    active-view="month"
                    :disable-views="['week']"
                    style="width: 350px;height: auto; ">
                    </vue-cal>
                    
                </div>
                <div class="col-8 row">
                    
                    <div class="card" v-for="(event, index) in events.slice(0, 4)" :key="index">
                        <div class="card-body">
                            <p class="card-text text-third"> {{ formatEventTime(event.event_start_date, event.event_duration) }}</p>
                            <RouterLink :to="{ name: 'View Event', params: { id: event.events_id }}" :key="$route.fullPath">
                            <h3 style="cursor:pointer" class="text-primary">{{ event.event_name }}</h3>
                        </RouterLink>
                            <p class="card-text text-muted"><i class="fa-solid fa-location-crosshairs"></i> {{ event.event_location }}</p>
                        </div>
                    </div>
                    <!-- end of cards -->
                </div>
            </div>
        </div>
          </div>
          <!-- end of container -->
           <div class="home-gallery">
              <div class="carousel" v-if="events.length >= 4">
                <div
                  class="carousel-track"
                  :style="{ transform: `translateX(-${currentOffset}%)` }"
                >
                  <div
                    v-for="(event, index) in visibleEvents"
                    :key="index"
                    class="carousel-item"
                  >
                  
                  </div>
                </div>
              </div>
    </div>
    </div>