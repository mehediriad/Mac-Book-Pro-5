
function getExtraCost(eventId ,costId , costValue){
    document.getElementById(eventId).addEventListener('click',function(){
        let costField = document.getElementById(costId);
        costField.innerText = costValue;
        const bestPrice = document.getElementById('best-price').innerText;
        
        document.getElementById('total-price').innerText = parseInt(bestPrice) + costValue

    })
}
getExtraCost('memory-8gb', 'extra-memory', 0)
getExtraCost('memory-16gb', 'extra-memory', 180)
getExtraCost('storage-256gb', 'extra-storage', 0)
getExtraCost('storage-512gb', 'extra-storage', 100)
getExtraCost('storage-1tb', 'extra-storage', 180)
getExtraCost('delivery-free', 'delivery-charge', 0)
getExtraCost('delivery-cost', 'delivery-charge', 20)


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