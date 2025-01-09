<?php include("components/admin/response.php");?>
    <div class="row dashboard categories">
    <div class="col-12 row dashboard-inner">
    <div class="col-4 card" style="height:fit-content !important">
    <h4 class="text-primary">Add Category</h4>
    <form id="productCategory">
    <div class="form-group top-20">
    <input type="text" name="category" placeholder="Category Name" required class="form-control" required>
    </div>
    <div class="form-group top-20">
    <button type="submit" class="btn btn-primary">SAVE <i class="fa-solid fa-save"></i></button>
    </div>
    </form>
    </div>
    <div class="col-7 card" style="height:fit-content">
    <table id="_tbl" class="table" style="width:100%">
    <thead>
    <tr>
    <th class="fw-bold" hidden>#</th>
    <th style="width:80%">Category Name</th>
    <th style="width:20%">Action</th>
    </tr>
    </thead>
    <tbody id="tbl_product_categories">
   <!-- insert dynamic data -->
    </tbody>
    </table>
    
    </div>
    
    </div>
    </div>