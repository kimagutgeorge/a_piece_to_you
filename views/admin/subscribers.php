<?php include("components/admin/response.php");?>
    <div class="row dashboard categories">
    <div class="col-12 row dashboard-inner">
    <div class="col-4 card" style="height:fit-content !important">
    <h4 class="text-primary">Add Subscriber</h4>
    <form id="addSubscriber">
    <div class="form-group top-20">
    <input type="text" name="subscriber" placeholder="Subscriber Name" class="form-control" required>
    </div>
    <div class="form-group top-20">
    <input type="text" name="email" placeholder="Subscriber Email" class="form-control" required>
    </div>
    <div class="form-group top-20">
    <button type="submit" class="btn btn-primary">SAVE <i class="fa-solid fa-save"></i></button>
    </div>
    </form>
    </div>
    <div class="col-7 card">
    <table id="tbl" class="table" style="width:100%">
    <thead>
    <tr>
    <th class="fw-bold" hidden>#</th>
    <th style="width:50%">Subscriber Name</th>
    <th style="width:30%">Status</th>
    <th style="width:20%">Action</th>
    </tr>
    </thead>
    <tbody id="tbl_subscribers">
        <!-- inject data here -->
    </tbody>
    </table>
    
    </div>
    
    </div>
    </div>