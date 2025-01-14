<?php include("components/admin/response.php"); ?>
    <div class="row dashboard categories">
    <div class="col-12 row dashboard-inner">
    <div class="col-7 card" style="height:82vh; overflow-y:scroll; padding-bottom:10px !important;">
    <div class="content-holder" style="border-bottom:1px solid rgb(200,200,200);padding-bottom:20px !important;">
    <h4 class="text-primary">About Us</h4>
    <div id="add_about">
    <!-- insert data -->
    </div>
    </div>
    <!-- end of card 1 -->
    <div class="content-holder" style="border-bottom:1px solid rgb(200,200,200);padding-bottom:20px !important;">
    <h4 class="text-primary">Our Programs</h4>
    <form action="" id="add_program">
    <div class="form-group top-20">
    <input type="text" name ="id" id="program_id" maxlength="100" hidden >
    <label class="text-muted">Title</label>
    <input type="text" name ="title" id="program_title" maxlength="100" placeholder="SHAPE" class="form-control" required>
    </div>
    <div class="form-group top-20">
    <label class="text-muted">Content</label>
    <textarea name="content" id="program_content"  maxlength = "200"  class="form-control" style="height:100px; padding:10px !important;" placeholder ="Identify your unique..."></textarea>
    </div>
    <div class="form-group top-20">
    <label class="text-muted">Icon; Visit <a href="https://fontawesome.com/icons" target="_blank">Fontawesome</a> for icons</label>
    <input type="text" name ="icon" id="program_icon" maxlength="150" placeholder="<i class='fa-solid fa-shapes'></i>" class="form-control" required>
    </div>
    <div class="form-group top-20">
    <button type="submit" id="save_program" class="btn btn-primary">SAVE <i class="fa-solid fa-save"></i></button>
    
    </div>
    
    </form>
    </div>
    <!-- end of programs -->
    <div class="content-holder">
    <h4 class="text-primary">Our Core Values</h4>
    <form action="" id="add_value" method="POST">
    <div class="form-group top-20">
    <label class="text-muted">Title</label>
    <input type="text" name ="id" id="value_id" maxlength="100" hidden >
    <input type="text" name ="title" maxlength="20" placeholder="Prayer" id="value_title" class="form-control" required>
    </div>
    <div class="form-group top-20">
    <label class="text-muted">Content</label>
    <textarea name="content" id="value_content" maxlength = "200"  class="form-control" style="height:100px; padding:10px !important;" placeholder ="We believe in the power of.."></textarea>
    </div>
    <div class="form-group top-20">
    <label class="text-muted">Icon; Visit <a href="https://fontawesome.com/icons" target="_blank">Fontawesome</a> for icons</label>
    <input type="text" name ="icon" id="value_icon" maxlength="100" placeholder="<i class='fa-solid fa-shapes'></i>" class="form-control" required>
    </div>
    <div class="form-group top-20">
    <button type="submit" class="btn btn-primary">SAVE <i class="fa-solid fa-save"></i></button>
    </div>
    
    </form>
    </div>
    <!-- end of core values -->
    </div>
    <div class="col-4 card" style="height: fit-content">
    <p class="text-primary">Our Programs</p>
    <table id="tbl" class="table"  style="width:100%">
    <thead>
    <tr>
    <th class="fw-bold" hidden>#</th>
    <th style="width:50%">Program</th>
    <th style="width:30%">Icon</th>
    <th hidden>Text</th>
    <th style="width:20%">Action</th>
    </tr>
    </thead>
    <tbody id="tbl_programs">
    <!-- inject data here -->
    </tbody>
    </table>

    <!-- core values -->
    <p class="text-primary top-20">Our Core Values</p>
    <table id="tbl" class="table"  style="width:100%">
    <thead>
    <tr>
    <th class="fw-bold" hidden>#</th>
    <th style="width:50%">Value</th>
    <th style="width:30%">Icon</th>
    <th hidden>Text</th>
    <th style="width:20%">Action</th>
    </tr>
    </thead>
    <tbody id="tbl_values">
    <!-- inject data here -->
    </tbody>
    </table>
    
    </div>
    
    </div>
    </div>