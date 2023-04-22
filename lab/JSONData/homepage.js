var imgfollow=document.getElementsByClassName("pointer");
document.onmousemove=function() {
    var x=event.clientX*95/window.innerWidth + "%";
    //event.clientX to get horizontal coordinate of mouse
    var y=event.clientY*95/window.innerHeight + "%";
    //event.clientY to get vertical coordinate of mouse
    for (var i=0;i<2;i++){
        imgfollow[i].style.left=x;
        imgfollow[i].style.top=y;
        imgfollow[i].style.transform="translate(-"+x+",-"+y+")";
    }
}