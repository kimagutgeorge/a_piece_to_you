$( document ).ready(function() {
    /* load data */

    getLocations();
function getLocations(){
$.ajax({  
    type: 'GET',  
    url: 'app.php?action=get-locations',
    success: function(response) {
        let tableBody = document.getElementById("tbl_locations")
        tableBody.innerHTML = "";
        let locations = JSON.parse(response)

        locations.forEach(function(location){
            let row = document.createElement("tr"); // Create a new table row

            // Create table cells for each piece of data
            let idCell = document.createElement("td");
            idCell.textContent = location.location_id;
            idCell.hidden = true;
    
            let nameCell = document.createElement("td");
            nameCell.textContent = location.location_name;
            
            let actionCell = document.createElement('td');
            actionCell.innerHTML = ` <i class="fa-solid fa-edit text-primary"></i>
            <i class="fa-solid fa-trash text-danger" @click="deleteLocation(location.location_id)"></i> `
            // Append cells to the row
            row.appendChild(idCell);
            row.appendChild(nameCell);
            row.appendChild(actionCell);
    
            // Append the row to the table body
            tableBody.appendChild(row);
            $('#tbl').DataTable();
        })
        
    }
});
}

    // bootstrap table
    // new DataTable('#tbl');

    //add location
    $('#addLocation').on('submit', function(e){
        e.preventDefault()
        $.ajax({  
            type: 'POST',  
            url: 'app.php?action=add-location', 
            data: $('#addLocation').serialize(),
            success: function(response) {
                let db_response = document.getElementById("db_response").classList
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
    *
    * end of methodds
    *
    */
});