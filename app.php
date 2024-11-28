<?php
session_start();
include('conn.php');
$action = $_GET["action"];
/* add locations */
if($action == 'add-location'){
    $location_name = $_POST['location'];

    $confirm_qry="select * from locations where location_name = ?";
    $confirm_stmt=mysqli_stmt_init($conn);
    mysqli_stmt_prepare($confirm_stmt,$confirm_qry);
    
    mysqli_stmt_bind_param($confirm_stmt, 's', $location_name);
    mysqli_stmt_execute($confirm_stmt);
    $result=mysqli_stmt_get_result($confirm_stmt);
    $rowcount=mysqli_num_rows($result);
    if($rowcount>=1){
        echo "3";
    }else{
    //inserting data into db
    $insert_qry="insert into locations(location_name) values(?) ";
    $insert_stmt=mysqli_stmt_init($conn);
    mysqli_stmt_prepare($insert_stmt, $insert_qry);
   
    mysqli_stmt_bind_param($insert_stmt, "s",$location_name);
    if(mysqli_stmt_execute($insert_stmt)){
        echo "1";
    }else{
        echo "2";
    }
    
    }
}
/* get locations */
else if($action == 'get-locations'){
    $get_locations =$conn->query("select * from locations order by location_id DESC");
    $locations = [];
    while($location = mysqli_fetch_assoc($get_locations)){
        $result[] = [
            'location_id' => $location['location_id'],
            'location_name' => $location['location_name'] 
        ];
    }
    echo json_encode($result);
}
?>