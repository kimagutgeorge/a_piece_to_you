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
    <div class="col-12 search-panel">
    <div class="col-3">
    <div class="form-group">
    <select class="form-control" id="event_location">
        <!-- insert data here -->
    </div>
    </select>
    </div>
    </div>
    <div class="col-3">
    <div class="form-group">
    <select class="form-control" id="event_category">
        <!-- insert data here -->
    </select>
    </div>
    </div>
    <div class="col-3">
    <div class="form-group">
    <input type="text" onclick="changeToDate()" id="event-date" placeholder="Event Date" class="form-control">
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
    <div class="card-container" id="tbl_events">
        <!-- insert data here -->
    </div>
    </td>
    </tr>
    </tbody>
    </table>


    </div>
    </div>
    </div>