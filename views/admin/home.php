<div class="row dashboard">
        <div class="col-7 row">
            <div class="card col-3" style="height:fit-content !important">
                <h4 class="text-primary fw-bold"><span id="event_count"><span> Events</h4>
            </div>
            <div class="card col-3" style="height:fit-content !important">
                <h4 class="text-primary fw-bold">Members</h4>
            </div>
            <div class="card col-3" style="height:fit-content !important">
                <h4 class="text-primary fw-bold">Subscribers</h4>
            </div>
            <div class="col-11 card" style="height:fit-content !important; margin-top:30px !important;">
                <table id="_tbl" class="table" style="width:100%">
                    <thead>
                    <tr>
                    <th class="fw-bold" hidden>#</th>
                    <th style="width:50%">Client Details</th>
                    <th style="width:50%">Order Details</th>
                    </tr>
                    </thead>
                    <tbody class="orders-table" v-if="orders">
                    <tr v-for="(order, index) in orders" :key="index">
                    <td class="fw-bold" hidden>{{ order.client_id }}</td>
                    <td class="form-group-flex">
                        {{  order.client_name }}
                    </td>
                    <td class="form-group-flex">
                    <p class="text-muted" style="color:#333; margin-left:2% !important;">Total Price(Kshs): <span class="fw-bold"> {{ order.client_product_total_price }}</span></p>
                    </td>
                    
                    </tr>
                    </tbody>
                    </table>
            </div>
        </div>
        <div class="col-4 card" style="height:fit-content !important">
            <h3 class="text-primary ttl">Events Summary</h3>
            <vue-cal class=""
            xsmall
            hide-view-selector
            :time="false"
            active-view="month"
            :disable-views="['week']"
            style="width: 350px;height: auto; ">
            </vue-cal>
        </div>
    </div>