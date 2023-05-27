
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
    for(tabcontent of tabcontents ){
        tabcontent.classList.remove("active-tab");
        document.getElementById(tabname).classList.add("active-tab");
    }
}
var sidemenu = document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}
