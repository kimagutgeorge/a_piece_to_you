<?php include("components/admin/response.php");?>
    <div class="row dashboard categories">
        <div class="col-12 row event-search" style = "height:fit-content">
            <div class="col-6">
            <!-- nothing here -->
            </div>
            <div class="col-6" style="text-align:right">
            <a href="?p=add-newsletter"><button class="btn btn-primary">CREATE NEWSLETTER</button></a>
            <a href="?p=subscribers"><button class="btn btn-primary" @click="$router.push('/subscribers')">SUBSCRIBERS</button></a>
            </div>
            </div>
    <div class="col-12 row" style="margin-top:-34vh !important">
    <div class="col-12 card"  style="padding:15px !important;">
    <table id="tbl" class="table" style="width:100%">
    <thead>
    <tr>
    <th class="fw-bold" hidden>#</th>
    <th style="width:40%">Newsletter Title</th>
    <th style="width:10%">Status</th>
    <th style="width:20%">Date</th>
    <th style="width:20%">Action</th>
    </tr>
    </thead>
    <tbody class="orders-table"id="tbl_ewsletters">
    <!-- insert data here -->
    </tbody>
    </table>
    
    </div>
    
    </div>
    </div>