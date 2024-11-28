<div class="wrapper about">
    <div class="nav-bar-wrapper">
    <?php include("components/smallbar.php");?>
    <div class="cover"></div>
    <div class="hero-84">
    <?php include("components/navbar.php");?>
    <Navbar/>
    </div>
    </div>
    <div class="events hero-90 row four-vh">
    <div class="col-12 search-panel">
    <div class="col-3">
    <div class="form-group">
    <select class="form-control">
    <option disabled selected="true">All Locations</option>
    <option v-for="(location, index) in locations" :key="index" :value="location.location_id">{{location.location_name}}</option>
    </select>
    </div>
    </div>
    <div class="col-3">
    <div class="form-group">
    <select class="form-control">
    <option disabled selected="true">All Categories</option>
    <option v-for="(category, index) in categories" :value="category.category_id" :key="index">{{category.category_name}}</option>
    </select>
    </div>
    </div>
    <div class="col-3">
    <div class="form-group">
    <input type="text" @click="changeToDate" id="event-date" placeholder="Event Date" class="form-control">
    </div>
    </div>
    <div class="col-3">
    <div class="form-group">
    <button class="btn btn-primary-box btn-primary">SEARCH</button>
    </div>
    </div>
    </div>
    <div class="row event-panel ten-vh">
    <table id="_tbl" style="width:100%" class="flexed-table">
    <thead>
    <tr hidden><th>Events</th></tr>
    </thead>
    <tbody style="width:100% !important">
    <tr class="tbl-card-holder " v-for="(chunk, rowIndex) in chunkedEvents" :key="rowIndex">
    <td>
    <!-- Flex container to wrap cards in rows of four -->
    <div class="card-container">
    <div class="col-3"  v-for="(event, index) in chunk" :key="index">
    <div class="card" v-if="event">
    <img :src="require(`../../assets/images/bg/events/${event.event_banner}`)" alt="" class="card-img-top">
    <div class="card-body position-relative">
    <div class="card-body-inner">
    <h3 class="text-third">{{ event.event_name }}</h3>
    <div class="col-12">
    <p class="text-primary">Date & Time</p>
    <p class="text-muted"><i class="fa-regular fa-clock"></i> {{ formatEventTime(event.event_start_date, event.event_duration) }} </p>
    <p class="text-primary" style="margin-top:20px !important">Location</p>
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
    <!-- Empty card to fill up row if fewer than four items -->
    <div v-else class="card empty-card"></div>
    </div>
    
    </div>
    </td>
    </tr>
    </tbody>
    </table>


    </div>
    </div>
    </div>