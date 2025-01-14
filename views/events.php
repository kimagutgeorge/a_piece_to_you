<div class="wrapper about">
    <?php include("components/response.php");?>
    <div class="nav-bar-wrapper">
    <?php include("components/smallbar.php");?>
    <div class="cover"></div>
    <div class="hero-84">
    <?php include("components/navbar.php");?>
    <Navbar/>
    </div>
    </div>
    <div class="events hero-90 row four-vh">
    <div class="custom-twelve search-panel">
    <div class="custom-three">
    <div class="form-group">
    <select class="form-control" id="event_location">
        <!-- insert data here -->
    </div>
    </select>
    </div>
    </div>
    <div class="custom-three">
    <div class="form-group">
    <select class="form-control" id="event_category">
        <!-- insert data here -->
    </select>
    </div>
    </div>
    <div class="custom-three">
    <div class="form-group">
    <input type="text" onclick="changeToDate()" id="event-date" placeholder="Event Date" class="form-control">
    </div>
    </div>
    <div class="custom-three">
    <div class="form-group">
    <button class="btn btn-primary-box btn-primary">SEARCH</button>
    </div>
    </div>
    </div>
    <div class="row event-panel ten-vh">
    <div class="tbl-card-holder ">
    <!-- Flex container to wrap cards in rows of four -->
    <div class="card-container" id="tbl_events">
        <!-- insert data here -->
    </div>
    </div>
    </div>
    </div>
    </div>