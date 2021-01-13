

var inputQty = document.getElementsByClassName('input-el')
var incrementBtn = document.getElementsByClassName('increment')

for(let i = 0; i < incrementBtn.length; i++){
    var button = incrementBtn[i]
    button.addEventListener('click',inc)
    
}


var decrementBtn = document.getElementsByClassName('decrement')

for (let i = 0; i < decrementBtn.length; i++) {
    var button = decrementBtn[i]
    button.addEventListener('click', dec)
   
}

var close = document.getElementsByClassName('remove')
for (let i = 0; i < close.length; i++){
    var closebtn = close[i]
    closebtn.addEventListener('click', remove)

}

var hearts = document.getElementsByClassName('material-icons')
for (let i =0 ; i < hearts.length; i++) {
   var icon = hearts[i]
   icon.classList.remove('red-heart')
   icon.addEventListener('click', toggleColor)
}


function toggleColor(event){
 var heart = event.target
 heart.classList.toggle('red-heart')
 
}

function remove(event){
var rm = event.target
rm.parentElement.remove()
updateTotalPrice()
}



function inc(event){
var button = event.target
button.nextElementSibling.value ++

updateTotalPrice()
}


function dec(event){
  var button = event.target
    
 var input = button.previousElementSibling
 input.value <= 1 ? input.value =  1 : 
 input.value --
 
 updateTotalPrice()
}




function updateTotalPrice(){
var items = document.getElementsByClassName('items')
var total = 0
for (let i =0; i < items.length; i++){
 var item = items[i]
 
var priceElement = item.getElementsByClassName('price')[0]
var quantityElement = item.getElementsByClassName('input-el')[0]
var price = parseFloat(priceElement.innerText.replace('$', ''))
var qtity = quantityElement.value
console.log(qtity)
total = total + (price * qtity)

}

    document.getElementsByClassName('total')[0].innerText = '$' + total
}





