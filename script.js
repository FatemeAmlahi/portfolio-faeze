let portfiliolinks = document.getElementsByClassName("titles");
let portfiliocontents = document.getElementsByClassName("porfolio-content");
function opentab(name) {
  for (portfiliolink of portfiliolinks) {
    portfiliolink.classList.remove("active-link");
  }
  for (portfiliocontent of portfiliocontents) {
    portfiliocontent.classList.remove("active-content");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(name).classList.add("active-content");
}
