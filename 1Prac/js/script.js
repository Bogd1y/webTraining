const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}

// const blogLink1 = document.querySelector('.link1');
// const blogLink2 = document.querySelector('.link2');
// const blogLink3 = document.querySelector('.link3');
// if (blogLink1){
//         blockLink1.addEventListener("click",function (e) {  
//         blogLink1.classList.toggle('_active');
            
//         }); 
// }
// if (blogLink2){
//         blockLink2.addEventListener("click",function (e) {   
//         blogLink2.classList.toggle('_active');
        
//     }); 
// }
// if (blogLink3){
//         blockLink2.addEventListener("click",function (e) {
//         blogLink1.classList.toggle('_active');  
//     }); 
// }
// const blogLink2 = document.querySelector('.link2');
//     blogLink2.addEventListener("click", function (e){
//     blogLink2.classList.toggle('linkActive');
//      alert(blogLink2);
// });

// if (blogLink2){
//             blogLink2.addEventListener("click", function (e) {   
//             blogLink2.classList.toggle('_linkActive');
            
//         }); 
//     }