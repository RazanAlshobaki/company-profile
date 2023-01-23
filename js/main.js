let sections= document.querySelectorAll('section');
let links= document.querySelectorAll('nav .container ul li a');
let btn = document.querySelector('.r-project button');
let image = document.querySelector('.imageHidden img');
let imgs = document.querySelectorAll('.part img');



onscroll=function(){
    sections.forEach(section => {
        if(window.scrollY >= section.offsetTop -300){
            links.forEach(link =>{
                if(link.getAttribute('href')== '#'+section.getAttribute('id')){
                    link.style.color='blue';
                }else {
                    link.style.color=null; 
                }
            });
        }
        
    });
}
btn.onclick= function(){
    if(image.dataset.image==btn.getAttribute('id')){
        image.style.display='block';
    }else{
        image.style.display='null';

    }
}
let i=0;
let imgId= window.setInterval(()=>{
    imgs.forEach(img => {
        img.style.display='none';
    });
    imgs[i].style.display='block';
    i++;
    if(i==imgs.length){
        i=0;
    }
}, 1000);