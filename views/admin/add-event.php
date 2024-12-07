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
  <!-- editor content -->
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
<!-- Place the first <script> tag in your HTML's <head> -->
<script src="https://cdn.tiny.cloud/1/5q4mvewercb0ylufr84rsdycfzo44grc127l4tcn42ho7zm5/tinymce/7/tinymce.min.js" referrerpolicy="origin"></script>

<!-- Place the following <script> and <textarea> tags your HTML's <body> -->
<script>
  tinymce.init({
    selector: '#editor_content',
    plugins: [
        // Core editing features
        'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'image', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount',
        // Your account includes a free trial of TinyMCE premium features
        'checklist', 'mediaembed', 'casechange', 'export', 'formatpainter', 'pageembed', 'a11ychecker', 'tinymcespellchecker', 'permanentpen', 'powerpaste', 'advtable', 'advcode', 'editimage', 'advtemplate', 'ai', 'mentions', 'tinycomments', 'tableofcontents', 'footnotes', 'mergetags', 'autocorrect', 'typography', 'inlinecss', 'markdown',
        // Early access to document converters
        'importword', 'exportword', 'exportpdf'
    ],
    toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
    tinycomments_mode: 'embedded',
    tinycomments_author: 'Author name',
    mergetags_list: [
        { value: 'First.Name', title: 'First Name' },
        { value: 'Email', title: 'Email' },
    ],
    ai_request: (request, respondWith) => respondWith.string(() => Promise.reject('See docs to implement AI Assistant')),

    // Image upload configuration
    images_upload_handler: function (blobInfo, success, failure) {
        const formData = new FormData();
        formData.append('file', blobInfo.blob(), blobInfo.filename());

        fetch('/upload', { // Replace with your server's upload endpoint
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(result => {
            if (result && result.location) {
                success(result.location); // URL of the uploaded image
            } else {
                failure('Upload failed: Invalid response from server.');
            }
        })
        .catch(error => {
            failure('Upload failed: ' + error.message);
        });
    },

    file_picker_callback: function (callback, value, meta) {
        if (meta.filetype === 'image') {
            const input = document.createElement('input');
            input.setAttribute('type', 'file');
            input.setAttribute('accept', 'image/*');

            input.onchange = function () {
                const file = this.files[0];
                const reader = new FileReader();

                reader.onload = function () {
                    callback(reader.result, { alt: file.name });
                };

                reader.readAsDataURL(file);
            };

            input.click();
        }
    }
});

</script>