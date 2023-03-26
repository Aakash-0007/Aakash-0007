const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
if (bar){
    bar.addEventListener('click', ()  =>{
            nav.classList.add('active');
        })

}
if (close){
    close.addEventListener('click', ()  =>{
            nav.classList.remove('active');
        })
document.getElementById("shopbutton").onclick = function (){
    location.href="shop.html"
} 
document.getElementById("explorebutton").onclick = function (){
    location.href="shop.html"
}            
}
/* Delete Product*/
function myFunction(){
    document.getElementById("tbody").deleteRow(0);
}

