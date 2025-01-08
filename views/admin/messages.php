<?php include("components/admin/response.php");?>
    <div class="row dashboard categories">
    <div class="col-12 row dashboard-inner" >
    <div class="col-6">
    <div class="col-12 card"  style="padding:15px !important;">
    <div class="form-group text-primary ">
    Message
    <div class="col-12 top-20">
    <textarea id="editor_content">
    </textarea>
    <div class="col-12 row">
        <div class="col-3">
        <button class="btn btn-primary w-100" id="save_confirmation"><i class="fa-solid fa-check"></i> CONFIRMATION</button>
        </div>
        <div class="col-3">
        <button class="btn btn-primary w-100" id="save_shipping"><i class="fa-solid fa-truck"></i> SHIPPING</button>
        </div>
        <div class="col-3">
        <button class="btn btn-primary w-100" id="save_cancellation"><i class="fa-solid fa-times"></i> CANCELLATION</button>
        </div>
        <div class="col-3">
        <button class="btn btn-primary w-100" id="save_delivery"><i class="fas fa-box-open"></i> DELIVERY</button>
        </div>
        
    </div>
    </div>
    </div>
    
    </div>
    </div>
    <!-- view volunteers -->
    <div class="col-6">
    <div class="col-12 card"  style="padding:15px !important;">
    <div class="col-12" id="tbl_messages">

    </div>
    </div>
    </div>
    </div>
    </div>