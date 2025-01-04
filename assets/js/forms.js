$( document ).ready(function() {
    /* universal variables*/
    let url = window.location.href
    let universal_disabled = true


    // formate date without time
    function formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleString('en-KE', {
          timeZone: 'Africa/Nairobi',
          year: 'numeric',
          month: 'short', // Full month name
          day: 'numeric', // Day without leading zero
        });
      }
    
    //formate date with time
    function formatDateWithTime(dateString) {
        const date = new Date(dateString);
        return date.toLocaleString('en-KE', {
            timeZone: 'Africa/Nairobi',
            year: 'numeric',
            month: 'short', // Abbreviated month name (e.g., Jan, Feb)
            day: 'numeric', // Day without leading zero
            hour: '2-digit', // Hour with leading zero
            minute: '2-digit', // Minute with leading zero
            hour12: false // Use 12-hour clock (e.g., AM/PM)
        });
    }
      

    /* load data */
    getMembers();
    getCategories();
    getSubscribers();
    getLocations();
    getRoles();
    getSettings();
    getEvents();
    getProductCategories();
    getProducts();
    getCount();
    getPrograms();
    getValues();
    getContacts();
    getVolunteers();
    getRegistrations();
    
    if(url == "http://localhost/apiecetoyou/?p=view-event" || url == "http://localhost/apiecetoyou/index.php?p=view-event" || url == "http://localhost/apiecetoyou/?p=event-details" || url == "http://localhost/apiecetoyou/index.php?p=event-details"){
        viewEvent();
    }
    if(url == "http://localhost/apiecetoyou/?p=add-event" || url == "http://localhost/apiecetoyou/?p=add-product" || url =="http://localhost/apiecetoyou/?p=add-blog" || url =="http://localhost/apiecetoyou/?p=add-newsletter"){
        InitEditor();
    }
    if(url== "http://localhost/apiecetoyou/?p=view-product"){
        viewProduct();
    }
    if(url== "http://localhost/apiecetoyou/?p=adminblogs" || url== "http://localhost/apiecetoyou/?p=blogs"){
        getBlogs();
        getBlogCount();
    }
    if(url== "http://localhost/apiecetoyou/?p=view-blog"){
        viewBlog();
    }
    if(url == "http://localhost/apiecetoyou/?p=profile"){
        getUsers();
    }
    if(url == "http://localhost/apiecetoyou/?p=newsletters" || url == "http://localhost/apiecetoyou/index.php?p=newsletters"){
        getNewsletters();
    }
    if(url == "http://localhost/apiecetoyou/?p=website" || url == "http://localhost/apiecetoyou/index.php?p=website" || url == "http://localhost/apiecetoyou/?p=home" || url == "http://localhost/apiecetoyou/index.php?p=home" || url == "http://localhost/apiecetoyou/" || url == "http://localhost/apiecetoyou/index.php" || url == "http://localhost/apiecetoyou/?p=about-us" || url == "http://localhost/apiecetoyou/index.php?p=about-us"){
        getAboutUs();
    }
    
    
    
/*
default functions 
*/
function InitEditor(){
    tinymce.init({
      selector: '#editor_content',
      plugins: [
          // Core editing features
          'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'image', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount',
          // Your account includes a free trial of TinyMCE premium features
        //   'checklist', 'mediaembed', 'casechange', 'export', 'formatpainter', 'pageembed', 'a11ychecker', 'tinymcespellchecker', 'permanentpen', 'powerpaste', 'advtable', 'advcode', 'editimage', 'advtemplate', 'ai', 'mentions', 'tinycomments', 'tableofcontents', 'footnotes', 'mergetags', 'autocorrect', 'typography', 'inlinecss', 'markdown',
          // Early access to document converters
        //   'importword', 'exportword', 'exportpdf'
      ],
      toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
      tinycomments_mode: 'embedded',
      tinycomments_author: 'Author name',
      mergetags_list: [
          { value: 'First.Name', title: 'First Name' },
          { value: 'Email', title: 'Email' },
      ],
      ai_request: (request, respondWith) => respondWith.string(() => Promise.reject('See docs to implement AI Assistant')),
      
      // Image upload configuration
      images_upload_handler: function (blobInfo, success, failure) {
        const formData = new FormData();
        formData.append('file', blobInfo.blob(), blobInfo.filename());

        fetch('app.php?action=edit-event', { // Replace with your server's upload endpoint
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(result => {
            if (result && result.location) {
                success(result.location);
            } else {
                failure('Upload failed: Invalid response from server.');
            }
        })
        .catch(error => {
            failure('Upload failed: ' + error.message);
        });
    },

    file_picker_callback: function (callback, value, meta) {
        if (meta.filetype === 'image') {
            const input = document.createElement('input');
            input.setAttribute('type', 'file');
            input.setAttribute('accept', 'image/*');

            input.onchange = function () {
                const file = this.files[0];
                const reader = new FileReader();

                reader.onload = function () {
                    callback(reader.result, { alt: file.name });
                };

                reader.readAsDataURL(file);
            };

            input.click();
        }
    }
      /* end of picker*/
  });
  }

  function InitEditor2(){
    tinymce.init({
      selector: '#editor_content_2',
      plugins: [
          // Core editing features
          'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'image', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount',
          // Your account includes a free trial of TinyMCE premium features
        //   'checklist', 'mediaembed', 'casechange', 'export', 'formatpainter', 'pageembed', 'a11ychecker', 'tinymcespellchecker', 'permanentpen', 'powerpaste', 'advtable', 'advcode', 'editimage', 'advtemplate', 'ai', 'mentions', 'tinycomments', 'tableofcontents', 'footnotes', 'mergetags', 'autocorrect', 'typography', 'inlinecss', 'markdown',
          // Early access to document converters
        //   'importword', 'exportword', 'exportpdf'
      ],
      toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
      tinycomments_mode: 'embedded',
      tinycomments_author: 'Author name',
      mergetags_list: [
          { value: 'First.Name', title: 'First Name' },
          { value: 'Email', title: 'Email' },
      ],
      ai_request: (request, respondWith) => respondWith.string(() => Promise.reject('See docs to implement AI Assistant')),
      
      // Image upload configuration
      images_upload_handler: function (blobInfo, success, failure) {
        const formData = new FormData();
        formData.append('file', blobInfo.blob(), blobInfo.filename());

        fetch('app.php?action=edit-event', { // Replace with your server's upload endpoint
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(result => {
            if (result && result.location) {
                success(result.location);
            } else {
                failure('Upload failed: Invalid response from server.');
            }
        })
        .catch(error => {
            failure('Upload failed: ' + error.message);
        });
    },

    file_picker_callback: function (callback, value, meta) {
        if (meta.filetype === 'image') {
            const input = document.createElement('input');
            input.setAttribute('type', 'file');
            input.setAttribute('accept', 'image/*');

            input.onchange = function () {
                const file = this.files[0];
                const reader = new FileReader();

                reader.onload = function () {
                    callback(reader.result, { alt: file.name });
                };

                reader.readAsDataURL(file);
            };

            input.click();
        }
    }
      /* end of picker*/
  });
  }
//disable editor
// function disableEditor() {
//     const editor = tinymce.get('editor_content');
//     if (editor) {
        
//         tinymce.remove(editor);
//     } else {
//         console.log('Editor not found');
//     }
// }

function formatEventTime(startDateStr, eventDuration) {
    const startDate = new Date(startDateStr);
    const endDate = new Date(startDate.getTime() + eventDuration * 60 * 60 * 1000); // Calculate end time

    const dateOptions = { day: '2-digit', month: 'short', year: 'numeric' };
    const formattedDate = startDate.toLocaleDateString('en-GB', dateOptions);
    const startTime = startDate.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
    const endTime = endDate.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });

    return `${formattedDate}, ${startTime} to ${endTime}`;
}
  //wait for element
//edit product
$(document).on('click', '.edit-product', function(){
    let db_response = document.getElementById("db_response").classList
    universal_disabled = !universal_disabled
    viewProduct()
    if(universal_disabled == false){
    setTimeout(() => {
        InitEditor()
    }, 500);
    }else{
        //update products
        const product_id = document.getElementById("product_id").value 
        const product_name = document.getElementById("product_name").value 
        const product_price = document.getElementById("product_price").value 
        const product_discount = document.getElementById("product_discount").value 
        const product_quantity = document.getElementById("product_quantity").value 
        const product_category = document.getElementById("product_category").value 
        const editorContent = tinymce.get('editor_content').getContent()

        const formData = new FormData()
        formData.append("product_id", product_id)
        formData.append("name", product_name)
        formData.append("price", product_price)
        formData.append("discount", product_discount)
        formData.append("quantity", product_quantity)
        formData.append("category", product_category)
        formData.append("content", editorContent)

        $.ajax({  
            type: 'POST',  
            url: 'app.php?action=edit-product', 
            data: formData,
            processData: false,
            contentType: false,
            success: function(response) {
                document.getElementById("db_response").style.display = "flex";
                if (response == 1) {
                    db_response.add("bg-primary");
                    $('#get_response').html('Successful');
                    // disableEditor()
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

        viewProduct()

    } 
})

//edit event
$(document).on('click', '.edit-event', function() {
    let db_response = document.getElementById("db_response").classList
    universal_disabled = !universal_disabled
    viewEvent()
    if(universal_disabled == false){
    setTimeout(() => {
        InitEditor()
    }, 500);
    }else{
        //save data  here
        const event_id = document.getElementById("event_id").value
        const event_name = document.getElementById("event_name").value
        const event_date = document.getElementById("event_date").value
        const event_duration = document.getElementById("event_duration").value
        const event_location = document.getElementById("event_location").value
        const event_category = document.getElementById("event_category").value
        const all_speakers = document.querySelectorAll('.single-speaker-id')
        const editorContent = tinymce.get('editor_content').getContent()

        const formData = new FormData()
        formData.append("event_id", event_id)
        formData.append("event_name", event_name)
        formData.append("event_date", event_date)
        formData.append("event_duration", event_duration)
        formData.append("event_location", event_location)
        formData.append("event_category", event_category)
        formData.append('content', editorContent);
        
        all_speakers.forEach(function(speaker){
            let single_speaker = speaker.innerText
            formData.append("speakers[]", single_speaker)
        })
        
        $.ajax({  
            type: 'POST',  
            url: 'app.php?action=edit-event', 
            data: formData,
            processData: false,
            contentType: false,
            success: function(response) {
                document.getElementById("db_response").style.display = "flex";
                if (response == 1) {
                    db_response.add("bg-primary");
                    $('#get_response').html('Successful');
                    // disableEditor()
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

        viewEvent()
    }
    
    
});
//edit blog
$(document).on('click', '.edit-blog', function() {
    let db_response = document.getElementById("db_response").classList
    universal_disabled = !universal_disabled
    viewBlog()
    if(universal_disabled == false){
    setTimeout(() => {
        InitEditor()
    }, 500);
    }else{
        // save changes
        const blog_id = document.getElementById("single-blog-id").value
        const blog_writer = document.getElementById("writer").value
        const blog_category = document.getElementById("category").value
        const blog_name = document.getElementById("blog_name").value
        const editorContent = tinymce.get('editor_content').getContent()

        const formData = new FormData()
        formData.append("blog_id", blog_id)
        formData.append("blog_name", blog_name)
        formData.append("blog_writer", blog_writer)
        formData.append("blog_category", blog_category)
        formData.append("content", editorContent)

        $.ajax({  
            type: 'POST',  
            url: 'app.php?action=edit-blog', 
            data: formData,
            processData: false,
            contentType: false,
            success: function(response) {
                console.log(response)
                document.getElementById("db_response").style.display = "flex";
                if (response == 1) {
                    db_response.add("bg-primary");
                    $('#get_response').html('Successful');
                    // disableEditor()
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

        viewBlog()
    }
    
    
});
/* get about us */
function getAboutUs(){
        $.ajax({  
            type: 'GET',  
            url: 'app.php?action=get-about',
            success: function(response) {
                if(response == 2){
                    
                    let db_response = document.getElementById("db_response").classList
                    document.getElementById("db_response").style.display="flex"
                    db_response.add("bg-warning")
                        $('#get_response').html('No Content Found')
        
                }else{
                    let abouts = JSON.parse(response)
                    //admins
                    let about = abouts[0]
                    if(url == "http://localhost/apiecetoyou/?p=home" || url == "http://localhost/apiecetoyou/index.php?p=home" || url == "http://localhost/apiecetoyou/" || url == "http://localhost/apiecetoyou/index.php"){
                        //home
                        let tableBody = document.getElementById("home_about")
                        tableBody.innerHTML = `<p class="text-white four-vh">WHO ARE WE?</p>
                    <h4 class="text-white">${about.title}</h4>
                    <p class="text-white">${about.mission}</p>`

                        let tableBody2 = document.getElementById("home_offer")
                        tableBody2.innerHTML =`<p class="text-white four-vh">WE OFFER</p>
                        <div class="text-white">${about.offer}</div>`

                    }else if(url == "http://localhost/apiecetoyou/?p=about-us" || url == "http://localhost/apiecetoyou/index.php?p=about-us"){
                        let tableBodyParagraph = document.getElementById("about_vision")
                        tableBodyParagraph.innerHTML = about.vision
                        //about
                        let tableBody = document.getElementById("mission_approach")
                        tableBody.innerHTML =`<h4 class="text-primary four-vh">OUR <span class="text-black">MISSION</span></h4>
                        ${about.mission}
                        `
                    }else{
                    let tableBody = document.getElementById("add_about")
                    tableBody.innerHTML = ""
                    
                    let form_content = document.createElement("div")
                    form_content.innerHTML = `<div class="form-group top-20">
                    <label class="text-muted">Title</label>
                    <input type="text" name ="title" id="about_title" value="${about.title}" maxlength="100" placeholder="About us" class="form-control" ${universal_disabled ? 'readonly' : ''}>
                    </div>
                    <div class="form-group top-20">
                    <label class="text-muted">Our Vision</label>
                    <textarea name="content" id="vision" class="form-control" style="height:100px; padding:10px !important;" placeholder ="To reconnect individuals to..." ${universal_disabled ? 'readonly' : ''} >${about.vision}</textarea>
                    </div>
                    <div class="form-group top-20">
                    <label class="text-muted">Our Mission and Approach</label>
                    <div id="editor_content_2">
                        ${about.mission}
                    </div>
                    </div>
                    <div class="form-group top-20">
                    <label class="text-muted">We Offer</label>
                    <div id="editor_content">
                        ${about.offer}
                    </div>
                    </div>
                    <div class="form-group top-20">
                    <button class="btn btn-primary ${universal_disabled ? 'edit-about' : 'save-about'}">${universal_disabled ? 'EDIT' : 'SAVE'} <i class="fa-solid ${universal_disabled ? 'fa-edit' : 'fa-save'}" ></i></button>
                    </div>`

                    tableBody.appendChild(form_content)
                    }
                }
            }
        })
    }
 /* edit about */
 $(document).on('click', '.edit-about', function(){
    universal_disabled = !universal_disabled
    getAboutUs()
    setTimeout(() => {
        InitEditor();
        InitEditor2();
    }, 500);
    
})
/* save edit */
$(document).on('click', '.save-about', function(){
    let db_response = document.getElementById("db_response").classList
    let title = document.getElementById("about_title").value
    let vision = document.getElementById("vision").value
    const mission_Content = tinymce.get('editor_content').getContent()
    const offer_Content = tinymce.get("editor_content_2").getContent()
    if(title == "" || vision == "" || mission_Content == "" || offer_Content == ""){
        document.getElementById("db_response").style.display="flex"
        db_response.add("bg-warning")
        $('#get_response').html('Please Fill All The Required Fields')
    }else{
        $.ajax({
            type: 'POST',
            url: 'app.php?action=save-about',
            data: {
                title:title,
                vision:vision,
                mission:mission_Content,
                offer:offer_Content
            },
            success: function(response){
                console.log(response)
                    document.getElementById("db_response").style.display="flex"
                    if(response == 1){
                        db_response.add("bg-primary")
                        $('#get_response').html('Successful')
                        universal_disabled = !universal_disabled
                        getAboutUs()
                    }else if( response == 2 ){
                        db_response.add("bg-danger")
                        $('#get_response').html('Failed')
                    }
            }
        })
    }
    
})

/* get locations */
function getLocations(){
$.ajax({  
    type: 'GET',  
    url: 'app.php?action=get-locations',
    success: function(response) {
        if(response == 2){
            let db_response = document.getElementById("db_response").classList
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
            }else if(url == "http://localhost/apiecetoyou/?p=events" || url == "http://localhost/apiecetoyou/index.php?p=events"){
                let selectBody = document.getElementById("event_location")
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
/* get newsletters*/
function getNewsletters(){
    $.ajax({  
        type: 'GET',  
        url: 'app.php?action=get-newsletters',
        success: function(response) {
            
            if(response == 2){
                let db_response = document.getElementById("db_response").classList
                document.getElementById("db_response").style.display="flex"
                db_response.add("bg-warning")
                    $('#get_response').html('No Newsletters Found')
    
            }else{
                let newsletters = JSON.parse(response)
                let tableBody = document.getElementById("tbl_ewsletters")
                tableBody.innerHTML = "";
                newsletters.forEach(function(newsletter){
                //check status here
                function showStatus(){
                    if(newsletter.status == '0'){
                        return `<span>SENT</span>`
                    }else{
                        return `<span>DRAFT</span>`
                    }
                }

                let row = document.createElement("tr"); // Create a new table row
    
                // // Create table cells for each piece of data
                let idCell = document.createElement("td");
                idCell.textContent = newsletter.id;
                idCell.hidden = true;
        
                let nameCell = document.createElement("td");
                nameCell.innerHTML = `${newsletter.title}`

                let statusCell = document.createElement("td")
                statusCell.innerHTML = `${showStatus()}`

                let dateCell = document.createElement("td");
                dateCell.innerHTML = `${formatDateWithTime(newsletter.date)}`
                
                let actionCell = document.createElement('td');
                actionCell.innerHTML = `<i class="fa-solid fa-eye view-letter"></i>
                <i class="fa-solid fa-trash del-letter"></i> `

                // // Append cells to the row
                row.appendChild(idCell);
                row.appendChild(nameCell);
                row.appendChild(statusCell);
                row.appendChild(dateCell);
                row.appendChild(actionCell);
        
                // // Append the row to the table body
                tableBody.appendChild(row);
                $('#tbl').DataTable();
            })
        
    }
            
        }
    });
    }
/* get attendees */
function getRegistrations(){
    $.ajax({  
        type: 'GET',  
        url: 'app.php?action=get-registration',
        success: function(response) {
            
            if(response == 2){
                let db_response = document.getElementById("db_response").classList
                document.getElementById("db_response").style.display="flex"
                db_response.add("bg-warning")
                    $('#get_response').html('No Registration Found')
    
            }else{
                let registrations = JSON.parse(response)
                let tableBody = document.getElementById("tbl_registration")
                tableBody.innerHTML = "";
                registrations.forEach(function(registration){
                //check status here
                function showStatus(){
                    if(registration.status == '0'){
                        return `<span>PENDING</span>`
                    }else if(registration.status == '1'){
                        return `<span class="text-primary">ATTENDED</span>`
                    }else{
                        return `<span class="text-muted">CANCELLED</span>`
                    }
                }
                function showEnquiry(){
                    if(registration.enquiries == null){
                        return `None`
                    }else{
                        return `${registration.enquiries}`
                    }
                }
                function checkStatus1(){
                    if(registration.status == '0'){
                        return `<i class="fa-solid fa-check check-registration"></i>`
                    }else{
                        return ``
                    }
                }
                function checkStatus2(){
                    if(registration.status == '0'){
                        return `<i class="fas fa-times text-danger cancel-registration"></i>`
                    }else if(registration.status == '1'){
                        return ``
                    }else{
                        return `<i class="fa-solid fa-user-plus reg-registration"></i>`
                    }
                }

                let row = document.createElement("tr"); // Create a new table row
    
                // Create table cells for each piece of data
                let idCell = document.createElement("td");
                idCell.textContent = registration.id;
                idCell.hidden = true;
        
                let nameCell = document.createElement("td");
                nameCell.innerHTML = `<p class="fw-bold text-primary">Name: ${registration.name}</p>
                <p>Email: ${registration.email}</p>
                <p>Enquiry: ${showEnquiry()}</p>`

                let eventCell = document.createElement("td");
                eventCell.innerHTML = `${registration.event}`

                let enquiryCell = document.createElement("td");
                enquiryCell.innerHTML = ``

                let statusCell = document.createElement("td")
                statusCell.innerHTML = `${showStatus()}`
                
                let actionCell = document.createElement('td');
                actionCell.innerHTML = `${checkStatus1()}
                ${checkStatus2()}
                <i class="fa-solid fa-trash del-registration"></i> `

                // // Append cells to the row
                row.appendChild(idCell);
                row.appendChild(nameCell);
                row.appendChild(eventCell);
                row.appendChild(statusCell);
                row.appendChild(actionCell);
        
                // // Append the row to the table body
                tableBody.appendChild(row);
                $('#tbl').DataTable();
            })
        
    }
            
        }
    });
    }
        /* get volunteers*/
function getVolunteers(){
    $.ajax({  
        type: 'GET',  
        url: 'app.php?action=get-volunteers',
        success: function(response) {
            
            if(response == 2){
                let db_response = document.getElementById("db_response").classList
                document.getElementById("db_response").style.display="flex"
                db_response.add("bg-warning")
                    $('#get_response').html('No Volunteers Found')
    
            }else{
                let contacts = JSON.parse(response)
                let tableBody = document.getElementById("tbl_volunteers")
                tableBody.innerHTML = "";
                contacts.forEach(function(contact){
                //check status here
                function showStatus(){
                    if(contact.status == '0'){
                        return `<span class="text-danger">UNREAD</span>`
                    }else{
                        return `<span class="text-primary">READ</span>`
                    }
                }
                function showRead(){
                    if(contact.status == '0'){
                        return `<i class="fa-solid fa-check read-volunteer"></i>`
                    }else{
                        return ``
                    }
                }

                let row = document.createElement("tr"); // Create a new table row
    
                // // Create table cells for each piece of data
                let idCell = document.createElement("td");
                idCell.textContent = contact.id;
                idCell.hidden = true;
        
                let nameCell = document.createElement("td");
                nameCell.innerHTML = `<p class="fw-bold text-primary">${contact.name}</p>
                <p class="two-vh">${contact.phone}</p>
                ${showStatus()}`

                
                let actionCell = document.createElement('td');
                actionCell.innerHTML = `${showRead()}
                <i class="fa-solid fa-trash del-volunteer"></i> `

                // // Append cells to the row
                row.appendChild(idCell);
                row.appendChild(nameCell);
                row.appendChild(actionCell);
        
                // // Append the row to the table body
                tableBody.appendChild(row);
                $('#tbl').DataTable();
            })
        
    }
            
        }
    });
    }
    /* get contacts*/
function getContacts(){
    $.ajax({  
        type: 'GET',  
        url: 'app.php?action=get-contacts',
        success: function(response) {
            
            if(response == 2){
                let db_response = document.getElementById("db_response").classList
                document.getElementById("db_response").style.display="flex"
                db_response.add("bg-warning")
                    $('#get_response').html('No Contacts Found')
    
            }else{
                let contacts = JSON.parse(response)
                let tableBody = document.getElementById("tbl_contacts")
                tableBody.innerHTML = "";
                contacts.forEach(function(contact){
                //check status here
                function showStatus(){
                    if(contact.status == '0'){
                        return `<span class="text-danger">UNREAD</span>`
                    }else{
                        return `<span class="text-primary">READ</span>`
                    }
                }
                function showRead(){
                    if(contact.status == '0'){
                        return `<i class="fa-solid fa-check read-contact"></i>`
                    }else{
                        return ``
                    }
                }

                let row = document.createElement("tr"); // Create a new table row
    
                // // Create table cells for each piece of data
                let idCell = document.createElement("td");
                idCell.textContent = contact.id;
                idCell.hidden = true;
        
                let nameCell = document.createElement("td");
                nameCell.innerHTML = `<p class="fw-bold text-primary">${contact.name}</p>
                <p class="two-vh">${contact.email}</p>`

                let dateCell = document.createElement("td");
                dateCell.innerHTML = `
                <p>${contact.subject}</p>
                <p>${contact.message}</p>
                <p>${formatDateWithTime(contact.date)}</p>
                ${showStatus()}`
                
                let actionCell = document.createElement('td');
                actionCell.innerHTML = `${showRead()}
                <i class="fa-solid fa-trash del-contact"></i> `

                // // Append cells to the row
                row.appendChild(idCell);
                row.appendChild(nameCell);
                row.appendChild(dateCell);
                row.appendChild(actionCell);
        
                // // Append the row to the table body
                tableBody.appendChild(row);
                $('#tbl').DataTable();
            })
        
    }
            
        }
    });
    }
/* read contact */
$(document).on('click', '.read-contact', function(){
    let db_response = document.getElementById("db_response").classList
    let status = confirm("Mark As Read?");
    if(status == true){
    const id = $(this).closest('tr').find('td:eq(0)').text().trim()
    $.ajax({  
        type: 'POST',  
        url: 'app.php?action=read-contact', 
        data: {id: id},
        success: function(response) {
            document.getElementById("db_response").style.display = "flex";
            if (response == 1) {
                db_response.add("bg-primary");
                $('#get_response').html('Successful');
                getContacts();
            } else if (response == 2) {
                db_response.add("bg-danger");
                $('#get_response').html('Failed');
            }
        }
    });
}
})
/* read volunteer */
$(document).on('click', '.read-volunteer', function(){
    let db_response = document.getElementById("db_response").classList
    let status = confirm("Mark As Read?");
    if(status == true){
    const id = $(this).closest('tr').find('td:eq(0)').text().trim()
    $.ajax({  
        type: 'POST',  
        url: 'app.php?action=read-volunteer', 
        data: {id: id},
        success: function(response) {
            document.getElementById("db_response").style.display = "flex";
            if (response == 1) {
                db_response.add("bg-primary");
                $('#get_response').html('Successful');
                getVolunteers();
            } else if (response == 2) {
                db_response.add("bg-danger");
                $('#get_response').html('Failed');
            }
        }
    });
}
})
/* delete contact */
$(document).on('click', '.del-contact', function(){
    let db_response = document.getElementById("db_response").classList
    let status = confirm("Delete this contact?");
    if(status == true){
    const id = $(this).closest('tr').find('td:eq(0)').text().trim()
    $.ajax({  
        type: 'POST',  
        url: 'app.php?action=del-contact', 
        data: {id: id},
        success: function(response) {
            document.getElementById("db_response").style.display = "flex";
            if (response == 1) {
                db_response.add("bg-primary");
                $('#get_response').html('Successful');
                getContacts();
            } else if (response == 2) {
                db_response.add("bg-danger");
                $('#get_response').html('Failed');
            }
        }
    });
}

})

/* delete volunteer */
$(document).on('click', '.del-volunteer', function(){
    let db_response = document.getElementById("db_response").classList
    let status = confirm("Delete this volunteer?");
    if(status == true){
    const id = $(this).closest('tr').find('td:eq(0)').text().trim()
    $.ajax({  
        type: 'POST',  
        url: 'app.php?action=del-contact', 
        data: {id: id},
        success: function(response) {
            document.getElementById("db_response").style.display = "flex";
            if (response == 1) {
                db_response.add("bg-primary");
                $('#get_response').html('Successful');
                getVolunteers();
            } else if (response == 2) {
                db_response.add("bg-danger");
                $('#get_response').html('Failed');
            }
        }
    });
}

})

/*
get products
*/
function getProducts(){
    $.ajax({  
        type: 'GET',  
        url: 'app.php?action=get-products',
        success: function(response) {
            if(response == 2){
                let db_response = document.getElementById("db_response").classList
                document.getElementById("db_response").style.display="flex"
                db_response.add("bg-warning")
                    $('#get_response').html('No Product Found')
    
            }else{
                
                let products = JSON.parse(response)
                if(url == "http://localhost/apiecetoyou/?p=shop" || url == "http://localhost/apiecetoyou/index.php?p=shop"){
                    let tableBody = document.getElementById("tbl_shop")
                    tableBody.innerHTML =="";
                    
                    products.forEach(function(product){
                        let row = document.createElement("div")
                        row.className = "col-3"
                        row.innerHTML = `
                        <div class="card">
                        <img src="assets/images/bg/products/${product.product_image}" alt="" class="card-img-top">
                        <div class="card-body position-relative">
                        <div class="card-body-inner">
                        <h3 class="text-third">${ product.product_name }</h3>
                        <div class="col-12">
                        <p class="text-primary">Price</p>
                        <p class="text-muted"><i class="fa-solid fa-coins"></i> ${ product.product_price} </p>
                        <p class="text-primary" style="margin-top:20px !important">In Stock</p>
                        <p class="text-muted"><i class="fa-solid fa-boxes"></i> ${product.product_balance}</p>
                        </div>
                        <div class="col-12" style="border-top:1px solid rgb(230,230,230)">
                        <button class="btn btn-primary-box btn-primary">
                        ADD TO CART
                        </button>
                        </div>
                        </div>
                        </div>
                        </div>`
    
                        tableBody.appendChild(row)
                    })
                }else{
                
                let tableBody = document.getElementById("tbl_shop")
                tableBody.innerHTML = "";
                products.forEach(function(product){

                    function showStatus(){
                        if(product.product_status == '0'){
                            return `<button class="card-btn">
    <i class="fa-solid fa-unlock text-success disable-product"></i>
    </button>`
                        }else{
                            return `<button class="card-btn">
    <i class="fa-solid fa-lock text-danger enable-product"></i>
    </button>`
                        }
                        }

                    let row = document.createElement("div"); // Create a new table row
                    row.className = "tbl-card-holder card-container";
        
                    // Create cards for products
                    let single_product = document.createElement("div");
                    single_product.className="card-wrapper";

                    let card_content = document.createElement("div");
                    card_content.className = "card col-12";

                    let img = document.createElement("img")
                    img.className = "w-100";
                    img.src = "assets/images/bg/products/"+ product.product_image

                    let card_body = document.createElement("div")
                    card_body.className="card-body"

                    let title = document.createElement("h5");
                    title.className = "card-title text-primary"
                    title.innerText = product.product_name

                    let date_time_title = document.createElement("h6");
                    date_time_title.className = "text-primary fw-bold"
                    date_time_title.innerText = "Price"

                    let date_time = document.createElement("p");
                    date_time.className = "text-primary fw-bold"
                    date_time.innerHTML = `<i class="fa-solid fa-coins"></i> ${product.product_price}`

                    let in_stock = document.createElement("h6");
                    in_stock.className = "text-primary fw-bold"
                    in_stock.innerText = "In Stock"

                    let stock = document.createElement("p");
                    stock.className = "text-primary fw-bold"
                    stock.innerHTML = `<i class="fa-solid fa-coins"></i> ${product.product_balance}`
                    
                    //bottom row
                    let bottom_row = document.createElement("div")
                    bottom_row.className = "col-12 row"

                    let id_holder = document.createElement("div")
                    id_holder.setAttribute("hidden", true)
                    id_holder.className = "product-card-id"
                    id_holder.innerText = product.product_id

                    let button_view = document.createElement("div")
                    button_view.className = "col-3"
                    button_view.innerHTML=`<button class="card-btn btn-transparent view-product">
    <i class="fa-solid fa-eye text-primary"></i>
    </button>`

                    let button_cart = document.createElement("div")
                    button_cart.className = "col-3"
                    button_cart.innerHTML=`<button class="card-btn">
                <i class="fa-solid fa-shopping-cart"></i>
                </button>`

                    let button_disable = document.createElement("div")
                    button_disable.className = "col-3"
                    button_disable.innerHTML= `${showStatus()}`

                    let button_delete = document.createElement("div")
                    button_delete.className = "col-3"
                    button_delete.innerHTML=`<button class="card-btn del-product">
      <i class="fa-solid fa-trash text-danger"></i>
    </button>`

                    //append children
                    bottom_row.appendChild(button_view)
                    bottom_row.appendChild(button_cart)
                    bottom_row.appendChild(button_disable)
                    bottom_row.appendChild(button_delete)
                    bottom_row.appendChild(id_holder)
                    //card body
                    card_body.appendChild(title)
                    card_body.appendChild(date_time_title)
                    card_body.appendChild(date_time)
                    card_body.appendChild(in_stock)
                    card_body.appendChild(stock)
                    //card_content
                    card_content.appendChild(img)
                    card_content.appendChild(card_body)
                    card_content.appendChild(bottom_row)
                    //td
                    single_product.appendChild(card_content)

            
                    // Append the row to the table body
                    tableBody.appendChild(single_product);
                    $('#tbl').DataTable();
                })

            }
        }
        }
        
    });
}
/*
get event
*/
function viewEvent(){
    $.ajax({  
        type: 'GET',  
        url: 'app.php?action=viewevent',
        success: function(response) {
        let events = response
        let event = events[0]

        if(url == "http://localhost/apiecetoyou/?p=event-details" || url == "http://localhost/apiecetoyou/index.php?p=event-details"){

            //get speakers
        function showClientSpeakers(){
            return event.event_speakers.map(function(speaker, index){
                return `<div class="card">
                <img src="assets/images/bg/members/${speaker.member_photo}" alt="">
                <h4 class="card-title two-vh">${speaker.member_name}</h4>
                <p class="text-third">${speaker.role}</p>
                </div>`
            }).join('')
            }

            let id = document.getElementById("event_id")
            id.innerHTML = event.event_id
            let event_name = document.getElementById("event_name")
            event_name.innerHTML = event.event_name

            let event_img = document.getElementById("event_img")
            event_img.src = "assets/images/bg/events/"+ event.event_banner

            let event_details_img = document.getElementById("event_details_banner")
            event_details_img.src = "assets/images/bg/events/"+ event.event_banner

            let event_description = document.getElementById("event_description")
            event_description.innerHTML = event.event_description

            let speakers = document.getElementById("client_speakers")
            speakers.innerHTML = `${showClientSpeakers()}`

            let event_time = document.getElementById("event_time")
            event_time.innerHTML = `<i class="fa-regular fa-clock"></i> ${formatEventTime(event.event_start_date, event.event_duration) }`

            let event_location = document.getElementById("event_location")
            event_location.innerHTML = `<i class="fa-solid fa-location-crosshairs"></i> ${event.event_location}`



        }else{
        let eventBody = document.getElementById("tbl_single_event")
        eventBody.innerHTML = ""

        let toggle_button_body = document.getElementById("view_event_toggle")
        toggle_button_body.innerHTML=`<button
        class="btn btn-primary edit-event"
        type = "${universal_disabled ? 'button' : 'submit'}"
      >
        <i class="${universal_disabled ? 'fa-solid fa-edit' : 'fa-solid fa-check'}"></i>
      </button>`

        //get speakers
        function showSpeakers(){
        return event.event_speakers.map(function(speaker, index){
            return `<div class="speaker">
                <div class="single-speaker-id" hidden>
                ${speaker.member_id}
                </div>
                <div class="speaker-name">
                    ${speaker.member_name}
                </div>
                <div class="close-div" ${universal_disabled ? 'hidden': ''}>
                    <i class="fa-solid fa-close text-danger" onclick="removeSpeaker(${speaker.member_id})"></i>
                </div>
                
                </div>`
        }).join('')
        }
        //get members
        function showMembers(){
        return event.members.map(function(member, index){
            return `<option value="${member.id }">${member.name }</option>`
        }).join('')
        }
        //get categories
        function showCategories(){
        return event.categories.map(function(category, index){
            return `<option value="${category.id }">${category.name }</option>`
        }).join('')
        }
        //get locations
        function showLocations(){
            return event.locations.map(function(location, index){
                return `<option value="${location.id }">${location.name }</option>`
            }).join('')
            }


        eventBody.innerHTML = `<div class="col-12 row" style="margin-top:20px !important">
      <div class="form-group">
      <input type="text" class="form-control" hidden value="${event.event_id}" ${universal_disabled ? 'readonly' : ''} id="event_id" />
          <label class="text-muted">Event Name</label>
          <input type="text" class="form-control"  value="${event.event_name}" ${universal_disabled ? 'readonly' : ''} id="event_name" />
          </div>
          <div class="form-group">
          <label class="text-muted">Date & Time</label>
          <input type="datetime-local" @change="checkDate" class="form-control"  value="${event.event_start_date}" ${universal_disabled ? 'readonly': ''} id="event_date">
          
      </div>
      <div class="form-group">
        <label class="text-muted">Duration</label>
        <input type="text" class="form-control"  value="${event.event_duration}" ${universal_disabled ? 'readonly' : ''} id="event_duration" />
      </div>
          <div class="form-group">
          <label class="text-muted">Location</label>
          <select id="event_location" class="form-control" ${universal_disabled ? 'disabled' : ''}>
            <option value="${event.event_location_id }">${event.event_location }</option>
            ${showLocations()}
        </select>
          </div>
          <div class="form-group">
              <label class="text-muted">Category</label>
              <select id="event_category" class="form-control" ${universal_disabled ? 'disabled' : '' }>
                <option value="${event.event_category_id }">${event.event_category }</option>
                    ${showCategories()}
                  </select>
              </div>
              <div class="form-group"  ${universal_disabled ? 'hidden' : ''}>
                <label class="text-muted">Speakers</label>
                <select class="form-control" onchange="addSpeaker()" id="add_event_speaker">
              ${showMembers()}
                </select>
                </div>
  </div>
  <div class="member-list col-11 row" id="event_speaker_list">
    ${showSpeakers()}
  </div>
  <div class="col-12 row" style="margin-top:40px !important; display:flex;">
  <div class="col-8 editor-holder">
  <!-- editor -->
  <div class="col-11" style="margin-left:2% !important">
    <label class="text-muted">Event Description</label>
    <div id="editor_content">
        ${event.event_description}
    </div>
   </div>
    </div>
              <div class="col-3" style="margin-left:10px !important" v-if="banner">
                <p class="text-muted fw-bold" style="margin-bottom:20px !important">Event Banner</p>
                <img
                class="w-100"
                src="assets/images/bg/events/${event.event_banner}"
              />
          </div>
              </div>`

    }  
}
    });
    
    }
    /*
view blog
*/
function viewBlog(){
    $.ajax({  
        type: 'GET',  
        url: 'app.php?action=viewblog',
        success: function(response) {
        
        let blogs = response
        let blog = blogs[0]

        if(url == "http://localhost/apiecetoyou/?p=read-blog" || url == "http://localhost/apiecetoyou/index.php?p=read-blog"){

            document.getElementById("blog_banner").src == "assets/images/bg/blogs/"+blog.banner

        }else{
        let eventBody = document.getElementById("tbl_single_blog")
        eventBody.innerHTML = ""

        //get categories
        function showCategories(){
        return blog.categories.map(function(category, index){
            return `<option value="${category.cat_id }">${category.cat_name }</option>`
        }).join('')
        }
       

        eventBody.innerHTML = `
        <div class="blog-holder col-12">
                <div class="edit-panel" style="margin-left:0% !important; margin-bottom:10px !important">
                    <button class="btn btn-primary edit-blog" type="${universal_disabled ? 'button' : 'submit'}" style="margin-left:0% !important" >
                    <i class="${universal_disabled ? 'fa-solid fa-edit' : 'fa-solid fa-check'}"></i>
                  </button>
                  </div>
                  <input type="text" id="single-blog-id" value="${blog.id}" hidden>
                <img class="w-50" src="assets/images/bg/blogs/${blog.banner}">
                <div class="row highlight" style="margin-top:20px !important">
                    <div class="col-6 row">
                    <div class="col-4">
                        <p class=" fixed-flex"><i class="fa-solid fa-user  text-muted"></i><input type="text" value="${blog.writer}" id="writer" ${universal_disabled ? 'readonly' : ''}></p>
                    </div>
                    <div class="col-4">
                        <p class=" fixed-flex"><i class="fa-solid fa-calendar  text-muted"></i><input type="text" readonly value="${formatDate(blog.created)}" id="created"></p>
                    </div>
                    <div class="col-4" style="margin-top:2px !important">
                        <p class=" fixed-flex">
                        <i class="fa-solid fa-tags  text-muted"></i>
                        <select id="category" ${universal_disabled ? 'disabled' : ''}>>
                            <option value="${blog.category}" >${blog.category_name}</option>
                            ${showCategories()}
                        </select>
                        </p>
                    </div>
                </div>
                </div>
                <div class="col-11" style="margin-top:20px !important">
                    <h4 class="text-primary fixed-flex" style="margin-bottom:20px !important">
                        <input type="text" class="form-control col-6" style="padding:0px 5px !important" value="${blog.name}"  id="blog_name" ${universal_disabled ? 'readonly' : ''}>
                    </h4>
                    <div class="form-group" id="editor-panel">
                        <div id="editor_content">
                            ${blog.content}
                        </div>
                       </div>
                </div>
            </div>`

    }  
}
});
}
/*
get product
*/
function viewProduct(){
    $.ajax({  
        type: 'GET',  
        url: 'app.php?action=viewproduct',
        success: function(response) {
        let products = JSON.parse(response)
        let product = products[0]
        let productBody = document.getElementById("tbl_single_product")
        let toggle_button_body = document.getElementById("edit_product_toggle")

        productBody.innerHTML = ""

        function showImages(){
            return product.images.map(function(image, index){
                return `<img src="assets/images/bg/products/${image.image_name}" style="margin-bottom:15px !important" />`;
            }).join('');
        }

        function showCategories(){
            return product.categories.map(function(category, index){
                return `<option value="${category.cat_id }">${category.cat_name }</option>`
        }).join('')
        }
        
        toggle_button_body.innerHTML=`<button
        class="btn btn-primary edit-product"
        type = "${universal_disabled ? 'button' : 'submit'}"
      >
        <i class="${universal_disabled ? 'fa-solid fa-edit' : 'fa-solid fa-check'}"></i>
      </button>`

       productBody.innerHTML = `<div class="col-12 row" style="margin-top:20px !important">
      <div class="form-group">
            <input type="number" hidden value="${product.product_id}" id="product_id">
          <label class="text-muted">Product Name</label>
          <input class="form-control" value="${product.name}" id="product_name" ${universal_disabled ? 'readonly': ''}>
          </div>
          <div class="form-group">
          <label class="text-muted">Product Price</label>
          <input class="form-control" value="${product.price}" id="product_price" ${universal_disabled ? 'readonly': ''}>
      </div>
      <div class="form-group">
        <label class="text-muted">Product Discount (%)</label>
        <input class="form-control" value="${product.discount}" id="product_discount" ${universal_disabled ? 'readonly': ''}>
      </div>
        <div class="form-group">
        <label class="text-muted">In Stock</label>
        <input class="form-control" value="${product.balance}" id="product_quantity" ${universal_disabled ? 'readonly': ''}>
        </div>
        <div class="form-group">
        <label class="text-muted">Category</label>
        <select class="form-control" ${universal_disabled ? 'disabled' : ''} id="product_category">
        <option value="${product.category_id}">${product.category}</option>
        ${showCategories()}
        </select>
        </div>
              
  </div>
  <div class="col-12 row" style="margin-top:40px !important; display:flex;">
  <div class="col-8 editor-holder">
  <!-- editor -->
    <label class="text-muted">Product Description</label>
    <div id="editor_content">
            ${product.description}
    </div>
    </div>
    <div class="col-3 product-images" style="margin-left:10px !important">
    <p class="text-muted fw-bold" style="margin-bottom:20px !important">Product Images</p>
        ${showImages()}
    </div>
              </div>
  `

    }  
    });
    }
/* disable product */
$(document).on('click', '.disable-product', function(){
        let db_response = document.getElementById("db_response").classList
            let status = confirm("Disable this product?");
            if(status == true){
            const id = $(this).closest('.card').find('.product-card-id').text().trim()
            $.ajax({  
                type: 'POST',  
                url: 'app.php?action=disable-product', 
                data: {id: id},
                success: function(response) {
                    document.getElementById("db_response").style.display = "flex";
                    if (response == 1) {
                        db_response.add("bg-primary");
                        $('#get_response').html('Successful');
                        getProducts();
                    } else if (response == 2) {
                        db_response.add("bg-danger");
                        $('#get_response').html('Failed');
                    }
                }
            });
        }
        
})
/* enable product */
$(document).on('click', '.enable-product', function(){
    let db_response = document.getElementById("db_response").classList
    let status = confirm("Activate this product?");
    if(status == true){
    const id = $(this).closest('.card').find('.product-card-id').text().trim()
    $.ajax({  
        type: 'POST',  
        url: 'app.php?action=enable-product', 
        data: {id: id},
        success: function(response) {
            document.getElementById("db_response").style.display = "flex";
            if (response == 1) {
                db_response.add("bg-primary");
                $('#get_response').html('Successful');
                getProducts();
            } else if (response == 2) {
                db_response.add("bg-danger");
                $('#get_response').html('Failed');
            }
        }
    });
}

})
/* delete product */
$(document).on('click', '.del-product', function(){
    let db_response = document.getElementById("db_response").classList
    let status = confirm("Delete this product?");
    if(status == true){
    const id = $(this).closest('.card').find('.product-card-id').text().trim()
    $.ajax({  
        type: 'POST',  
        url: 'app.php?action=del-product', 
        data: {id: id},
        success: function(response) {
            document.getElementById("db_response").style.display = "flex";
            if (response == 1) {
                db_response.add("bg-primary");
                $('#get_response').html('Successful');
                getProducts();
            } else if (response == 2) {
                db_response.add("bg-danger");
                $('#get_response').html('Failed');
            }
        }
    });
}

})
/* delete letter */
$(document).on('click', '.del-letter', function(){
    let db_response = document.getElementById("db_response").classList
    let status = confirm("Delete this newsletter?");
    if(status == true){
    const id = $(this).closest('tr').find('td:eq(0)').text().trim()
    $.ajax({  
        type: 'POST',  
        url: 'app.php?action=del-letter', 
        data: {id: id},
        success: function(response) {
            console.log(response)
            document.getElementById("db_response").style.display = "flex";
            if (response == 1) {
                db_response.add("bg-primary");
                $('#get_response').html('Successful');
                getNewsletters();
            } else if (response == 2) {
                db_response.add("bg-danger");
                $('#get_response').html('Failed');
            }
        }
    });
}

})
/* get count */
function getCount(){
    $.ajax({  
        type: 'GET',  
        url: 'app.php?action=get-count',
        success: function(response) {
            
        }
    });
    }
        
/* get members */
function getMembers(){
    $.ajax({  
        type: 'GET',  
        url: 'app.php?action=get-members',
        success: function(response) {
            if(response == 2){
                let db_response = document.getElementById("db_response").classList
                document.getElementById("db_response").style.display="flex"
                db_response.add("bg-warning")
                    $('#get_response').html('No Members Found')
    
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

            }else if(url == "http://localhost/apiecetoyou/?p=about-us"){
                let tableBody = document.getElementById("tbl_members")
                tableBody.innerHTML =="";
                members.forEach(function(member){
                    console.log(member)
                    let row = document.createElement("div")
                    row.className = "col-3"
                    row.style.marginBottom = "20px";
                    row.innerHTML = `<div class="member-inner">
                    <img src="assets/images/bg/members/${member.photo}" alt=""><br>
                    <h4 class="text-black">${ member.name }</h4>
                    <p class="text-third">${ member.role }</p>
                    <div class="col-12">
                    <a href="${member.facebook}" target="_blank" ><i class="fa-brands fa-facebook-f"></i></a>

                    <a href="${member.instagram}" target="_blank" ></i></a>

                    <a href="${member.linkedin}" target="_blank" ><i class="fa-brands fa-linkedin"></i></a>

                    <a href="'mailto:'${member.email}"><i class="fa-solid fa-envelope"></i></a>


                    <a href="${member.twitter}">
                    <i class="fa-brands fa-twitter"></i>
                    </a>
                    </div>
                    </div>`

                    //append child
                    tableBody.appendChild(row)

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
        <a href="${member.facebook}" target="_blank">
          <i class="fa-brands fa-facebook-f"></i>
      </a>
      </span>
      <span class="text-primary">
        <a href="${member.instagram}" target="_blank">
          <i class="fa-brands fa-instagram"></i>
      </a>
      </span>
      <span class="text-primary">
        <a href="${member.linkedin}" target="_blank">
          <i class="fa-brands fa-linkedin"></i>
      </a>
      </span>
      <span class="text-primary">
        <a href="'mailto:'${member.email}"><i class="fa-solid fa-envelope"></i></a>

      </span>
      <span class="text-primary" target="_blank">
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
/* get blog count */
function getBlogCount(){
    $.ajax({  
        type: 'GET',  
        url: 'app.php?action=get-blog-count',
        success: function(response) {
            console.log(response)
            if(response == 2){
                console.log("No categories found!");
            }else{
                let categories = JSON.parse(response)
                categories.forEach(function(category){
                    let selectBody = document.getElementById("tbl_user_categories")
                    selectBody.innerHTML =="";
                    
                    categories.forEach(function(category){
                    /* select options */
                    let card = document.createElement("div")
                    card.className = "col-11 row two-vh"
                    card.innerHTML = `
                        <p hidden class="cat-id">${category.id}</p>
                        <p class="col-11">${category.name}</p>
                        <p class="col-1">${category.count}</p>`
                    
                    //append child
                    selectBody.appendChild(card)
                    })
                })
            }
        }
    })

}
/* get categories */
function getCategories(){
    $.ajax({  
        type: 'GET',  
        url: 'app.php?action=get-categories',
        success: function(response) {
            if(response == 2){
                let db_response = document.getElementById("db_response").classList
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
                }else if(url == "http://localhost/apiecetoyou/?p=events" || url == "http://localhost/apiecetoyou/index.php?p=events"){
                    let selectBody = document.getElementById("event_category")
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
                }else if(url == "http://localhost/apiecetoyou/?p=adminblogs" || url == "http://localhost/apiecetoyou/index.php?p=adminblogs"){
                    let selectBody = document.getElementById("blog_categories")
                    selectBody.innerHTML =="";
                    categories.forEach(function(category){
                    /* select options */
                    let option = document.createElement("option")
                    option.value = category.category_id;
                    option.innerHTML = category.category_name
                    selectBody.appendChild(option)
                    })
                }else if(url == "http://localhost/apiecetoyou/?p=add-blog" || url == "http://localhost/apiecetoyou/index.php?p=add-blog"){
                    let selectBody = document.getElementById("add_blog_category")
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
    get product categories
    */
    function getProductCategories(){
        
        $.ajax({  
            type: 'GET',  
            url: 'app.php?action=get-product-categories',
            success: function(response) {
                
                if(response == 2){
                    let db_response = document.getElementById("db_response").classList
                    document.getElementById("db_response").style.display="flex"
                    db_response.add("bg-warning")
                        $('#get_response').html('No Categories Found')
    
                }else{
                    let categories = JSON.parse(response)
                    if(url == "http://localhost/apiecetoyou/?p=adminshop" || url == "http://localhost/apiecetoyou/index.php?p=adminshop"){
                        let selectBody = document.getElementById("shop_product_category")
                        selectBody.innerHTML =="";
                        
                        categories.forEach(function(category){
                        /* select options */
                        let option = document.createElement("option")
                        option.value = category.category_id;
                        option.innerHTML = category.category_name
                        selectBody.appendChild(option)
                        })
                    }else if(url == "http://localhost/apiecetoyou/?p=add-product" || url == "http://localhost/apiecetoyou/index.php?p=add-product"){
                        let selectBody = document.getElementById("product_category")
                        selectBody.innerHTML =="";
                        categories.forEach(function(category){
                        /* select options */
                        let option = document.createElement("option")
                        option.value = category.category_id;
                        option.innerHTML = category.category_name
                        selectBody.appendChild(option)
                        })
                    }else{
                        let tableBody = document.getElementById("tbl_product_categories")
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
                let db_response = document.getElementById("db_response").classList
                document.getElementById("db_response").style.display="flex"
                db_response.add("bg-warning")
                    $('#get_response').html('No Roles Found')
    
            }else{
            let roles = JSON.parse(response)
            if(url == "http://localhost/apiecetoyou/?p=members" || url == "http://localhost/apiecetoyou/index.php?p=members"){
                
                roles.forEach(function(role){
                let selectBody = document.getElementById("member_role")
                selectBody.innerHTML =="";
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
                let db_response = document.getElementById("db_response").classList
                document.getElementById("db_response").style.display="flex"
                db_response.add("bg-warning")
                    $('#get_response').html('No Roles Found')
    
            }if(url == "http://localhost/apiecetoyou/?p=home" || url == "http://localhost/apiecetoyou" || url == "http://localhost/apiecetoyou/"){
                let settings = JSON.parse(response)
                let setting = settings[0]
                document.getElementById("contact_email").innerHTML = `${setting.email}`
                document.getElementById("contact_phone").innerHTML = `${setting.phone}`

                /* map */
               // Initialize the map and set its view to your dynamic coordinates
                const map = L.map('map').setView([setting.latitude, setting.longitude], 13);

                // Add a tile layer (map graphics)
                L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png?api_key=fe7340cd-8d34-4459-a623-656aef831b85', {
                maxZoom: 20,
                attribution: '© OpenStreetMap contributors'
                }).addTo(map);

                // Create a custom marker using FontAwesome icon
                const customIcon = L.divIcon({
                className: 'custom-div-icon', // Custom class
                html: "<i class='fas fa-map-marker-alt fa-3x' style='color:red'></i>", // FontAwesome icon
                iconSize: [30, 30], // Size of the icon
                iconAnchor: [15, 30], // Position the icon properly
                });

                // Add the custom marker to the map
                L.marker([setting.latitude, setting.longitude], { icon: customIcon })
                .addTo(map)
                .bindPopup(`<p class='pin-point'>Angaza Ministries</p>`)
                .openPopup();
                /* end of map */

            }else if(url == "http://localhost/apiecetoyou/?p=event-details" || url == "http://localhost/apiecetoyou/index.php?p=event-details"){
                let settings = JSON.parse(response)
                let setting = settings[0]

                document.getElementById("event_phone").innerHTML = setting.phone
                document.getElementById("event_email").innerHTML = setting.email

            }else{
            let settings = JSON.parse(response)
            let setting = settings[0]
                document.getElementById("latitude").value = setting.latitude
                document.getElementById("longitude").value = setting.longitude
                document.getElementById("email").value = setting.email
                document.getElementById("phone").value = setting.phone
                document.getElementById("currency").value = setting.currency
                document.getElementById("smtp_email").value = setting.smtp_email
                document.getElementById("smtp").value = setting.smtp
                document.getElementById("smtp_server").value = setting.smtp_server
                document.getElementById("smtp_port").value = setting.smtp_port
            } 
        }
    });
    }
    function getUsers(){
        $.ajax({  
            type: 'GET',  
            url: 'app.php?action=get-users',
            success: function(response) {
                if(response == 2){
                    let db_response = document.getElementById("db_response").classList
                    document.getElementById("db_response").style.display="flex"
                    db_response.add("bg-warning")
                        $('#get_response').html('No Users Found')
        
                }else{
                let users = JSON.parse(response)
                let user = users[0]
                    let tableBody = document.getElementById("tbl_profile")
                    tableBody.innerHTML = `<p class="text-primary fw-bold">Account Details</p>
                    <form id="frmProfile">
                    <div class="form-group top-20">
                    <input type="text" id="email" value="${user.username}" placeholder="Email/Username" class="form-control" ${universal_disabled ? 'readonly' : ''} required>
                    </div>
                    <div class="form-group top-20">
                    <input type="password" id="password" placeholder="********" class="form-control" ${universal_disabled ? 'readonly' : ''} required>
                    </div>
                    <div class="form-group top-20">
                    <input type="password" id="new_password" placeholder="New Password" class="form-control" ${universal_disabled ? 'readonly' : ''} required>
                    </div>
                    <div class="form-group top-20">
                    <input type="password" id="confirm_password" placeholder="Confirm Password" class="form-control" ${universal_disabled ? 'readonly' : ''} required>
                    </div>
                    <div class="form-group top-20">
                    <button ${universal_disabled ? 'hidden' : ''} class="btn btn-primary save-profile" >SAVE <i class="fa-solid fa-save"></i></button>
                    </div>
                    </form>
                    <div class="form-group top-20">
                    <button ${universal_disabled ? '' : 'hidden'} class="btn btn-primary edit-profile">EDIT <i class="fa-solid fa-edit"></i></button>`
                } 
            }
        });
        }
/* get subscribers */
function getSubscribers(){
    $.ajax({  
        type: 'GET',  
        url: 'app.php?action=get-subscribers',
        success: function(response) {
            
            if(response == 2){
                let db_response = document.getElementById("db_response").classList
                document.getElementById("db_response").style.display="flex"
                db_response.add("bg-warning")
                    $('#get_response').html('No Subscribers Found')
    
            }else{
            let subscribers = JSON.parse(response)
            let tableBody = document.getElementById("tbl_subscribers")
            tableBody.innerHTML = "";
            subscribers.forEach(function(subscriber){

                function showStatus(){
                    if(subscriber.status == '0'){
                        return `<i class="fa-solid fa-toggle-off disable-subscriber text-muted"></i>`
                    }else{
                        return `<i class="fa-solid fa-toggle-on enable-subscriber text-primary"></i>`
                    }
                }
                function subscriberStatus(){
                    if(subscriber.status == '0'){
                        return `<span>ACTIVE</span>`
                    }else{
                        return `<span class="text-danger">INACTIVE</span>`
                    }
                }

                let row = document.createElement("tr"); // Create a new table row
    
                // Create table cells for each piece of data
                let idCell = document.createElement("td");
                idCell.textContent = subscriber.id;
                idCell.className = "fw-bold"
                idCell.hidden = true;
        
                let nameCell = document.createElement("td");
                nameCell.className = "form-group-flex"
                nameCell.innerHTML = `
                <div class="form-group">
                <input type="text" class="form-control subscriber_name" value="${subscriber.name}" name="subscriber.name" readonly />
                </div>
                <div class="form-group">
                <input type="text" class="form-control subscriber_email" value="${subscriber.email}" name="subscriber.email" readonly />
                </div>`

                let statusCell = document.createElement("td")
                statusCell.innerHTML = `${subscriberStatus()}`
                
                let actionCell = document.createElement('td');
                actionCell.innerHTML = `
                <i class="fa-solid fa-edit text-primary edit-subscriber" ></i>
                ${showStatus()}
                <i class="fa-solid fa-trash text-danger del-subscriber"></i>`
                // Append cells to the row
                row.appendChild(idCell);
                row.appendChild(nameCell);
                row.appendChild(statusCell)
                row.appendChild(actionCell);
        
                // Append the row to the table body
                tableBody.appendChild(row);
                $('#tbl').DataTable();
                
            })
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
                let db_response = document.getElementById("db_response").classList
                document.getElementById("db_response").style.display="flex"
                db_response.add("bg-warning")
                    $('#get_response').html('No Events Found')

            }else if(url == "http://localhost/apiecetoyou/?p=home" || url == "http://localhost/apiecetoyou" || url == "http://localhost/apiecetoyou/"){
                let events = JSON.parse(response)
                let tableBody = document.getElementById("home_events")
                tableBody.innerHTML = ""

                events.slice(0, 4).forEach(function(event){
                    let card = document.createElement("div")
                    card.className = "card"
                    card.innerHTML = `<div class="card-body">
                            <p class="card-text text-third"> ${formatEventTime(event.date, event.duration) }</p>
                            <h3 style="cursor:pointer" class="text-primary">${ event.name }</h3>
                            <p class="card-text text-muted"><i class="fa-solid fa-location-crosshairs"></i> ${ event.location }</p>
                        </div>`
                        
                    tableBody.appendChild(card)
                })

            }else if(url =="http://localhost/apiecetoyou/?p=events" || url =="http://localhost/apiecetoyou/index.php?p=events"){
                let events = JSON.parse(response)
                let tableBody = document.getElementById("tbl_events")
                tableBody.innerHTML = "";
                events.forEach(function(event){
                    let row = document.createElement("div")
                    row.className = "col-3"
                    row.innerHTML = `
                    <div class="card">
                    <img src="assets/images/bg/events/${event.banner}" alt="" class="card-img-top">
                    <div class="card-body position-relative">
                    <div class="card-body-inner">
                    <h3 class="text-third">${event.name }</h3>
                    <div class="col-12">
                    <p class="text-primary">Date & Time</p>
                    <p class="text-muted"><i class="fa-regular fa-clock"></i> ${ formatEventTime(event.date, event.duration)} </p>
                    <p class="text-primary" style="margin-top:20px !important">Location</p>
                    <p class="text-muted"><i class="fa-solid fa-location-crosshairs"></i> ${event.location}</p>
                    </div>
                    <div class="col-12 bottom-holder" style="border-top:1px solid rgb(230,230,230)">
                    <p class="event-id" hidden>${event.id}</p>
                    <button class="btn btn-primary-box btn-primary client-view-event">
                    READ MORE
                    </button>
                    </div>
                    </div>
                    </div>
                    </div>`

                    tableBody.appendChild(row)
                })
            }else if(url =="http://localhost/apiecetoyou/?p=event-details" || url =="http://localhost/apiecetoyou/index.php?p=event-details"){
                let events = JSON.parse(response)
                let tableBody = document.getElementById("event_details_events")
                tableBody.innerHTML = "";
                events.slice(0,4).forEach(function(event){
                    let row = document.createElement("div")
                    row.className = "col-3"
                    row.innerHTML = `
                    <div class="card">
                    <img src="assets/images/bg/events/${event.banner}" alt="" class="card-img-top">
                    <div class="card-body position-relative">
                    <div class="card-body-inner">
                    <h3 class="text-third">${event.name }</h3>
                    <div class="col-12">
                    <p class="text-primary">Date & Time</p>
                    <p class="text-muted"><i class="fa-regular fa-clock"></i> ${ formatEventTime(event.date, event.duration)} </p>
                    <p class="text-primary" style="margin-top:20px !important">Location</p>
                    <p class="text-muted"><i class="fa-solid fa-location-crosshairs"></i> ${event.location}</p>
                    </div>
                    <div class="col-12 bottom-holder" style="border-top:1px solid rgb(230,230,230)">
                    <p class="event-id" hidden>${event.id}</p>
                    <button class="btn btn-primary-box btn-primary client-view-event">
                    READ MORE
                    </button>
                    </div>
                    </div>
                    </div>
                    </div>`

                    tableBody.appendChild(row)
                })
            }else{
                let events = JSON.parse(response)
                let tableBody = document.getElementById("tbl_events")
                tableBody.innerHTML = "";
                events.forEach(function(event){
                    let row = document.createElement("div"); // Create a new table row
                    row.className = "tbl-card-holder card-container";
        
                    // Create cards for events
                    let single_event = document.createElement("div");
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

                    let id_holder = document.createElement("div")
                    id_holder.setAttribute("hidden", true)
                    id_holder.className = "event-card-id"
                    id_holder.innerText = event.id

                    let button_view = document.createElement("div")
                    button_view.className = "col-6"
                    button_view.innerHTML=`<button class="card-btn btn-transparent view-event">
    <i class="fa-solid fa-eye text-primary"></i>
    </button>`

                    let button_delete = document.createElement("div")
                    button_delete.className = "col-6"
                    button_delete.innerHTML=`<button class="card-btn del-event">
      <i class="fa-solid fa-trash text-danger"></i>
    </button>`

                    //append children
                    bottom_row.appendChild(button_view)
                    bottom_row.appendChild(button_delete)
                    bottom_row.appendChild(id_holder)
                    //card body
                    card_body.appendChild(title)
                    card_body.appendChild(date_time_title)
                    card_body.appendChild(date_time)
                    //card_content
                    card_content.appendChild(img)
                    card_content.appendChild(card_body)
                    card_content.appendChild(bottom_row)
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
get events
*/
function getBlogs(){
    $.ajax({  
        type: 'GET',  
        url: 'app.php?action=get-blogs',
        success: function(response) {
            
            if(response == 2){
                let db_response = document.getElementById("db_response").classList
                document.getElementById("db_response").style.display="flex"
                db_response.add("bg-warning")
                    $('#get_response').html('No Blogs Found')

            }else{
                let blogs = JSON.parse(response)
                if(url == "http://localhost/apiecetoyou/?p=blogs" || url == "http://localhost/apiecetoyou/index.php?p=blogs"){
                    let tableBody = document.getElementById("tbl_blogs")
                    tableBody.innerHTML = "";
                    let recent_post = document.getElementById("recent_posts")
                    recent_post.innerHTML = ""

                    blogs.forEach(function(blog){
                        let row = document.createElement("div")
                        row.className = "col-11 card blog-card"
                        row.style.marginBottom = "30px !important";
                        row.innerHTML = `<img  src="assets/images/bg/blogs/${blog.banner}" class="w-100 banner-img" alt="">
                        <div class="blog-detail four-vh">
                            <div class="icon">
                                <span class="text-muted"><i class="fa-solid fa-user"></i> ${blog.writer}</span>
                            </div>
                            <div class="icon">
                                <span class="text-muted"><i class="fa-solid fa-calendar"></i> ${formatDate(blog.created)}</span>
                            </div>
                            <div class="icon">
                                <span class="text-muted"><i class="fa-solid fa-tags"></i> ${blog.category}</span>
                            </div>
                        </div>
                        <p class="blog-id" hidden>${blog.id}</p>
                        <h3 class="text-third four-vh"> ${blog.name}</h3>
                        <button class="btn btn-primary four-vh read-blog">READ MORE</button>`

                        //apend child
                        tableBody.appendChild(row)
                    })

                    //view recent posts
                    blogs.slice(0, 3).forEach(function(blog){
                        let card = document.createElement("div")
                        card.className = "col-11 card small-blog"
                        card.innerHTML = `
                            <div class="col-4">
                                    <img src="assets/images/bg/blogs/${blog.banner}" class="w-100" alt="">
                                </div>
                                <div class="col-8">
                                    <p class="fw-bold two-vh text-primary"> ${blog.name}</p>
                                    <p class="text-muted"><i class="fa-solid fa-calendar"></i>  ${formatDate(blog.created)}</p>
                                </div>
                        `
                            
                        recent_post.appendChild(card)
                    })
                }else{
                let tableBody = document.getElementById("tbl_blogs")
                tableBody.innerHTML = "";
                blogs.forEach(function(blog){
                    let row = document.createElement("div"); // Create a new table row
                    row.className = "blog-holder col-5 card";
        
                    let blog_banner = document.createElement("img")
                    blog_banner.className = "w-100"
                    blog_banner.src = "assets/images/bg/blogs/"+ blog.banner

                    let row_highlight = document.createElement("div")
                    row_highlight.className = "row highlight"

                    let user = document.createElement("div")
                    user.className = "col-4"
                    user.innerHTML = `<p class="text-muted"><i class="fa-solid fa-user"></i> ${blog.writer}</p>`

                    let cal = document.createElement("div")
                    cal.className = "col-4"
                    cal.innerHTML = `<p class="text-muted"><i class="fa-solid fa-calendar"></i> ${formatDate(blog.created)}</p>`
                    
                    let category = document.createElement("div")
                    category.className = "col-4"
                    category.innerHTML = `<p class="text-muted"><i class="fa-solid fa-calendar"></i> ${blog.category}</p>`

                    let blog_body = document.createElement("div")
                    blog_body.className = "col-12"
                    blog_body.innerHTML = `<h4 class="text-primary">${blog.name}</h4>
                <div class="col-12 row bottom_row" style="height:fit-content !important">
                    <div class="blog-id" hidden>${blog.id}</div>
                    <div class="col-6">   
                        <button class="btn btn-primary btn-read-blog">MORE <i class="fa-solid fa-eye"></i></button>
                    </div>
                    <div class="col-6">
                        <button class="btn btn-primary btn-del-blog">DELETE <i class="fa-solid fa-trash"></i></button>
                    </div>
                </div>`

                    //append children
                    row_highlight.appendChild(user)
                    row_highlight.appendChild(cal)
                    row_highlight.appendChild(category)
                    
                    row.appendChild(blog_banner)
                    row.appendChild(row_highlight)
                    row.appendChild(blog_body)

            
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
    add location
    */
    $('#addLocation').on('submit', function(e){
        e.preventDefault()
        let db_response = document.getElementById("db_response").classList
        $.ajax({  
            type: 'POST',  
            url: 'app.php?action=add-location', 
            data: $('#addLocation').serialize(),
            success: function(response) {
                document.getElementById("db_response").style.display="flex"
                if(response == 1){
                    db_response.add("bg-primary")
                    $('#get_response').html('Successful')
                    getLocations();
                }else if( response == 2 ){
                    db_response.add("bg-danger")
                    $('#get_response').html('Failed')
                }else{
                    db_response.add("bg-warning")
                    $('#get_response').html('Already Exists')
                }
            }
        });
    })
    /*
    add member
    */
    $('#addMember').on('submit', function(e){
        e.preventDefault()
        let db_response = document.getElementById("db_response").classList
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
                document.getElementById("db_response").style.display="flex"
                if(response == 1){
                    db_response.add("bg-primary")
                    $('#get_response').html('Successful')
                    getMembers();
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
    })
    /*
    set settings 
    */
    $('#setSettings').on('submit', function(e){
        e.preventDefault()
        let db_response = document.getElementById("db_response").classList
        $.ajax({  
            type: 'POST',  
            url: 'app.php?action=edit-setting', 
            data: $('#setSettings').serialize(),
            success: function(response) {
                document.getElementById("db_response").style.display="flex"
                if(response == 1){
                    db_response.add("bg-primary")
                    $('#get_response').html('Successful')
                    getSettings();
                }else if( response == 2 ){
                    db_response.add("bg-danger")
                    $('#get_response').html('Failed')
                }else{
                    db_response.add("bg-warning")
                    $('#get_response').html('Already Exists')
                }
            }
        });
    })
    /*  other settings  */
    $('#otherSettings').on('submit', function(e){
        e.preventDefault()
        let db_response = document.getElementById("db_response").classList
        if(confirm("Changing these settings will affect system operation, Do you want to continue?") == true){
        $.ajax({  
            type: 'POST',  
            url: 'app.php?action=edit-other-setting', 
            data: $('#otherSettings').serialize(),
            success: function(response) {
                alert(response)
                document.getElementById("db_response").style.display="flex"
                if(response == 1){
                    db_response.add("bg-primary")
                    $('#get_response').html('Successful')
                    getSettings();
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
    })

    /* view blog*/
    $(document).on('click', '.btn-read-blog', function(){
        let db_response = document.getElementById("db_response").classList
        let id = $(this).closest('.bottom_row').find('.blog-id').text().trim()
        $.ajax({  
            type: 'POST',  
            url: 'app.php?action=view-blog', 
            data: {
                id:id
            },
            success: function(response) {
                document.getElementById("db_response").style.display="flex"
                setTimeout(() => {
                    location.href="?p=view-blog"
                }, 200);
            }
        });
        
    })
    $(document).on('click', '.read-blog', function(){
        let id = $(this).closest('.blog-card').find('.blog-id').text().trim()
        $.ajax({  
            type: 'POST',  
            url: 'app.php?action=view-blog', 
            data: {
                id:id
            },
            success: function(response) {
                setTimeout(() => {
                    location.href="?p=read-blog"
                }, 200);
            }
        });
        
    })
    /* delete blog */
    $(document).on('click', '.btn-del-blog', function(){
        let db_response = document.getElementById("db_response").classList
        let status = confirm("Delete this blog?")
        if(status == true){
        let id = $(this).closest('.bottom_row').find('.blog-id').text().trim()
        $.ajax({  
            type: 'POST',  
            url: 'app.php?action=del-blog', 
            data: {
                id:id
            },
            success: function(response) {
                document.getElementById("db_response").style.display = "flex";
                if (response == 1) {
                    db_response.add("bg-primary");
                    $('#get_response').html('Successful');
                    getBlogs();
                } else if (response == 2) {
                    db_response.add("bg-danger");
                    $('#get_response').html('Failed');
                } else {
                    db_response.add("bg-warning");
                    $('#get_response').html('Already Exists');
                }
            }
        });
    }
    })
   
    /* edit locations */
    $(document).on('click', '.btn-edit-location', function() {
        let db_response = document.getElementById("db_response").classList
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
        let db_response = document.getElementById("db_response").classList
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
   /* edit profile */
   $(document).on('click', '.edit-profile', function() {
        universal_disabled = !universal_disabled
        getUsers();
   })
   /* save profile */
   $(document).on('click', '.save-profile', function(e) {
    e.preventDefault()
    let db_response = document.getElementById("db_response").classList
        let new_password = document.getElementById("new_password").value
        let confirm_password = document.getElementById("confirm_password").value
        let email = document.getElementById("email").value
        let passowrd = document.getElementById("password").value


        if(new_password != confirm_password){
            db_response.add("bg-danger")
            document.getElementById("db_response").style.display="flex"
             $('#get_response').html('Passwords do not match!')
        }else{
            $.ajax({  
                type: 'POST',  
                url: 'app.php?action=save-profile', 
                data: {
                    "email": email,
                    "password": passowrd,
                    "new_password": new_password
                },
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
                        db_response.add("bg-danger")
                        $('#get_response').html('Incorrect Password!')
                    }
                }
            });
        }
    
})
   /* edit subscriber */
   $(document).on('click', '.edit-subscriber', function() {
    let db_response = document.getElementById("db_response").classList
    // Find the associated input field
   let row = $(this).closest('tr');
   let input = row.find('td:eq(1)').find('.subscriber_name');
   let input_email = row.find('td:eq(1)').find('.subscriber_email');
   let id = row.find('td:eq(0)').text().trim()

   // Check if the input is readonly
   if (input.prop('readonly')) {
       // Make input editable
       input.prop('readonly', false);
       input_email.prop('readonly', false);
       input.focus()
       // Change button to 'btn-check'
       $(this)
           .removeClass('fa-edit text-primary edit-subscriber')
           .addClass('fa-check text-success edit-subscriber');
   } else {
       // Make input readonly
       input.prop('readonly', true);
       
       // Change button back to 'btn-edit'
       $(this)
           .removeClass('fa-check text-success edit-subscriber')
           .addClass('fa-edit text-primary edit-subscriber');
       
       let new_name = row.find('td:eq(1)').find('.subscriber_name').val()
       let new_email = row.find('td:eq(1)').find('.subscriber_email').val()
       
       $.ajax({  
           type: 'POST',  
           url: 'app.php?action=edit-subscriber', 
           data: {
               id:id,
               name:new_name,
               email:new_email
           },
           success: function(response) {
            console.log(response)
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
        let db_response = document.getElementById("db_response").classList
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
        let db_response = document.getElementById("db_response").classList
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
                    if(response == 1){
                        db_response.add("bg-primary")
                        $('#get_response').html('Successful')
                        getLocations();
                    }else if( response == 2 ){
                        db_response.add("bg-danger")
                        $('#get_response').html('Failed')
                    }
                }
            });
    }

    });
    /*
    delete category
    */
    $(document).on('click', '.btn-del-category', function() {
        let db_response = document.getElementById("db_response").classList
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
                    if(response == 1){
                        db_response.add("bg-primary")
                        $('#get_response').html('Successful')
                        getCategories();
                    }else if( response == 2 ){
                        db_response.add("bg-danger")
                        $('#get_response').html('Failed')
                    }
                }
            });
    }

    });



    /*
    add location
    */
    $('#addCategory').on('submit', function(e){
        e.preventDefault()
        let db_response = document.getElementById("db_response").classList
        $.ajax({  
            type: 'POST',  
            url: 'app.php?action=add-category', 
            data: $('#addCategory').serialize(),
            success: function(response) {
                document.getElementById("db_response").style.display="flex"
                if(response == 1){
                    db_response.add("bg-primary")
                    $('#get_response').html('Successful')
                    getCategories();
                }else if( response == 2 ){
                    db_response.add("bg-danger")
                    $('#get_response').html('Failed')
                }else{
                    db_response.add("bg-warning")
                    $('#get_response').html('Already Exists')
                }
            }
        });
    })
    /*
    add location
    */
    $('#addRole').on('submit', function(e){
        e.preventDefault()
        let db_response = document.getElementById("db_response").classList
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
        let db_response = document.getElementById("db_response").classList
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
    add blog
    */
    $('#addBlog').on('submit', function(e){
        e.preventDefault()
        let db_response = document.getElementById("db_response").classList
        const editorContent = tinymce.get('editor_content').getContent()
        const formData = new FormData(document.getElementById('addBlog'))
        formData.append('content', editorContent);

        $.ajax({  
            type: 'POST',  
            url: 'app.php?action=add-blog', 
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
    * add product category
    */
    $('#productCategory').on('submit', function(e){
        e.preventDefault()
        let db_response = document.getElementById("db_response").classList
        $.ajax({  
            type: 'POST',  
            url: 'app.php?action=add-product-category', 
            data: $('#productCategory').serialize(),
            success: function(response) {
                document.getElementById("db_response").style.display="flex"
                if(response == 1){
                    db_response.add("bg-primary")
                    $('#get_response').html('Successful')
                    getProductCategories();
                }else if( response == 2 ){
                    db_response.add("bg-danger")
                    $('#get_response').html('Failed')
                }else{
                    db_response.add("bg-warning")
                    $('#get_response').html('Already Exists')
                }
            }
        });
    })
    /*
    * delete event
    */
    $(document).on('click', '.del-event', function() {
        let db_response = document.getElementById("db_response").classList
        // Find the associated input field
        let status = confirm("Delete this Event?")
        if(status == true){
            const id = $(this).closest('.card').find('.event-card-id').text().trim()
            $.ajax({  
                type: 'POST',  
                url: 'app.php?action=del-event', 
                data: {id: id},
                success: function(response) {
                    document.getElementById("db_response").style.display = "flex";
                    if (response == 1) {
                        db_response.add("bg-primary");
                        $('#get_response').html('Successful');
                        getEvents();
                    } else if (response == 2) {
                        db_response.add("bg-danger");
                        $('#get_response').html('Failed');
                    } else {
                        db_response.add("bg-warning");
                        $('#get_response').html('Already Exists');
                    }
                }
            });
            getEvents();
        }

    });
    /* view event */
    $(document).on('click', '.view-event', function() {
        let db_response = document.getElementById("db_response").classList
        // Find the associated input field
       let id = $(this).closest('.row').find('.event-card-id').text().trim()
       $.ajax({  
        type: 'POST',  
        url: 'app.php?action=view-event', 
        data: {
            id:id
        },
        success: function(response) {
            document.getElementById("db_response").style.display="flex"
            setTimeout(() => {
                location.href="?p=view-event"
            }, 200);
        }
    });
    });
/* mark registration */
$(document).on('click', '.check-registration', function() {
    if(confirm("Mark as attended?") == true){
    let db_response = document.getElementById("db_response").classList
    // Find the associated input field
   let id = $(this).closest('tr').find('td:eq(0)').text().trim()
   $.ajax({  
    type: 'POST',  
    url: 'app.php?action=check-registration', 
    data: {
        id:id
    },
    success: function(response) {
        console.log(response)
        if (response == 1) {
            db_response.add("bg-primary");
            $('#get_response').html('Successful');
            getRegistrations();
        } else if (response == 2) {
            db_response.add("bg-danger");
            $('#get_response').html('Failed');
        }
    }
    });
    }
});
/* cancel registration */
$(document).on('click', '.cancel-registration', function() {
    if(confirm("Cancel registration?") == true){
    let db_response = document.getElementById("db_response").classList
    // Find the associated input field
   let id = $(this).closest('tr').find('td:eq(0)').text().trim()
   $.ajax({  
    type: 'POST',  
    url: 'app.php?action=cancel-registration', 
    data: {
        id:id
    },
    success: function(response) {
        console.log(response)
        if (response == 1) {
            db_response.add("bg-primary");
            $('#get_response').html('Successful');
            getRegistrations();
        } else if (response == 2) {
            db_response.add("bg-danger");
            $('#get_response').html('Failed');
        }
    }
    });
    }
});
/* re register */
$(document).on('click', '.reg-registration', function() {
    if(confirm("Re-register this attendee?") == true){
    let db_response = document.getElementById("db_response").classList
    // Find the associated input field
   let id = $(this).closest('tr').find('td:eq(0)').text().trim()
   $.ajax({  
    type: 'POST',  
    url: 'app.php?action=reg-registration', 
    data: {
        id:id
    },
    success: function(response) {
        console.log(response)
        if (response == 1) {
            db_response.add("bg-primary");
            $('#get_response').html('Successful');
            getRegistrations();
        } else if (response == 2) {
            db_response.add("bg-danger");
            $('#get_response').html('Failed');
        }
    }
    });
    }
});
/* delete registration */
$(document).on('click', '.del-registration', function() {
    if(confirm("Delete this registration?") == true){
    let db_response = document.getElementById("db_response").classList
    // Find the associated input field
   let id = $(this).closest('tr').find('td:eq(0)').text().trim()
   $.ajax({  
    type: 'POST',  
    url: 'app.php?action=del-registration', 
    data: {
        id:id
    },
    success: function(response) {
        console.log(response)
        if (response == 1) {
            db_response.add("bg-primary");
            $('#get_response').html('Successful');
            getRegistrations();
        } else if (response == 2) {
            db_response.add("bg-danger");
            $('#get_response').html('Failed');
        }
    }
    });
    }
});
/* register event */
$(document).on('click', '#register-event', function() {
    // Find the associated input field
   let id = document.getElementById("event_id").innerText
   $.ajax({  
    type: 'POST',  
    url: 'app.php?action=register-event', 
    data: {
        id:id
    },
    success: function(response) {
        setTimeout(() => {
            location.href="?p=register"
        }, 200);
    }
});
});

/* view event */
    $(document).on('click', '.client-view-event', function() {
        // Find the associated input field
       let id = $(this).closest('.bottom-holder').find('.event-id').text().trim()
       $.ajax({  
        type: 'POST',  
        url: 'app.php?action=view-event', 
        data: {
            id:id
        },
        success: function(response) {
            setTimeout(() => {
                location.href="?p=event-details"
            }, 200);
        }
    });
    });
    /*
    * view event
    */
    $(document).on('click', '.view-product', function() {
        // Find the associated input field
       let id = $(this).closest('.row').find('.product-card-id').text().trim()
       $.ajax({  
        type: 'POST',  
        url: 'app.php?action=view-product', 
        data: {
            id:id
        },
        success: function(response) {
            document.getElementById("db_response").style.display="flex"
            setTimeout(() => {
                location.href="?p=view-product"
            }, 200);
        }
    });

    });
    /*
    add product
    */
   $('#addProduct').on('submit', function(e){
    e.preventDefault();
    let db_response = document.getElementById("db_response").classList

        const formData = new FormData(document.getElementById('addProduct'))
        const editorContent = tinymce.get('editor_content').getContent()
        formData.append('content', editorContent);

        $.ajax({  
            type: 'POST',  
            url: 'app.php?action=add-product', 
            data: formData,
            processData: false,
            contentType: false,
            success: function(response) {
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
   /* send newsletter */
   $(document).on('click', '.send-letter', function(){
    let db_response = document.getElementById("db_response").classList
    const title = document.getElementById("newsletter_title").value
    const editorContent = tinymce.get('editor_content').getContent()
        if(title =="" || editorContent == ""){
            document.getElementById("db_response").style.display = "flex";
            db_response.add("bg-danger");
            $('#get_response').html('Please Fill All The Details!');
            return
        }else{
            const formData = new FormData($('#sendNewsletter')[0]);
                // Add additional data
                formData.append("content", editorContent);

            $.ajax({  
                type: 'POST',  
                url: 'app.php?action=send-letter', 
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
                        $('#get_response').html('No Active Subscribers Found');
                    }else if(response == 3){
                        db_response.add("bg-danger");
                        $('#get_response').html('SMTP Configurations Not Found!');
                    }else if(response == 4){
                        db_response.add("bg-danger");
                        $('#get_response').html('Please check your internet!');
                    } else {
                        db_response.add("bg-warning");
                        $('#get_response').html('Error sending mail!');
                    }
                },
                error: function(xhr, status, error) {
                    console.error('AJAX error:', error);
                }
            });

        }
   })
     /* send newsletter */
     $(document).on('click', '.save-draft', function(){
        let db_response = document.getElementById("db_response").classList
        const title = document.getElementById("newsletter_title").value
        const editorContent = tinymce.get('editor_content').getContent()
            if(title =="" || editorContent == ""){
                document.getElementById("db_response").style.display = "flex";
                db_response.add("bg-danger");
                $('#get_response').html('Please Fill All The Details!');
                return
            }else{
                const formData = new FormData($('#sendNewsletter')[0]);
                    // Add additional data
                    formData.append("content", editorContent);
    
                $.ajax({  
                    type: 'POST',  
                    url: 'app.php?action=save-draft', 
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
                        }else {
                            db_response.add("bg-warning");
                            $('#get_response').html('Error saving draft');
                        }
                    },
                    error: function(xhr, status, error) {
                        console.error('AJAX error:', error);
                    }
                });
    
            }
       })
   /* disable subsriber */
   $(document).on('click', '.disable-subscriber', function(){
    let db_response = document.getElementById("db_response").classList
    if(confirm("Disable this subscriber?")){
        let row = $(this).closest('tr');
        let id = row.find('td:eq(0)').text().trim()
        $.ajax({  
            type: 'POST',  
            url: 'app.php?action=disable-subscriber', 
            data: {
                id:id
            },
            success: function(response) {
            console.log(response)
                document.getElementById("db_response").style.display="flex"
                if(response == 1){
                    db_response.add("bg-primary")
                    $('#get_response').html('Successful')
                    getSubscribers()
                }else if( response == 2 ){
                    db_response.add("bg-danger")
                    $('#get_response').html('Failed')
                }
            }
        });
    }

   })
   /* enable subsriber */
   $(document).on('click', '.enable-subscriber', function(){
    let db_response = document.getElementById("db_response").classList
    if(confirm("Enable this subscriber?")){
        let row = $(this).closest('tr');
        let id = row.find('td:eq(0)').text().trim()
        $.ajax({  
            type: 'POST',  
            url: 'app.php?action=enable-subscriber', 
            data: {
                id:id
            },
            success: function(response) {
            console.log(response)
                document.getElementById("db_response").style.display="flex"
                if(response == 1){
                    db_response.add("bg-primary")
                    $('#get_response').html('Successful')
                    getSubscribers()
                }else if( response == 2 ){
                    db_response.add("bg-danger")
                    $('#get_response').html('Failed')
                }
            }
        });
    }

   })
   /* delete subsriber */
   $(document).on('click', '.del-subscriber', function(){
    let db_response = document.getElementById("db_response").classList
    if(confirm("Delete this subscriber?")){
        let row = $(this).closest('tr');
        let id = row.find('td:eq(0)').text().trim()
        $.ajax({  
            type: 'POST',  
            url: 'app.php?action=del-subscriber', 
            data: {
                id:id
            },
            success: function(response) {
            console.log(response)
                document.getElementById("db_response").style.display="flex"
                if(response == 1){
                    db_response.add("bg-primary")
                    $('#get_response').html('Successful')
                    getSubscribers()
                }else if( response == 2 ){
                    db_response.add("bg-danger")
                    $('#get_response').html('Failed')
                }
            }
        });
    }

   })
   /* add subscriber */
   $('#addSubscriber').on('submit', function(e){
    e.preventDefault()
    let db_response = document.getElementById("db_response").classList
    $.ajax({  
        type: 'POST',  
        url: 'app.php?action=add-subscriber', 
        data: $('#addSubscriber').serialize(),
        success: function(response) {
            document.getElementById("db_response").style.display = "flex";
            if (response == 1) {
                db_response.add("bg-primary");
                $('#get_response').html('Successful');
                getSubscribers();
            } else if (response == 2) {
                db_response.add("bg-danger");
                $('#get_response').html('Failed');
            } else {
                db_response.add("bg-warning");
                $('#get_response').html('Already Exists');
            }
        }
   })
   })
   $('#regSubscriber').on('submit', function(e){
    e.preventDefault()
    $.ajax({  
        type: 'POST',  
        url: 'app.php?action=add-subscriber', 
        data: $('#regSubscriber').serialize(),
        success: function(response) {
            if (response == 1) {
                $('#footer_response').html('Registered. Thank You');
            } else if (response == 2) {
                $('#footer_response').html('Failed');
            } else {
                $('#footer_response').html('Already Registered');
            }
            setTimeout(() => {
                $('#footer_response').html('');
            }, 2000);
        }
   })
   })
   /* add volunteer */
   $('#addVolunteer').on('submit', function(e){
    e.preventDefault()
    $.ajax({  
        type: 'POST',  
        url: 'app.php?action=add-volunteer', 
        data: $('#addVolunteer').serialize(),
        success: function(response) {
            if (response == 1) {
                $('#volunteer_response').html('Registered. Thank You');
            } else if (response == 2) {
                $('#volunteer_response').html('Failed');
            } else {
                $('#volunteer_response').html('Already Registered');
            }
            setTimeout(() => {
                $('#volunteer_response').html('');
            }, 2000);
        }
   })
   })
   /* add contact */
   $('#addContact').on('submit', function(e){
    e.preventDefault()
    $.ajax({  
        type: 'POST',  
        url: 'app.php?action=add-contact', 
        data: $('#addContact').serialize(),
        success: function(response) {
            if (response == 1) {
                $('#contact_response').html('Sent, We will get back to you. Thank You');
            } else if (response == 2) {
                $('#contact_response').html('Failed');
            }
            setTimeout(() => {
                $('#contact_response').html('');
            }, 2000);
        }
   })
   })
   /* register event */
   $('#registerEvent').on('submit', function(e){
    e.preventDefault()
    $.ajax({  
        type: 'POST',  
        url: 'app.php?action=reg-event', 
        data: $('#registerEvent').serialize(),
        success: function(response) {
            if (response == 1) {
                $('#contact_response').html('Registered, We will get back to you. Thank You');
            } else if (response == 2) {
                $('#contact_response').html('Failed');
            } else if (response == 3) {
                $('#contact_response').html('Already Registered');
            }
            setTimeout(() => {
                $('#contact_response').html('');
            }, 2000);
        }
   })
   })
   /* add program */
   $('#add_program').on('submit', function(e){
    e.preventDefault()
    let db_response = document.getElementById("db_response").classList
    $.ajax({  
        type: 'POST',  
        url: 'app.php?action=add-program', 
        data: $('#add_program').serialize(),
        success: function(response) {
            console.log(response)
            document.getElementById("db_response").style.display = "flex";
            if (response == 1) {
                db_response.add("bg-primary");
                $('#get_response').html('Successful');
                $("#add_program")[0].reset();
                getPrograms();
            } else if (response == 2) {
                db_response.add("bg-danger");
                $('#get_response').html('Failed');
            } else {
                db_response.add("bg-warning");
                $('#get_response').html('Already Exists');
            }
        }
   })
   })
/* get programs */
function getPrograms(){
    $.ajax({  
        type: 'GET',  
        url: 'app.php?action=get-programs',
        success: function(response) {
            if(response == 2){
                let db_response = document.getElementById("db_response").classList
                document.getElementById("db_response").style.display="flex"
                db_response.add("bg-warning")
                    $('#get_response').html('No Programs Found')
    
            }else{
            let programs = JSON.parse(response)

            if(url == "http://localhost/apiecetoyou/?p=home" || url == "http://localhost/apiecetoyou/index.php?p=home" || url == "http://localhost/apiecetoyou/" || url == "http://localhost/apiecetoyou/index.php"){
                let tableBody = document.getElementById("home_programs")
                tableBody.innerHTML = "";
                programs.slice(0, 4).forEach(function(program){
                    
                    let row = document.createElement("div")
                    row.className = "card"
                    row.innerHTML =`<div class="text-center">
                        ${program.icon}
                    </div>
                    <div class="card-body">
                        <h5 class="card-title text-primary">${program.title}</h5>
                        <p class="card-text">${program.content}</p>
                    </div>`

                    tableBody.appendChild(row)
                })

            }else{
            
                let tableBody = document.getElementById("tbl_programs")
                tableBody.innerHTML = "";
                programs.forEach(function(program){
                let row = document.createElement("tr"); // Create a new table row
    
                // Create table cells for each piece of data
                let idCell = document.createElement("td");
                idCell.textContent = program.id;
                idCell.hidden = true;
        
                let nameCell = document.createElement("td");
                nameCell.textContent = program.title

                let iconCell = document.createElement("td");
                iconCell.innerHTML = `${program.icon}`

                let textCell = document.createElement("td");
                textCell.innerHTML = `${program.content}`
                textCell.hidden = true
                
                let actionCell = document.createElement('td');
                actionCell.innerHTML = `<i class="fa-solid fa-eye view-program text-primary"></i>
                <i class="fa-solid fa-trash text-danger btn-del-program"></i>`
                // Append cells to the row
                row.appendChild(idCell);
                row.appendChild(nameCell);
                row.appendChild(iconCell);
                row.appendChild(textCell);
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
/* view program */
$(document).on('click', '.view-program', function(){
    let id = $(this).closest("tr").find("td:eq(0)").text().trim()
    let program = $(this).closest("tr").find("td:eq(1)").text().trim()
    let icon = $(this).closest("tr").find("td:eq(2)").html();
    let content = $(this).closest("tr").find("td:eq(3)").text().trim()

    document.getElementById("program_title").value = program
    document.getElementById('program_content').value = (content)
    document.getElementById('program_icon').value = (icon)
    document.getElementById('program_id').value = (id)

    document.getElementById("add_program").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
})
/* view value */
$(document).on('click', '.view-value', function(){
    let id = $(this).closest("tr").find("td:eq(0)").text().trim()
    let program = $(this).closest("tr").find("td:eq(1)").text().trim()
    let icon = $(this).closest("tr").find("td:eq(2)").html();
    let content = $(this).closest("tr").find("td:eq(3)").text().trim()

    document.getElementById("value_title").value = program
    document.getElementById('value_content').value = (content)
    document.getElementById('value_icon').value = (icon)
    document.getElementById('value_id').value = (id)

    document.getElementById("add_value").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
})
/* delete program */
$(document).on('click', '.btn-del-program', function(){
    let db_response = document.getElementById("db_response").classList
    if(confirm("Delete this program?") == true){
    let id = $(this).closest("tr").find("td:eq(0)").text().trim()
        $.ajax({  
            type: 'POST',  
            url: 'app.php?action=del-program', 
            data: {id: id},
            success: function(response) {
                document.getElementById("db_response").style.display = "flex";
                if (response == 1) {
                    db_response.add("bg-primary");
                    $('#get_response').html('Successful');
                    getPrograms();
                } else if (response == 2) {
                    db_response.add("bg-danger");
                    $('#get_response').html('Failed');
                }
            }
        })
    }
})
/* delete value */
$(document).on('click', '.del-value', function(){
    let db_response = document.getElementById("db_response").classList
    if(confirm("Delete this value?") == true){
    let id = $(this).closest("tr").find("td:eq(0)").text().trim()
        $.ajax({  
            type: 'POST',  
            url: 'app.php?action=del-value', 
            data: {id: id},
            success: function(response) {
                document.getElementById("db_response").style.display = "flex";
                if (response == 1) {
                    db_response.add("bg-primary");
                    $('#get_response').html('Successful');
                    getValues();
                } else if (response == 2) {
                    db_response.add("bg-danger");
                    $('#get_response').html('Failed');
                }
            }
        })
    }
})

/* add value */
$('#add_value').on('submit', function(e){
    e.preventDefault()
    let db_response = document.getElementById("db_response").classList
    $.ajax({  
        type: 'POST',  
        url: 'app.php?action=add-value', 
        data: $('#add_value').serialize(),
        success: function(response) {
            document.getElementById("db_response").style.display = "flex";
            if (response == 1) {
                db_response.add("bg-primary");
                $('#get_response').html('Successful');
                $("#add_value")[0].reset();
                getValues();
            } else if (response == 2) {
                db_response.add("bg-danger");
                $('#get_response').html('Failed');
            } else {
                db_response.add("bg-warning");
                $('#get_response').html('Already Exists');
            }
        }
   })
   })
/* get values */
function getValues(){
    $.ajax({  
        type: 'GET',  
        url: 'app.php?action=get-values',
        success: function(response) {
            if(response == 2){
                let db_response = document.getElementById("db_response").classList
                document.getElementById("db_response").style.display="flex"
                db_response.add("bg-warning")
                    $('#get_response').html('No Values Found')
    
            }else{
            let programs = JSON.parse(response)

            if(url == "http://localhost/apiecetoyou/?p=about-us" || url == "http://localhost/apiecetoyou/index.php?p=about-us"){
                let tableBody = document.getElementById("about_top_values")
                tableBody.innerHTML = "";
                programs.slice(0, 3).forEach(function(program){
                    let value_card = document.createElement("div")
                    value_card.className = "col-3 value bg-gradient"
                    value_card.innerHTML = `<div class="inner-value text-white">
                    ${program.icon}
                    <p class="text-white">${program.title}</p>
                    </div>`
                    tableBody.appendChild(value_card)
                })

                //bottom values
                let bottomBody = document.getElementById("bottom_values")
                bottomBody.innerHTML = ""
                programs.forEach(function(program){
                    let value_card = document.createElement("div")
                    value_card.className = "col-4 card four-vh"
                    value_card.innerHTML = `<div class="icon-holder">
                    ${program.icon}
                    </div>
                    <p class="two-vh text-third fw-bold text-uppercase">${program.title}</p>
                    <p class="text-muted two-vh">${program.content}</p>`

                    bottomBody.appendChild(value_card)
                })

            }else{
            
                let tableBody = document.getElementById("tbl_values")
                tableBody.innerHTML = "";
                programs.forEach(function(program){
                let row = document.createElement("tr"); // Create a new table row
    
                // Create table cells for each piece of data
                let idCell = document.createElement("td");
                idCell.textContent = program.id;
                idCell.hidden = true;
        
                let nameCell = document.createElement("td");
                nameCell.textContent = program.title

                let iconCell = document.createElement("td");
                iconCell.innerHTML = `${program.icon}`

                let textCell = document.createElement("td");
                textCell.innerHTML = program.content
                textCell.hidden = true
                
                let actionCell = document.createElement('td');
                actionCell.innerHTML = `<i class="fa-solid fa-eye view-value text-primary"></i>
                <i class="fa-solid fa-trash text-danger del-value"></i> `
                // Append cells to the row
                row.appendChild(idCell);
                row.appendChild(nameCell);
                row.appendChild(iconCell);
                row.appendChild(textCell)
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
    *
    * end of methodds
    *
    */
});