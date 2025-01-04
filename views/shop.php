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
        <a href="?p=cart"><button class="btn btn-primary-box btn-primary"><span id="cart_count">0</span> <i class="fa-solid fa-shopping-cart"></i> CART<button></a>
    </div>
    </div>
    <div class="col-3">
    <div class="form-group">
    <select class="form-control" id="product_categories">
    <!-- insert data here -->
    </select>
    </div>
    </div>
    <div class="col-3">
    <div class="form-group">
    <select class="form-control">
    <option disabled selected="true">All Prices</option>
    <option id="1000">Less than 1, 000</option>
    <option id="1001-5000">1, 001 - 5, 0000</option>
    <option id="5001-10000">5, 001 - 10, 0000</option>
    <option id="10,001-15000">10, 001 - 15, 0000</option>
    <option id="15,001-20000">15, 001 - 20, 0000</option>
    <option id="1000">More than 20, 000</option>
    </select>
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