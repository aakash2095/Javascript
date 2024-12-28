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

// const cart =['shoe','tshirt','jeans']

// const pr = createorder(cart).then(
//    // makepayment(orderid)
//    function (orderid){
//     console.log('orderid is',orderid);
//     return makepayment(orderid)
//    }
// )
// .then(
//     function (paymentstatus) {
//         return placeorder(paymentstatus)
//     }
// )
// .catch(function(err){
//     console.log(err.message)
// })

// function createorder(cart){
//     return new Promise(function(resolve, reject) {
//         let orderid='1';
//         resolve('order created')
//     })
// }


// function makepayment(orderid){
//     return new Promise(function(resolve, reject) {
//         let paymentstatus=true;
//         if (paymentstatus){
//             resolve(paymentstatus)
//         }
//         else{
//             const err = Error('Payment Failed')
//             reject(err)
            
//         }
//     })
// }

// ===================Async-Await Function 

// function resolveAfter2Seconds() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve('resolved');
//       }, 2000);
//     });
//   }
  
//   async function asyncCall() {
//     console.log('calling');
//     const result = await resolveAfter2Seconds();
//     console.log(result);
//     // Expected output: "resolved"
//   }
  
//   asyncCall();



//     const p1 = new Promise((resolve)=>{
//         setTimeout(() => {
//             resolve('resolved p1')
//         },5000);
//     })


//     const p2 = new Promise((resolve)=>{
//         setTimeout(() => {
//             resolve('resolved p2')
//         },10000);
//     })


//     async function asyncCall() {
//         console.log('calling p1')
//         const result1=await p1;
//         console.log(result1)
        
        
        
//         console.log('calling p2')
//         const result2=await p2;
//         console.log(result2)
//     }
    

//     // asyncCall();


// function getdata() {
//     console.log('calling p2');
//     p2.then(
//         (res) => {console.log(res)}
//     )
//     console.log('hello Aakash')
    
// }

// getdata();



/*
Fetch(url) ==> Response(promise) ==> Resoponse.json()(promise) ==> result
*/


// {
//     "login": "aakash2095",
//     "id": 171691560,
//     "node_id": "U_kgDOCjvOKA",
//     "avatar_url": "https://avatars.githubusercontent.com/u/171691560?v=4",
//     "gravatar_id": "",
//     "url": "https://api.github.com/users/aakash2095",
//     "html_url": "https://github.com/aakash2095",
//     "followers_url": "https://api.github.com/users/aakash2095/followers",
//     "following_url": "https://api.github.com/users/aakash2095/following{/other_user}",
//     "gists_url": "https://api.github.com/users/aakash2095/gists{/gist_id}",
//     "starred_url": "https://api.github.com/users/aakash2095/starred{/owner}{/repo}",
//     "subscriptions_url": "https://api.github.com/users/aakash2095/subscriptions",
//     "organizations_url": "https://api.github.com/users/aakash2095/orgs",
//     "repos_url": "https://api.github.com/users/aakash2095/repos",
//     "events_url": "https://api.github.com/users/aakash2095/events{/privacy}",
//     "received_events_url": "https://api.github.com/users/aakash2095/received_events",
//     "type": "User",
//     "user_view_type": "public",
//     "site_admin": false,
//     "name": "Aakash Soni",
//     "company": null,
//     "blog": "",
//     "location": null,
//     "email": null,
//     "hireable": null,
//     "bio": "Full Stack Developer | Focused on Python | Passionate about building efficient, scalable applications. Open to collaborations and learning opportunities.",
//     "twitter_username": null,
//     "public_repos": 10,
//     "public_gists": 0,
//     "followers": 1,
//     "following": 1,
//     "created_at": "2024-06-04T12:23:59Z",
//     "updated_at": "2024-11-26T09:53:17Z"
//   }


// const api = 'https://api.github.com/users/aakash2095'


// async function fetchprofile(url) {
//     const response = await fetch(url);
//     console.log(response);
//     if (!response.ok) {
//         throw new Error("Failed Network Call");
        
//     }

//     const Data = await response.json();
//     return Data
    
// }

// async function displayprofile() {
//     try {
//         const profile = await fetchprofile(api);
//     } catch (error) {
        
//     }
// }


// function displayprofile(Data) {
//     const profile = document.getElementById('profile')
// }
// fetchprofile(api);

/////////////////////////////////////////////////////////////////////////

// const api = 'https://api.github.com/users/aakash2095'
// async function fetchProfile(url) {
//   const response = await fetch(url);
//   console.log(response);
//   if (!response.ok) {
//     throw new Error("Failed Network Call");
//   }
//   const Data = await response.json();
//   return Data
// }
// async function dispayProfile() {
//   try {
//     const profileResponse = await fetchProfile(api);
//     createProfile(profileResponse)
//   } catch (error) {
//     const profileDiv = document.getElementById('profile').innerText(error.message);
//   }
// }
// function createProfile(data) {
//   const profileDiv = document.getElementById('profile')
//   const avatar = document.createElement('img')
//   avatar.src = data.avatar_url;
//   avatar.alt = `${data.login}'s Avatar`;
//   avatar.style.width = "150px";
//   avatar.style.height = "150px";
//   avatar.style.borderRadius = "50%"

//   profileDiv.appendChild(avatar)
// }


// dispayProfile();



const api='https://api.exchangerate-api.com/v4/latest/USD'
async function fetchcurrency(url) {
  
  const response = await fetch(url)
}