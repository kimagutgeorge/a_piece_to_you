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
    <div class="card-container" id="tbl_shop">
    <!-- insert data here -->
    </td>
    </tr>
    </tbody>
    </table>


    </div>
    </div>
    </div>