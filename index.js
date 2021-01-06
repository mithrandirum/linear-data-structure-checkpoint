var count = document.querySelectorAll('.count')
var incBtn = document.querySelectorAll('.increment')
var theprices = document.querySelectorAll('#prices')
var decBtn = document.querySelectorAll('.decrement')
var totalPrice = document.getElementById('totalPrice')
var close = document.querySelectorAll('#sup')
var heart = document.querySelectorAll('#heart')


var prices = [ 
    item1 = 15,
    item2 = 25,
    item3 = 10,
    item4 = 23
]
var total = 0


for (let i = 0 ; i < prices.length; i++) {
var prix =document.querySelectorAll('#prices')
prix[i].innerHTML = prices[i]

incBtn[i].addEventListener('click', ()=>{
    if ( count[i].innerHTML >= 10) {
        setTimeout(()=>{
         alert('seriously ?')
        }, 500)
        return null
        
    }else {var value = count[i].innerHTML
        value ++ 
        count[i].innerHTML = parseInt(value)
    
        var fok = parseInt(prices[i])
        theprices[i].innerHTML = fok * count[i].innerHTML
       
         }
        
})

decBtn[i].addEventListener('click', ()=>{
     if (count[i].innerHTML <= 0) {
         setTimeout( ()=>{
       alert(' capitalism strongly rejects')
         }, 500)
         return null
         } else {
            var value = count[i].innerHTML
            value --
            count[i].innerHTML = parseInt(value)
        
            var fok = parseInt(prices[i])
            theprices[i].innerHTML  -= fok
          
          }
          
         
})

close[i].addEventListener('click', (e)=>{
   e.target.parentElement.remove()
   setTimeout( ()=> {
    alert('item removed')
   }, 500)
})
 heart[i].classList.remove('red-heart')

heart[i].addEventListener('click', (e)=>{
    e.target.classList.toggle('red-heart')
})
}