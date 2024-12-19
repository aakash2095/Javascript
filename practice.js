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
    
var i= 1

for (i;i <=5;i++) {

    document.write(i  + '<br>');
    console.log(i);

}

setTimeout(()=>{
    console.log(i);
    
},i*1000)