<?php include("components/admin/response.php");?>
    <div class="row dashboard categories">
    <div class="col-12 row dashboard-inner">
        <div class="col-12 row event-search" style = "height:fit-content">
            <div class="col-6">
            <!-- nothing here -->
            </div>
            <div class="col-6" style="text-align:right">
            <a href="?p=create-order"><button class="btn btn-primary">CREATE ORDER</button></a>
            </div>
            </div>
    <div class="col-12 row" style="margin-top:-34vh !important">
    <div class="col-12 card"  style="padding:15px !important;">
    <table id="tbl" class="table" style="width:100%">
    <thead>
    <tr>
    <th class="fw-bold" hidden>#</th>
    <th style="width:30%">Client Name</th>
    <th style="width:20%">Order Number</th>
    <th style="width:15%">Status</th>
    <th style="width:20%">Date</th>
    <th style="width:15%">Action</th>
    </tr>
    </thead>
    <tbody class="orders-table"id="tbl_orders">
    <!-- insert data here -->
    </tbody>
    </table>
    
    </div>
</div>
    </div>
    </div>