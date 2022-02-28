// // //JS is a single threaded executes one line of code at a time.
// // //Promise is an object,Javascript object representing the eventual completion or failure of an asynchronous operation..

// // //Object that return in a meantime is a promise..

// // // const willGetYouABat = new Promise((resolve, reject) => {
// // //   const random = Math.random();

// // //   if (random < 0.5) {
// // //     resolve();
// // //   } else {
// // //     reject();
// // //   }
// // // }).then(()=>{
// // //     console.log('We got a bat')
// // // }).catch(()=>{
// // //     console.log('rejected')
// // // });
// // // willGetYouABat.then(()=>{
// // //     console.log ('We got a Bat')
// // // }) //Every Promise has a then method and then method takes a call back and automatically run and executes when the Promise is resolved..

// // // willGetYouABat.catch(()=>{
// // //     console.log('Request is rejected')
// // // }) //catch method when the promise is rejected , it also takes a call back function and automatically runs.

// // const makeBatPromise = () => {
// //   return new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //       const random = Math.random();

// //       if (random < 0.5) {
// //         resolve();
// //       } else {
// //         reject();
// //       }
// //     },1000);
// //   });
// // };
// // makeBatPromise().then(()=>{
// //     console.log ('We got a Bat')
// // }).catch(()=>{
// //     console.log ('Nopee')
// // })
// // //It is a common pattern that makes a function that returns a promise

// //ex-02

// // const requests = (url) => {
// //   return new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //         const pages = {
// //           '/users': [
// //             {
// //               id: 23,
// //               userName: 'Huzaifa',
// //             },{
// //                 id: 30,
// //                 userName: 'Alii',
// //               }
// //           ],
// //           '/about': 'This is about Page'
// //         };
// //         const data= pages[url]
// //         if(data) {
// //             resolve({
// //                 status:200 , data //shorthand, this means data:data
// //             });
// //         }
// //         else{
// //             reject({
// //                 status: 404
// //             })
// //         }
            
// //     }, 1000);
// //   });
// // };
// // requests('/users')
// //   .then((res) => {
// //       console.log('Status code =>' , res.status)
// //       console.log('data =>', res.data)
// //     console.log('Resolved');
// //   })
// //   .catch((res) => {
// //     console.log(res.status);
// //     console.log('Failed');
// //   });


// //ex-03
// const fakeRequest = (url) => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			const pages = {
// 				'/users'        : [
// 					{ id: 1, username: 'Bilbo' },
// 					{ id: 5, username: 'Esmerelda' }
// 				],
// 				'/users/1'      : {
// 					id        : 1,
// 					username  : 'Bilbo',
// 					upvotes   : 360,
// 					city      : 'Lisbon',
// 					topPostId : 454321
// 				},
// 				'/users/5'      : {
// 					id       : 5,
// 					username : 'Esmerelda',
// 					upvotes  : 571,
// 					city     : 'Honolulu'
// 				},
// 				'/posts/454321' : {
// 					id    : 454321,
// 					title :
// 						'Ladies & Gentlemen, may I introduce my pet pig, Hamlet'
// 				},
// 				'/about'        : 'This is the about page!'
// 			};
// 			const data = pages[url];
// 			if (data) {
// 				resolve({ status: 200, data }); //resolve with a value!
// 			}
// 			else {
// 				reject({ status: 404 }); //reject with a value!
// 			}
// 		}, 1000);
// 	});
// };

// fakeRequest('/users')
// 	.then((res) => {
// 		console.log(res);
// 		const id = res.data[0].id;
// 		return fakeRequest(`/users/${id}`);
// 	})
// 	.then((res) => {
// 		console.log(res);
// 		const postId = res.data.topPostId;
// 		return fakeRequest(`/posts/${postId}`);
// 	})
// 	.then((res) => {
// 		console.log(res);
// 	})
// 	.catch((err) => {
// 		console.log('OH NO!', err);
// 	});

async function add (a,b) {
    if(typeof a!=='number' || typeof b!=='number'){
        throw 'Values must be number'
    }
    return a+b
}

add('er', 4).then((data)=>{
    console.log ('Resolved with ' + data)
}).catch((err)=>{
    console.log('Error is' + err)
})