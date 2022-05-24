const maplook = document.getElementById("lookatmap1");
maplook.addEventListener("click", changetomap);


function changetomap() {
    document.getElementById("pic1").style.display="none";
    document.getElementById("mapdiv").style.display="block";
    document.getElementById("lookatmap1").style.display="none";
    document.getElementById("lookatpic1").style.display="block";
    document.getElementById("picreference").style.display="none";
}

const piclook = document.getElementById("lookatpic1")
piclook.addEventListener("click", changetopic)

function changetopic() {
    document.getElementById("pic1").style.display="block";
    document.getElementById("mapdiv").style.display="none";
    document.getElementById("lookatmap1").style.display="block";
    document.getElementById("lookatpic1").style.display="none";
    document.getElementById("picreference").style.display="block";
}

const lookup = document.getElementById("lookup")
lookup.addEventListener("click", lookatroof)

function lookatroof() {
    document.getElementById("lookup").style.display="none";
    document.getElementById("blackheadstext").style.display="block";
    document.getElementById("pic1").style.display="none";
    document.getElementById("pic2").style.display="block";
    document.getElementById("picreference1").style.display="none";
    document.getElementById("picreference2").style.display="block";
    document.getElementById("decisions1").style.display="grid"
    document.getElementById("map1").style.display="block";
}


const news = document.getElementById("newspaperb")
news.addEventListener("click", lookatnews)

function lookatnews() {
    document.getElementById("newspaperb").style.display="none";
    document.getElementById("newspaperp").style.display="flex";
}