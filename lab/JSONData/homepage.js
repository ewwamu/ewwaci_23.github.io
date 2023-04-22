let imgfollow=document.getElementsByClassName("pointer");
document.onmousemove=function() {
    let x=event.clientX*95/window.innerWidth + "%";
    //event.clientX to get horizontal coordinate of mouse
    let y=event.clientY*95/window.innerHeight + "%";
    //event.clientY to get vertical coordinate of mouse
    for (let i=0;i<2;i++){
        imgfollow[i].style.left=x;
        imgfollow[i].style.top=y;
        imgfollow[i].style.transform="translate(-"+x+",-"+y+")";
    }
}