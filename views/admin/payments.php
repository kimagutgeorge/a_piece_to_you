<?php include("components/admin/response.php"); ?>
    <div class="row dashboard categories">
    <div class="col-12 row dashboard-inner">
    <div class="col-4 card" style="height:fit-content !important">
    <h4 class="text-primary">Add Payment</h4>
    <form action="" id="addPayment" method="POST">
    <div class="form-group top-20">
    <input type="text" name ="order_number" id="order_number" maxlength="100" placeholder="Order Number" class="form-control" required>
    </div>
    <div class="form-group top-20">
    <input type="number" name ="price" id="product_total" maxlength="100" placeholder="Amount" class="form-control" required>
    </div>
    <div class="form-group top-20">
    <select class="form-control" name="method" required>
        <option value="M-pesa">M-pesa</option>
        <option value="M-pesa">Cash</option>
        <option value="M-pesa">Bank</option>
        <option value="M-pesa">Paypall</option>
    </select>
    </div>
    <div class="form-group top-20">
    <input type="text" name ="transaction_id" maxlength="100" placeholder="Transaction Id (Optional)" class="form-control">
    </div>
    <div class="form-group top-20">
    <button type="submit" class="btn btn-primary">SAVE <i class="fa-solid fa-save"></i></button>
    </div>
    
    </form>
    </div>
    <div class="col-7 card" style="height:fit-content">
    <div class="row" style="margin-bottom:15px !important">
            <button class="btn btn-primary" id="show_pending">PENDING</button>
            <button class="btn btn-primary" id="show_complete">COMPLETE</button>
    </div>
    <div id="pending_orders">
    <p class="text-primary fw-bold">Pending</p>
    <table id="tbl" class="table"  style="width:100%">
    <thead>
    <tr>
    <th class="fw-bold" hidden>#</th>
    <th style="width:60%">Order Details</th>
    <th>Action</th>
    </tr>
    </thead>
    <tbody id="tbl_pending_orders">
    <!-- inject data here -->
    </tbody>
    </table>
    </div>
    <!-- complete payments -->
    <div id="completed_payments">
    <p class="text-primary fw-bold">Complete</p>
    <table id="tbl" class="table"  style="width:100%">
    <thead>
    <tr>
    <th class="fw-bold" hidden>#</th>
    <th style="width:80%">Payment Details</th>
    <th style="width:20%">Balance</th>
    </tr>
    </thead>
    <tbody id="tbl_complete_orders">
    <!-- inject data here -->
    </tbody>
    </table>
    </div>
    
    
    </div>
    
    </div>
    </div>