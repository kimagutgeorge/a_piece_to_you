<?php include("components/admin/response.php");?>
      <div class="row dashboard add-event-modal categories">
    <div class="dashboard-inner col-12">
    <div class="col-12">
    <form id="sendNewsletter">
        <h4 class="fw-bold text-primary">Create Newsletter</h4>
        <div class="row">
          <div class="col-6">
              <div class="col-12 row" style="margin-top:20px !important">
                <label class="text-muted">Newsletter Title</label>
              </div>
            <input type="text" class="form-control" maxlength = "150"  placeholder="Newsletter Title" name="title" id="newsletter_title">
          </div>
          <div class="col-6">
          <div class="col-12 row" style="margin-top:20px !important">
                <label class="text-muted">Attachment (Optional)</label>
              </div>
            <input type="file" class="form-control" name="attachments[]" multiple >
          </div>
        </div>
        <label class="text-muted">Newsletter</label>
    <!-- editor -->
      <div id="editor" >
      <textarea id="editor_content" style="height:80vh !important"> 
        </textarea>
      </div>
  </form>
    <!-- end of editor -->
     <div class="row" style="display:flex;flex-wrap:nowrap;">
            <button type="submit" class="btn btn-primary send-letter" style="margin-top:20px !important; width:fit-content;">SEND <i class="fa-regular fa-paper-plane"></i></button>
                <button type="submit" class="btn btn-primary save-draft" style="margin-top:20px !important; width:fit-content;" @click="saveDraft">SAVE AS DRAFT <i class="fa-solid fa-save"></i></button>
     </div>
    
  </div> 
        </div>
      </div>