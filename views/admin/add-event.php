<?php include("components/admin/response.php");?>
    <div class="row dashboard add-event-modal categories">
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
                <input type="file" id="upload_file" ref="upload_file" class="form-control" @change="previewImage" accept="image/*"
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
<div id="editor"></div>
 </div>
      <!-- end of editor -->
      <div class="form-group">
      <button type="submit" class="btn btn-primary" style="margin-top:20px !important">SAVE <i class="fa-solid fa-save"></i></button>
      </div>
  </div>
			<div class="col-3" style="margin-left:10px !important">
				<div v-if="imageUrl">
					<img :src="imageUrl" alt="Image Preview" style="max-width: 100%; height: auto;" />
				  </div>
		</div>
            </div>
            
          </form>
        </div>

<!-- editor -->
<script type="module">
import Quill from 'quill';
import "quill/dist/quill.core.css";
const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  ['blockquote', 'code-block'],
  ['link', 'image', 'video'],

  [{ 'header': 1 }, { 'header': 2 }],               // custom button values
  [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
  [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
  [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
  [{ 'direction': 'rtl' }],                         // text direction

  [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  [{ 'font': [] }],
  [{ 'align': [] }],

  ['clean']                                         // remove formatting button
];

const quill = new Quill('#editor', {
  modules: {
    toolbar: toolbarOptions
  },
  theme: 'snow'
});

/* get contents of editor */

quill.on('text-change', () => {
const content = quill.root.innerHTML
this.editorContent = content
});

</script>