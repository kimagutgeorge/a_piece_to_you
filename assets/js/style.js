window.addEventListener('scroll', this.scrollFunction);
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
    const db_resp = document.getElementById("db_response").classList
    document.getElementById("db_response").style.display="none"
}