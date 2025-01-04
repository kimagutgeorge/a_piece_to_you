<?php
error_reporting(E_ERROR | E_PARSE);
/* config */
ini_set('memory_limit', '256M');

require 'vendor//phpmailer/phpmailer/src/Exception.php';
require 'vendor//phpmailer/phpmailer/src/PHPMailer.php';
require 'vendor//phpmailer/phpmailer/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

/* connections and sessions */
session_start();
include('conn.php');
$action = $_GET["action"];
/*
UNIVERSAL FUNCTIONS
*/
function createImage($path)
{
    $info = getimagesize($path);
    $fileType = $info[2]; // The image type

    switch ($fileType) {
        case IMAGETYPE_JPEG:
            return imagecreatefromjpeg($path);
        case IMAGETYPE_PNG:
            return imagecreatefrompng($path);
        default:
            // Handle unsupported image type
            return false;
    }
}
/* check connection */
function is_connected()
{
    $connected = @fsockopen("www.example.com", 80); // Check connection to example.com on port 80
    if ($connected) {
        fclose($connected);
        return true; // Connected
    } else {
        return false; // Not connected
    }
}
/* BASE64 IMAGE CREATOR */
if($action == "create-image"){
    // Get the uploaded file
    $file = $_FILES['file']['tmp_name'];
    
    // Read the file content
    $fileContent = file_get_contents($file);
    
    // Convert the file content to Base64
    $base64 = 'data:' . mime_content_type($file) . ';base64,' . base64_encode($fileContent);
    
    echo "Hapa hivi";
    
    // Return the Base64 string as JSON
    echo json_encode(['base64' => $base64]);
}
/*
ALL LOCATION FUNCTIONS
*/
/* ADD LOCATIONS */
else if($action == 'add-location'){
    $location_name = $_POST['location'];

    $confirm_qry="select * from locations where location_name = ? limit 1";
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
/* GET LOCATIONS */
else if($action == 'get-locations'){
    $get_locations =$conn->query("select * from locations order by location_id DESC");
    $count = mysqli_num_rows($get_locations);
    if($count < 1){
        $result = 2;
        echo json_encode($result);
    }else{
    while($location = mysqli_fetch_assoc($get_locations)){
        $result[] = [
            'location_id' => $location['location_id'],
            'location_name' => $location['location_name'] 
        ];
    }
    echo json_encode($result);
}
}
/* EDIT LOCATIONS */
else if($action == 'edit-location'){
    $id = $_POST['id'];
    $location = $_POST['location'];
    $insert_qry = "update locations set location_name = ? where location_id = ?";
    $insert_stmt = mysqli_stmt_init($conn);
    mysqli_stmt_prepare($insert_stmt, $insert_qry);
    mysqli_stmt_bind_param($insert_stmt, "ss", $location, $id);
    if(mysqli_stmt_execute($insert_stmt)){
        echo "1";
    }else{
        echo "2";
    }
}
/* DELETE LOCATIONS */
else if($action == 'del-location'){
    $id = $_POST['id'];
    $insert_qry = "delete from locations where location_id = ?";
    $insert_stmt = mysqli_stmt_init($conn);
    mysqli_stmt_prepare($insert_stmt, $insert_qry);
    mysqli_stmt_bind_param($insert_stmt, "s", $id);
    if(mysqli_stmt_execute($insert_stmt)){
        echo "1";
    }else{
        echo "2";
    }
}
/*
ALL CATEGORY FUNCTIONS
*/
/* GET CATEGORIES */
else if($action == 'get-categories'){
    $get_categories =$conn->query("select * from categories order by category_id DESC");
    $count = mysqli_num_rows($get_categories);
    if($count < 1){
        $result = 2;
        echo json_encode($result);
    }else{
        while($category = mysqli_fetch_assoc($get_categories)){
            $result[] = [
                'category_id' => $category['category_id'],
                'category_name' => $category['category_name'] 
            ];
        }
        echo json_encode($result);
    }
}
/* ADD CATEGORY */
else if($action == 'add-category'){
    $category_name = $_POST['category'];

    $confirm_qry="select * from categories where category_name = ? limit 1";
    $confirm_stmt=mysqli_stmt_init($conn);
    mysqli_stmt_prepare($confirm_stmt,$confirm_qry);
    
    mysqli_stmt_bind_param($confirm_stmt, 's', $category_name);
    mysqli_stmt_execute($confirm_stmt);
    $result=mysqli_stmt_get_result($confirm_stmt);
    $rowcount=mysqli_num_rows($result);
    if($rowcount>=1){
        echo "3";
    }else{
    //inserting data into db
    $insert_qry="insert into categories(category_name) values(?) ";
    $insert_stmt=mysqli_stmt_init($conn);
    mysqli_stmt_prepare($insert_stmt, $insert_qry);
   
    mysqli_stmt_bind_param($insert_stmt, "s",$category_name);
    if(mysqli_stmt_execute($insert_stmt)){
        echo "1";
    }else{
        echo "2";
    }
    
    }
}
/* EDIT CATEGORIES */
else if($action == 'edit-category'){
    $id = $_POST['id'];
    $category = $_POST['category'];
    $insert_qry = "update categories set category_name = ? where category_id = ?";
    $insert_stmt = mysqli_stmt_init($conn);
    mysqli_stmt_prepare($insert_stmt, $insert_qry);
    mysqli_stmt_bind_param($insert_stmt, "ss", $category, $id);
    if(mysqli_stmt_execute($insert_stmt)){
        echo "1";
    }else{
        echo "2";
    }
}
/* DELETE CATEGORY */
else if($action == 'del-category'){
    $id = $_POST['id'];
    $insert_qry = "delete from categories where category_id = ?";
    $insert_stmt = mysqli_stmt_init($conn);
    mysqli_stmt_prepare($insert_stmt, $insert_qry);
    mysqli_stmt_bind_param($insert_stmt, "s", $id);
    if(mysqli_stmt_execute($insert_stmt)){
        echo "1";
    }else{
        echo "2";
    }
}
/*
ALL ROLE FUNCTIONS
*/
/* ADD ROLE */
else if($action == 'add-role'){
    $role_name = $_POST['role'];

    $confirm_qry="select * from roles where role_name = ? limit 1";
    $confirm_stmt=mysqli_stmt_init($conn);
    mysqli_stmt_prepare($confirm_stmt,$confirm_qry);
    
    mysqli_stmt_bind_param($confirm_stmt, 's', $role_name);
    mysqli_stmt_execute($confirm_stmt);
    $result=mysqli_stmt_get_result($confirm_stmt);
    $rowcount=mysqli_num_rows($result);
    if($rowcount>=1){
        echo "3";
    }else{
    //inserting data into db
    $insert_qry="insert into roles(role_name) values(?) ";
    $insert_stmt=mysqli_stmt_init($conn);
    mysqli_stmt_prepare($insert_stmt, $insert_qry);
   
    mysqli_stmt_bind_param($insert_stmt, "s",$role_name);
    if(mysqli_stmt_execute($insert_stmt)){
        echo "1";
    }else{
        echo "2";
    }
    
    }
}
/* GET ROLES */
else if($action == 'get-roles'){
    $get_roles =$conn->query("select * from roles order by role_id DESC");
    $count = mysqli_num_rows($get_roles);
    if($count < 1){
        $result = 2;
        echo json_encode($result);
    }else{
        while($category = mysqli_fetch_assoc($get_roles)){
            $result[] = [
                'role_id' => $category['role_id'],
                'role_name' => $category['role_name'] 
            ];
        }
        echo json_encode($result);
    }
}
/* EDIT ROLES */
else if($action == 'edit-role'){
    $id = $_POST['id'];
    $role = $_POST['role'];
    $insert_qry = "update roles set role_name = ? where role_id = ?";
    $insert_stmt = mysqli_stmt_init($conn);
    mysqli_stmt_prepare($insert_stmt, $insert_qry);
    mysqli_stmt_bind_param($insert_stmt, "ss", $role, $id);
    if(mysqli_stmt_execute($insert_stmt)){
        echo "1";
    }else{
        echo "2";
    }
}
/*
ALL SETTINGS FUNCTIONS
*/
/* EDIT SETTINGS */
else if($action == 'edit-setting'){
    $email = $_POST['email'];
    $phone = $_POST['phone'];

    $insert_qry = "update settings set email = ?, phone = ?";
    $insert_stmt = mysqli_stmt_init($conn);
    mysqli_stmt_prepare($insert_stmt, $insert_qry);
    mysqli_stmt_bind_param($insert_stmt, "ss", $email, $phone);
    if(mysqli_stmt_execute($insert_stmt)){
        echo "1";
    }else{
        echo "2";
    }
}
/* EDIT OTHER SETTINGS */
else if($action == 'edit-other-setting'){
    $latitude = $_POST['latitude'];
    $longitude = $_POST['longitude'];
    $currency = $_POST['currency'];
    $smtp_email = $_POST['smtp_email'];
    $smtp = $_POST['smtp'];
    $smtp_server = $_POST['smtp_server'];
    $smtp_port = $_POST['smtp_port'];

    $insert_qry = "update settings set latitude = ?, longitude = ?, currency= ?, smtp_email = ?, smtp = ?, smtp_server = ?, smtp_port = ?";
    $insert_stmt = mysqli_stmt_init($conn);
    mysqli_stmt_prepare($insert_stmt, $insert_qry);
    mysqli_stmt_bind_param($insert_stmt, "sssssss", $latitude, $longitude, $currency, $smtp_email, $smtp, $smtp_server, $smtp_port);
    if(mysqli_stmt_execute($insert_stmt)){
        echo "1";
    }else{
        echo "2";
    }
}
/* GET SETTINGS */
else if($action == 'get-settings'){
    $get_settings =$conn->query("select * from settings limit 1");
    $count = mysqli_num_rows($get_settings);
    if($count < 1){
        $result = 2;
        echo json_encode($result);
    }else{
        $setting = mysqli_fetch_assoc($get_settings);
        $result[] = [
            'latitude' => $setting['latitude'],
            'longitude' => $setting['longitude'],
            'email' => $setting['email'],
            'phone' => $setting['phone'],
            'currency' => $setting['currency'],
            'smtp_email' => $setting['smtp_email'],
            'smtp' => $setting['smtp'],
            'smtp_server' => $setting['smtp_server'],
            'smtp_port' => $setting['smtp_port']
        ];
        echo json_encode($result);
    }
}
/*
ALL MEMBER FUNCTIONS
*/
/* ADD MEMBER */
else if($action == 'add-member'){
    $member_name = $_POST["member"];
    $member_role = $_POST["member_role"];
    $facebook = $_POST["facebook"];
    $instagram = $_POST["instagram"];
    $twitter = $_POST["twitter"];
    $linkedin = $_POST["linkedin"];
    $email = $_POST["email"];

    // File upload configuration 
     // File upload configuration 
     $targetDir = "assets/images/bg/members/"; 
     $allowTypes = array('jpg','png','jpeg'); 

    $confirm_qry="select * from members where member_name = ? limit 1";
    $confirm_stmt=mysqli_stmt_init($conn);
    mysqli_stmt_prepare($confirm_stmt,$confirm_qry);
    
    mysqli_stmt_bind_param($confirm_stmt, 's', $member_name);
    mysqli_stmt_execute($confirm_stmt);
    $result=mysqli_stmt_get_result($confirm_stmt);
    $rowcount=mysqli_num_rows($result);
    if($rowcount>=1){
        echo "3";
    }else{
    /* beginning of image upload */ 
     /* with resize */
         
         // File upload path
    $fileName = basename($_FILES['member_pic']['name']);
    $targetFilePath = $targetDir . $fileName;

    // Check whether file type is valid
    $fileType = pathinfo($targetFilePath, PATHINFO_EXTENSION);
    if (in_array($fileType, $allowTypes)) {
        // Upload file to server
        if (move_uploaded_file($_FILES["member_pic"]["tmp_name"], $targetFilePath)) {
            // Resize image to 880x430
            $imagePath = $targetFilePath;
            $image = createImage($imagePath);

            if ($image !== false) {
                list($width, $height) = getimagesize($imagePath);
                $newWidth = 200;
                $newHeight = 200;
                $imageResized = imagecreatetruecolor($newWidth, $newHeight);

                if ($fileType == 'png') {
                    imagealphablending($imageResized, false); // Set to false before performing operations
                    imagesavealpha($imageResized, true);      // Set to true before saving the image
                }

                // Resize and save the image
                imagecopyresampled($imageResized, $image, 0, 0, 0, 0, $newWidth, $newHeight, $width, $height);

                // Save the resized image
                switch ($fileType) {
                    case 'jpg':
                    case 'jpeg':
                        imagejpeg($imageResized, $targetFilePath);
                        break;
                    case 'png':
                        imagepng($imageResized, $targetFilePath);
                        break;
                    default:
                        // Handle unsupported image type
                        break;
                }

                imagedestroy($imageResized);
                imagedestroy($image);

                //inserting data into db
                    $insert_qry="insert into members(member_name, member_role, member_photo, facebook, instagram, twitter, linkedin, email) values(?,?,?,?,?,?,?,?) ";
                    $insert_stmt=mysqli_stmt_init($conn);
                    mysqli_stmt_prepare($insert_stmt, $insert_qry);
                
                    mysqli_stmt_bind_param($insert_stmt, "ssssssss",$member_name, $member_role, $fileName, $facebook, $instagram, $twitter, $linkedin, $email);
                    if(mysqli_stmt_execute($insert_stmt)){
                        echo "1";
                    }else{
                        echo "2";
                    }
            } else {
                // Handle image creation failure
                echo "Failed to create image from file: $imagePath";
            }
        } else {
            echo "Sorry, there was an error uploading your file.";
        }
    } else {
        echo "2";
}}}
/* GET MEMBERS */
else if($action == 'get-members'){
    $get_members =$conn->query("select * from members inner join roles on member_role = role_id order by member_id DESC");
    $count = mysqli_num_rows($get_members);
    if($count < 1){
        $result = 2;
        echo json_encode($result);
    }else{
    while($member = mysqli_fetch_assoc($get_members)){
        $result[] = [
            'member_id' => $member['member_id'],
            'name' => $member['member_name'], 
            'role' => $member['role_name'], 
            'photo' => $member['member_photo'], 
            'facebook' => $member['facebook'], 
            'instagram' => $member['instagram'], 
            'twitter' => $member['twitter'], 
            'linkedin' => $member['linkedin'], 
            'email' => $member['email'] 
        ];
    }
    echo json_encode($result);
}
}
/*
ALL EVENT FUNCTIONS
*/
/* ADD EVENT */
else if($action == 'add-event'){
    $name = $_POST['eventname'];
    $date_time = $_POST['eventdatetime'];
    $duration = $_POST['duration'];
    $location = $_POST['eventlocation'];
    $category = $_POST['eventcategory'];
    $content = $_POST['content'];
    $speakers = $_POST['speakers'];
    $string_speakers = implode(',', $speakers);
    
    $targetDir = "assets/images/bg/events/"; 
    $allowTypes = array('jpg','png','jpeg'); 
    
    $confirm_qry="select * from events where event_name = ? limit 1";
    $confirm_stmt=mysqli_stmt_init($conn);
    mysqli_stmt_prepare($confirm_stmt,$confirm_qry);
    
    mysqli_stmt_bind_param($confirm_stmt, 's', $name);
    mysqli_stmt_execute($confirm_stmt);
    $result=mysqli_stmt_get_result($confirm_stmt);
    $rowcount=mysqli_num_rows($result);
    if($rowcount>=1){
        echo "3";
    }else{

        $fileName = basename($_FILES['event_banner']['name']);
        $targetFilePath = $targetDir . $fileName;
    
        // Check whether file type is valid
        $fileType = pathinfo($targetFilePath, PATHINFO_EXTENSION);
        if (in_array($fileType, $allowTypes)) {
            // Upload file to server
            if (move_uploaded_file($_FILES["event_banner"]["tmp_name"], $targetFilePath)) {
                // Resize image to 880x430
                $imagePath = $targetFilePath;
                $image = createImage($imagePath);
    
                if ($image !== false) {
                    list($width, $height) = getimagesize($imagePath);
                    $newWidth = 5700;
                    $newHeight = 3800;
                    $imageResized = imagecreatetruecolor($newWidth, $newHeight);
    
                    if ($fileType == 'png') {
                        imagealphablending($imageResized, false); // Set to false before performing operations
                        imagesavealpha($imageResized, true);      // Set to true before saving the image
                    }
    
                    // Resize and save the image
                    imagecopyresampled($imageResized, $image, 0, 0, 0, 0, $newWidth, $newHeight, $width, $height);
    
                    // Save the resized image
                    switch ($fileType) {
                        case 'jpg':
                        case 'jpeg':
                            imagejpeg($imageResized, $targetFilePath);
                            break;
                        case 'png':
                            imagepng($imageResized, $targetFilePath);
                            break;
                        default:
                            // Handle unsupported image type
                            break;
                    }
    
                    imagedestroy($imageResized);
                    imagedestroy($image);
    
                    //inserting data into db
                        //inserting data into db
                        $insert_qry="insert into events(event_name, event_start_date, event_duration, event_location, event_category, event_speaker, event_banner, event_description) values(?,?,?,?,?,?,?,?) ";
                        $insert_stmt=mysqli_stmt_init($conn);
                        mysqli_stmt_prepare($insert_stmt, $insert_qry);
                    
                        mysqli_stmt_bind_param($insert_stmt, "ssssssss",$name, $date_time, $duration, $location, $category, $string_speakers, $fileName, $content );
                        if(mysqli_stmt_execute($insert_stmt)){
                            echo "1";
                        }else{
                            echo "2";
                        }
                } else {
                    // Handle image creation failure
                    echo "Failed to create image from file: $imagePath";
                }
            } else {
                echo "Sorry, there was an error uploading your file.";
            }
        } else {
            echo "2";
    
    }
}
}
/* VIEW EVENTS */
else if($action == 'get-events'){
    $get_events =$conn->query("select * from events inner join locations on events.event_location = locations.location_id inner join categories on events.event_category = categories.category_id order by event_id DESC");
    $count = mysqli_num_rows($get_events);
    if($count < 1){
        $result = 2;
        echo json_encode($result);
    }else{
    while($event = mysqli_fetch_assoc($get_events)){
        $result[] = [
            'id' => $event['event_id'],
            'name' => $event['event_name'],
            'date' => $event['event_start_date'],
            'duration' => $event['event_duration'],
            'location' => $event['location_name'],
            'banner' => $event['event_banner']
        ];
    }
    echo json_encode($result);
}
}
/* GO TO VIEW */
else if($action === "view-event"){
    $_SESSION['event-id'] = $_POST['id'];
}  
/* GO TO REGISTER */
else if($action === "register-event"){
    $_SESSION['event-id'] = $_POST['id'];
    
}
/* REGISTER EVENT */
else if($action == "reg-event"){
    $event_id = $_SESSION["event-id"];
    $name = $_POST["name"];
    $email = $_POST["email"];
    $enquries = $_POST["enquiries"];

    $confirm_qry="select * from registration where registration_email = ? and registration_event_id = ? limit 1";
    $confirm_stmt=mysqli_stmt_init($conn);
    mysqli_stmt_prepare($confirm_stmt,$confirm_qry);
    
    mysqli_stmt_bind_param($confirm_stmt, 'ss', $email, $event_id);
    mysqli_stmt_execute($confirm_stmt);
    $result=mysqli_stmt_get_result($confirm_stmt);
    $rowcount=mysqli_num_rows($result);
    if($rowcount>=1){
        echo "3";
    }else{
    //inserting data into db
    $insert_qry="insert into registration(registration_event_id, registration_name, registration_email, registration_enquiries) values(?, ?, ?, ?) ";
    $insert_stmt=mysqli_stmt_init($conn);
    mysqli_stmt_prepare($insert_stmt, $insert_qry);
   
    mysqli_stmt_bind_param($insert_stmt, "ssss",$event_id, $name, $email, $enquries);
    if(mysqli_stmt_execute($insert_stmt)){
        echo "1";
    }else{
        echo "2";
        echo mysqli_error($conn);
    }
    
    }

}
/* VIEW SINGLE EVENT */
else if($action == 'viewevent'){
    // Event ID to filter
$event_id = $_SESSION['event-id'];

// Query to get the event with associated category and location
$sql = "
    SELECT 
        e.event_id, e.event_name, e.event_start_date, e.event_duration, e.event_banner, e.event_description, e.event_speaker, e.event_location, e.event_category,
        c.category_name,
        l.location_name
    FROM events e
    JOIN categories c ON e.event_category = c.category_id
    JOIN locations l ON e.event_location = l.location_id
    WHERE e.event_id = ?
";

$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $event_id);
$stmt->execute();
$result = $stmt->get_result();

$response = [];

while ($row = $result->fetch_assoc()) {
    // Parse speaker IDs from the {4,3} format
    $speaker_ids = explode(",", trim($row['event_speaker'], "{}"));

    // Query to get speaker details
    $speaker_ids_placeholder = implode(",", array_fill(0, count($speaker_ids), "?"));
    $speaker_sql = "
        SELECT 
        member_id, member_name, member_role, member_photo, facebook, instagram, linkedin, email, twitter, role_name
        FROM members inner join roles on members.member_role = roles.role_id
        and member_id IN ($speaker_ids_placeholder)
    ";
    

    $speaker_stmt = $conn->prepare($speaker_sql);
    $speaker_stmt->bind_param(str_repeat("i", count($speaker_ids)), ...$speaker_ids);
    $speaker_stmt->execute();
    $speakers_result = $speaker_stmt->get_result();

    $speakers_list = [];

    while ($speaker = $speakers_result->fetch_assoc()) {
        $speakers_list[] = [
            'member_id' => $speaker['member_id'],
            'member_name' => $speaker['member_name'],
            'member_role' => $speaker['member_role'],
            'role' => $speaker['role_name'],
            'member_photo' => $speaker['member_photo'],
            'facebook' => $speaker['facebook'],
            'instagram' => $speaker['instagram'],
            'linkedin' => $speaker['linkedin'],
            'email' => $speaker['email'],
            'twitter' => $speaker['twitter']
        ];
    }

    // GET ALL THE LOCATIONS
    $all_locations = [];
    $get_locations =$conn->query("select * from locations order by location_id DESC");
        while($location = mysqli_fetch_assoc($get_locations)){
            $all_locations[] = [
                'id' => $location['location_id'],
                'name' => $location['location_name'] 
            ];
        }
    // GET ALL THE MEMBERS
    $all_members = [];
    $get_members =$conn->query("select * from members inner join roles on member_role = role_id order by member_id DESC");
    while($member = mysqli_fetch_assoc($get_members)){
        $all_members[] = [
            'id' => $member['member_id'],
            'name' => $member['member_name'], 
        ];
    }

    // GET ALL CATEGORIES
    $all_categories = [];
    $get_categories =$conn->query("select * from categories order by category_id DESC");
        while($category = mysqli_fetch_assoc($get_categories)){
            $all_categories[] = [
                'id' => $category['category_id'],
                'name' => $category['category_name'] 
            ];
        
    }
    

    // Append event data with speaker details
    $response[] = [
        'event_id' => $row['event_id'],
        'event_name' => $row['event_name'],
        'event_start_date' => $row['event_start_date'],
        'event_duration' => $row['event_duration'],
        'event_location' => $row['location_name'],
        'event_location_id' => $row['event_location'],
        'event_category_id' => $row['event_category'],
        'event_category' => $row['category_name'],
        'event_banner' => $row['event_banner'],
        'event_description' => $row['event_description'],
        'event_speakers' => $speakers_list,
        'locations' => $all_locations,
        'members' => $all_members,
        'categories' => $all_categories
    ];
}

header('Content-Type: application/json');
echo json_encode($response);
}
/* EDIT EVENT */
else if($action == 'edit-event'){
    $id = $_POST['event_id'];
    $name = $_POST['event_name'];
    $date_time = $_POST['event_date'];
    $duration = $_POST['event_duration'];
    $location = $_POST['event_location'];
    $category = $_POST['event_category'];
    $content = $_POST['content'];
    $speakers = $_POST['speakers'];

    if(empty($speakers)){
        $insert_qry="update events set event_name = ?, event_start_date = ?, event_duration =?, event_location = ?, event_category = ?, event_description = ? where event_id = ?";
        $insert_stmt=mysqli_stmt_init($conn);
        mysqli_stmt_prepare($insert_stmt, $insert_qry);

        mysqli_stmt_bind_param($insert_stmt, "sssssss",$name, $date_time, $duration, $location, $category, $content, $id );
        if(mysqli_stmt_execute($insert_stmt)){
            echo "1";
        }else{
            echo "2";
        }
    }else{
        $string_speakers = implode(',', $speakers);
        $insert_qry="update events set event_name = ?, event_start_date = ?, event_duration =?, event_location = ?, event_category = ?, event_speaker = ?, event_description = ? where event_id = ?";
        $insert_stmt=mysqli_stmt_init($conn);
        mysqli_stmt_prepare($insert_stmt, $insert_qry);

        mysqli_stmt_bind_param($insert_stmt, "ssssssss",$name, $date_time, $duration, $location, $category, $string_speakers, $content, $id );
        if(mysqli_stmt_execute($insert_stmt)){
            echo "1";
        }else{
            echo "2";
        }
    }
}
/* DELETE EVENT */
else if($action == 'del-event'){
    $id = $_POST['id'];
    $images = $conn->query("select event_banner from events where event_id = '$id' limit 1");
    $single_image = mysqli_fetch_assoc($images);
    $image = $single_image["event_banner"];
    if(unlink("assets/images/bg/events/".$image)){
        if($conn->query("delete from events where event_id = '$id' ")){
            echo "1";
        }else{
            echo "2";
        }
    }

}
/*
* ALL PRODUCT CATEGORY FUNCTIONS
*/
/* ADD PRODUCT CATEGORY */
else if($action == 'add-product-category'){
    $category_name = $_POST['category'];

    $confirm_qry="select * from product_categories where product_category_name = ? limit 1";
    $confirm_stmt=mysqli_stmt_init($conn);
    mysqli_stmt_prepare($confirm_stmt,$confirm_qry);
    
    mysqli_stmt_bind_param($confirm_stmt, 's', $category_name);
    mysqli_stmt_execute($confirm_stmt);
    $result=mysqli_stmt_get_result($confirm_stmt);
    $rowcount=mysqli_num_rows($result);
    if($rowcount>=1){
        echo "3";
    }else{
    //inserting data into db
    $insert_qry="insert into product_categories(product_category_name) values(?) ";
    $insert_stmt=mysqli_stmt_init($conn);
    mysqli_stmt_prepare($insert_stmt, $insert_qry);
   
    mysqli_stmt_bind_param($insert_stmt, "s",$category_name);
    if(mysqli_stmt_execute($insert_stmt)){
        echo "1";
    }else{
        echo "2";
    }
    
    }
}
/* GET PRODUCT CATEGORIES */
else if($action == 'get-product-categories'){
    $get_categories =$conn->query("select * from product_categories order by product_category_id DESC");
    $count = mysqli_num_rows($get_categories);
    if($count < 1){
        $result = 2;
        echo json_encode($result);
    }else{
        while($category = mysqli_fetch_assoc($get_categories)){
            $result[] = [
                'category_id' => $category['product_category_id'],
                'category_name' => $category['product_category_name'] 
            ];
        }
        echo json_encode($result);
    }
}
/* ADD PRODUCT */
else if($action == 'add-product'){
    $name = $_POST['name'];
    $price = $_POST['price'];
    $discount = $_POST['discount'];
    $quantity = $_POST['quantity'];
    $product_category = $_POST['product_category'];
    $content = $_POST['content'];

    $targetDir = "assets/images/bg/products/"; 
    $allowTypes = array('jpg','png','jpeg'); 
    
    $confirm_qry="select * from products where product_name = ? limit 1";
    $confirm_stmt=mysqli_stmt_init($conn);
    mysqli_stmt_prepare($confirm_stmt,$confirm_qry);
    
    mysqli_stmt_bind_param($confirm_stmt, 's', $name);
    mysqli_stmt_execute($confirm_stmt);
    $result=mysqli_stmt_get_result($confirm_stmt);
    $rowcount=mysqli_num_rows($result);
    if($rowcount>=1){
        echo "3";
    }else{

        // Insert data into DB
        $insert_qry = "insert into products(product_name, product_price, product_discount, product_quantity, product_balance, product_description, product_category) values(?,?,?,?,?,?,?) ";
        $insert_stmt = mysqli_stmt_init($conn);
        mysqli_stmt_prepare($insert_stmt, $insert_qry);

        mysqli_stmt_bind_param($insert_stmt, "sssssss", $name, $price, $discount, $quantity, $quantity, $content, $product_category);
        if (mysqli_stmt_execute($insert_stmt)) {
            $product_id = mysqli_insert_id($conn);

            // Loop through each uploaded file
        foreach ($_FILES['product_images']['name'] as $key => $fileName) {
            $fileName = basename($fileName);
            $targetFilePath = $targetDir . $fileName;

            // Check whether file type is valid
            $fileType = pathinfo($targetFilePath, PATHINFO_EXTENSION);
            if (in_array($fileType, $allowTypes)) {
                // Upload file to server
                if (move_uploaded_file($_FILES['product_images']['tmp_name'][$key], $targetFilePath)) {
                    // Resize image to 5700x3800
                    $imagePath = $targetFilePath;
                    $image = createImage($imagePath);

                    if ($image !== false) {
                        list($width, $height) = getimagesize($imagePath);
                        $newWidth = 5700;
                        $newHeight = 3800;
                        $imageResized = imagecreatetruecolor($newWidth, $newHeight);

                        if ($fileType == 'png') {
                            imagealphablending($imageResized, false); // Set to false before performing operations
                            imagesavealpha($imageResized, true);      // Set to true before saving the image
                        }

                        // Resize and save the image
                        imagecopyresampled($imageResized, $image, 0, 0, 0, 0, $newWidth, $newHeight, $width, $height);

                        // Save the resized image
                        switch ($fileType) {
                            case 'jpg':
                            case 'jpeg':
                                imagejpeg($imageResized, $targetFilePath);
                                break;
                            case 'png':
                                imagepng($imageResized, $targetFilePath);
                                break;
                            default:
                                // Handle unsupported image type
                                break;
                        }

                        imagedestroy($imageResized);
                        imagedestroy($image);

                        // Insert data into DB
                        $insert_qry = "insert into product_images(product_image_name, product_id_key) values(?,?) ";
                        $insert_stmt = mysqli_stmt_init($conn);
                        mysqli_stmt_prepare($insert_stmt, $insert_qry);

                        mysqli_stmt_bind_param($insert_stmt, "ss", $fileName, $product_id);
                        mysqli_stmt_execute($insert_stmt);
                        
                    } else {
                        // Handle image creation failure
                        echo "Failed to create image from file: $imagePath";
                    }
                } else {
                    echo "Sorry, there was an error uploading your file.";
                }
            } else {
                echo "Invalid file type: $fileType";
            }
        }

            echo "1";
        } else {
            echo "2";
        }

    }

}
/* GET PRODUCTS */
else if($action == "get-products"){
    $sql = "
    SELECT 
        p.product_id,
        p.product_name,
        p.product_price,
        p.product_discount,
        p.product_quantity,
        p.product_balance,
        p.product_description,
        p.product_category,
        p.product_status,
        MIN(pi.product_image_name) AS product_image
    FROM 
        Products p
    JOIN 
        product_images pi 
    ON 
        p.product_id = pi.product_id_key
    GROUP BY 
        p.product_id
";

$result = mysqli_query($conn, $sql);

if (!$result) {
    die("Query failed: " . mysqli_error($conn));
}

// Construct the result array
$products = [];
while ($row = mysqli_fetch_assoc($result)) {
    $products[] = [
        'product_id' => $row['product_id'],
        'product_name' => $row['product_name'],
        'product_price' => $row['product_price'],
        'product_discount' => $row['product_discount'],
        'product_quantity' => $row['product_quantity'],
        'product_balance' => $row['product_balance'],
        'product_description' => $row['product_description'],
        'product_category' => $row['product_category'],
        'product_image' => $row['product_image'],
        'product_status' => $row['product_status']
    ];
}

echo json_encode($products);
}
/* GO TO VIEW */
else if($action === "view-product"){
    $_SESSION['product-id'] = $_POST['id'];
}
/* VIEW PRODUCT */
else if($action == "viewproduct"){
    $products = [];
    $all_images = [];
    $product_id = $_SESSION['product-id'];
    $product = $conn->query("select * from products inner join product_categories on products.product_category = product_categories.product_category_id and product_id = '$product_id' limit 1 ");
    $images = $conn->query("select * from product_images where product_id_key = '$product_id' ");

    while($image = mysqli_fetch_assoc($images)){
        $all_images [] = [
            'image_id' => $image['image_id'],
            'image_name' => $image['product_image_name']
        ];
    }

    // GET ALL CATEGORIES
    $all_categories = [];
    $get_categories =$conn->query("select * from product_categories order by product_category_id DESC");
        while($category = mysqli_fetch_assoc($get_categories)){
            $all_categories[] = [
                'cat_id' => $category['product_category_id'],
                'cat_name' => $category['product_category_name'] 
            ];
        
    }


    while($result = mysqli_fetch_assoc($product)){
        $products[] = [
            'product_id' => $result['product_id'],
            'name' => $result['product_name'],
            'price' => $result['product_price'],
            'discount' => $result['product_discount'],
            'balance' => $result['product_balance'],
            'description' => $result['product_description'],
            'category' => $result['product_category_name'],
            'category_id' => $result['product_category_id'],
            'images' => $all_images,
            'categories' => $all_categories
        ];
    }

    echo json_encode($products);
} 
/* EDIT PRODUCT */
else if($action == "edit-product"){
    $id = $_POST["product_id"];
    $name = $_POST["name"];
    $price = $_POST["price"];
    $discount = $_POST["discount"];
    $quantity = $_POST["quantity"];
    $category = $_POST["category"];
    $content = $_POST["content"];

    $insert_qry="update products set product_name = ?, product_price = ?, product_discount =?, product_quantity = ?, product_balance = ?, product_category = ?, product_description = ? where product_id = ?";
        $insert_stmt=mysqli_stmt_init($conn);
        mysqli_stmt_prepare($insert_stmt, $insert_qry);

        mysqli_stmt_bind_param($insert_stmt, "ssssssss",$name, $price, $discount, $quantity, $quantity, $category, $content, $id );
        if(mysqli_stmt_execute($insert_stmt)){
            echo "1";
        }else{
            echo "2";
        }
} 
/* DISABLE PRODUCT */
else if($action == 'disable-product'){
    $id = $_POST['id'];
    if($conn->query("update products set product_status = '1' where product_id =".$id)){
        echo "1";
    }else{
        echo "2";
    }

}
/* ENABLE PRODUCT */
else if($action == 'enable-product'){
    $id = $_POST['id'];
    if($conn->query("update products set product_status = '0' where product_id =".$id)){
        echo "1";
    }else{
        echo "2";
    }

}
/* DELETE CONTACT */
else if($action == 'del-contact'){
    $id = $_POST['id'];
    if($conn->query("delete from contacts where contact_id =".$id)){
        echo "1";
    }else{
        echo "2";
    }

}
/* DELETE VOLUNTEER */
else if($action == 'del-volunteers'){
    $id = $_POST['id'];
    if($conn->query("delete from volunteers where volunteer_id =".$id)){
        echo "1";
    }else{
        echo "2";
    }

}
/* MARK AS READ */
else if($action == 'read-contact'){
    $id = $_POST['id'];
    if($conn->query("update contacts set contact_status = '1' where contact_id =".$id)){
        echo "1";
    }else{
        echo "2";
    }

}
/* MARK AS ATTENDED */
else if($action == 'check-registration'){
    $id = $_POST['id'];
    if($conn->query("update registration set registration_status = '1' where registration_id =".$id)){
        echo "1";
    }else{
        echo "2";
    }

}
/* MARK AS CANCELLED */
else if($action == 'cancel-registration'){
    $id = $_POST['id'];
    if($conn->query("update registration set registration_status = '2' where registration_id =".$id)){
        echo "1";
    }else{
        echo "2";
    }

}
/* MARK AS CANCELLED */
else if($action == 'reg-registration'){
    $id = $_POST['id'];
    if($conn->query("update registration set registration_status = '1' where registration_id =".$id)){
        echo "1";
    }else{
        echo "2";
    }

}
/* DELETE REGISTRATION */
else if($action == 'del-registration'){
    $id = $_POST['id'];
    if($conn->query("delete from registration where registration_id =".$id)){
        echo "1";
    }else{
        echo "2";
    }

}
/* MARK AS READ */
else if($action == 'read-volunteer'){
    $id = $_POST['id'];
    if($conn->query("update volunteers set volunteer_status = '0' where volunteer_id =".$id)){
        echo "1";
    }else{
        echo "2";
    }

}
/* DELETE PRODUCT */
else if($action == 'del-product'){
    $id = $_POST['id'];
    $images = $conn->query("select product_image_name from product_images where product_id_key = '$id' ");
    while($single_image = mysqli_fetch_assoc($images)){
        $image = $single_image["product_image_name"];
        unlink("assets/images/bg/products/".$image);
    }
    //delete product
    if($conn->query("delete from products where product_id = '$id' ")){
        echo "1";
    }else{
        echo "2";
    }
}
/*
* ALL BLOG FUNCTIONS
*/
/* ADD BLOG */
else if($action == "add-blog"){
    $name = $_POST['blogname'];
    $writer = $_POST['blogwriter'];
    $category = $_POST['blogcategory'];
    $content = $_POST['content'];
    
    $targetDir = "assets/images/bg/blogs/"; 
    $allowTypes = array('jpg','png','jpeg'); 
    
    $confirm_qry="select * from blogs where blog_name = ? limit 1";
    $confirm_stmt=mysqli_stmt_init($conn);
    mysqli_stmt_prepare($confirm_stmt,$confirm_qry);
    
    mysqli_stmt_bind_param($confirm_stmt, 's', $name);
    mysqli_stmt_execute($confirm_stmt);
    $result=mysqli_stmt_get_result($confirm_stmt);
    $rowcount=mysqli_num_rows($result);
    if($rowcount>=1){
        echo "3";
    }else{

        $fileName = basename($_FILES['blog_banner']['name']);
        $targetFilePath = $targetDir . $fileName;
    
        // Check whether file type is valid
        $fileType = pathinfo($targetFilePath, PATHINFO_EXTENSION);
        if (in_array($fileType, $allowTypes)) {
            // Upload file to server
            if (move_uploaded_file($_FILES["blog_banner"]["tmp_name"], $targetFilePath)) {
                // Resize image to 880x430
                $imagePath = $targetFilePath;
                $image = createImage($imagePath);
    
                if ($image !== false) {
                    list($width, $height) = getimagesize($imagePath);
                    $newWidth = 5700;
                    $newHeight = 3800;
                    $imageResized = imagecreatetruecolor($newWidth, $newHeight);
    
                    if ($fileType == 'png') {
                        imagealphablending($imageResized, false); // Set to false before performing operations
                        imagesavealpha($imageResized, true);      // Set to true before saving the image
                    }
    
                    // Resize and save the image
                    imagecopyresampled($imageResized, $image, 0, 0, 0, 0, $newWidth, $newHeight, $width, $height);
    
                    // Save the resized image
                    switch ($fileType) {
                        case 'jpg':
                        case 'jpeg':
                            imagejpeg($imageResized, $targetFilePath);
                            break;
                        case 'png':
                            imagepng($imageResized, $targetFilePath);
                            break;
                        default:
                            // Handle unsupported image type
                            break;
                    }
    
                    imagedestroy($imageResized);
                    imagedestroy($image);
    
                    //inserting data into db
                        //inserting data into db
                        $insert_qry="insert into blogs(blog_name, blog_writer, blog_category, blog_content, blog_banner) values(?,?,?,?,?) ";
                        $insert_stmt=mysqli_stmt_init($conn);
                        mysqli_stmt_prepare($insert_stmt, $insert_qry);
                    
                        mysqli_stmt_bind_param($insert_stmt, "sssss",$name, $writer, $category, $content, $fileName );
                        if(mysqli_stmt_execute($insert_stmt)){
                            echo "1";
                        }else{
                            echo "2";
                        }
                } else {
                    // Handle image creation failure
                    echo "Failed to create image from file: $imagePath";
                }
            } else {
                echo "Sorry, there was an error uploading your file.";
            }
        } else {
            echo "2";
    
    }
}
}
/* GET BLOGS */
else if($action == 'get-blogs'){
    $get_events =$conn->query("select * from blogs inner join categories on blogs.blog_category = categories.category_id order by category_id DESC");
    $count = mysqli_num_rows($get_events);
    if($count < 1){
        $result = 2;
        echo json_encode($result);
    }else{
        while($event = mysqli_fetch_assoc($get_events)){
            $result[] = [
                'id' => $event['blog_id'],
                'name' => $event['blog_name'],
                'writer' => $event['blog_writer'],
                'category' => $event['category_name'],
                'created' => $event['blog_created_date'],
                'banner' => $event['blog_banner']
            ];
        }
        echo json_encode($result);
    }
}
/* CATEGORY COUNT */
else if($action == "get-blog-count"){
    $get_count = $conn->query("SELECT categories.category_id, categories.category_name, COUNT(blogs.blog_id) as blog_count FROM blogs INNER JOIN categories ON blogs.blog_category = categories.category_id GROUP BY categories.category_id ORDER BY categories.category_id DESC");
    $count = mysqli_num_rows($get_count);
    if($count < 1){
        $result = 2;
        echo json_encode($result);
    }else{
        $result = [];
        while($event = mysqli_fetch_assoc($get_count)){
            $result[] = [
                'id' => $event['category_id'],
                'name' => $event['category_name'],
                'count' => $event['blog_count']
            ];
        }
        echo json_encode($result);
    }
}
/* GO TO VIEW */
else if($action === "view-blog"){
    $_SESSION['blog-id'] = $_POST['id'];
}
/* VIEW BLOG */
else if($action == "viewblog"){
    // Event ID to filter
$blog_id = $_SESSION['blog-id'];

// Query to get the event with associated category and location
$sql = "
    SELECT 
        e.blog_id, e.blog_name, e.blog_writer, e.blog_category, e.blog_content, e.blog_created_date, e.blog_banner,
        c.category_name
        FROM blogs e
        JOIN categories c ON e.blog_category = c.category_id
        WHERE e.blog_id = ?
";

$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $blog_id);
$stmt->execute();
$result = $stmt->get_result();

$response = [];

while ($row = $result->fetch_assoc()) {
    
    // GET ALL CATEGORIES
    $all_categories = [];
    $get_categories =$conn->query("select * from categories order by category_id DESC");
        while($category = mysqli_fetch_assoc($get_categories)){
            $all_categories[] = [
                'cat_id' => $category['category_id'],
                'cat_name' => $category['category_name'] 
            ];
        
    }
    

    // Append event data with speaker details
    $response[] = [
        'id' => $row['blog_id'],
        'name' => $row['blog_name'],
        'writer' => $row['blog_writer'],
        'category' => $row['blog_category'],
        'category_name' => $row['category_name'],
        'content' => $row['blog_content'],
        'created' => $row['blog_created_date'],
        'banner' => $row['blog_banner'],
        'categories' => $all_categories
    ];
}

header('Content-Type: application/json');
echo json_encode($response);
}
/* EDIT BLOG */
else if($action == 'edit-blog'){
    $id = $_POST['blog_id'];
    $name = $_POST['blog_name'];
    $writer = $_POST['blog_writer'];
    $category = $_POST['blog_category'];
    $content = $_POST['content'];

    $insert_qry="update blogs set blog_name = ?, blog_writer = ?, blog_category =?, blog_content = ? where blog_id = ?";
    $insert_stmt=mysqli_stmt_init($conn);
    mysqli_stmt_prepare($insert_stmt, $insert_qry);

    mysqli_stmt_bind_param($insert_stmt, "sssss",$name, $writer, $category, $content, $id );
    if(mysqli_stmt_execute($insert_stmt)){
        echo "1";
    }else{
        echo "2";
    }

}
/* DELETE BLOG */
else if($action == "del-blog"){
    $id = $_POST['id'];
    $images = $conn->query("select blog_banner from blogs where blog_id = '$id' limit 1");
    $single_image = mysqli_fetch_assoc($images);
    $image = $single_image["blog_banner"];
    if(unlink("assets/images/bg/blogs/".$image)){
        if($conn->query("delete from blogs where blog_id = '$id' ")){
            echo "1";
        }else{
            echo "2";
        }
    }
}
/* SEND NEWSETTER */
else if($action == "send-letter"){
    $title = $_POST["title"];
    $content = $_POST["content"];

    if(!is_connected()){
        echo "4"; //no connection
    }else{
        //connected to the internet
    function embedBase64Images($emailContent, $mail) {
        // Regular expression to find Base64 images in the content
        $imagePattern = '/data:image\/[^;]+;base64,([^\"]+)/';
        preg_match_all($imagePattern, $emailContent, $matches);
    
        if (!empty($matches[1])) {
            foreach ($matches[1] as $index => $base64Image) {
                // Decode the Base64 image
                $imageData = base64_decode($base64Image);
    
                // Create a unique Content-ID
                $cid = "image{$index}@pic.com";
    
                // Replace the Base64 in the HTML with a CID reference
                $emailContent = str_replace(
                    $matches[0][$index],
                    "cid:$cid",
                    $emailContent
                );
    
                // Add the image as an attachment with the CID
                $mail->addStringEmbeddedImage(
                    $imageData,     // Image content
                    $cid,           // CID
                    "image{$index}.png", // Filename
                    'base64',       // Encoding
                    'image/png'     // MIME type
                );
            }
        }
    
        return $emailContent;
    }
    //save data to db before sending
    $uploadDir = 'assets/images/newsletter_attachments/';

    
    //prepare files for storage
    $attachmentNames = [];
    $attachmentPaths = [];
    if (!empty($_FILES['attachments']['name'][0])) { // Check if files are uploaded
        foreach ($_FILES['attachments']['tmp_name'] as $key => $tmp_name) {
            $originalName = $_FILES['attachments']['name'][$key];
            $uniqueName = uniqid() . '_' . $originalName; // Create a unique filename
            $targetPath = $uploadDir . $uniqueName;

            // Move the uploaded file to the target directory
            if (move_uploaded_file($tmp_name, $targetPath)) {
                $attachmentNames[] = $uniqueName; // Store the file name
                $attachmentPaths [] = $targetPath;
            }
        }
    }
    // echo json_encode($attachmentNames);
    // echo json_encode($attachmentPaths);
    // Create a comma-separated string of attachment names

    $mail = new PHPMailer(true);
    $attachmentsString = implode(',', $attachmentNames);
    $empty_var = "";
    $newsletter_content = embedBase64Images($content, $mail);

    // Save data to DB before sending
    $insert_qry = "INSERT INTO newsletters(newsletter_title, newsletter_content, newsletter_attachments) VALUES (?, ?, ?)";
    $insert_stmt = mysqli_stmt_init($conn);

    if (mysqli_stmt_prepare($insert_stmt, $insert_qry)) {
        mysqli_stmt_bind_param($insert_stmt, "sss", $title, $newsletter_content, $attachmentsString);
        if (mysqli_stmt_execute($insert_stmt)) {
            // if successful, send mail
            //get SMTP values
            $get_settings =$conn->query("select * from settings limit 1");
            $count = mysqli_num_rows($get_settings);
            if($count < 1){
                $result = 3; // no SMTP configs
                echo json_encode($result);
            }else{
                $setting = mysqli_fetch_assoc($get_settings);
                $smtp_email = $setting['smtp_email'];
                $smtp_password = $setting['smtp'];
                $smtp_server = $setting['smtp_server'];
                $smtp_port = $setting['smtp_port'];
            }
            

            //get emails
            $get_subscribers =$conn->query("select * from subscribers where subscriber_status = '0' ");
            $count = mysqli_num_rows($get_subscribers);
            if($count < 1){
                $result = 2; //no active subscribers
                echo json_encode($result);
            }else{
                while($subscriber = mysqli_fetch_assoc($get_subscribers)){
                    //clear addresses
                    $mail->clearAddresses();
                    $mail->clearAttachments();

                    $name = $subscriber['subscriber_name'];
                    $email = $subscriber['subscriber_email'];

                    //send mail here
                    try {
                        // Server settings
                        $mail->isSMTP();                                            // Send using SMTP
                        $mail->Host       = $smtp_server;                     // Set the SMTP server
                        $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
                        $mail->Username   = $smtp_email;               // SMTP username
                        $mail->Password   = $smtp_password;                  // SMTP password
                        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption
                        $mail->Port       = $smtp_port;                                   // TCP port to connect to
                    
                        // Recipients
                        $mail->setFrom($smtp_email, 'Angaza Home Church');
                        $mail->addAddress($email, $name); // Add a recipient
                    
                        // Process content to embed Base64 images
                        $processedContent = embedBase64Images($content, $mail);
                    
                        // Content
                        $mail->isHTML(true);                                       // Set email format to HTML
                        $mail->Subject = $title;
                        $mail->Body    = $processedContent;
                        $mail->AltBody = strip_tags($processedContent);

                        //add attachments
                        foreach ($attachmentNames as $index => $attachmentName) {
                            $attachmentPath = $attachmentPaths[$index];
                            $mail->addAttachment($attachmentPath, $attachmentName);
                        }
                        

                        $mail->send();
                    } catch (Exception $e) {
                        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
                    }
                }
                // send mail successful
                echo "1"; //successful
            }
            /* end of sending newsletter */
    } else {
        echo "Database Error: " . mysqli_error($conn);
    }
    } else {
        echo "3"; // Query preparation error
    }

    
}
}
/* SAVE DRAFT */
if($action == "save-draft"){
    $title = $_POST["title"];
    $content = $_POST["content"];
    $status = "1";

    // Save data to DB before sending
    $insert_qry = "INSERT INTO newsletters(newsletter_title, newsletter_content, newsletter_status) VALUES (?, ?, ?)";
    $insert_stmt = mysqli_stmt_init($conn);

    if (mysqli_stmt_prepare($insert_stmt, $insert_qry)) {
        mysqli_stmt_bind_param($insert_stmt, "sss", $title, $content, $status);
        if (mysqli_stmt_execute($insert_stmt)) {
          echo "1";
    } else {
        echo "Database Error: " . mysqli_error($conn);
    }
    } else {
        echo "2"; // Query preparation error
    }

}
/* GET NEWSLETTERS */
else if($action == "get-newsletters"){
    $get_newsletters = $conn->query("select * from newsletters order by newsletter_id DESC");
    $count = mysqli_num_rows($get_newsletters);

    if ($count < 1) {
        $result = 2;
        echo json_encode($result);
    } else {
        $result = []; // Initialize result array
        while ($newsletter = mysqli_fetch_assoc($get_newsletters)) {
            // Prepare each newsletter with attachments
            $result[] = [
                'id' => $newsletter['newsletter_id'],
                'title' => $newsletter['newsletter_title'],
                'status' => $newsletter['newsletter_status'],
                'date' => $newsletter['created_at']
            ];
        }
        echo json_encode($result); // Send result as JSON
    }
}
/* GET REGISTRATION */
else if($action == "get-registration"){
    $get_registration = $conn->query("select * from registration inner join events on events.event_id = registration.registration_event_id order by registration_id DESC");
    $count = mysqli_num_rows($get_registration);

    if ($count < 1) {
        $result = 2;
        echo json_encode($result);
    } else {
        $result = []; // Initialize result array
        while ($registration = mysqli_fetch_assoc($get_registration)) {
            // Prepare each newsletter with attachments
            $result[] = [
                'id' => $registration['registration_id'],
                'name' => $registration['registration_name'],
                'email' => $registration['registration_email'],
                'enquiries' => $registration['registration_enquiries'],
                'status' => $registration['registration_status'],
                'event' => $registration['event_name']
            ];
        }
        echo json_encode($result); // Send result as JSON
    }
}
/* GET CONTACTS */
else if($action == "get-contacts"){
    $get_contacts = $conn->query("select * from contacts order by contact_id DESC");
    $count = mysqli_num_rows($get_contacts);

    if ($count < 1) {
        $result = 2;
        echo json_encode($result);
    } else {
        $result = []; // Initialize result array
        while ($contact = mysqli_fetch_assoc($get_contacts)) {
            // Prepare each newsletter with attachments
            $result[] = [
                'id' => $contact['contact_id'],
                'name' => $contact['contact_name'],
                'email' => $contact['contact_email'],
                'subject' => $contact['contact_subject'],
                'date' => $contact['contact_date'],
                'message' => $contact['contact_message'],
                'status' => $contact['contact_status']
            ];
        }
        echo json_encode($result); // Send result as JSON
    }
}
/* GET CONTACTS */
else if($action == "get-volunteers"){
    $get_contacts = $conn->query("select * from volunteers order by volunteer_id DESC");
    $count = mysqli_num_rows($get_contacts);

    if ($count < 1) {
        $result = 2;
        echo json_encode($result);
    } else {
        $result = []; // Initialize result array
        while ($contact = mysqli_fetch_assoc($get_contacts)) {
            // Prepare each newsletter with attachments
            $result[] = [
                'id' => $contact['volunteer_id'],
                'name' => $contact['volunteer_name'],
                'phone' => $contact['volunteer_phone'],
                'status' => $contact['volunteer_status'],
                'date' => $contact['volunteer_date']
            ];
        }
        echo json_encode($result); // Send result as JSON
    }
}
/* DELETE NEWSLETTER */
else if($action == "del-letter"){
    $id = $_POST['id'];
    $attachments = $conn->query("select newsletter_attachments from newsletters where newsletter_id = '$id' ");
    while($attachment = mysqli_fetch_assoc($attachments)){
        // Extract newsletter attachments as an array
        $newsletter_attachments = explode(",", trim($attachment['newsletter_attachments'], "{}"));
        foreach ($newsletter_attachments as $index => $attachmentName) {
            if(!empty($attachmentName)){
                unlink("assets/images/newsletter_attachments/".$attachmentName);
            }
        }
        
    }
    //delete newsletter
    if($conn->query("delete from newsletters where newsletter_id = '$id' ")){
        echo "1";
    }else{
        echo "2";
    }

}
/* ADD SUBSCRIBER */
else if($action == "add-subscriber"){
    $name = $_POST["subscriber"];
    $email = $_POST["email"];

    $confirm_qry="select * from subscribers where subscriber_email = ? limit 1";
    $confirm_stmt=mysqli_stmt_init($conn);
    mysqli_stmt_prepare($confirm_stmt,$confirm_qry);
    
    mysqli_stmt_bind_param($confirm_stmt, 's', $email);
    mysqli_stmt_execute($confirm_stmt);
    $result=mysqli_stmt_get_result($confirm_stmt);
    $rowcount=mysqli_num_rows($result);
    if($rowcount>=1){
        echo "3";
    }else{
    $insert_qry = "insert into subscribers(subscriber_name, subscriber_email) values(?,?)";
    $insert_stmt = mysqli_stmt_init($conn);
    mysqli_stmt_prepare($insert_stmt, $insert_qry);
    mysqli_stmt_bind_param($insert_stmt, "ss", $name, $email);
    if(mysqli_stmt_execute($insert_stmt)){
        echo "1";
    }else{
        echo "2";
    }
}

}
/* ADD VOLUNETTER */
else if($action == "add-volunteer"){
    $name = $_POST["volunteer_name"];
    $phone = $_POST["volunteer_phone"];

    $confirm_qry="select * from volunteers where volunteer_phone = ? limit 1";
    $confirm_stmt=mysqli_stmt_init($conn);
    mysqli_stmt_prepare($confirm_stmt,$confirm_qry);
    
    mysqli_stmt_bind_param($confirm_stmt, 's', $phone);
    mysqli_stmt_execute($confirm_stmt);
    $result=mysqli_stmt_get_result($confirm_stmt);
    $rowcount=mysqli_num_rows($result);
    if($rowcount>=1){
        echo "3";
    }else{
    $insert_qry = "insert into volunteers(volunteer_name, volunteer_phone) values(?,?)";
    $insert_stmt = mysqli_stmt_init($conn);
    mysqli_stmt_prepare($insert_stmt, $insert_qry);
    mysqli_stmt_bind_param($insert_stmt, "ss", $name, $phone);
    if(mysqli_stmt_execute($insert_stmt)){
        echo "1";
    }else{
        echo "2";
    }
}

}
/* ADD CONTACT */
else if($action == "add-contact"){
    $name = $_POST["contact_name"];
    $email = $_POST["contact_email"];
    $subject = $_POST["contact_subject"];
    $message = $_POST["contact_message"];
    
    $insert_qry = "insert into contacts(contact_name, contact_email, contact_subject, contact_message) values(?,?,?,?)";
    $insert_stmt = mysqli_stmt_init($conn);
    mysqli_stmt_prepare($insert_stmt, $insert_qry);
    mysqli_stmt_bind_param($insert_stmt, "ssss", $name, $email, $subject, $message);
    if(mysqli_stmt_execute($insert_stmt)){
        echo "1";
    }else{
        echo "2";
    
}

}
/* GET SUBSCRIBERS */
else if($action == 'get-subscribers'){
    $get_subscribers =$conn->query("select * from subscribers order by subscriber_id DESC");
    $count = mysqli_num_rows($get_subscribers);
    if($count < 1){
        $result = 2;
        echo json_encode($result);
    }else{
        while($subscriber = mysqli_fetch_assoc($get_subscribers)){
            $result[] = [
                'id' => $subscriber['subscriber_id'],
                'name' => $subscriber['subscriber_name'],
                'email' => $subscriber['subscriber_email'],
                'status' => $subscriber['subscriber_status']
            ];
        }
        echo json_encode($result);
    }
}
/* EDIT SUBSCRIBERS */
else if($action == 'edit-subscriber'){
    $id = $_POST['id'];
    $name = $_POST['name'];
    $email = $_POST['email'];

    $insert_qry = "update subscribers set subscriber_name = ?, subscriber_email = ? where subscriber_id = ?";
    $insert_stmt = mysqli_stmt_init($conn);
    mysqli_stmt_prepare($insert_stmt, $insert_qry);
    mysqli_stmt_bind_param($insert_stmt, "sss", $name, $email, $id);
    if(mysqli_stmt_execute($insert_stmt)){
        echo "1";
    }else{
        echo "2";
    }
}
/* DISABLE SUBSCRIBERS */
else if($action == 'disable-subscriber'){
    $id = $_POST['id'];
    $status = "1";

    $insert_qry = "update subscribers set subscriber_status = ? where subscriber_id = ?";
    $insert_stmt = mysqli_stmt_init($conn);
    mysqli_stmt_prepare($insert_stmt, $insert_qry);
    mysqli_stmt_bind_param($insert_stmt, "ss", $status, $id);
    if(mysqli_stmt_execute($insert_stmt)){
        echo "1";
    }else{
        echo "2";
    }
}
/* ENABLE SUBSCRIBERS */
else if($action == 'enable-subscriber'){
    $id = $_POST['id'];
    $status = "0";

    $insert_qry = "update subscribers set subscriber_status = ? where subscriber_id = ?";
    $insert_stmt = mysqli_stmt_init($conn);
    mysqli_stmt_prepare($insert_stmt, $insert_qry);
    mysqli_stmt_bind_param($insert_stmt, "ss", $status, $id);
    if(mysqli_stmt_execute($insert_stmt)){
        echo "1";
    }else{
        echo "2";
    }
}
/* DELETE SUBSCRIBERS */
else if($action == 'del-subscriber'){
    $id = $_POST['id'];

    if($conn->query("delete from subscribers where subscriber_id = '$id' ")){
        echo "1";
    }else{
        echo "2";
    }
    
}
/* GET user */
else if($action == 'get-users'){
    $get_settings =$conn->query("select * from users limit 1");
    $count = mysqli_num_rows($get_settings);
    if($count < 1){
        $result = 2;
        echo json_encode($result);
    }else{
        $setting = mysqli_fetch_assoc($get_settings);
        $result[] = [
            'username' => $setting['username']
        ];
        echo json_encode($result);
    }
}
/* SAVE PROFILE */
else if($action == "save-profile"){
    $username = $_POST["email"];
    $password = md5($_POST["password"]);
    $new_password = md5($_POST["new_password"]);

    $confirm_qry="select * from users where password = ? limit 1";
    $confirm_stmt=mysqli_stmt_init($conn);
    mysqli_stmt_prepare($confirm_stmt,$confirm_qry);
    mysqli_stmt_bind_param($confirm_stmt, 's', $password);
    mysqli_stmt_execute($confirm_stmt);
    $result=mysqli_stmt_get_result($confirm_stmt);
    $count = mysqli_num_rows($result);
    if($count < 1){
        echo "3"; //wrong password
    }else{
    
        $insert_qry = "update users set username = ?, password = ?";
        $insert_stmt = mysqli_stmt_init($conn);
        mysqli_stmt_prepare($insert_stmt, $insert_qry);
        mysqli_stmt_bind_param($insert_stmt, "ss", $username, $new_password);
        if(mysqli_stmt_execute($insert_stmt)){
            echo "1";
        }else{
            echo "2";
        }
    }
}
/* GET COUNT */
else if($action == "get-count"){
    //events count
    $event_result = $conn->query("select * from events");
    $count = mysqli_num_rows($event_result);
    echo $count;
}
/* GET ABOUT US */
else if($action == "get-about"){
    $get_events =$conn->query("select * from about_us limit 1");
    $count = mysqli_num_rows($get_events);
    if($count < 1){
        $result = 2;
        echo json_encode($result);
    }else{
    while($event = mysqli_fetch_assoc($get_events)){
        $result[] = [
            'id' => $event['about_id'],
            'title' => $event['about_title'],
            'vision' => $event['vision'],
            'mission' => $event['mission_approach'],
            'offer' => $event['we_offer']
        ];
    }
    echo json_encode($result);
    }
}
/* SAVE ABOUT */
else if($action == "save-about"){
    $title = $_POST["title"];
    $vision = $_POST["vision"];
    $mission = $_POST["mission"];
    $offer = $_POST["offer"];

    $insert_qry = "update about_us set about_title = ?, vision = ?, mission_approach = ?, we_offer = ?";
    $insert_stmt = mysqli_stmt_init($conn);
    mysqli_stmt_prepare($insert_stmt, $insert_qry);
    mysqli_stmt_bind_param($insert_stmt, "ssss", $title, $vision, $mission, $offer);
    if(mysqli_stmt_execute($insert_stmt)){
        echo "1";
    }else{
        echo "2";
    }

}
/* ADD PROGRAM */
else if($action == 'add-program'){
    $id = $_POST["id"];
    $title = $_POST["title"];
    $content = $_POST["content"];
    $icon = $_POST["icon"];

    if(empty($id)){
    $confirm_qry="select * from programs where program_title = ? limit 1";
    $confirm_stmt=mysqli_stmt_init($conn);
    mysqli_stmt_prepare($confirm_stmt,$confirm_qry);
    
    mysqli_stmt_bind_param($confirm_stmt, 's', $title);
    mysqli_stmt_execute($confirm_stmt);
    $result=mysqli_stmt_get_result($confirm_stmt);
    $rowcount=mysqli_num_rows($result);
    if($rowcount>=1){
        echo "3";
    }else{
    //inserting data into db
    $insert_qry="insert into programs(program_title, program_content, program_icon) values(?, ?, ?) ";
    $insert_stmt=mysqli_stmt_init($conn);
    mysqli_stmt_prepare($insert_stmt, $insert_qry);
   
    mysqli_stmt_bind_param($insert_stmt, "sss",$title, $content, $icon);
    if(mysqli_stmt_execute($insert_stmt)){
        echo "1";
    }else{
        echo "2";
    }
    
    }
}else{
    //update
    $insert_qry="update programs set program_title = ?, program_content = ?, program_icon = ? where program_id = ?";
    $insert_stmt=mysqli_stmt_init($conn);
    mysqli_stmt_prepare($insert_stmt, $insert_qry);
   
    mysqli_stmt_bind_param($insert_stmt, "ssss",$title, $content, $icon, $id);
    if(mysqli_stmt_execute($insert_stmt)){
        echo "1";
    }else{
        echo "2";
    }
}
}
/* GET LOCATIONS */
else if($action == 'get-programs'){
    $get_programs =$conn->query("select * from programs order by program_id DESC");
    $count = mysqli_num_rows($get_programs);
    if($count < 1){
        $result = 2;
        echo json_encode($result);
    }else{
    while($program = mysqli_fetch_assoc($get_programs)){
        $result[] = [
            'id' => $program['program_id'],
            'title' => $program['program_title'],
            'icon' => $program['program_icon'],
            'content' => $program['program_content']
        ];
    }
    echo json_encode($result);
}
}
/* ADD VALUE */
else if($action == 'add-value'){
    $id = $_POST["id"];
    $title = $_POST["title"];
    $content = $_POST["content"];
    $icon = $_POST["icon"];


    if(empty($id)){
    $confirm_qry="select * from core_values where value_title = ? limit 1";
    $confirm_stmt=mysqli_stmt_init($conn);
    mysqli_stmt_prepare($confirm_stmt,$confirm_qry);
    
    mysqli_stmt_bind_param($confirm_stmt, 's', $title);
    mysqli_stmt_execute($confirm_stmt);
    $result=mysqli_stmt_get_result($confirm_stmt);
    $rowcount=mysqli_num_rows($result);
    if($rowcount>=1){
        echo "3";
    }else{
    //inserting data into db
    $insert_qry="insert into core_values(value_title, value_content, value_icon) values(?, ?, ?) ";
    $insert_stmt=mysqli_stmt_init($conn);
    mysqli_stmt_prepare($insert_stmt, $insert_qry);
   
    mysqli_stmt_bind_param($insert_stmt, "sss",$title, $content, $icon);
    if(mysqli_stmt_execute($insert_stmt)){
        echo "1";
    }else{
        echo "2";
    }
    
    }
}else{
    //update
    $insert_qry="update core_values set value_title = ?, value_content = ?, value_icon = ? where value_id = ?";
    $insert_stmt=mysqli_stmt_init($conn);
    mysqli_stmt_prepare($insert_stmt, $insert_qry);
   
    mysqli_stmt_bind_param($insert_stmt, "ssss",$title, $content, $icon, $id);
    if(mysqli_stmt_execute($insert_stmt)){
        echo "1";
    }else{
        echo "2";
    }
}
}
/* GET VALUES */
else if($action == 'get-values'){
    $get_programs =$conn->query("select * from core_values order by value_id DESC");
    $count = mysqli_num_rows($get_programs);
    if($count < 1){
        $result = 2;
        echo json_encode($result);
    }else{
    while($program = mysqli_fetch_assoc($get_programs)){
        $result[] = [
            'id' => $program['value_id'],
            'title' => $program['value_title'],
            'icon' => $program['value_icon'],
            'content' => $program['value_content']
        ];
    }
    echo json_encode($result);
}
}
/* DELETE PROGRAM */
else if($action == 'del-program'){
    $id = $_POST["id"];

    $insert_qry = "delete from programs where program_id = ?";
    $insert_stmt = mysqli_stmt_init($conn);
    mysqli_stmt_prepare($insert_stmt, $insert_qry);
    mysqli_stmt_bind_param($insert_stmt, "s", $id);
    if(mysqli_stmt_execute($insert_stmt)){
        echo "1";
    }else{
        echo "2";
    }
}
/* DELETE VALUE */
else if($action == 'del-value'){
    $id = $_POST["id"];

    $insert_qry = "delete from core_values where value_id = ?";
    $insert_stmt = mysqli_stmt_init($conn);
    mysqli_stmt_prepare($insert_stmt, $insert_qry);
    mysqli_stmt_bind_param($insert_stmt, "s", $id);
    if(mysqli_stmt_execute($insert_stmt)){
        echo "1";
    }else{
        echo "2";
    }
}






/*
END OF ALL METHODS
*/
?>