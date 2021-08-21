let memoryPrice = document.getElementById('extra-memory');
let storagePrice = document.getElementById('extra-storage');
let delivery = document.getElementById('delivery-charge');
let totalCost = document.getElementById('total-price');


function GetMemoryValue(x){
    memoryPrice.innerText = x;
    showTotalCost ()
 }

 function GetStorageValue(x){
    storagePrice.innerText = x;
    showTotalCost ()
 }
function GetDeliveryValue(s){
    delivery.innerText = s;
    showTotalCost ()
 }

 function showTotalCost (){
    
    let total =1299 + Number(memoryPrice.innerText) + Number(storagePrice.innerText) +Number(delivery.innerText);
    document.getElementById('total-price').innerText = total;
    document.getElementById('total').innerText = total;

 }

 function proCode(){
    const promoCode = document.getElementById('promuValue').value ;
    if(promoCode == 'stevekaku'){
        let price =    totalCost.innerText;
        let percentage = Number(price) * 20 /100
         document.getElementById('total').innerText = Number(price)- percentage;

     }
   }

document.getElementById('memory-8gb').addEventListener('click',function(){
    GetMemoryValue(0);
})
document.getElementById('memory-16gb').addEventListener('click',function(){
    GetMemoryValue(180);
})
document.getElementById('storage-256gb').addEventListener('click',function(){
    GetStorageValue(0);
})
document.getElementById('storage-512gb').addEventListener('click',function(){
    GetStorageValue(100);
})
document.getElementById('storage-1tb').addEventListener('click',function(){
    GetStorageValue(180);
})
document.getElementById('delivery-free').addEventListener('click',function(){
    GetDeliveryValue(0);
})
document.getElementById('delivery-cost').addEventListener('click',function(){
    GetDeliveryValue(20);
})

document.getElementById('promo-apply').addEventListener('click',function(){
    proCode();
})




// function getExtraCost(eventId ,costId , costValue){
//     document.getElementById(eventId).addEventListener('click',function(){
//         let costField = document.getElementById(costId);
//         costField.innerText = costValue;
//         const bestPrice = document.getElementById('best-price').innerText;
        
//         document.getElementById('total-price').innerText = parseInt(bestPrice) + costValue

//     })
// }
// getExtraCost('memory-8gb', 'extra-memory', 0)
// getExtraCost('memory-16gb', 'extra-memory', 180)
// getExtraCost('storage-256gb', 'extra-storage', 0)
// getExtraCost('storage-512gb', 'extra-storage', 100)
// getExtraCost('storage-1tb', 'extra-storage', 180)
// getExtraCost('delivery-free', 'delivery-charge', 0)
// getExtraCost('delivery-cost', 'delivery-charge', 20)


// let bestPriceField = document.getElementById('best-price');
// let bestPrice = bestPriceField.innerText;
// let totalPriceField = document.getElementById('total-price');
// let totalPrice = totalPriceField.innerText;
// function memory(id){
//     if(id == 'memory-8gb'){
//         document.getElementById('extra-memory').innerText = 0;
//     }else if(id == 'memory-16gb'){
//         document.getElementById('extra-memory').innerText = 180;
//     }
// }

// document.getElementById('memory-8gb').addEventListener('click',function(){
//     document.getElementById('extra-memory').innerText = 0
//     totalPriceField.innerText = parseInt(totalPrice) + 0
// })

// document.getElementById('memory-16gb').addEventListener('click',function(){
//     document.getElementById('extra-memory').innerText = 180
//     totalPriceField.innerText = parseInt(totalPrice) + 180
// })