window.addEventListener('scroll', this.scrollFunction);
/* initialize global functions */

/*
universal links
*/
let platforms = [];
let speakers = [];
let facebook = "Facebook";
let instagram = "Instagram";
let email = "Email";
let linkedin = "LinkedIn";
let x = "X";
let icon = [{'facebook': '<i class="fa-brands fa-facebook-f"></i>'}, {'instagram': '<i class="fa-brands fa-instagram"></i>'}, {'twitter': '<i class="fa-brands fa-twitter"></i>'}, {'email': '<i class="fa-solid fa-envelope"></i>'}, {'linkedin': '<i class="fa-brands fa-linkedin"></i>'}]
let current_link = document.getElementById("current_link")
let display_link = document.getElementById("display_link")
let clear_button = document.getElementById("clear_button")
let add_button = document.getElementById("add_button")
let display_ul = document.getElementById("social_link")
let clear_link_text = document.getElementById("clear_link_text")
current_link.innerHTML = facebook;
let platformsLength = 5;

/*
end of universal links
*/
function changeToDate(){
  document.getElementById("event-date").type = "date"
}
function scrollFunction(){
const mybutton = document.getElementById('myBtn')
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'block'
  } else {
    mybutton.style.display = 'none'
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
function goToContact(){
    location.href="?p=contact-us"
}
function toggleHidden(){
    let profilePanel = document.getElementById("profile-panel")
    if(profilePanel.style.display == "none"){
        profilePanel.style.display = "block"
    }else{
         profilePanel.style.display = "none"
    }
}
function closeResponse(){
    document.getElementById("db_response").style.display="none"
}

function addLink(){
  let currentPlatformIndex = document.getElementById("newLink").value
  if(currentPlatformIndex == null){
    currentPlatformIndex = " ";
  }
  platforms.push({'name': currentPlatformIndex, 'link': currentPlatformIndex})
  display_ul.innerHTML = "";

  platforms.forEach(function(platform){
    let li_row = document.createElement('li')
    li_row.className = "text-primary";
    let link = platform.link || ""; // Default to empty string if link is missing
    let href = link.startsWith('https') ? link : 'https://' + link;
    li_row.innerHTML = `
      <i class="${platform.icon}"></i>
      <a class="listed_social_links" href="${href}" target="_blank">${platform.name}</a>`;
    //append
    display_ul.appendChild(li_row);
  })

  platformsLength --
    if(platformsLength == 4){
      current_link.innerHTML = instagram;
    }else if(platformsLength == 3){
      current_link.innerHTML = x;
    }else if(platformsLength == 2){
      current_link.innerHTML = linkedin;
    }else if(platformsLength == 1){
      current_link.innerHTML = email
    }if(platformsLength == 0){
      display_link.hidden = true
      clear_link_text.hidden = false
      clear_button.hidden = false
      add_button.hidden = true
    }
}
function clearLinks(){
  display_link.hidden = false
  clear_link_text.hidden = true
  display_ul.innerHTML = ""
  platforms = [];
  current_link.innerHTML = facebook;
  clear_button.hidden = true
  add_button.hidden = false
  
  platformsLength = 5;
}

function addSpeaker(){
  let currentSpeaker = document.getElementById("add_event_speaker").value
  let selecTed = document.getElementById("add_event_speaker");
  let selectedOption = selecTed.options[selecTed.selectedIndex].text
  if (!speakers.find(speaker => speaker.speaker_id === currentSpeaker)) {
    speakers.push({ "speaker_name": selectedOption, "member_id": currentSpeaker })
  }
  
  let speakerHolder = document.getElementById("event_speaker_list")
  speakerHolder.innerHTML = "";
  speakers.forEach(function(speaker){
    let singleSpeaker = document.createElement("div")
    singleSpeaker.className = "speaker"

    let speakerId = document.createElement("div")
    speakerId.className = "single-speaker-id"
    speakerId.innerHTML = speaker.member_id
    
    let speaker_name = document.createElement("div")
    speaker_name.className = "speaker-name"
    speaker_name.innerHTML = speaker.speaker_name

    let del_speaker = document.createElement("div")
    del_speaker.className = "close-div"
    del_speaker.innerHTML = `<i class="fa-solid fa-close text-danger" onclick="removeSpeaker(${speaker.member_id})"></i>`

    singleSpeaker.appendChild(speakerId)
    singleSpeaker.appendChild(speaker_name)
    singleSpeaker.appendChild(del_speaker)

    speakerHolder.appendChild(singleSpeaker)
  })
console.log(speakers)
}
function removeSpeaker(member_id){
  let speakerIndex = member_id
  alert(speakerIndex)
}

function previewImage() {
  const fileInput = document.getElementById('upload_file');
  const previewDiv = document.getElementById('preview');
  
  // Clear the previous content
  previewDiv.innerHTML = '';

  // Check if a file is selected
  if (fileInput.files && fileInput.files[0]) {
      const file = fileInput.files[0];

      // Create an image element
      const img = document.createElement('img');
      
      // Use FileReader to read the file and display it
      const reader = new FileReader();
      reader.onload = function (e) {
          img.src = e.target.result;
          previewDiv.appendChild(img);
      };
      reader.readAsDataURL(file);
  } else {
      previewDiv.textContent = 'No image uploaded';
  }
}

function previewProductImage() {
  const fileInput = document.getElementById('upload_file');
  const previewDiv = document.getElementById('preview');
  const all_files = Array.from(fileInput.files); // Convert FileList to an array

  // Clear previous previews
  previewDiv.innerHTML = '';

  all_files.forEach(function(single_file) {
    if (single_file.type.startsWith('image/')) { // Check if the file is an image
      const reader = new FileReader();

      reader.onload = function(event) {
        // Create an img element
        const img = document.createElement('img');
        img.src = event.target.result; // Set the src to the data URL
        img.alt = single_file.name; // Add alt text
        img.className = "col-6"

        // Append the img element to the preview div
        previewDiv.appendChild(img);
      };

      reader.readAsDataURL(single_file); // Read the file as a data URL
    } else {
      console.warn(`${single_file.name} is not an image file.`);
    }
  });
}

function close_home_response(){
  document.getElementById("home_response").style.display = "None";

}