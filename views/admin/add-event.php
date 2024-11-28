<?php include("components/admin/response.php");?>
    <div class="row dashboard add-event-modal categories">
<form @submit.prevent="addEvent" method="POST" enctype="multipart/form-data">
  <div class="col-12">
      <h4 class="fw-bold text-primary">Add Event</h4>
      <div class="col-12 row" style="margin-top:20px !important">
    <div class="form-group">
        <label class="text-muted">Event Name</label>
        <input type="text" class="form-control" placeholder="Event Name" v-model="eventname">
        </div>
        <div class="form-group">
        <label class="text-muted">Date & Time</label>
        <input type="datetime-local" @change="checkDate" class="form-control" v-model="eventdatetime">
    </div>
    <div class="form-group">
      <label class="text-muted">Event Duration</label>
      <input type="number" class="form-control" v-model="duration" placeholder="2 Hours">
    </div>
        <div class="form-group">
        <label class="text-muted">Location</label>
        <select class="form-control" v-model="eventlocation">
            <option v-for="(location, index) in locations" :value="location.location_id" :key="index">{{location.location_name}}</option>
        </select>
        </div>
        <div class="form-group">
            <label class="text-muted">Category</label>
            <select class="form-control" v-model="eventcategory">
          <option v-for="(category, index) in categories" :value="category.category_id" :key="index">{{category.category_name}}</option>
            </select>
            </div>
            <div class="form-group">
              <label class="text-muted">Speakers</label>
              <select class="form-control" @change="addSpeaker" v-model="selected_speaker" id="speaker_wrapper">
            <option v-for="(member, index) in db_members" :value="member.member_id" :key="index">{{member.name}}</option>
              </select>
              </div>
            <div class="form-group">
                <label class="text-muted">Banner Image</label>
                <input type="file" id="upload_file" ref="upload_file" class="form-control" @change="previewImage" accept="image/*"
                capture>
            </div>
            
</div>
</div>
<div class="member-list col-11 row">
  <div class="speaker" v-for="(speaker, index) in speakers" :key="index">
    <div class="speaker-name">
      {{ speaker }}
    </div>
    <div class="close-div">
      <i class="fa-solid fa-close text-danger" @click="removeSpeaker(index)"></i>
    </div>
  </div>
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