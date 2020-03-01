
var elem = document.documentElement;
document.getElementById('close').style.display="none";
document.getElementById('full').style.display="";
document.getElementById('close-slide').style.display="none";
document.getElementById('full-slide').style.display="";
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
    document.getElementById('full').style.display="none";
    document.getElementById('close').style.display="";
    document.getElementById('full-slide').style.display="none";
    document.getElementById('close-slide').style.display="";
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
    document.getElementById('full').style.display="none";
    document.getElementById('close').style.display="";
    document.getElementById('full-slide').style.display="none";
    document.getElementById('close-slide').style.display="";

  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
    elem.webkitRequestFullscreen();
    document.getElementById('full').style.display="none";
    document.getElementById('close').style.display="";
    document.getElementById('full-slide').style.display="none";
    document.getElementById('close-slide').style.display="";
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
    document.getElementById('full').style.display="none";
    document.getElementById('close').style.display="";
    document.getElementById('full-slide').style.display="none";
    document.getElementById('close-slide').style.display="";
  }
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
    document.getElementById('full').style.display="";
    document.getElementById('close').style.display="none";
    document.getElementById('full-slide').style.display="";
    document.getElementById('close-slide').style.display="none";
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
    document.getElementById('full').style.display="";
    document.getElementById('close').style.display="none";
    document.getElementById('full-slide').style.display="";
    document.getElementById('close-slide').style.display="none";
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
    document.getElementById('full').style.display="";
    document.getElementById('close').style.display="none";
    document.getElementById('full-slide').style.display="";
    document.getElementById('close-slide').style.display="none";
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
    document.getElementById('full').style.display="";
    document.getElementById('close').style.display="none";
    document.getElementById('full-slide').style.display="";
    document.getElementById('close-slide').style.display="none";
  }
}