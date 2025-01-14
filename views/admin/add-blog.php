<?php include("components/admin/response.php");?>
      <div class="row dashboard add-event-modal categories">
  <form id="addBlog" enctype="multipart/form-data">
    <div class="col-12">
        <h4 class="fw-bold text-primary">Add Blog</h4>
        <div class="col-12 row" style="margin-top:20px !important">
      <div class="form-group">
          <label class="text-muted">Blog Name</label>
          <input type="text" class="form-control" maxlength = "80" placeholder="Blog Name" required name="blogname">
          </div>
          <div class="form-group">
          <label class="text-muted">Writer</label>
          <input type="text" class="form-control" maxlength = "20"  placeholder="Writer's Name" required name="blogwriter">
      </div>
          <div class="form-group">
              <label class="text-muted">Category</label>
              <select class="form-control" name="blogcategory" required id="add_blog_category">
                  <!-- inject data -->
              </select>
              </div>
              <div class="form-group">
                  <label class="text-muted">Banner Image</label>
                  <input type="file" name="blog_banner" id="upload_file" id="upload_file" class="form-control" onchange="previewImage()" accept="image/*"
                  capture>
              </div>
  </div>
  </div>
  <div class="col-12 row" style="margin-top:40px !important; display:flex;">
  <div class="col-8 editor-holder">
  <!-- editor -->
  <div class="form-group">
    <div id="editor">
    <textarea id="editor_content">
    </textarea>
    </div>
   </div>
        <!-- end of editor -->
        <div class="form-group">
        <button type="submit" class="btn btn-primary" style="margin-top:20px !important">SAVE <i class="fa-solid fa-save"></i></button>
        </div>
    </div>
    <div class="col-3" id="preview" style="margin-left:10px !important">
      No image uploaded
	</div>
              </div>
              
            </form>
          </div>