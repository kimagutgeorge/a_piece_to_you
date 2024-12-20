$( document ).ready(function() {
    /* universal variables*/
    let url = window.location.href
    let db_response = document.getElementById("db_response").classList

    /* load data */
    getCategories();
    getLocations();
    getRoles();
    getSettings();
    getMembers();
    getEvents();
/*
default functions 
*/
function formatEventTime(startDateStr, eventDuration) {
    const startDate = new Date(startDateStr);
    const endDate = new Date(startDate.getTime() + eventDuration * 60 * 60 * 1000); // Calculate end time

    const dateOptions = { day: '2-digit', month: 'short', year: 'numeric' };
    const formattedDate = startDate.toLocaleDateString('en-GB', dateOptions);
    const startTime = startDate.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
    const endTime = endDate.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });

    return `${formattedDate}, ${startTime} to ${endTime}`;
  }

/*
get locations
*/
function getLocations(){
$.ajax({  
    type: 'GET',  
    url: 'app.php?action=get-locations',
    success: function(response) {
        
        if(response == 2){
            document.getElementById("db_response").style.display="flex"
            db_response.add("bg-warning")
                $('#get_response').html('No Locations Found')

        }else{
        let locations = JSON.parse(response)
        if(url == "http://localhost/apiecetoyou/?p=add-event" || url == "http://localhost/apiecetoyou/index.php?p=add-event"){
                let selectBody = document.getElementById("add_event_location")
                selectBody.innerHTML =="";
                locations.forEach(function(location){
                    /* select options */

                let option = document.createElement("option")
                option.value = location.location_id;
                option.innerHTML = location.location_name
                selectBody.appendChild(option)
                })
            }else{
            let tableBody = document.getElementById("tbl_locations")
            tableBody.innerHTML = "";
            locations.forEach(function(location){
            let row = document.createElement("tr"); // Create a new table row

            // Create table cells for each piece of data
            let idCell = document.createElement("td");
            idCell.textContent = location.location_id;
            idCell.hidden = true;
    
            let nameCell = document.createElement("td");
            nameCell.innerHTML = `<input type="text" class="form-control" maxlength="200" value="${location.location_name}" placeholder="Location Name" readonly>`
            
            let actionCell = document.createElement('td');
            actionCell.innerHTML = `<i class="fa-solid fa-edit btn-edit-location text-primary"></i>
            <i class="fa-solid fa-trash text-danger btn-del-location"></i> `
            // Append cells to the row
            row.appendChild(idCell);
            row.appendChild(nameCell);
            row.appendChild(actionCell);
    
            // Append the row to the table body
            tableBody.appendChild(row);
            $('#tbl').DataTable();
        })
    }
}
        
    }
});
}
/*
get locations
*/
function getMembers(){
    $.ajax({  
        type: 'GET',  
        url: 'app.php?action=get-members',
        success: function(response) {
            if(response == 2){
                document.getElementById("db_response").style.display="flex"
                db_response.add("bg-warning")
                    $('#get_response').html('No Locations Found')
    
            }else{
            let members = JSON.parse(response)
            if(url == "http://localhost/apiecetoyou/?p=add-event" || url == "http://localhost/apiecetoyou/index.php?p=add-event"){

                let selectBody = document.getElementById("add_event_speaker")
                selectBody.innerHTML =="";
                members.forEach(function(member){
                    /* select options */

                let option = document.createElement("option")
                option.value = member.member_id;
                option.innerHTML = member.name
                selectBody.appendChild(option)
                })

            }else if(url == "http://localhost/apiecetoyou/?p=adminevents" || url == "http://localhost/apiecetoyou/index.php?p=adminevents"){
                let selectBody = document.getElementById("view_event_speakers")
                selectBody.innerHTML =="";
                members.forEach(function(member){
                    /* select options */

                let option = document.createElement("option")
                option.value = member.member_id;
                option.innerHTML = member.name
                selectBody.appendChild(option)
                })
            }else{
            let tableBody = document.getElementById("tbl_members")
            tableBody.innerHTML = "";
            members.forEach(function(member){
                let row = document.createElement("tr"); // Create a new table row
    
                // Create table cells for each piece of data
                let idCell = document.createElement("td");
                idCell.textContent = member.member_id;
                idCell.hidden = true;
        
                let nameCell = document.createElement("td");
                nameCell.innerHTML = `<img class="mbr-card" src="assets/images/bg/members/${member.photo}" alt="Member photo">
      <p class="text-muted fw-bold tbl-p">${ member.name }</p>
      <span>${member.role}</span>`

                let linkCell = document.createElement("td")
                linkCell.className = "tbl-links"
                linkCell.innerHTML = `<span class="text-primary">
        <a href="${member.facebook}">
          <i class="fa-brands fa-facebook-f"></i>
      </a>
      </span>
      <span class="text-primary">
        <a href="${member.instagram}">
          <i class="fa-brands fa-instagram"></i>
      </a>
      </span>
      <span class="text-primary">
        <a href="${member.linkedin}">
          <i class="fa-brands fa-linkedin"></i>
      </a>
      </span>
      <span class="text-primary">
        <a href="'mailto:'${member.email}"><i class="fa-solid fa-envelope"></i></a>

      </span>
      <span class="text-primary">
        <a href="${member.twitter}">
          <i class="fa-brands fa-twitter"></i>
      </a>
      </span>`

                
                let actionCell = document.createElement('td');
                actionCell.innerHTML = `<i class="fa-solid fa-trash text-danger" @click="deleteMember(member.member_id)"></i>`
                // Append cells to the row
                row.appendChild(idCell);
                row.appendChild(nameCell);
                row.appendChild(linkCell);
                row.appendChild(actionCell);
        
                // Append the row to the table body
                tableBody.appendChild(row);
                $('#tbl').DataTable();
            })
        }
    }
            
        }
    });
    }
/*
get categories
*/
function getCategories(){
    $.ajax({  
        type: 'GET',  
        url: 'app.php?action=get-categories',
        success: function(response) {
            if(response == 2){
                document.getElementById("db_response").style.display="flex"
                db_response.add("bg-warning")
                    $('#get_response').html('No Categories Found')

            }else{
                let categories = JSON.parse(response)
                if(url == "http://localhost/apiecetoyou/?p=add-event" || url == "http://localhost/apiecetoyou/index.php?p=add-event"){
                    let selectBody = document.getElementById("add_event_category")
                    selectBody.innerHTML =="";
                    categories.forEach(function(category){
                    /* select options */
                    let option = document.createElement("option")
                    option.value = category.category_id;
                    option.innerHTML = category.category_name
                    selectBody.appendChild(option)
                    })
                }else if(url == "http://localhost/apiecetoyou/?p=adminevents" || url == "http://localhost/apiecetoyou/index.php?p=adminevents"){
                    let selectBody = document.getElementById("view_event_category")
                    selectBody.innerHTML =="";
                    categories.forEach(function(category){
                    /* select options */
                    let option = document.createElement("option")
                    option.value = category.category_id;
                    option.innerHTML = category.category_name
                    selectBody.appendChild(option)
                    })
                }else{
                    let tableBody = document.getElementById("tbl_categories")
                    tableBody.innerHTML = "";
                categories.forEach(function(category){
                    let row = document.createElement("tr"); // Create a new table row
        
                    // Create table cells for each piece of data
                    let idCell = document.createElement("td");
                    idCell.textContent = category.category_id;
                    idCell.hidden = true;
            
                    let nameCell = document.createElement("td");
                    nameCell.innerHTML = `<input type="text" class="form-control"  maxlength="200"  value="${category.category_name}" placeholder="Category Name" readonly>`
                    
                    let actionCell = document.createElement('td');
                    actionCell.innerHTML = `<i class="fa-solid fa-edit btn-edit-category text-primary"></i>
                    <i class="fa-solid fa-trash text-danger btn-del-category"></i> `
                    // Append cells to the row
                    row.appendChild(idCell);
                    row.appendChild(nameCell);
                    row.appendChild(actionCell);
            
                    // Append the row to the table body
                    tableBody.appendChild(row);
                    $('#tbl').DataTable();
                })
            }
        }
            
        }
    });
    }
    /*
get roles
*/
function getRoles(){
    $.ajax({  
        type: 'GET',  
        url: 'app.php?action=get-roles',
        success: function(response) {
            if(response == 2){
                document.getElementById("db_response").style.display="flex"
                db_response.add("bg-warning")
                    $('#get_response').html('No Roles Found')
    
            }else{
            let roles = JSON.parse(response)
            if(url == "http://localhost/apiecetoyou/?p=add-event" || url == "http://localhost/apiecetoyou/index.php?p=add-event"){
                
                let selectBody = document.getElementById("member_role")
                selectBody.innerHTML =="";
                roles.forEach(function(role){
                    /* select options */

                let option = document.createElement("option")
                option.value = role.role_id;
                option.innerHTML = role.role_name
                selectBody.appendChild(option)
                })
            }else{
                let tableBody = document.getElementById("tbl_roles")
                tableBody.innerHTML = "";
            roles.forEach(function(role){
                let row = document.createElement("tr"); // Create a new table row
    
                // Create table cells for each piece of data
                let idCell = document.createElement("td");
                idCell.textContent = role.role_id;
                idCell.hidden = true;
        
                let nameCell = document.createElement("td");
                nameCell.innerHTML = `<input type="text" class="form-control" maxlength="200"  value="${role.role_name}" placeholder="role Name" readonly>`
                
                let actionCell = document.createElement('td');
                actionCell.innerHTML = `<i class="fa-solid fa-edit btn-edit-role text-primary"></i>
                <i class="fa-solid fa-trash text-danger btn-del-role"></i> `
                // Append cells to the row
                row.appendChild(idCell);
                row.appendChild(nameCell);
                row.appendChild(actionCell);
        
                // Append the row to the table body
                tableBody.appendChild(row);
                $('#tbl').DataTable();
                
            })
        }
        }
            
        }
    });
    }
    /*
get settings
*/
function getSettings(){
    $.ajax({  
        type: 'GET',  
        url: 'app.php?action=get-settings',
        success: function(response) {
            if(response == 2){
                document.getElementById("db_response").style.display="flex"
                db_response.add("bg-warning")
                    $('#get_response').html('No Roles Found')
    
            }else{
            let settings = JSON.parse(response)
            let setting = settings[0]
                document.getElementById("latitude").value = setting.latitude
                document.getElementById("longitude").value = setting.longitude
                document.getElementById("email").value = setting.email
                document.getElementById("phone").value = setting.phone
            } 
        }
    });
    }
    /*
get events
*/
function getEvents(){
    $.ajax({  
        type: 'GET',  
        url: 'app.php?action=get-events',
        success: function(response) {
            if(response == 2){
                document.getElementById("db_response").style.display="flex"
                db_response.add("bg-warning")
                    $('#get_response').html('No Events Found')

            }else{
                let events = JSON.parse(response)
                    let tableBody = document.getElementById("tbl_events")
                    tableBody.innerHTML = "";
                events.forEach(function(event){
                    let row = document.createElement("tr"); // Create a new table row
                    row.className = "tbl-card-holder card-container";
        
                    // Create cards for events
                    let single_event = document.createElement("td");
                    single_event.className="card-wrapper";

                    let card_content = document.createElement("div");
                    card_content.className = "card col-12";

                    let img = document.createElement("img")
                    img.className = "w-100";
                    img.src = "assets/images/bg/events/"+ event.banner

                    let card_body = document.createElement("div")
                    card_body.className="card-body"

                    let title = document.createElement("h5");
                    title.className = "card-title text-primary"
                    title.innerText = event.name

                    let date_time_title = document.createElement("h6");
                    date_time_title.className = "text-primary fw-bold"
                    date_time_title.innerText = "Date & Time"

                    let date_time = document.createElement("p");
                    date_time.className = "text-primary fw-bold"
                    date_time.innerHTML = `<i class="fa-regular fa-clock"></i> ${ formatEventTime(event.date, event.duration)}</p>
    <h6 class="text-primary fw-bold">Location</h6>
    <p><i class="fa-solid fa-location-crosshairs"></i> ${event.location}`
                    
                    //bottom row
                    let bottom_row = document.createElement("div")
                    bottom_row.className = "col-12 row"

                    let button_view = document.createElement("div")
                    button_view.className = "col-6"
                    button_view.innerHTML=`<button class="card-btn btn-transparent">
    <i class="fa-solid fa-eye text-primary"></i>
    </button>`

                    let button_delete = document.createElement("div")
                    button_delete.className = "col-6"
                    button_delete.innerHTML=`<button class="card-btn" onclick="deleteEvent(event.events_id)">
      <i class="fa-solid fa-trash text-danger"></i>
    </button>`

                    //append children
                    bottom_row.appendChild(button_view)
                    bottom_row.appendChild(button_delete)
                    //card body
                    card_body.appendChild(title)
                    card_body.appendChild(date_time_title)
                    card_body.appendChild(date_time)
                    //card_content
                    card_content.appendChild(img)
                    card_content.appendChild(card_body)
                    //td
                    single_event.appendChild(card_content)

            
                    // Append the row to the table body
                    tableBody.appendChild(single_event);
                    $('#tbl').DataTable();
                })
            
        }
            
        }
    });
    }

    /*
    add location
    */
    $('#addLocation').on('submit', function(e){
        e.preventDefault()
        $.ajax({  
            type: 'POST',  
            url: 'app.php?action=add-location', 
            data: $('#addLocation').serialize(),
            success: function(response) {
                document.getElementById("db_response").style.display="flex"
                if(response == 1){
                    db_response.add("bg-primary")
                    $('#get_response').html('Successful')
                }else if( response == 2 ){
                    db_response.add("bg-danger")
                    $('#get_response').html('Failed')
                }else{
                    db_response.add("bg-warning")
                    $('#get_response').html('Already Exists')
                }
            }
        });
        getLocations();
    })
    /*
    add member
    */
    $('#addMember').on('submit', function(e){
        e.preventDefault()
        let social_links = document.querySelectorAll(".listed_social_links")
        document.getElementById("db_response").style.display="flex"
        if(social_links.length < 5){
            db_response.add("bg-danger")
            $('#get_response').html('Enter All Required Links Even If Blank')
        }else{

        let facebook = social_links[0].href
        let instagram = social_links[1].href
        let twitter = social_links[2].href
        let linkedin = social_links[3].href
        let email = social_links[4].href
        let formData =  document.getElementById('addMember')
        let form = new FormData(formData)
        form.append("facebook", facebook)
        form.append("instagram", instagram)
        form.append("twitter", twitter)
        form.append("linkedin", linkedin)
        form.append("email", email)

        $.ajax({  
            type: 'POST',  
            url: 'app.php?action=add-member', 
            processData: false,
            contentType: false,
            data: form,
            success: function(response) {
                console.log(response)
                document.getElementById("db_response").style.display="flex"
                if(response == 1){
                    db_response.add("bg-primary")
                    $('#get_response').html('Successful')
                }else if( response == 2 ){
                    db_response.add("bg-danger")
                    $('#get_response').html('Failed')
                }else{
                    db_response.add("bg-warning")
                    $('#get_response').html('Already Exists')
                }
            }
        });
        }
        getMembers();
    })
    /*
    set settings 
    */
    $('#setSettings').on('submit', function(e){
        e.preventDefault()
        $.ajax({  
            type: 'POST',  
            url: 'app.php?action=edit-setting', 
            data: $('#setSettings').serialize(),
            success: function(response) {
                document.getElementById("db_response").style.display="flex"
                if(response == 1){
                    db_response.add("bg-primary")
                    $('#get_response').html('Successful')
                }else if( response == 2 ){
                    db_response.add("bg-danger")
                    $('#get_response').html('Failed')
                }else{
                    db_response.add("bg-warning")
                    $('#get_response').html('Already Exists')
                }
            }
        });
        getSettings();
    })

    /*
    edit locations
    */
    $(document).on('click', '.btn-edit-location', function() {
         // Find the associated input field
        let row = $(this).closest('tr');
        let input = row.find('td:eq(1)').find('.form-control');
        let id = row.find('td:eq(0)').text().trim()

        // Check if the input is readonly
        if (input.prop('readonly')) {
            // Make input editable
            input.prop('readonly', false);
            input.focus()
            // Change button to 'btn-check'
            $(this)
                .removeClass('fa-edit btn-edit-location text-primary')
                .addClass('fa-check btn-edit-location text-success');
        } else {
            // Make input readonly
            input.prop('readonly', true);
            
            // Change button back to 'btn-edit'
            $(this)
                .removeClass('fa-check btn-check-location text-success')
                .addClass('fa-edit btn-edit-location text-primary');
            
            let new_name = row.find('td:eq(1)').find('.form-control').val()
            
            $.ajax({  
                type: 'POST',  
                url: 'app.php?action=edit-location', 
                data: {
                    id:id,
                    location:new_name
                },
                success: function(response) {
                    document.getElementById("db_response").style.display="flex"
                    if(response == 1){
                        db_response.add("bg-primary")
                        $('#get_response').html('Successful')
                    }else if( response == 2 ){
                        db_response.add("bg-danger")
                        $('#get_response').html('Failed')
                    }
                }
            });
            //end of saving
        }
    });
     /*
    edit categories
    */
    $(document).on('click', '.btn-edit-category', function() {
        // Find the associated input field
       let row = $(this).closest('tr');
       let input = row.find('td:eq(1)').find('.form-control');
       let id = row.find('td:eq(0)').text().trim()

       // Check if the input is readonly
       if (input.prop('readonly')) {
           // Make input editable
           input.prop('readonly', false);
           input.focus()
           // Change button to 'btn-check'
           $(this)
               .removeClass('fa-edit btn-edit-category text-primary')
               .addClass('fa-check btn-edit-category text-success');
       } else {
           // Make input readonly
           input.prop('readonly', true);
           
           // Change button back to 'btn-edit'
           $(this)
               .removeClass('fa-check btn-check-category text-success')
               .addClass('fa-edit btn-edit-category text-primary');
           
           let new_name = row.find('td:eq(1)').find('.form-control').val()
           
           $.ajax({  
               type: 'POST',  
               url: 'app.php?action=edit-category', 
               data: {
                   id:id,
                   category:new_name
               },
               success: function(response) {
                   document.getElementById("db_response").style.display="flex"
                   if(response == 1){
                       db_response.add("bg-primary")
                       $('#get_response').html('Successful')
                   }else if( response == 2 ){
                       db_response.add("bg-danger")
                       $('#get_response').html('Failed')
                   }
               }
           });
           //end of saving
       }
   });
   /*
    edit roles
    */
    $(document).on('click', '.btn-edit-role', function() {
        // Find the associated input field
       let row = $(this).closest('tr');
       let input = row.find('td:eq(1)').find('.form-control');
       let id = row.find('td:eq(0)').text().trim()

       // Check if the input is readonly
       if (input.prop('readonly')) {
           // Make input editable
           input.prop('readonly', false);
           input.focus()
           // Change button to 'btn-check'
           $(this)
               .removeClass('fa-edit btn-edit-role text-primary')
               .addClass('fa-check btn-edit-role text-success');
       } else {
           // Make input readonly
           input.prop('readonly', true);
           
           // Change button back to 'btn-edit'
           $(this)
               .removeClass('fa-check btn-check-role text-success')
               .addClass('fa-edit btn-edit-role text-primary');
           
           let new_name = row.find('td:eq(1)').find('.form-control').val()
           
           $.ajax({  
               type: 'POST',  
               url: 'app.php?action=edit-role', 
               data: {
                   id:id,
                   role:new_name
               },
               success: function(response) {
                   document.getElementById("db_response").style.display="flex"
                   if(response == 1){
                       db_response.add("bg-primary")
                       $('#get_response').html('Successful')
                   }else if( response == 2 ){
                       db_response.add("bg-danger")
                       $('#get_response').html('Failed')
                   }
               }
           });
           //end of saving
       }
   });

    
    /*
    delete location
    */
    $(document).on('click', '.btn-del-location', function() {
        // Find the associated input field
        let status = confirm("Deleting This Location Will Delete All The Data Related To This It")
        if(status == true){
            let row = $(this).closest('tr');
            let id = row.find('td:eq(0)').text().trim()

            $.ajax({  
                type: 'POST',  
                url: 'app.php?action=del-location', 
                data: {
                    id:id
                },
                success: function(response) {
                    document.getElementById("db_response").style.display="flex"
                    console.log(response)
                    if(response == 1){
                        db_response.add("bg-primary")
                        $('#get_response').html('Successful')
                    }else if( response == 2 ){
                        db_response.add("bg-danger")
                        $('#get_response').html('Failed')
                    }
                }
            });
            getLocations();
    }

    });
    /*
    delete category
    */
    $(document).on('click', '.btn-del-category', function() {
        // Find the associated input field
        let status = confirm("Deleting This Category Will Delete All The Data Related To This It")
        if(status == true){
            let row = $(this).closest('tr');
            let id = row.find('td:eq(0)').text().trim()

            $.ajax({  
                type: 'POST',  
                url: 'app.php?action=del-category', 
                data: {
                    id:id
                },
                success: function(response) {
                    document.getElementById("db_response").style.display="flex"
                    console.log(response)
                    if(response == 1){
                        db_response.add("bg-primary")
                        $('#get_response').html('Successful')
                    }else if( response == 2 ){
                        db_response.add("bg-danger")
                        $('#get_response').html('Failed')
                    }
                }
            });
            getCategories();
    }

    });



    /*
    add location
    */
    $('#addCategory').on('submit', function(e){
        e.preventDefault()
        $.ajax({  
            type: 'POST',  
            url: 'app.php?action=add-category', 
            data: $('#addCategory').serialize(),
            success: function(response) {
                document.getElementById("db_response").style.display="flex"
                if(response == 1){
                    db_response.add("bg-primary")
                    $('#get_response').html('Successful')
                }else if( response == 2 ){
                    db_response.add("bg-danger")
                    $('#get_response').html('Failed')
                }else{
                    db_response.add("bg-warning")
                    $('#get_response').html('Already Exists')
                }
            }
        });
        getCategories();
    })
    /*
    add location
    */
    $('#addRole').on('submit', function(e){
        e.preventDefault()
        $.ajax({  
            type: 'POST',  
            url: 'app.php?action=add-role', 
            data: $('#addRole').serialize(),
            success: function(response) {
                document.getElementById("db_response").style.display="flex"
                if(response == 1){
                    db_response.add("bg-primary")
                    $('#get_response').html('Successful')
                }else if( response == 2 ){
                    db_response.add("bg-danger")
                    $('#get_response').html('Failed')
                }else{
                    db_response.add("bg-warning")
                    $('#get_response').html('Already Exists')
                }
            }
        });
        getRoles();
    })
    /*
    add event
    */
    $('#addEvent').on('submit', function(e){
        e.preventDefault()
        const editorContent = tinymce.get('editor_content').getContent()
        const formData = new FormData(document.getElementById('addEvent'))
        formData.append('content', editorContent);
        const all_speakers = document.querySelectorAll('.single-speaker-id')
        
        all_speakers.forEach(function(speaker){
            let single_speaker = speaker.innerText
            formData.append("speakers[]", single_speaker)
        })

        $.ajax({  
            type: 'POST',  
            url: 'app.php?action=add-event', 
            data: formData,
            processData: false,
            contentType: false,
            success: function(response) {
                console.log(response)
                document.getElementById("db_response").style.display = "flex";
                if (response == 1) {
                    db_response.add("bg-primary");
                    $('#get_response').html('Successful');
                } else if (response == 2) {
                    db_response.add("bg-danger");
                    $('#get_response').html('Failed');
                } else {
                    db_response.add("bg-warning");
                    $('#get_response').html('Already Exists');
                }
            },
            error: function(xhr, status, error) {
                console.error('AJAX error:', error);
            }
        });
    })







    /*
    *
    * end of methodds
    *
    */
});