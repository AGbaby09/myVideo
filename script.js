const video = document.querySelector("video");
const controls = document.getElementById('controls');
const slideLeft = document.getElementById('switch');
const slide = controls.getElementsByTagName('span')[0];
// console.log(slide)

controls.addEventListener('click', ()=>{
    if(!slide.classList.contains('slide')){
        slide.classList.add('slide')
        video.pause()
    }else{
        slide.classList.remove('slide')
        video.play()
    }
})