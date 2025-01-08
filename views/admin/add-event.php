<?php include("components/admin/response.php");?>
<div class="row dashboard add-event-modal categories">
<div class="dashboard-inner">
<form id="addEvent" method="POST" enctype="multipart/form-data">
  <div class="col-12">
      <h4 class="fw-bold text-primary">Add Event</h4>
      <div class="col-12 row" style="margin-top:20px !important">
    <div class="form-group">
        <label class="text-muted">Event Name</label>
        <input type="text" class="form-control" placeholder="Event Name" name="eventname" required>
        </div>
        <div class="form-group">
        <label class="text-muted">Date & Time</label>
        <input type="datetime-local" class="form-control" name="eventdatetime" required>
    </div>
    <div class="form-group">
      <label class="text-muted">Event Duration</label>
      <input type="number" class="form-control" name="duration" placeholder="2 Hours" required>
    </div>
        <div class="form-group">
        <label class="text-muted">Location</label>
        <select class="form-control" name="eventlocation" id="add_event_location" required>
            <!-- set data -->
        </select>
        </div>
        <div class="form-group">
            <label class="text-muted">Category</label>
            <select class="form-control" name="eventcategory" id="add_event_category" >
          <!-- set data -->
            </select>
            </div>
            <div class="form-group">
              <label class="text-muted">Speakers</label>
              <select class="form-control" onchange="addSpeaker()" name="selected_speaker" id="add_event_speaker">
              <!-- set data -->
              </select>
              </div>
            <div class="form-group">
                <label class="text-muted">Banner Image</label>
                <input type="file" name="event_banner" id="upload_file" class="form-control" onchange="previewImage()" accept="image/*" required
                capture>
            </div>
            
</div>
</div>
<div class="member-list col-11 row" id="event_speaker_list">
<!-- add member list -->
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
</div>