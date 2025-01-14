$( document ).ready(function() {
    /* universal variables*/
    let url = window.location.href
    let universal_disabled = true
    let disabled_quantity = true
    let isHidden = false;

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
    function formatEventDate(dateString) {
        // Split the datetime string by space to separate the date and time
        // let datePart = dateString.split(' ')[0];
        // return datePart;


        // Parse the input date string into a Date object
        let date = new Date(dateString);

        // Subtract one day (24 hours in milliseconds)
        date.setDate(date.getDate() - 1);

        // Format the date back to 'YYYY-MM-DD'
        let year = date.getFullYear();
        let month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
        let day = String(date.getDate()).padStart(2, '0');

        return `${year}-${month}-${day}`;
    }
    
    function formatDateTimeStamp(date) {
        let year = date.getFullYear();
        let month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
        let day = String(date.getDate()).padStart(2, '0');
        let hours = String(date.getHours()).padStart(2, '0');
        let minutes = String(date.getMinutes()).padStart(2, '0');
        let seconds = String(date.getSeconds()).padStart(2, '0');

        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    }
      

    /* load data */
    smallNavigation();
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
    getPayments();
    getRegistrations();
    getToPayOrders();
    if(url == "http://localhost/apiecetoyou/?p=contacts" || url == "http://localhost/apiecetoyou/index.php?p=contacts"){
        getContacts();
        getVolunteers();
    }
    
    if(url == "http://localhost/apiecetoyou/?p=view-event" || url == "http://localhost/apiecetoyou/index.php?p=view-event" || url == "http://localhost/apiecetoyou/?p=event-details" || url == "http://localhost/apiecetoyou/index.php?p=event-details"){
        viewEvent();
    }
    if(url == "http://localhost/apiecetoyou/?p=add-event" || url == "http://localhost/apiecetoyou/?p=add-product" || url =="http://localhost/apiecetoyou/?p=add-blog" || url =="http://localhost/apiecetoyou/?p=add-newsletter" || url =="http://localhost/apiecetoyou/?p=messages" || url =="http://localhost/apiecetoyou/index.php?p=messages"){
        InitEditor();
    }
    if(url== "http://localhost/apiecetoyou/?p=view-product" || url== "http://localhost/apiecetoyou/index.php?p=view-product" || url == "http://localhost/apiecetoyou/?p=product-details" || url == "http://localhost/apiecetoyou/index.php?p=product-details"){
        viewProduct();
    }
    if(url== "http://localhost/apiecetoyou/?p=cart" || url== "http://localhost/apiecetoyou/index.php?p=cart"){
        displayCart();
    }
    if(url== "http://localhost/apiecetoyou/?p=shop" || url== "http://localhost/apiecetoyou/index.php?p=shop"){
        updateCartCount();
    }
    if(url== "http://localhost/apiecetoyou/?p=adminblogs" || url== "http://localhost/apiecetoyou/?p=blogs" || url== "http://localhost/apiecetoyou/?p=read-blog" || url== "http://localhost/apiecetoyou/index.php?p=read-blog"){
        getBlogs();
        getBlogCount();
    }
    if(url== "http://localhost/apiecetoyou/?p=view-blog" || url== "http://localhost/apiecetoyou/index.php?p=view-blog" || url == "http://localhost/apiecetoyou/?p=read-blog" || url == "http://localhost/apiecetoyou/index.php?p=read-blog"){
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
    if(url == "http://localhost/apiecetoyou/?p=orders" || url == "http://localhost/apiecetoyou/index.php?p=orders" || url == "http://localhost/apiecetoyou/?p=adminhome" || url == "http://localhost/apiecetoyou/index.php?p=adminhome" ){
        getOrders();
    }
    if(url == "http://localhost/apiecetoyou/?p=view-order" || url == "http://localhost/apiecetoyou/index.php?p=view-order" ){
        viewOrder();
    }
    if(url == "http://localhost/apiecetoyou/?p=messages" || url == "http://localhost/apiecetoyou/index.php?p=messages" ){
        getMessages();
    }
    if(url == "http://localhost/apiecetoyou/?p=newsletter-details" || url == "http://localhost/apiecetoyou/index.php?p=newsletter-details" ){
        viewNewsletter();
    }
    if(url == "http://localhost/apiecetoyou/?p=adminhome" || url == "http://localhost/apiecetoyou/index.php?p=adminhome" ){
        getHomeCount();
    }
    if(url == "http://localhost/apiecetoyou/?p=adminhome" || url == "http://localhost/apiecetoyou/index.php?p=adminhome" || url == "http://localhost/apiecetoyou/?p=home" || url == "http://localhost/apiecetoyou/index.php?p=home"  || url == "http://localhost/apiecetoyou/"  || url == "http://localhost/apiecetoyou"){
        getCalendarEvents();
    }

function smallNavigation(){
// Initialization
window.addEventListener("DOMContentLoaded", () => {
    // Enable scrolling in case it was previously disabled
    document.body.style.overflow = "";

    // Remove any lingering event listeners
    window.removeEventListener("keydown", disableScrollKeys);
    window.removeEventListener("wheel", preventScroll, { passive: false });

    // Attach the event listener to the button or trigger
    const toggleButton = document.getElementById("toggle-navbar"); // Replace with your button's ID
    toggleButton.addEventListener("click", showNavbar);
});
}
 // Toggle the navigation bar visibility
$('#show_navbar').on('click', function(){

    isHidden = !isHidden;
    const nav = document.getElementById("small-nav");
    const inner_nav = document.getElementById("inner_nav")

    if (isHidden) {
        // Change background color
        nav.style.backgroundColor = "#83a234ff";
        inner_nav.style.backgroundColor = "#83a234ff";
        inner_nav.style.display = "block"

        // Disable scrolling
        document.body.style.overflow = "hidden";

        // Disable keyboard scrolling
        window.addEventListener("keydown", disableScrollKeys);

        // Disable mouse wheel scrolling
        window.addEventListener("wheel", preventScroll, { passive: false });
    } else {
        // Change background color
        nav.style.backgroundColor = "transparent";
        inner_nav.style.backgroundColor = "transparent";
        inner_nav.style.display="none"

        // Enable scrolling
        document.body.style.overflow = "";

        // Re-enable keyboard scrolling
        window.removeEventListener("keydown", disableScrollKeys);

        // Re-enable mouse wheel scrolling
        window.removeEventListener("wheel", preventScroll, { passive: false });
    }

})

// Helper method to prevent default scrolling with keys
function disableScrollKeys(event) {
    const keysToDisable = ["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "]; // Space for spacebar scrolling
    if (keysToDisable.includes(event.key)) {
        event.preventDefault();
    }
}

// Helper method to prevent default scrolling with mouse wheel
function preventScroll(event) {
    event.preventDefault();
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
/* disable editor */
function disableEditor(){
    tinymce.get('editor_content').destroy();
}
function disableEditor2(){
    tinymce.get('editor_content_2').destroy();
}
function formatEventTime(startDateStr, eventDuration) {
    const startDate = new Date(startDateStr);
    const endDate = new Date(startDate.getTime() + eventDuration * 60 * 60 * 1000); // Calculate end time

    const dateOptions = { day: '2-digit', month: 'short', year: 'numeric' };
    const formattedDate = startDate.toLocaleDateString('en-GB', dateOptions);
    const startTime = startDate.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
    const endTime = endDate.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });

    return `${formattedDate}, ${startTime} to ${endTime}`;
}
function getHomeCount(){
    $.ajax({  
        type: 'GET',  
        url: 'app.php?action=get-home-count',
        success: function(response) {
            let homecounts = JSON.parse(response)
            let homecount = homecounts[0]
            document.getElementById("event_count").innerHTML = homecount.event
            document.getElementById("member_count").innerHTML = homecount.member
            document.getElementById("subscriber_count").innerHTML = homecount.subscriber
        }
    })
}
  //wait for element
//edit product
$(document).on('click', '.send-confirmation-mail', function(){
    if(confirm("Do you want to send status email comfirmation to the client?") == true){
        let db_response = document.getElementById("db_response").classList
        let id = document.getElementById("client_id").value
        let order_status = document.getElementById("order_status").value
        $.ajax({  
            type: 'POST',  
            url: 'app.php?action=send-client-mail', 
            data: {
                id:id,
                status:order_status
            },
            success: function(response) {
                // $('#to_send').html(response);
                document.getElementById("db_response").style.display = "flex";
                if (response == 1) {
                    db_response.add("bg-primary");
                    $('#get_response').html('Successful');
                    // disableEditor()
                } else if (response == 2) {
                    db_response.add("bg-danger");
                    $('#get_response').html('Failed');
                } else if(response == 3){
                    db_response.add("bg-warning");
                    $('#get_response').html('Change Order Status before sending mail');
                } else {
                    db_response.add("bg-warning");
                    $('#get_response').html('Already Exists');
                }
            },
            error: function(xhr, status, error) {
                console.error('AJAX error:', error);
            }
        });
    }
})
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
        disableEditor();

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
//edit order
$(document).on('click', '.edit-order', function(){
    let db_response = document.getElementById("db_response").classList
    universal_disabled = !universal_disabled
    viewOrder()
    if(universal_disabled == true){
        let id = document.getElementById("client_id").value
        let name = document.getElementById("client_name").value
        let email = document.getElementById("client_email").value
        let phone = document.getElementById("client_phone").value
        let status = document.getElementById("order_status").value
        let region = document.getElementById("client_region").value
        let residence = document.getElementById("client_residence").value

        const formData = new FormData();
        formData.append("id", id)
        formData.append("name", name)
        formData.append("email", email)
        formData.append("phone", phone)
        formData.append("status", status)
        formData.append("region", region)
        formData.append("residence", residence)

        $.ajax({  
            type: 'POST',  
            url: 'app.php?action=edit-client-details', 
            data: formData,
            processData: false,
            contentType: false,
            success: function(response) {
                document.getElementById("db_response").style.display = "flex";
                if (response == 1) {
                    db_response.add("bg-primary");
                    $('#get_response').html('Successful');
                        viewOrder();
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
        disableEditor();

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
        disableEditor();

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
                    viewBlog()
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

    }
    
    
});
/* view newsletter */
function viewNewsletter(){
    $.ajax({  
        type: 'GET',  
        url: 'app.php?action=get-letter',
        success: function(response) {
            let newsletters = JSON.parse(response)
            //admins
            let newsletter = newsletters[0]

            let tableBody = document.getElementById("letter_body")
            tableBody.innerHTML = ""

            let toggle_button_body = document.getElementById("view_newsletter_toggle")
            toggle_button_body.innerHTML=`
            <button class="btn btn-primary edit-letter" ><i class="${universal_disabled ? 'fa-solid fa-edit ' : 'fa-solid fa-check'}"></i></button>
        `
            //body
            tableBody.innerHTML = `
            <form id="sendNewsletter">
                <input id="letter_id"  name="id" value="${newsletter.status}">
                <div class="row">
                <div class="col-6">
                    <div class="col-12 row" style="margin-top:20px !important">
                        <label class="text-muted">Newsletter Title</label>
                    </div>
                    <input type="text" class="form-control" value="${newsletter.title}" ${universal_disabled ? 'readonly': ''} placeholder="Newsletter Title" name="title" id="newsletter_title">
                </div>
                <div class="col-6">
                <div class="col-12 row" style="margin-top:20px !important">
                        <label class="text-muted">Attachment (Optional)</label>
                    </div>
                    <input type="file" class="form-control" name="attachments[]" ${universal_disabled ? 'disabled': ''}  multiple >
                </div>
                </div>
                <label class="text-muted">Newsletter</label>
                <!-- editor -->
                <div class="form-group" id="editor-panel">
                <div id="editor_content">${newsletter.content}</div>
                <!-- end of editor -->
                </div>
            </form>
            `

            }
        })
}
/* edit */
$(document).on('click', '.edit-letter', function(){
    universal_disabled = !universal_disabled
    viewNewsletter();
    if(universal_disabled == false){
        setTimeout(() => {
            InitEditor();
        }, 500);
    }else{
        disableEditor();
    }
})
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
                    if(url == "http://localhost/apiecetoyou/?p=home" || url == "http://localhost/apiecetoyou/index.php?p=home" || url == "http://localhost/apiecetoyou/" || url == "http://localhost/apiecetoyou/index.php" || url == "http://localhost/apiecetoyou"){
                        //home
                        let tableBody = document.getElementById("home_about")
                        tableBody.innerHTML = `<p class="text-white four-vh">WHO ARE WE?</p>
                    <h4 class="text-white">${about.title}</h4>
                    <p class="text-white">${about.vision}</p>`

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
    const offer_Content = tinymce.get('editor_content').getContent()
    const mission_Content = tinymce.get("editor_content_2").getContent()
    //disable editor
    disableEditor();
    disableEditor2();
    
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
                function showAction(){
                    if(newsletter.status == '0'){
                        return `<i class="fa-solid fa-eye view-letter"></i>
                                <i class="fa-solid fa-trash del-letter"></i>`
                    }else{
                        return `<i class="fa-solid fa-eye view-letter"></i>
                        <i class="fa-solid fa-paper-plane send-draft-letter"></i>
                                <i class="fa-solid fa-trash del-letter"></i>`
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
                actionCell.innerHTML = showAction();

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
    /* get payments*/
function getToPayOrders(){
    $.ajax({  
        type: 'GET',  
        url: 'app.php?action=get-pending-orders',
        success: function(response) {
            if(response == 2){
                let db_response = document.getElementById("db_response").classList
                document.getElementById("db_response").style.display="flex"
                db_response.add("bg-warning")
                    $('#get_response').html('No Pending Orders')
    
            }else{
                let orders = JSON.parse(response)
                let tableBody = document.getElementById("tbl_pending_orders");
                    tableBody.innerHTML = "";

                    orders.forEach(function(order){
                        //check status here
                        function showStatus(){
                            if(order.status == '0'){
                                return `<span class="text-secondary">PENDING</span>`
                            }else if(order.status == '1'){
                                return `<span class="text-success">COMPLETE</span>`
                            }else if(order.status == '2'){
                                return `<span class="text-success">SHIPPED</span>`
                            }else if(order.status == '4'){
                                return `<span class="text-success">APPROVED</span>`
                            }else{
                                return `<span class="text-danger">CANCELLED</span>`
                            }
                        }
        
                        let row = document.createElement("tr"); // Create a new table row
            
                        // // Create table cells for each piece of data
                        let idCell = document.createElement("td");
                        idCell.textContent = order.id;
                        idCell.hidden = true;
                
                        let nameCell = document.createElement("td");
                        nameCell.innerHTML = `<p class="fw-bold"><span>Name: </span><span class="text-primary">${order.name}</span></p>
                        <p><span>Phone: </span>${order.phone}</p>
                        <p><span>Order No.: </span><span class="order_number">${order.order}<span></p>
                        <p>${showStatus()}</p>
                        <p>${formatDateWithTime(order.date)}</p>
                        <p><span>Total: </span><span class="product-total">${order.total}<span>`
                        
                        let actionCell = document.createElement('td');
                        actionCell.innerHTML = `<i class="fa-solid fa-plus add-order-payment" style="padding:5px 5px !important; border-radius:5px; background-color:rgb(0,130,189); font-weight:bold; color:white;"></i> `
        
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
    })
}
function getPayments(){
    $.ajax({  
        type: 'GET',  
        url: 'app.php?action=get-payments',
        success: function(response) {
            if(response == 2){
                let db_response = document.getElementById("db_response").classList
                document.getElementById("db_response").style.display="flex"
                db_response.add("bg-warning")
                    $('#get_response').html('No Payments Found')
    
            }else{
                let orders = JSON.parse(response)
                let tableBody = document.getElementById("tbl_complete_orders");
                    tableBody.innerHTML = "";

                    orders.forEach(function(order){
                        //check status here
                        function showStatus(){
                            if(order.status == '0'){
                                return `<span class="text-secondary">PENDING</span>`
                            }else if(order.status == '1'){
                                return `<span class="text-success">COMPLETE</span>`
                            }else if(order.status == '2'){
                                return `<span class="text-success">SHIPPED</span>`
                            }else if(order.status == '4'){
                                return `<span class="text-success">APPROVED</span>`
                            }else{
                                return `<span class="text-danger">CANCELLED</span>`
                            }
                        }
        
                        let row = document.createElement("tr"); // Create a new table row
            
                        // // Create table cells for each piece of data
                        let idCell = document.createElement("td");
                        idCell.textContent = order.id;
                        idCell.hidden = true;
                
                        let nameCell = document.createElement("td");
                        nameCell.innerHTML = `<p class="fw-bold"><span>Order No.: </span><span class="text-primary">${order.order}</span></p>
                        <p><span>ID.: </span><span class="order_number">${order.transaction}<span></p>
                        <p>${formatDateWithTime(order.date)}</p>
                        <p><span>Total: </span><span class="product-total">${order.total}<span>
                        <p><span>Paid: </span><span class="product-total">${order.paid}<span>
                        <p><span>Method: </span><span class="product-total">${order.method}<span>`
                        
                        let actionCell = document.createElement('td');
                        actionCell.innerHTML = `<p><span>Bal: </span><span class="product-total">${order.total - order.paid} `
        
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
    })
}
$(document).on('click', '.add-order-payment', function(){
    let order_number = $(this).closest('tr').find('.order_number').text().trim()
    let product_total = $(this).closest('tr').find('.product-total').text().trim()
    document.getElementById("order_number").value = order_number
    document.getElementById("product_total").value = product_total
})
    /* get orders*/
function getOrders(){
    $.ajax({  
        type: 'GET',  
        url: 'app.php?action=get-orders',
        success: function(response) {
            if(response == 2){
                let db_response = document.getElementById("db_response").classList
                document.getElementById("db_response").style.display="flex"
                db_response.add("bg-warning")
                    $('#get_response').html('No Orders Found')
    
            }else{
                let orders = JSON.parse(response)
                if(url == "http://localhost/apiecetoyou/?p=adminhome" || url == "http://localhost/apiecetoyou/index.php?p=adminhome"){
                    let tableBody = document.getElementById("home_orders");
                    tableBody.innerHTML = "";

                    // Get today's date in local time
                    let today = new Date();
                    today.setHours(0, 0, 0, 0); // Set time to 00:00:00 for accurate comparison

                    orders.forEach(function(order) {
                        // Convert order.date timestamp to a Date object
                        let orderDate = new Date(order.date); 
                        orderDate.setHours(0, 0, 0, 0); // Normalize to midnight for comparison

                        // Check if the order's date matches today's date
                        if (orderDate.getTime() === today.getTime()) {
                            function showStatus() {
                                if (order.status == '0') {
                                    return `<span class="text-secondary">PENDING</span>`;
                                } else if (order.status == '1') {
                                    return `<span class="text-success">COMPLETE</span>`;
                                } else if (order.status == '2') {
                                    return `<span class="text-success">SHIPPED</span>`;
                                } else if (order.status == '4') {
                                    return `<span class="text-success">APPROVED</span>`;
                                } else {
                                    return `<span class="text-danger">CANCELLED</span>`;
                                }
                            }

                            let order_row = document.createElement("tr");
                            let client_cell = document.createElement("td");
                            client_cell.innerHTML = order.name;

                            let order_cell = document.createElement("td");
                            order_cell.innerHTML = `<p>${order.order}</p>
                                                    <p>${showStatus()}</p>`;

                            order_row.appendChild(client_cell);
                            order_row.appendChild(order_cell);
                            tableBody.appendChild(order_row);
                        }
                    });


                    
                }else{
                
                let tableBody = document.getElementById("tbl_orders")
                tableBody.innerHTML = "";
                orders.forEach(function(order){
                //check status here
                function showStatus(){
                    if(order.status == '0'){
                        return `<span class="text-secondary">PENDING</span>`
                    }else if(order.status == '1'){
                        return `<span class="text-success">COMPLETE</span>`
                    }else if(order.status == '2'){
                        return `<span class="text-success">SHIPPED</span>`
                    }else if(order.status == '4'){
                        return `<span class="text-success">APPROVED</span>`
                    }else{
                        return `<span class="text-danger">CANCELLED</span>`
                    }
                }

                let row = document.createElement("tr"); // Create a new table row
    
                // // Create table cells for each piece of data
                let idCell = document.createElement("td");
                idCell.textContent = order.id;
                idCell.hidden = true;
        
                let nameCell = document.createElement("td");
                nameCell.innerHTML = `<p class="fw-bold"><span>Name: </span><span class="text-primary">${order.name}</span></p>
                <p><span>Phone: </span>${order.phone}</p>`

                let orderCell = document.createElement("td")
                orderCell.innerHTML = `${order.order}`

                let statusCell = document.createElement("td")
                statusCell.innerHTML = `${showStatus()}`

                let dateCell = document.createElement("td");
                dateCell.innerHTML = `${formatDateWithTime(order.date)}`
                
                let actionCell = document.createElement('td');
                actionCell.innerHTML = `<i class="fa-solid fa-eye view-order"></i>
                <i class="fa-solid fa-trash del-order"></i> `

                // // Append cells to the row
                row.appendChild(idCell);
                row.appendChild(nameCell);
                row.appendChild(orderCell);
                row.appendChild(statusCell);
                row.appendChild(dateCell);
                row.appendChild(actionCell);
        
                // // Append the row to the table body
                tableBody.appendChild(row);
                $('#tbl').DataTable();
            })
        
    }
}
            
        }
    });
    }
/* view order */
$(document).on('click', '.view-order', function(){
    let id = $(this).closest('tr').find('td:eq(0)').text().trim()

    $.ajax({  
        type: 'POST',  
        url: 'app.php?action=view-order', 
        data: {
            id:id
        },
        success: function(response) {
            setTimeout(() => {
                location.href="?p=view-order"
            }, 200);
        }
    });
})
$(document).on('click', '.del-order', function(){
    if(confirm("Delete this order?") == true){
    let id = $(this).closest('tr').find('td:eq(0)').text().trim()
    let db_response = document.getElementById("db_response").classList

    $.ajax({  
        type: 'POST',  
        url: 'app.php?action=del-order', 
        data: {
            id:id
        },
        success: function(response) {
            document.getElementById("db_response").style.display = "flex";
            if (response == 1) {
                db_response.add("bg-primary");
                $('#get_response').html('Successful');
                getOrders();
            } else if (response == 2) {
                db_response.add("bg-danger");
                $('#get_response').html('Failed');
            }
        }
    });
}
})
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
        url: 'app.php?action=del-volunteer', 
        data: {id: id},
        success: function(response) {
            document.getElementById("db_response").style.display = "flex";
            if (response == 1) {
                db_response.add("bg-primary");
                $('#get_response').html("Successful");
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
                        if(product.product_balance > 0){
                            function checkDiscount(){
                                if(product.product_discount > 0){
                                    let product_price = product.product_price
                                    let product_discount = product.product_discount
                                    let new_price = product_price - ((product_discount/100)* product_price)
                                    new_price = new_price.toFixed(0)
                                    return `<del>${product.product_price}</del> <span class="product-price">${new_price}</span>`
                                }else{
                                    return `<span class="product-price">${product.product_price}</span>`
                                }
                            }
    
                            let row = document.createElement("div")
                            row.className = "custom-three"
                            row.innerHTML = `
                            <div class="card">
                            <img src="assets/images/bg/products/${product.product_image}" alt="" class="card-img-top product-img">
                            <div class="card-body position-relative">
                            <div class="card-body-inner">
                            <h3 class="text-third btn-product-name" style="cursor:pointer">${ product.product_name }</h3>
                            <div class="custom-twelve">
                            <p class="text-primary">Price</p>
                            <p class="text-muted"><i class="fa-solid fa-tag"></i> ${ checkDiscount()} ${product.currency} </p>
                            <p class="text-primary" style="margin-top:20px !important">In Stock</p>
                            <p class="text-muted"><i class="fa-solid fa-boxes"></i> <span class="product-balance">${product.product_balance}</span></p>
                            </div>
                            <div class="custom-twelve bottom-card-details" style="border-top:1px solid rgb(230,230,230)">
                            <p class="card-id" hidden>${product.product_id}</p>
                            <button class="btn btn-primary-box btn-primary btn-add-cart">
                            ADD TO CART
                            </button>
                            </div>
                            </div>
                            </div>
                            </div>`
        
                            tableBody.appendChild(row)
                        }

            
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
                    date_time.innerHTML = `<i class="fa-solid fa-coins"></i> ${product.product_price} ${product.currency}`

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
/* view order */
function viewOrder(){
    $.ajax({  
        type: 'GET',  
        url: 'app.php?action=vieworder',
        success: function(response) {
            let orders = JSON.parse(response)
            let order = orders[0]

            //show data
        let orderBody = document.getElementById("tbl_single_order")
        orderBody.innerHTML = ""

        let toggle_button_body = document.getElementById("view_order_toggle")
        toggle_button_body.innerHTML=`
        <div class="col-6">
        <button
        class="btn btn-primary edit-order"
        type = "${universal_disabled ? 'button' : 'submit'}"
      >
        <i class="${universal_disabled ? 'fa-solid fa-edit' : 'fa-solid fa-check'}"></i>
      </button>
      </div>
      <div class="col-6">
        <i class="fa-solid fa-paper-plane send-confirmation-mail"></i>
      </div>
      `
            
        //get locations
        function shoProducts(){
            return order.order_list.map(function(product, index){
                return `
                        <tr>
                        <td>${product.order_id}
                        <span class="product-id" hidden>${product.product_id}</span>
                        </td>
                        <td>
                            <p><span class="fw-bold">Name: </span> <span class="text-primar">${product.product_name}</span></p>
                            <p><span class="fw-bold">Previous Price: </span> <span class="text-primar">${product.product_price} ${order.currency}</span></p>
                            <p><span class="fw-bold">Discount: </span> <span class="text-primar">${product.product_discount} %</span></p>
                        </td>
                        <td>
                            <p><span class="fw-bold">Quantity: </span> <span class="text-primar"><input type="number" class="product-quantity" value="${product.order_product_quantity}" readonly ></span></p>
                            <p><span class="fw-bold">Price: </span> <span class="text-primar">${product.order_product_price}  ${order.currency}</span></p>
                            <p><span class="fw-bold">Total Price: </span> <span class="text-primar">${product.order_product_total_price}  ${order.currency}</span></p>
                        </td>
                        <td>
                            <i class="check-product-quantity fa-solid fa-edit edit-product-quantity"></i>
                        </td>
                        </tr>
                `
            }).join('')
            }

        function showStatus(){
            if(order.order_status == "0"){
                return `<option value="0">PENDING</option>
                        <option value="1">COMPLETE</option>
                        <option value="2">SHIP</option>
                        <option value="4">APPROVE</option>
                        <option value="3">CANCEL</option>`
            }else if(order.order_status == "1"){
                return `<option value="1">COMPLETE</option>
                        <option value="0">PENDING</option>
                        <option value="2">SHIP</option>
                        <option value="4">APPROVE</option>
                        <option value="3">CANCEL</option>`
            }else if(order.order_status == "2"){
                return `<option value="2">SHIPPPED</option>
                        <option value="1">COMPLETE</option>
                        <option value="0">PENDING</option>
                        <option value="4">APPROVE</option>
                        <option value="3">CANCEL</option>`
            }else if(order.order_status == "4"){
                return `<option value="4">APPROVED</option>
                        <option value="2">SHIPPPED</option>
                        <option value="1">COMPLETE</option>
                        <option value="0">PENDING</option>
                        <option value="3">CANCEL</option>`
            }else{
                return `<option value="3">CANCELLED</option>
                        <option value="4">APPROVE</option>
                        <option value="0">PENDING</option>
                        <option value="2">SHIP</option>
                        <option value="1">COMPLETE</option>`

            }
        }


            orderBody.innerHTML = `<div class="col-12 row" style="margin-top:20px !important">
            <div class="col-12 row">
            <p class="text-muted" style="margin-left:1% !important;">CLIENT DETAILS</p>
            </div>
      <div class="form-group">
            <input type="text" hidden value="${order.client_id}" id="client_id" />
          <label class="text-muted">Client Name</label>
          <input type="text" class="form-control"  value="${order.client_name}" ${universal_disabled ? 'readonly' : ''} id="client_name" />
          </div>
          <div class="form-group">
          <label class="text-muted">Client Phone</label>
          <input type="text" class="form-control"  value="${order.client_phone}" ${universal_disabled ? 'readonly': ''} id="client_phone">
            </div>
            <div class="form-group">
          <label class="text-muted">Client Email</label>
          <input type="text"  class="form-control"  value="${order.client_email}" ${universal_disabled ? 'readonly': ''} id="client_email">
            </div>
            <div class="form-group">
          <label class="text-muted">Client's Region</label>
          <select class="form-control" name="county" onfocus='this.size=10;' onblur='this.size=1;' 
              onchange='this.size=1; this.blur();' id="client_region" ${universal_disabled ? 'disabled': ''}>
              <option value="${order.client_county}">${order.client_county}</option>
                <option value="Baringo">Baringo</option>
                <option value="Bomet">Bomet</option>
                <option value="Bungoma">Bungoma</option>
                <option value="Busia">Busia</option>
                <option value="Elgeyo-marakwet">Elgeyo-Marakwet</option>
                <option value="Embu">Embu</option>
                <option value="Garissa">Garissa</option>
                <option value="Homa-bay">Homa Bay</option>
                <option value="Isiolo">Isiolo</option>
                <option value="Kajiado">Kajiado</option>
                <option value="Kakamega">Kakamega</option>
                <option value="Kericho">Kericho</option>
                <option value="Kiambu">Kiambu</option>
                <option value="Kilifi">Kilifi</option>
                <option value="Kirinyaga">Kirinyaga</option>
                <option value="Kisii">Kisii</option>
                <option value="Kisumu">Kisumu</option>
                <option value="Kitui">Kitui</option>
                <option value="Kwale">Kwale</option>
                <option value="Laikipia">Laikipia</option>
                <option value="Lamu">Lamu</option>
                <option value="Machakos">Machakos</option>
                <option value="Makueni">Makueni</option>
                <option value="Mandera">Mandera</option>
                <option value="Marsabit">Marsabit</option>
                <option value="Meru">Meru</option>
                <option value="Migori">Migori</option>
                <option value="Mombasa">Mombasa</option>
                <option value="Muranga">Murang'a</option>
                <option value="Nairobi">Nairobi</option>
                <option value="Nakuru">Nakuru</option>
                <option value="Nandi">Nandi</option>
                <option value="Narok">Narok</option>
                <option value="Nyamira">Nyamira</option>
                <option value="Nyandarua">Nyandarua</option>
                <option value="Nyeri">Nyeri</option>
                <option value="Samburu">Samburu</option>
                <option value="Siaya">Siaya</option>
                <option value="Taita-taveta">Taita-Taveta</option>
                <option value="Tana-river">Tana River</option>
                <option value="Tharaka-nithi">Tharaka Nithi</option>
                <option value="Trans-nzoia">Trans Nzoia</option>
                <option value="Turkana">Turkana</option>
                <option value="Uasin-gishu">Uasin Gishu</option>
                <option value="Vihiga">Vihiga</option>
                <option value="Wajir">Wajir</option>
                <option value="West-pokot">West Pokot</option>
            </select>
            </div>
            <div class="form-group">
          <label class="text-muted">Client's Residence</label>
          <input type="text"  class="form-control"  value="${order.client_residence}" ${universal_disabled ? 'readonly': ''} id="client_residence">
            </div>
            <div class="form-group">
          <label class="text-muted">Order Total Price</label>
          <input type="text"  class="form-control"  value="${order.order_total_price} ${order.currency}" readonly>
            </div>
            <div class="form-group">
          <label class="text-muted">Order Status</label>
          <select class="form-control" ${universal_disabled ? 'disabled': ''} id="order_status">
            ${showStatus()}
          </select>
          
            </div>
          <div class="form-group">
          <label class="text-muted">Order Date</label>
          <input type="text" class="form-control"  value="${formatDate(order.client_order_date)}" readonly>
          
      </div>
      
        <div class="col-12 row" style="margin-top:40px !important; display:flex;">
            <p class="text-muted" style="margin-left:1% !important;">PRODUCT DETAILS</p>
        <table id="tbl" class="table" style="width:100%">
        <thead>
        <tr>
            <th class="fw-bold">#</th>
            <th>Product Details</th>
            <th>Product Order Details</th>
            <th>Product Action</th>
        </tr>
        </thead>
        <tbody>
            ${shoProducts()}
        <tbody>
        </table>
        </div>`
                }
        //end of show data
    })
}
/* edit product quantity */
$(document).on('click', '.check-product-quantity', function(){

// Find the product quantity input field
let to_edit_quantity = $(this).closest('tr').find('.product-quantity');

// Find the edit icon
let icon = $(this);

// Check if the field is currently readonly
if (to_edit_quantity.prop('readonly')) {
    console.log("Field is readonly. Making it editable.");
    // Remove the readonly attribute to make it editable
    to_edit_quantity.prop('readonly', false);

    // Change the icon to 'save-product-quantity'
    icon.removeClass('fa-edit edit-product-quantity')
        .addClass('fa-check save-product-quantity');

    //save now
} else {
    let db_response = document.getElementById("db_response").classList
    let id = $(this).closest('tr').find('.product-id').text().trim()
    let to_edit_quantity = $(this).closest('tr').find('.product-quantity').val()
    
    $.ajax({  
        type: 'POST',  
        url: 'app.php?action=edit-order-quantity', 
        data: {
            id:id,
            quantity:to_edit_quantity
        },
        success: function(response) {
            console.log(response)
            document.getElementById("db_response").style.display = "flex";
            if (response == 1) {
                db_response.add("bg-primary");
                $('#get_response').html('Successful');
                viewOrder();
            } else if (response == 2) {
                db_response.add("bg-danger");
                $('#get_response').html('Failed');
            }else if(response == 3){
                db_response.add("bg-danger");
                $('#get_response').html('Cannot add more than available in stock!');
            }
        }
    });
    
    viewOrder();

    
}

    
})
/* get event */
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
          <input type="datetime-local" @change="checkDate" class="form-control" id="confirm_event_date"  value="${event.event_start_date}" ${universal_disabled ? 'readonly': ''} id="event_date">
          
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

        document.getElementById("blog_banner").src = "assets/images/bg/blogs/"+ blog.banner
        document.getElementById("blog_icon").innerHTML = `<span class="text-muted"><i class="fa-solid fa-user"></i> ${ blog.writer }</span>`
        document.getElementById("blog_calendar").innerHTML = `<span class="text-muted"><i class="fa-solid fa-calendar"></i> ${formatDate(blog.created)} </span>`
        document.getElementById("blog_category").innerHTML = `<span class="text-muted"><i class="fa-solid fa-tags"></i> ${ blog.category_name }</span>`
        document.getElementById("blog_name").innerHTML = blog.name
        document.getElementById("blog_content").innerHTML = blog.content


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

        if(url == "http://localhost/apiecetoyou/?p=product-details" || url == "http://localhost/apiecetoyou/index.php?p=product-details"){
            function checkProductDiscount(){
                return product.images.map(function(image, index){
                    let product_price = product.price
                    let product_discount = product.discount
                    let product_discount_price = ((product_discount/100)* product_price)
                    product_discount_price = product_discount_price.toFixed(0)
                    return `${product_discount_price}`;
                }).join('');
            }

            function checkDiscount(){
                if(product.discount > 0){
                    let product_price = product.price
                    let product_discount = product.discount
                    let new_price = product_price - ((product_discount/100)* product_price)
                    new_price = new_price.toFixed(0)
                    return `<del>${product.price}</del> <span id="single_product_id">${new_price}</span>`
                }else{
                    return `<span id="single_product_id">${product.price}</span>`
                }
            }
            
            document.getElementById("product_name").innerHTML = product.name
            document.getElementById("product_description").innerHTML = product.description
            document.getElementById("product_price").innerHTML = checkDiscount();
            document.getElementById("product_discount").innerHTML = checkProductDiscount();
            document.getElementById("product_stock").innerHTML = product.balance
            document.getElementById("product_category").innerHTML = product.category
            document.getElementById("product_id").innerHTML = product.product_id

            /* carousel */
            // Initialize the products array and process images
            const products = [];
            product.images.forEach(function (image) {
                products.push({ image_name: image.image_name });
            });

            let currentImageIndex = 0;

            // DOM Elements
            const carouselImage = document.getElementById("carouselImage");
            const prevBtn = document.getElementById("prevBtn");
            const nextBtn = document.getElementById("nextBtn");
            const indicatorsContainer = document.getElementById("indicators");

            // Initialize carousel
            function initCarousel() {
            if (products.length === 0) {
                console.error("No images found in products.");
                return;
            }
            updateImage();
            createIndicators();
            }

            // Update the displayed image
            function updateImage() {
            carouselImage.src = `assets/images/bg/products/${products[currentImageIndex].image_name}`; // Update with your actual path
            }

            // Create indicators dynamically
            function createIndicators() {
            indicatorsContainer.innerHTML = ""; // Clear existing indicators
            products.forEach((_, index) => {
                const indicator = document.createElement("span");
                indicator.classList.add("indicator");
                if (index === currentImageIndex) {
                indicator.classList.add("active");
                }
                indicator.addEventListener("click", () => goToImage(index));
                indicatorsContainer.appendChild(indicator);
            });
            }

            // Navigate to the previous image
            function prevImage() {
            currentImageIndex =
                (currentImageIndex - 1 + products.length) % products.length;
            updateImage();
            updateIndicators();
            }

            // Navigate to the next image
            function nextImage() {
            currentImageIndex = (currentImageIndex + 1) % products.length;
            updateImage();
            updateIndicators();
            }

            // Navigate to a specific image
            function goToImage(index) {
            currentImageIndex = index;
            updateImage();
            updateIndicators();
            }

            // Update active indicator
            function updateIndicators() {
            const indicators = document.querySelectorAll(".indicator");
            indicators.forEach((indicator, index) => {
                if (index === currentImageIndex) {
                indicator.classList.add("active");
                } else {
                indicator.classList.remove("active");
                }
            });
            }

            // Event Listeners
            prevBtn.addEventListener("click", prevImage);
            nextBtn.addEventListener("click", nextImage);

            // Initialize the carousel on page load
            initCarousel();

  
            /* end of carousel */

        }else{
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

    }  
    });
    }
/* view product */
$(document).on('click', '.btn-product-name', function () {
    let id = $(this).closest('.card').find('.card-id').text().trim();

    $.ajax({  
        type: 'POST',  
        url: 'app.php?action=view-product', 
        data: {
            id:id
        },
        success: function(response) {
            setTimeout(() => {
                location.href="?p=product-details"
            }, 200);
        }
    });
    
})
$(document).on('click', '.cart-product-name', function () {
    let id = $(this).closest('tr').find('td:eq(0)').find('.cart-product-id').text().trim();

    $.ajax({  
        type: 'POST',  
        url: 'app.php?action=view-product', 
        data: {
            id:id
        },
        success: function(response) {
            setTimeout(() => {
                location.href="?p=product-details"
            }, 200);
        }
    });
    
})

/* add to cart */
$(document).on('click', '.btn-add-cart', function () {
    let productId = $(this).closest('.bottom-card-details').find('.card-id').text().trim();
    let productName = $(this).closest('.card').find('.btn-product-name').text().trim();
    let productPrice = parseFloat($(this).closest('.card').find('.product-price').text().trim());
    let productImage = $(this).closest('.card').find('.product-img').attr('src').trim();
    let productBalance = parseInt($(this).closest('.card').find('.product-balance').text().trim());

    let home_response = document.getElementById("home_response")
    let home_response_inner = document.getElementById("home_response_inner")

    // Retrieve cart from localStorage or initialize an empty array
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if the product is already in the cart
    let existingProduct = cart.find(item => item.id === productId);

    if (existingProduct) {
        // Increment the quantity if it doesn't exceed product_balance
        if (existingProduct.quantity < productBalance) {
            existingProduct.quantity++;
        } else {
            home_response.style.display = "flex"
            $(home_response_inner).html('Cannot add more than Available in stock')
            return;
        }
    } else {
        // Add new product to the cart
        if (productBalance > 0) {
            cart.push({
                id: productId,
                name: productName,
                price: productPrice,
                image: productImage,
                quantity: 1,
                balance: productBalance
            });
            home_response.style.display = "flex"
            $(home_response_inner).html('Product Added To Cart')
        } else {
            home_response.style.display = "flex"
            $(home_response_inner).html('Cannot add product. Out of stock.')
            return;
        }
    }

    // Save the updated cart back to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Calculate the total price of all products in the cart
    let totalPrice = cart.reduce((sum, product) => sum + product.price * product.quantity, 0);

    // Update the cart count
    updateCartCount();
});

/* add to cart 2 */
$(document).on('click', '.btn-add-product-cart', function () {
    let productId = document.getElementById("product_id").innerHTML.trim()
    let productName = document.getElementById("product_name").innerHTML.trim()
    let productPrice = document.getElementById("single_product_id").innerHTML.trim()
    let productBalance = document.getElementById("product_stock").innerHTML.trim()
    let productImage = document.getElementById("carouselImage").getAttribute('src').trim();

    let home_response = document.getElementById("home_response")
    let home_response_inner = document.getElementById("home_response_inner")

    // Retrieve cart from localStorage or initialize an empty array
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if the product is already in the cart
    let existingProduct = cart.find(item => item.id === productId);

    if (existingProduct) {
        // Increment the quantity if it doesn't exceed product_balance
        if (existingProduct.quantity < productBalance) {
            existingProduct.quantity++;
        } else {
            home_response.style.display = "flex"
                $(home_response_inner).html('Cannot add more than Available in stock')
            return;
        }
    } else {
        // Add new product to the cart
        if (productBalance > 0) {
            cart.push({
                id: productId,
                name: productName,
                price: productPrice,
                image: productImage,
                quantity: 1,
                balance: productBalance
            });
        // alert product added
        home_response.style.display = "flex"
        $(home_response_inner).html('Product Added To Cart')
        } else {
            home_response.style.display = "flex"
                $(home_response_inner).html('Cannot add product. Out of stock.')
            return;
        }
    }

    // Save the updated cart back to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Calculate the total price of all products in the cart
    let totalPrice = cart.reduce((sum, product) => sum + product.price * product.quantity, 0);

    // Update the cart count
    updateCartCount();
});

function updateCartCount() {
    // Retrieve cart from localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Calculate the number of unique items in the cart
    let cartCount = cart.length;

    // Update the cart count in the DOM
    let cartCountElement = document.getElementById("cart_count");
    if (cartCountElement) {
        cartCountElement.textContent = cartCount;
    }

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
function displayCart() {
    // Retrieve cart from localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Find the cart table element
    let cartTable = document.getElementById("cart_table");
    let display_cart_body = document.getElementById("display_cart_body")
    let empty_cart = document.getElementById("empty_cart")
    // Clear the cart table
    cartTable.innerHTML = "";

    let totalPrice = 0; // Initialize total price

    // Populate the cart table
    cart.forEach(function (product) {
        let row = document.createElement("tr");
        row.innerHTML = `<td>
              <img src="${product.image}" alt="No image" class="cart-image" />
              <p class="text-muted cart-product-name" style="margin-top:10px !important; cursor:pointer;">${product.name}</p>
              <p hidden class="cart-product-id">${product.id}</p>
            </td>
            <td>
              <div class="quantity-control">
                <div class="quantity-side">
                <span>${product.quantity}</span>
              </div>
              <div class="control-side">
                <button class="btn btn-primary-box btn-primary add-cart-item">
                  <i class="fa-solid fa-angle-up"></i>
                </button>
                <button class="btn btn-primary-box btn-primary reduce-cart-item">
                  <i class="fa-solid fa-angle-down"></i>
                </button>
              </div>
              </div>
            </td>
            <td>${product.price}</td>
            <td>${(product.price * product.quantity).toFixed(2)}</td>
            <td>
              <i class="fa-solid fa-close bg-danger del-from-cart text-white"></i>
            </td>`;
        cartTable.appendChild(row);

        // Add the product's total price to the cart total
        totalPrice += product.price * product.quantity;
    });

    // Display a message if the cart is empty
    if (cart.length === 0) {
        display_cart_body.style.display = "none"
        empty_cart.style.display = "block"
    }

    // Log the total price of all items in the cart
    document.getElementById("cart_total").innerHTML = totalPrice.toFixed(2)

    // Update the cart count
    updateCartCount();
}

//remove from cart
$(document).on('click', '.del-from-cart', function(){
    let home_response = document.getElementById("home_response")
    let home_response_inner = document.getElementById("home_response_inner")
    let productId = $(this).closest('tr').find('.cart-product-id').text().trim()
    
    // Retrieve the cart from localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    home_response.style.display = "flex"
    $(home_response_inner).html('Product Removed From Cart')

    // Filter out the product to remove it
    cart = cart.filter(item => item.id !== productId);

    // Save the updated cart back to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Refresh the cart display
    displayCart();
})
/* addition 
and reduction
*/
// add product
$(document).off('click', '.add-cart-item').on('click', '.add-cart-item', function () {
    let home_response = document.getElementById("home_response")
    let home_response_inner = document.getElementById("home_response_inner")

    let productId = $(this).closest('tr').find('.cart-product-id').text().trim();

    // Retrieve the cart from localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Find the product in the cart
    let product = cart.find(item => item.id === productId);

    if (product) {
        // Check if the quantity is less than the available stock
        if (product.quantity < product.balance) {
            product.quantity++; // Increment by 1
        } else {
            home_response.style.display = "flex"
            $(home_response_inner).html('Cannot add more than available in stock.')
            return;
        }
    } else {
        console.error("Product not found in the cart.");
    }

    // Save the updated cart back to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Calculate and log the cart total
    let totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    console.log("Cart Total Price:", totalPrice.toFixed(2));

    // Refresh the cart display
    displayCart();
});

// Reduce Cart Item
$(document).off('click', '.reduce-cart-item').on('click', '.reduce-cart-item', function () {
    let home_response = document.getElementById("home_response")
    let home_response_inner = document.getElementById("home_response_inner")

    let productId = $(this).closest('tr').find('.cart-product-id').text().trim();

    // Retrieve the cart from localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Find the product in the cart
    let product = cart.find(item => item.id === productId);

    if (product) {
        // Check if the quantity is greater than 1
        if (product.quantity > 1) {
            product.quantity--; // Decrease the quantity
        } else {
            home_response.style.display = "flex"
            $(home_response_inner).html('Cannot reduce quantity below 1')
            return;
        }
    } else {
        console.error("Product not found in the cart.");
        return;
    }

    // Save the updated cart back to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Calculate and log the cart total
    let totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    console.log("Cart Total Price:", totalPrice.toFixed(2));

    // Refresh the cart display
    displayCart();
});

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
    let status = confirm("Deleting this product will delete all the data related to it?");
    if(status == true){
    const id = $(this).closest('.card').find('.product-card-id').text().trim()
    $.ajax({  
        type: 'POST',  
        url: 'app.php?action=del-product', 
        data: {id: id},
        success: function(response) {
            console.log(response)
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
/* view letter */
$(document).on('click', '.view-letter', function(){
    const id = $(this).closest('tr').find('td:eq(0)').text().trim()
    $.ajax({  
        type: 'POST',  
        url: 'app.php?action=view-letter', 
        data: {
            id:id
        },
        success: function(response) {
            setTimeout(() => {
                location.href="?p=newsletter-details"
            }, 200);
        }
    });
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
/* delete letter */
$(document).on('click', '.del-member', function(){
    let db_response = document.getElementById("db_response").classList
    let status = confirm("Delete this member?");
    if(status == true){
    const id = $(this).closest('tr').find('td:eq(0)').text().trim()
    $.ajax({  
        type: 'POST',  
        url: 'app.php?action=del-member', 
        data: {id: id},
        success: function(response) {
            document.getElementById("db_response").style.display = "flex";
            if (response == 1) {
                db_response.add("bg-primary");
                $('#get_response').html('Successful');
                getMembers();
            } else if (response == 2) {
                db_response.add("bg-danger");
                $('#get_response').html('Failed');
            }
        }
    });
}

})
/* delete letter */
$(document).on('click', '.send-draft-letter', function(){
    let db_response = document.getElementById("db_response").classList
    
    const id = $(this).closest('tr').find('td:eq(0)').text().trim()
    $.ajax({  
        type: 'POST',  
        url: 'app.php?action=send-draft-letter', 
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

            }else if(url == "http://localhost/apiecetoyou/?p=about-us" || url == "http://localhost/apiecetoyou/index.php?p=about-us"){
                let tableBody = document.getElementById("tbl_members")
                tableBody.innerHTML =="";
                members.forEach(function(member){
                    console.log(member)
                    let row = document.createElement("div")
                    row.className = "custom-three"
                    row.style.marginBottom = "20px";
                    row.innerHTML = `<div class="member-inner">
                    <img src="assets/images/bg/members/${member.photo}" alt=""><br>
                    <h4 class="text-black">${ member.name }</h4>
                    <p class="text-third">${ member.role }</p>
                    <div class="custom-twelve">
                    <a href="${member.facebook}" target="_blank" ><i class="fa-brands fa-facebook-f text-primary"></i></a>

                    <a href="${member.instagram}" target="_blank" ></i></a>

                    <a href="${member.linkedin}" target="_blank" ><i class="fa-brands fa-linkedin text-primary"></i></a>

                    <a href="'mailto:'${member.email}"><i class="fa-solid fa-envelope text-primary"></i></a>


                    <a href="${member.twitter}">
                    <i class="fa-brands fa-twitter text-primary"></i>
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
                actionCell.innerHTML = `<i class="fa-solid fa-trash text-danger del-member"></i>`
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
                    if(url == "http://localhost/apiecetoyou/?p=read-blog" || url == "http://localhost/apiecetoyou/index.php?p=read-blog"){
                        let selectBody = document.getElementById("tbl_user_categories")
                        selectBody.innerHTML =="";
                        
                        categories.forEach(function(category){
                        /* select options */
                        let card = document.createElement("div")
                        card.className = "custom-eleven row two-vh"
                        card.innerHTML = `
                            <p hidden class="cat-id">${category.id}</p>
                            <p class="custom-eleven">${category.name}</p>
                            <p class="custom-one">${category.count}</p>`
                        
                        //append child
                        selectBody.appendChild(card)
                    })
                    }else{
                    let selectBody = document.getElementById("tbl_user_categories")
                    selectBody.innerHTML =="";
                    
                    categories.forEach(function(category){
                    /* select options */
                    let card = document.createElement("div")
                    card.className = "custom-eleven row two-vh"
                    card.innerHTML = `
                        <p hidden class="cat-id">${category.id}</p>
                        <p class="custom-eleven">${category.name}</p>
                        <p class="custom-one">${category.count}</p>`
                    
                    //append child
                    selectBody.appendChild(card)
                    })
                }
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
                    }else if(url == "http://localhost/apiecetoyou/?p=shop" || url == "http://localhost/apiecetoyou/index.php?p=shop"){
                        let selectBody = document.getElementById("product_categories")
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
                        <i class="fa-solid fa-trash text-danger btn-del-product-category"></i> `
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
    
            }if(url == "http://localhost/apiecetoyou/?p=home" || url == "http://localhost/apiecetoyou" || url == "http://localhost/apiecetoyou/" || url == "http://localhost/apiecetoyou/index.php?p=home" || url == "http://localhost/apiecetoyou/index.php" || url == "http://localhost/apiecetoyou/?p=contact-us" || url == "http://localhost/apiecetoyou/index.php?p=contact-us" ){
                let settings = JSON.parse(response)
                let setting = settings[0]
                document.getElementById("contact_email").innerHTML = `${setting.email}`
                document.getElementById("contact_phone").innerHTML = `${setting.phone}`

                /* map */
               // Initialize the map and set its view to your dynamic coordinates
                const map = L.map('map').setView([setting.latitude, setting.longitude], 13);

                // Add a tile layer (map graphics)
                L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png?api_key=fe7340cd-8d34-4459-a623-656aef831b85', {
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

            }else if(url == "http://localhost/apiecetoyou/index.php?p=cart" || url == "http://localhost/apiecetoyou/?p=cart" ){
                let settings = JSON.parse(response)
                let setting = settings[0]
                document.getElementById("cart_currency").innerHTML = `(${setting.currency})`
                document.getElementById("cart_header_currency").innerHTML = `(${setting.currency})`
                document.getElementById("cart_total_header_currency").innerHTML = `(${setting.currency})`
            }else if(url == "http://localhost/apiecetoyou/index.php?p=product-details" || url == "http://localhost/apiecetoyou/?p=product-details" ){
                let settings = JSON.parse(response)
                let setting = settings[0]
                document.getElementById("product_currency").innerHTML = `${setting.currency}`
                document.getElementById("product_discount_currency").innerHTML = `${setting.currency}`
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

            }else if(url == "http://localhost/apiecetoyou/?p=home" || url == "http://localhost/apiecetoyou" || url == "http://localhost/apiecetoyou/" || url == "http://localhost/apiecetoyou/index.php?p=home" || url == "http://localhost/apiecetoyou/index.php"){
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
                    let currentdate = new Date(); 
                    let formattedDate = formatDateTimeStamp(currentdate);
                    if(formattedDate < event.date){
                        let row = document.createElement("div")
                    row.className = "custom-three"
                    row.innerHTML = `
                    <div class="card">
                    <img src="assets/images/bg/events/${event.banner}" alt="" class="card-img-top">
                    <div class="card-body position-relative">
                    <div class="card-body-inner">
                    <h3 class="text-third">${event.name }</h3>
                    <div class="custom-twelve">
                    <p class="text-primary">Date & Time</p>
                    <p class="text-muted"><i class="fa-regular fa-clock"></i> ${ formatEventTime(event.date, event.duration)} </p>
                    <p class="text-primary" style="margin-top:20px !important">Location</p>
                    <p class="text-muted"><i class="fa-solid fa-location-crosshairs"></i> ${event.location}</p>
                    </div>
                    <div class="custom-twelve bottom-holder" style="border-top:1px solid rgb(230,230,230)">
                    <p class="event-id" hidden>${event.id}</p>
                    <button class="btn btn-primary-box btn-primary client-view-event">
                    READ MORE
                    </button>
                    </div>
                    </div>
                    </div>
                    </div>`

                    tableBody.appendChild(row)
                    }
                    
                })
            }else if(url =="http://localhost/apiecetoyou/?p=event-details" || url =="http://localhost/apiecetoyou/index.php?p=event-details"){
                let events = JSON.parse(response)
                let tableBody = document.getElementById("event_details_events")
                tableBody.innerHTML = "";
                events.slice(0,4).forEach(function(event){
                    let row = document.createElement("div")
                    row.className = "custom-three"
                    row.innerHTML = `
                    <div class="card">
                    <img src="assets/images/bg/events/${event.banner}" alt="" class="card-img-top">
                    <div class="card-body position-relative">
                    <div class="card-body-inner">
                    <h3 class="text-third">${event.name }</h3>
                    <div class="custom-twelve">
                    <p class="text-primary">Date & Time</p>
                    <p class="text-muted"><i class="fa-regular fa-clock"></i> ${ formatEventTime(event.date, event.duration)} </p>
                    <p class="text-primary" style="margin-top:20px !important">Location</p>
                    <p class="text-muted"><i class="fa-solid fa-location-crosshairs"></i> ${event.location}</p>
                    </div>
                    <div class="custom-twelve bottom-holder" style="border-top:1px solid rgb(230,230,230)">
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
 /* get events */
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
                        row.className = "custom-eleven card blog-card"
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
                        card.className = "custom-eleven small-blog"
                        card.innerHTML = `
                            <div class="custom-four">
                                    <img src="assets/images/bg/blogs/${blog.banner}" class="w-100" alt="">
                                </div>
                                <div class="custom-eight">
                                    <p class="fw-bold two-vh text-primary"> ${blog.name}</p>
                                    <p class="text-muted"><i class="fa-solid fa-calendar"></i>  ${formatDate(blog.created)}</p>
                                </div>
                        `
                            
                        recent_post.appendChild(card)
                    })
                }else if(url == "http://localhost/apiecetoyou/?p=read-blog" || url == "http://localhost/apiecetoyou/index.php?p=read-blog"){
                    let recent_post = document.getElementById("recent_posts")
                    recent_post.innerHTML = ""
                    //view recent posts
                    blogs.slice(0, 3).forEach(function(blog){
                        let card = document.createElement("div")
                        card.className = "custom-eleven small-blog"
                        card.innerHTML = `
                            <div class="custom-four">
                                    <img src="assets/images/bg/blogs/${blog.banner}" class="w-100" alt="">
                                </div>
                                <div class="custom-eight">
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

    /*  place order  */
    $('#placeOrder').on('submit', function(e){
        e.preventDefault()
        let home_response = document.getElementById("home_response")
        let home_response_inner = document.getElementById("home_response_inner")
        // Get product details
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        let products = [];

        let totalPrice = 0;
        cart.forEach(function (product) {
            let product_id = product.id;
            let product_quantity = product.quantity;
            let product_price = product.price;
            let product_sub_total = product.price * product.quantity;

            // Cart total
            totalPrice += product.price * product.quantity;

            // Push product details as an object
            products.push({
                product_id: product_id,
                product_quantity: product_quantity,
                product_price: product_price,
                product_sub_total: product_sub_total,
            });
        });

        if(totalPrice < 1){
            displayCart();
        }else{
            //if cart not empty
            // Form data
            let formData = new FormData(document.getElementById("placeOrder"));
            formData.append("total_price", totalPrice)
            // Append products array to formData
            products.forEach(function (product) {
                formData.append("products[]", JSON.stringify(product)); // Serialize each product object
            });
            
            $.ajax({  
                type: 'POST',  
                url: 'app.php?action=place-order', 
                data: formData,
                processData: false,
                contentType: false,
                success: function(response) {
                    console.log(response)
                    if(response == 1){
                        home_response.style.display = "flex"
                        $(home_response_inner).html('Order Placed. Thank You.')
                        localStorage.clear();
                        setTimeout(() => {
                            displayCart();
                        }, 2000);
                        
                        getSettings();
                    }else if( response == 2 ){
                        home_response.style.display = "flex"
                        $(home_response_inner).html('Failed')
                    }else{
                        home_response.style.display = "flex"
                        $(home_response_inner).html('Already Exists')
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
    delete category
    */
    $(document).on('click', '.btn-del-product-category', function() {
        let db_response = document.getElementById("db_response").classList
        // Find the associated input field
        let status = confirm("Deleting This Category Will Delete All The Data Related To This It")
        if(status == true){
            let row = $(this).closest('tr');
            let id = row.find('td:eq(0)').text().trim()

            $.ajax({  
                type: 'POST',  
                url: 'app.php?action=del-product-category', 
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
    /* add payment */
    $('#addPayment').on('submit', function(e){
        e.preventDefault()
        let db_response = document.getElementById("db_response").classList
        $.ajax({  
            type: 'POST',  
            url: 'app.php?action=add-payment', 
            data: $('#addPayment').serialize(),
            success: function(response) {
                console.log(response)
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
    /* add location */
    $('#loginUser').on('submit', function(e){
        e.preventDefault()
        let db_response = document.getElementById("db_response").classList
        $.ajax({  
            type: 'POST',  
            url: 'app.php?action=login', 
            data: $('#loginUser').serialize(),
            success: function(response) {
                console.log(response)
                document.getElementById("db_response").style.display="flex"
                if(response == 1){
                    db_response.add("bg-primary")
                    $('#get_response').html('Successful')
                    //login
                    setTimeout(() => {
                        location.href = "?p=adminhome";
                    }, 200);
                }else if( response == 2 ){
                    db_response.add("bg-danger")
                    $('#get_response').html('Incorrect Credentials!')
                }else{
                    db_response.add("bg-warning")
                    $('#get_response').html('Already Exists')
                }
            }
        });
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
    let home_response = document.getElementById("home_response")
    let home_response_inner = document.getElementById("home_response_inner")
    $.ajax({  
        type: 'POST',  
        url: 'app.php?action=add-subscriber', 
        data: $('#regSubscriber').serialize(),
        success: function(response) {
            if (response == 1) {
                home_response.style.display = "flex"
                $(home_response_inner).html('Registered. Thank You')
            } else if (response == 2) {
                home_response.style.display = "flex"
                $(home_response_inner).html('Failed')
            } else {
                home_response.style.display = "flex"
                $(home_response_inner).html('Already Registered')
            }
        }
   })
   })
   /* add volunteer */
   $('#addVolunteer').on('submit', function(e){
    e.preventDefault()
    let home_response = document.getElementById("home_response")
    let home_response_inner = document.getElementById("home_response_inner")
    $.ajax({  
        type: 'POST',  
        url: 'app.php?action=add-volunteer', 
        data: $('#addVolunteer').serialize(),
        success: function(response) {
            if (response == 1) {
                home_response.style.display = "flex"
                $(home_response_inner).html('Registered. Thank You')
            } else if (response == 2) {
                home_response.style.display = "flex"
                $(home_response_inner).html('Failed')
            } else {
                home_response.style.display = "flex"
                $(home_response_inner).html('Already Registered')
            }
        }
   })
   })
   /* add contact */
   $('#addContact').on('submit', function(e){
    e.preventDefault()
    let home_response = document.getElementById("home_response")
    let home_response_inner = document.getElementById("home_response_inner")
    $.ajax({  
        type: 'POST',  
        url: 'app.php?action=add-contact', 
        data: $('#addContact').serialize(),
        success: function(response) {
            if (response == 1) {
                home_response.style.display = "flex"
                $(home_response_inner).html('Sent, We will get back to you. Thank You')
            } else if (response == 2) {
                home_response.style.display = "flex"
                $(home_response_inner).html('Already Registered')
            }
        }
   })
   })
   /* register event */
   $('#registerEvent').on('submit', function(e){
    e.preventDefault()
    let home_response = document.getElementById("home_response")
    let home_response_inner = document.getElementById("home_response_inner")
    $.ajax({  
        type: 'POST',  
        url: 'app.php?action=reg-event', 
        data: $('#registerEvent').serialize(),
        success: function(response) {
            if (response == 1) {
                home_response.style.display = "flex"
                $(home_response_inner).html('Registered, We will get back to you. Thank You')
            } else if (response == 2) {
                home_response.style.display = "flex"
                $(home_response_inner).html('Failed')
            } else if (response == 3) {
                home_response.style.display = "flex"
                $(home_response_inner).html('Already Registered')
            }
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
                        <h5 class="card-title text-primary" style="text-align:center">${program.title}</h5>
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
                    value_card.className = "custom-two value bg-gradient"
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
                    value_card.className = "custom-three card four-vh"
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
/* save confirmation */
$("#save_confirmation").on('click', function(){
    const editorContent = tinymce.get('editor_content').getContent()
    let db_response = document.getElementById("db_response").classList
    if(editorContent == ""){
        db_response.add("bg-primary");
        $('#get_response').html('Please fill in the required field!');
    }else{
    $.ajax({  
        type: 'POST',  
        url: 'app.php?action=save-confirmation', 
        data: {
            content: editorContent
        },
        success: function(response) {
            document.getElementById("db_response").style.display = "flex";
            if (response == 1) {
                db_response.add("bg-primary");
                $('#get_response').html('Successful');
                getMessages();
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
}

})
/* save shipping */
$("#save_shipping").on('click', function(){
    const editorContent = tinymce.get('editor_content').getContent()
    let db_response = document.getElementById("db_response").classList
    if(editorContent == ""){
        db_response.add("bg-primary");
        $('#get_response').html('Please fill in the required field!');
    }else{
    $.ajax({  
        type: 'POST',  
        url: 'app.php?action=save-shipping', 
        data: {
            content: editorContent
        },
        success: function(response) {
            document.getElementById("db_response").style.display = "flex";
            if (response == 1) {
                db_response.add("bg-primary");
                $('#get_response').html('Successful');
                getMessages();
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
}

})
/* save cancellation */
$("#save_cancellation").on('click', function(){
    const editorContent = tinymce.get('editor_content').getContent()
    let db_response = document.getElementById("db_response").classList
    if(editorContent == ""){
        db_response.add("bg-primary");
        $('#get_response').html('Please fill in the required field!');
    }else{
    $.ajax({  
        type: 'POST',  
        url: 'app.php?action=save-cancellation', 
        data: {
            content: editorContent
        },
        success: function(response) {
            document.getElementById("db_response").style.display = "flex";
            if (response == 1) {
                db_response.add("bg-primary");
                $('#get_response').html('Successful');
                getMessages();
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
}
})
/* save delivery */
$("#save_delivery").on('click', function(){
    const editorContent = tinymce.get('editor_content').getContent()
    let db_response = document.getElementById("db_response").classList
    if(editorContent == ""){
        db_response.add("bg-primary");
        $('#get_response').html('Please fill in the required field!');
    }else{
    $.ajax({  
        type: 'POST',  
        url: 'app.php?action=save-delivery', 
        data: {
            content: editorContent
        },
        success: function(response) {
            document.getElementById("db_response").style.display = "flex";
            if (response == 1) {
                db_response.add("bg-primary");
                $('#get_response').html('Successful');
                getMessages();
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
}

})
/* get messages */
function getMessages(){
    $.ajax({  
        type: 'GET',  
        url: 'app.php?action=get-messages',
        success: function(response) {
            if(response == 2){
                let db_response = document.getElementById("db_response").classList
                document.getElementById("db_response").style.display="flex"
                db_response.add("bg-warning")
                    $('#get_response').html('No Messages Found')
    
            }else{
                let messages = JSON.parse(response)
                let message = messages[0]

                let tableBody = document.getElementById("tbl_messages")
                tableBody.innerHTML = "";
                tableBody.innerHTML = `
                    <div class="row">
                    <div class="col-12">
                    <p class="top-20 fw-bold text-primary">Confirmation</p>
                    </div>
                    <div class="row">
                    ${message.confirmation}
                    </div>
                    </div>
                    <!-- row one -->
                    <div class="row">
                    <div class="col-12">
                    <p class="top-20 fw-bold text-primary">Shipping</p>
                    </div>
                    <div class="row">
                    ${message.shipping}
                    </div>
                    </div>
                    <!-- row two -->
                    <div class="row">
                    <div class="col-12">
                    <p class="top-20 fw-bold text-primary">Cancellation</p>
                    </div>
                    <div class="row">
                    ${message.cancellation}
                    </div>
                    </div>
                    <!-- row three -->
                    <div class="row">
                    <div class="col-12">
                    <p class="top-20 fw-bold text-primary">Delivery</p>
                    </div>
                    <div class="row">
                    ${message.delivery}
                    </div>
                    </div>
                `
        }
            
        }
    });
}
/* show calendar */
function getCalendarEvents(){
    $.ajax({  
        type: 'GET',  
        url: 'app.php?action=get-events',
        success: function(response) {
            
            if(response == 2){
                let db_response = document.getElementById("db_response").classList
                document.getElementById("db_response").style.display="flex"
                db_response.add("bg-warning")
                    $('#get_response').html('No Events Found')

            }
            // else if(url == "http://localhost/apiecetoyou/?p=adminhome" || url == "http://localhost/apiecetoyou/index.php?p=adminhome"){
                let events = JSON.parse(response)
                let eventDates = [];
                events.forEach(function(event){
                    let new_date = formatEventDate(event.date)
                    eventDates.push(new_date)
                })
                /* the calendar */
                let currentYear, currentMonth;

                function buildCalendar(year, month) {
                    const calendar = document.getElementById("calendar");
                    calendar.innerHTML = ""; // Clear previous calendar

                    // Display month and year
                    const monthYear = document.getElementById("monthYear");
                    const monthNames = ["January", "February", "March", "April", "May", "June", 
                                        "July", "August", "September", "October", "November", "December"];
                    monthYear.textContent = `${monthNames[month]} ${year}`;

                    // Month and Year
                    const firstDay = new Date(year, month, 1); // First day of the month
                    const lastDay = new Date(year, month + 1, 0); // Last day of the month
                    const daysInMonth = lastDay.getDate();

                    // Days of the week header
                    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
                    daysOfWeek.forEach(day => {
                        const header = document.createElement("div");
                        header.className = "header";
                        header.textContent = day;
                        calendar.appendChild(header);
                    });

                    // Empty cells before the first day
                    for (let i = 0; i < firstDay.getDay(); i++) {
                        const emptyCell = document.createElement("div");
                        emptyCell.className = "empty";
                        calendar.appendChild(emptyCell);
                    }

                    // Add days of the month
                    for (let day = 1; day <= daysInMonth; day++) {
                        const date = new Date(year, month, day);
                        const dateStr = date.toISOString().split("T")[0]; // Format as YYYY-MM-DD

                        const dayCell = document.createElement("div");
                        dayCell.className = "day";
                        dayCell.textContent = day;

                        // Add styles for today
                        const today = new Date();
                        if (
                            date.getFullYear() === today.getFullYear() &&
                            date.getMonth() === today.getMonth() &&
                            date.getDate() === today.getDate()
                        ) {
                            dayCell.classList.add("today");
                        }

                        // Add styles for events
                        if (eventDates.includes(dateStr)) {
                            dayCell.classList.add("event");
                        }

                        calendar.appendChild(dayCell);
                    }
                }

                // Handle navigation
                document.getElementById("prevMonth").addEventListener("click", () => {
                    currentMonth--;
                    if (currentMonth < 0) {
                        currentMonth = 11;
                        currentYear--;
                    }
                    buildCalendar(currentYear, currentMonth);
                });

                document.getElementById("nextMonth").addEventListener("click", () => {
                    currentMonth++;
                    if (currentMonth > 11) {
                        currentMonth = 0;
                        currentYear++;
                    }
                    buildCalendar(currentYear, currentMonth);
                });

                // Initialize calendar with the current month
                const now = new Date();
                currentYear = now.getFullYear();
                currentMonth = now.getMonth();
                buildCalendar(currentYear, currentMonth);

            // }
        }
    });
    }
 /* check date */
$(document).on('change', '#confirm_event_date', function(){
    // Get the value from the datetime-local input
    const datetimeInput = document.getElementById('confirm_event_date').value;

    const selectedDate = new Date(datetimeInput);

    // Get the current date and time
    const currentDate = new Date();

    // Compare the selected date with the current date
    if (selectedDate < currentDate) {
        let db_response = document.getElementById("db_response").classList
        document.getElementById("db_response").style.display="flex"
        db_response.add("bg-warning")
            $('#get_response').html('Please select a future date!')
            document.getElementById('confirm_event_date').value =  ''

        setTimeout(() => {
            document.getElementById("db_response").style.display="none"
        }, 2000);
    }
})
$('#home_contact').on('click', function(){
    location.href = '?p=contact-us'
})
/* FORGOT PASSWORD */
$('#forgotPassword').on('submit', function(e){
    e.preventDefault()
        let db_response = document.getElementById("db_response").classList
        $.ajax({  
            type: 'POST',  
            url: 'app.php?action=forgot', 
            data: $('#forgotPassword').serialize(),
            success: function(response) {
                console.log(response)
                document.getElementById("db_response").style.display="flex"
                if(response == 1){
                    db_response.add("bg-primary")
                    $('#get_response').html('Successful')
                    //login
                    setTimeout(() => {
                        location.href = "?p=change-pass";
                    }, 2000);
                }else if( response == 2 ){
                    db_response.add("bg-danger")
                    $('#get_response').html('Incorrect Email Address')
                }else{
                    db_response.add("bg-warning")
                    $('#get_response').html('Already Exists')
                }
            }
        });
})
/* change password */
$('#changeLoginPass').on('submit', function(e){
    e.preventDefault()
        let db_response = document.getElementById("db_response").classList
        let pass = document.getElementById("new_password").value
        let confirm_pass = document.getElementById("confirm_password").value
        if(pass != confirm_pass){
            document.getElementById("db_response").style.display="flex"
            db_response.add("bg-danger")
            $('#get_response').html('Passwords do not match')
            document.getElementById("new_password").focus()
            return
        }
        $.ajax({  
            type: 'POST',  
            url: 'app.php?action=change-login-pass', 
            data: $('#changeLoginPass').serialize(),
            success: function(response) {
                console.log(response)
                document.getElementById("db_response").style.display="flex"
                if(response == 1){
                    db_response.add("bg-primary")
                    $('#get_response').html('Successful')
                    //login
                    setTimeout(() => {
                        location.href = "?p=adminhub";
                    }, 2000);
                }else if( response == 2 ){
                    db_response.add("bg-danger")
                    $('#get_response').html('Incorrect Email Address')
                }else{
                    db_response.add("bg-warning")
                    $('#get_response').html('Incorrect email or OTP')
                }
            }
        });
})
$("#show_pending").on('click', function(){
    document.getElementById("completed_payments").style.display="none"
    document.getElementById("pending_orders").style.display="block"
})
$("#show_complete").on('click', function(){
    document.getElementById("pending_orders").style.display="none"
    document.getElementById("completed_payments").style.display="block"
})







    /*
    *
    * end of methodds
    *
    */
});