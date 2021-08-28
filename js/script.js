
let items = document.querySelectorAll('.store-item');
let btns = document.getElementsByClassName('btn')
let buttons =[...btns]

let lightBox = document.querySelector('.lightbox-container');
let lightBoxItem = document.querySelector('.lightbox-item')

// lightbox item funtcion create

let imageList = [];
let imagecounter = 0;
let images = document.querySelectorAll('.store-img');


//use a forEach loop to get a copy of all the images
images.forEach(image => {
    imageList.push(image.src)
});

 //Add an a click event listener to each store item
 items.forEach(item =>{
     item.addEventListener('click', (e) => {
         let imageScr = e.target.src;        
         lightBoxItem.style.background = `url(${imageScr})`;
         lightBox.style.display = 'block';
         imagecounter = imageList.indexOf(imageScr)
     }) 
 })


//  arrow functin next and prev elemenet 

let  arrowLeft = document.querySelector('.btnLeft');
let  arrowRight = document.querySelector('.btnRight');

arrowLeft.addEventListener('click', function(){
    
     imagecounter --;
    if(imagecounter < 0){
         imagecounter = imageList.length -1;
     }

     console.log(imagecounter)
     lightBoxItem.style.background = `url(${imageList[imagecounter]})`
})
arrowRight.addEventListener('click', function(){
    
    imagecounter ++;
    if(imagecounter > imageList.length){
        imagecounter = 0;
    }    
    lightBoxItem.style.background = `url(${imageList[imagecounter]})`
})


// modal close  function create 
let close = document.querySelector('.lightbox-close');
close.addEventListener('click',function(){
    lightBox.style.display = 'none'
})





// filter  function create 
buttons.forEach(btn =>{
    btn.addEventListener('click',(e) => {
        e.preventDefault();
        let filter = e.target.dataset.filter;
        items.forEach(item => {
            if (filter == 'all') {
                item.style.display = 'block'
            }else{
                if (item.classList.contains(filter)) {
                    item.style.display = 'block'
                }else{
                    item.style.display = 'none'
                }
            }
        })       
    })
})


// search  function   create
let  searchInput = document.getElementById('search-item')

let feedback = document.querySelector('.header404');

searchInput.addEventListener('keyup', function(e){
    let serachValue = e.target.value.toLowerCase().trim();

    items.forEach(item => {
        let itemText = item.textContent.toLocaleLowerCase().trim();
        
        if (itemText.includes(serachValue)) {
            item.style.display = 'block'
        }else{
            item.style.display = 'none';                        
        }        
    });    
})


