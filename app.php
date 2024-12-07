<?php
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
/*
ALL LOCATION FUNCTIONS
*/
/* ADD LOCATIONS */
if($action == 'add-location'){
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
    $latitude = $_POST['latitude'];
    $longitude = $_POST['longitude'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];

    $insert_qry = "update settings set longitude = ?, latitude = ?, email = ?, phone = ? ";
    $insert_stmt = mysqli_stmt_init($conn);
    mysqli_stmt_prepare($insert_stmt, $insert_qry);
    mysqli_stmt_bind_param($insert_stmt, "ssss", $longitude, $latitude, $email, $phone);
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
            'phone' => $setting['phone']
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
                    
                        mysqli_stmt_bind_param($insert_stmt, "ssssssss",$name, $date_time, $duration, $location, $category, $string_speakers, $fileName, $confirm_qry );
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

/*
END OF ALL METHODS
*/
?>