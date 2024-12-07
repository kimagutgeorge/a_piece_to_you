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
    <div class="col-12 events-panel" style="margin-top:15px !important">
    <table id="_tbl" style="width:100%">
    <thead>
    <tr hidden><th>Events</th></tr>
    </thead>
    <tbody style="width:100% !important" v-if="chunkedEvents">
    <tr class="tbl-card-holder " v-for="(chunk, rowIndex) in chunkedEvents" :key="rowIndex">
    <td>
    <!-- Flex container to wrap cards in rows of four -->
    <div class="card-container">
    <div v-for="(event, index) in chunk" :key="index" class="card-wrapper">
    <div v-if="event" class="card col-12">
    <img class="w-100" :src="require(`../assets/images/bg/events/${event.event_banner}`)" alt="Event Banner">
    <div class="card-body">
    <h5 class="card-title text-primary">{{ event.event_name }}</h5>
    <h6 class="text-primary fw-bold">Date & Time</h6>
    <p><i class="fa-regular fa-clock"></i> {{ formatDate(event.event_start_date) }}, {{ event.event_duration }} hrs</p>
    <h6 class="text-primary fw-bold">Location</h6>
    <p><i class="fa-solid fa-location-crosshairs"></i> {{ event.event_location }}</p>
    <div class="col-12 row">
    <div class="col-4">
    <RouterLink :to="{ name: 'Event Details', params: { id: event.events_id }}" :key="$route.fullPath">
    <button class="card-btn btn-transparent">
    <i class="fa-solid fa-eye text-primary"></i>
    </button>
    </RouterLink>
    </div>
    <div class="col-4">
    
    </div>
    <div class="col-4">
    <button class="card-btn" @click="deleteEvent(event.events_id)">
      <i class="fa-solid fa-trash text-danger"></i>
    </button>
    </div>
    </div>
    </div>
    </div>

    <!-- Empty card to fill up row if fewer than four items -->
    <div v-else class="card empty-card"></div>
    </div>
    </div>
    </td>
    </tr>
    </tbody>
    </table>

    </div>
    </div>