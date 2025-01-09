<?php include("components/admin/response.php");?>
    <div class="row dashboard add-event-modal categories products">
  <div class="dashboard-inner">
  <div class="col-6">
    <form id="addProduct" enctype="multipart/form-data">
      <h4 class="fw-bold text-primary">Add Product</h4>
      <div class="col-12 row" style="margin-top:20px !important">
    <div class="form-group">
        <label class="text-muted">Product Name</label>
        <input type="text" class="form-control" style="width:98% !important" placeholder="Product Name" name="name" required>
        </div>
        <div class="form-group">
        <label class="text-muted">Product Price</label>
        <input type="number" class="form-control" style="width:98% !important" placeholder="Product Price" name="price" required>
    </div>
    <div class="form-group">
      <label class="text-muted">Product Discount(Optional)</label>
      <input type="number" class="form-control" style="width:98% !important" name="discount" placeholder="10%">
    </div>
        <div class="form-group">
        <label class="text-muted">Product Quantity</label>
        <input type="number" class="form-control" style="width:98% !important" name="quantity" placeholder="100" required>
        </div>
        <div class="form-group">
          <label class="text-muted">Product Category</label>
          <select class="form-control col-11" style="width:98% !important" name="product_category" id="product_category" required>
            <!-- add categories -->
            </select>
          </div>
            <div class="form-group">
                <label class="text-muted">Product Images</label>
                <input type="file" id="upload_file" name="product_images[]" onchange="previewProductImage()" class="form-control" accept="image/*" multiple
                capture>
            </div>
</div>
  <div class="col-12 editor-holder">
  <!-- editor -->
  <div id="editor">
  <textarea id="editor_content">
</textarea>
  </div>
        <!-- end of editor -->
  
        <button type="submit" class="btn btn-primary" style="margin-top:20px !important">SAVE <i class="fa-solid fa-save"></i></button>
    </div>
  </form>
</div>
<div class="col-6 row">
  <div class="preview-item col-12 row" id="preview">
  
  </div>
</div>
</div>
        </div>