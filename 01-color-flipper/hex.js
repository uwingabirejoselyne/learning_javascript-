const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","c","D","E","F",]
btn = document.querySelector('.btn')
color= document.querySelector('.color')
btn.addEventListener('click',function(){
    hexcolor ="#"
    for(i=0;i<6;i++){
        hexcolor +=hex[randomColor()]
    }
    document.body.style.backgroundColor =hexcolor
})
function randomColor(){
    return Math.floor(Math.random()*hex.length)
}