var toggle = false;


document.body.querySelector(".bottle1img").addEventListener("click",function(){

    toggle=!toggle;

    if(toggle){
        document.body.querySelector(".b1js").style.left="-200px";
    }
    else{
        document.body.querySelector(".b1js").style.left="200px";
    }

})

document.body.querySelector(".bottle2img").addEventListener("click",function(){

    toggle=!toggle;

    if(toggle){
        document.body.querySelector(".b2js").style.left="-200px";
    }
    else{
        document.body.querySelector(".b2js").style.left="510px";
    }

})

document.body.querySelector(".bottle3img").addEventListener("click",function(){

    toggle=!toggle;

    if(toggle){
        document.body.querySelector(".b3js").style.left="-200px";
    }
    else{
        document.body.querySelector(".b3js").style.left="810px";
    }

})

document.body.querySelector(".kitimg").addEventListener("click",function(){

    toggle=!toggle;

    if(toggle){
        document.body.querySelector(".kitjs").style.left="-500px";
    }
    else{
        document.body.querySelector(".kitjs").style.left="1125px";
    }

})