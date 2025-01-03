    <?php include("components/admin/response.php");?>
    <div class="row dashboard">
    <div class="col-12 row event-search">
    <div class="col-8">
    <form action="" class="row">
    <div class="form-group col-4">
    <select class="form-control col-11" id="view_event_category">
    <!-- input data here -->
    </select>
    </div>
    <div class="form-group col-4">
    <select class="form-control col-11" id="view_event_speakers">
    <!-- input data here -->
    </select>
    </div><div class="form-group col-4">
    <input type="date" class="form-control col-11">
    </div>
    </form>
    </div>
    <div class="col-4">
    <a href="?p=add-event"><button class="btn btn-primary">ADD EVENT</button></a>
    <button class="btn btn-primary" @click="$router.push('/registration')">ATTENDEES</button>
    </div>
    </div>
    <div class="col-12 events-panel" style="margin-top:15px !important" id="tbl_events">
    <!-- input data -->
    </div>
    </div>