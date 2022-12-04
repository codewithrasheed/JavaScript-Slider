function slideshow(num){
    var slides = document.getElementsByClassName('slide');
    
    if(num == slides.length){
        flag = 0;
        num = 0; 
    }
    if(num < 0){
        flag = slides.length-1;
        num = slides.length-1;
    }


    for (var y of slides) {
        y.style.display = "none";   
    }
    
    slides[num].style.display = "block";
}
var flag = 0;
slideshow(flag);

function controll(a){
    flag = flag + a;
    slideshow(flag);
}