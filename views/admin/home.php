<div class="row dashboard">
<div class="dashboard-inner col-12 row">
        <div class="col-7 row">
            <div class="col-12 row">
            <div class="card col-3" style="height:fit-content !important">
                <h4 class="text-primary fw-bold"><span id="event_count"></span> Event(s)</h4>
            </div>
            <div class="card col-3" style="height:fit-content !important">
                <h4 class="text-primary fw-bold"><span id="member_count"></span> Member(s)</h4>
            </div>
            <div class="card col-3" style="height:fit-content !important">
                <h4 class="text-primary fw-bold"><span id="subscriber_count"></span> Subscriber(s)</h4>
            </div>
            </div>
            <div class="col-11 card" style="height:fit-content !important; margin-top:-200px !important;">
                <p class="text-primary fw-bold">Daily Orders</p>
                <table id="_tbl" class="table" style="width:100%">
                    <thead>
                    <tr>
                    <th class="fw-bold" hidden>#</th>
                    <th style="width:50%">Client Details</th>
                    <th style="width:50%">Order Details</th>
                    </tr>
                    </thead>
                    <tbody class="orders-table" id="home_orders">
                    <!-- insert data here -->
                    </tbody>
                    </table>
            </div>
        </div>
        <div class="col-4 " style="height:fit-content !important">
            <h3 class="text-primary ttl">Events Summary</h3>
            <div class="col-12 cal-header">
            <div style="text-align: center; margin-bottom: 20px important;">
            <button id="prevMonth" class="btn"><i class="fa-solid fa-angle-left"></i></button>
            <span id="monthYear" ></span>
            <button id="nextMonth"class="btn"><i class="fa-solid fa-angle-right"></i></button>
        </div>
        <div id="calendar" class="calendar col-12"></div>
            </div>
        </div>
    </div>
</div>
