// {
//     const a=2;
//     function square(n){
//         const ans = n * n;
//         return ans;
//         const a=10
//     }

//     const square_2 = square(2);
//     const square_a = square(a);
//     console.log('inside',a)
// }

// console.log(a)
// // Execution context
// //global execution context 


// function x(params) {
    
// }

// function y(params) {
    
// }


// x(y);  //y is callback function 



// function perform(params) {
//     document.getElementById('clickme')
//     .addEventListener('click',function() {
//         params()
//         var p = document.createElement('p');
//         p.textContent = 'Paragraph Created';
//         p.id ='new-paragraph';
//         document.body.appendChild(p)
        
//     });
// }

// function x() {
//     console.log('i am clicked');
// }

// perform(x)






// for (i; i <= 5; i++) 
// {
//   document.write( i + "<br>");
// }
    
// var i= 1

// for (i;i <=5;i++) {

//     document.write(i  + '<br>');
//     console.log(i);

// }





// var i= [1,3,4,2];


// setTimeout(()=>{
//     console.log(i);
    
// },i*1000)

// let num = [1, 3, 4, 2,'hello'];

// for (let i of num) {
//     setTimeout(() => {
//         console.log(i);
//     }, i * 1000);
// }


// let i = [1,3,2,4];
// for(i=1;i<4;i++){
//     setTimeout(()=>{
//         console.log(i);
//     },i*1000);
// }

//    Promise

const cart =['shoe','tshirt','jeans']

const pr = createorder(cart).then(
   // makepayment(orderid)
   function (orderid){
    console.log('orderid is',orderid);
    return makepayment(orderid)
   }
)
.then(
    function (paymentstatus) {
        return placeorder(paymentstatus)
    }
)
.catch(function(err){
    console.log(err.message)
})

function createorder(cart){
    return new Promise(function(resolve, reject) {
        let orderid='1';
        resolve('order created')
    })
}


function makepayment(orderid){
    return new Promise(function(resolve, reject) {
        let paymentstatus=true;
        if (paymentstatus){
            resolve(paymentstatus)
        }
        else{
            const err = Error('Payment Failed')
            reject(err)
            
        }
    })
}

function