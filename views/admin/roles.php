<?php include("components/admin/response.php"); ?>
    <div class="row dashboard">
    <div class="col-12 events-panel dashboard-inner" style="margin-top:15px !important">
        <div class="col-4 card" style="height:fit-content">
            <!-- add roles -->
                <p class="text-primary fw-bold">Add Roles</p>
                <form id="addRole" >
                <div class="form-group top-20">
                <input type="text" name="role" maxlength = "20"  placeholder="Role Name" class="form-control" required>
                </div>
                <div class="form-group top-20">
                <button type="submit" class="btn btn-primary">SAVE <i class="fa-solid fa-save"></i></button>
                </div>

                </form>
            
        </div>
        <div class="col-7 card" style="margin-left:20px !important; padding:10px 10px !important;height:fit-content; border:0px !important">
            <table id="tbl" class="table" style="width:100%">
                <thead>
                <tr>
                <th class="fw-bold" hidden>#</th>
                <th style="width:80%">Role Name</th>
                <th style="width:20%">Action</th>
                </tr>
                </thead>
                <tbody id="tbl_roles">
                <!-- inject -->
                </tbody>
                </table>
        </div>
    </div>
    </div>