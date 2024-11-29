window.addEventListener('scroll', this.scrollFunction);
/*
universal links
*/
let platforms = [];
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