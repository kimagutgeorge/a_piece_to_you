<div class="wrapper">
<?php include("components/response.php");?>
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
                <div class="w-80" id="home_about">
                    <!-- insert data here -->
                </div>
                
            </div>
            <div class="col-6">
                <div class="bg">
                    <img src="assets/images/bg/rect3.png" alt="">
                </div>
                <div class="front">
                    <div class="w-r-80" id="home_offer">
                        <!-- insert data here -->
                    </div>
                    
                </div>
            </div>
         </div>
         <!-- programs -->
          <div class="programs hero-84 four-vh">
            <h3 class="text-third">Explore Our Programs</h3>
            <p class="text-third">Discover your potential and make a positive impact in your community</p>
            <div class="row" id="home_programs">
                <!-- insert data here -->
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
                <div class="col-8 row" id="home_events">
                    <!-- insert data here -->
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
<!-- include map -->
<?php include("components/map.php");?>