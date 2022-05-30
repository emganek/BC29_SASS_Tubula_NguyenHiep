window.onscroll = function(){
    if (window.scrollY >= 2){
        document.getElementById("header").style.backgroundColor = "white";
        document.getElementById("header").style.boxShadow ="0 0 10px 0 rgba(204 204 204 / 50%)"
    }
    else{
        document.getElementById("header").style.backgroundColor = "transparent";
        document.getElementById("header").style.boxShadow ="none"
    }
}