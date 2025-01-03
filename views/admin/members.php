<?php include("components/admin/response.php"); ?>
    <div class="row dashboard categories members">
    <div class="col-12 row">
    <div class="col-4 card" style="height:fit-content !important">
    <h4 class="text-primary">Add Member</h4>
    <form id="addMember">
    <div class="form-group top-20">
    <label class="text-muted" style="margin-left:0.5% !important">Member Name</label>
    <input type="text" name="member" placeholder="Member Name" class="form-control" required>
    </div>
    <div class="form-group top-20">
        <label class="text-muted" style="margin-left:0.5% !important">Member's Role</label>
        <select class="form-control" id="member_role" name="member_role" required>
            
        </select>
    </div>
    <div class="form-group top-20">
        <label class="text-muted" style="margin-left:0.5% !important">Photo</label>
            <input type="file" name="member_pic" class="form-control" required accept="image/png, image/jpeg, image/jpg />
    </div>
    <div class="form-group social-links top-20">
    <!-- Display prompt for the current social media platform -->
    <p class="text-muted" id="display_link">
        Enter <span id="current_link"></span> link
      </p>
      <p class="text-muted" id="clear_link_text" hidden>
        Clear All links
      </p>
      <div class="fixed-flex">
        <!-- Input field for entering the social media link -->
      <input
      class="form-control"
      id="newLink"
      type="text"
      placeholder="Enter link here"
      :disabled="currentPlatformIndex >= platforms.length"
    />
    
    <!-- Add button with dynamic icon based on the current platform -->
    <span class="btn btn-primary" onclick="addLink()">
      <i class="fa-solid fa-plus text-white" id="add_button"></i>
      
    </span>
    <!-- Clear button to clear the list if all links are added -->
    <span class="btn btn-primary bg-danger" onclick="clearLinks()" id="clear_button" hidden>
        <i class="fa-solid fa-trash text-white"></i>
        
</span>
      </div>
  
      <!-- Display the list of added links with their respective platform icons -->
    <ul style="margin-top:10px !important;" id="social_link" >
    <!-- show links -->
    </ul>
     
    </div>
    <!-- end of links -->
    
    <div class="form-group top-20">
    <button type="submit" class="btn btn-primary">SAVE <i class="fa-solid fa-save"></i></button>
    </div>
    
    </form>
    </div>
    <div class="col-7 card" style="height:fit-content">
    <table id="tbl" class="table" style="width:100%">
    <thead>
    <tr>
    <th class="fw-bold" hidden>#</th>
    <th>Member</th>
    <th>Socials</th>
    <th>Action</th>
    </tr>
    </thead>
    <tbody id="tbl_members">
    <!-- input data -->
    </tbody>
    </table>
    
    </div>
    
    </div>
    </div>