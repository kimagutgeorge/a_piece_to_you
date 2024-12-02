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
get roles
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
    *
    * end of methodds
    *
    */
});