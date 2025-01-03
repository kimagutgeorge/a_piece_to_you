<?php include("components/admin/response.php"); ?>
    <div class="row dashboard">
    <div class="col-12 events-panel settings" style="margin-top:15px !important">
        <div class="col-4 card">
            <!-- add roles -->
            <div class="content-holder">
                <p class="text-primary fw-bold">Add Roles</p>
                <form id="addRole" >
                <div class="form-group top-20">
                <input type="text" name="role" placeholder="Role Name" class="form-control" required>
                </div>
                <div class="form-group top-20">
                <button type="submit" class="btn btn-primary">SAVE <i class="fa-solid fa-save"></i></button>
                </div>

                </form>
            </div>
            <div class="content-holder">
            <form id="setSettings">
            <div class="form-group top-20">
                <p class="text-primary fw-bold">Contact Settings</p>
            </div>
            <div class="form-group top-20">
                <label class="text-muted">Email</label>
                <input type="email" id="email" class="form-control" maxlength="200" placeholder="Enter Email" name="email" required>
            </div>
            <div class="form-group top-20">
                <label class="text-muted">Phone (Begin with 07)</label>
                <input type="number" id="phone" class="form-control" placeholder="Enter Phone" name="phone" required>
            </div>
            <div class="form-group top-20">
            <button class="btn btn-primary" type="submit" >SAVE <i class="fa-solid fa-save"></i></button>
            </div>
            
        </form>
        </div>
        <div class="content-holder">
        <form id="otherSettings">
        <div class="form-group">
                <p class="text-primary fw-bold">Other System Settings</p>
            </div>
            <div class="form-group top-20">
                <label class="text-muted">Latitude</label>
                <input type="text" id="latitude" class="form-control" maxlength="200" placeholder="Enter Latitude" name="latitude" required>
            </div>
            <div class="form-group top-20">
                <label class="text-muted">Longitude</label>
                <input type="text" id="longitude" class="form-control" maxlength="200" placeholder="Enter Latitude" name="longitude" required>
            </div>
        <div class="form-group top-20">Currency</label>
                <input type="text" id="currency" class="form-control" placeholder="KES" name="currency" required>
            </div>
            <div class="form-group top-20">SMTP Server(Please do not change)</label>
                <input type="text" id="smtp_server" class="form-control" placeholder="mail@example.com" name="smtp_server" required>
            </div>
            <div class="form-group top-20">SMTP PORT(Please do not change)</label>
                <input type="number" id="smtp_port" class="form-control" placeholder="467" name="smtp_port" required>
            </div>
            <div class="form-group top-20">SMTP Email(Please do not change)</label>
                <input type="text" id="smtp_email" class="form-control" placeholder="mail@example.com" name="smtp_email" required>
            </div>
            <div class="form-group top-20">SMTP(Please do not change)</label>
                <input type="text" id="smtp" class="form-control" placeholder="scw-cscy- ccs9x-chse" name="smtp" required>
            </div>
            <div class="form-group top-20">
            <button class="btn btn-primary" type="submit" >SAVE <i class="fa-solid fa-save"></i></button>
            </div>
        </form>
        </div>
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