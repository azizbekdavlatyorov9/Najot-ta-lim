const elList = document.querySelector('.list')


//Posts

// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "GET"
// })
//   .then((res) => res.json())
//   .then((data) => renderCountries(data))
//   .catch((error) => console.log(error))

//   function renderCountries(data) {
//     data.forEach((country) => {
//       let html = `
//       <div class = "w-25">
//     <img src="https://picsum.photos/300/300" alt="country image" width="240" height="300">

//       <h4>${country.title}</h4>
//         <p>${country.body}</p>
//       </div>
//       `

//       elList.insertAdjacentHTML("beforeend", html)
//     })
//   }

//Photos

// fetch("https://jsonplaceholder.typicode.com/photos", {
//   method: "GET"
// })
//   .then((res) => res.json())
//   .then((data) => renderPhotos(data))
//   .catch((error) => console.log(error))

//   function renderPhotos(data){
//     data.forEach((photos) => {
//       let html = `
//       <card class="w-25">
//       <img src="${"https://picsum.photos/300/300"}" alt="photo image" width="240" height="300">
//       <h4>${photos.title}</h4>
//       </card>
//       `

//       elList.insertAdjacentHTML("beforeend", html)
//     });
//   }

//Users

// fetch("https://jsonplaceholder.typicode.com/users", {
//   method: "GET"
// })
//   .then((res) => res.json())
//   .then((data) => renderUsers(data))
//   .catch((err) => console.log(err))

//   function renderUsers(data){
//     data.forEach((users) => {
//       let html = `
//       <card class="w-25">
//       <h4>Name: ${users.name}</h4>
//       <h4>Surname: ${users.username}</h4
//       <p>Email: ${users.email}</p>
//       <p>Address: ${users.address.street}</p>     
//       </card>
//         `
//         elList.insertAdjacentHTML("beforeend", html)
//     })
//   }

//Comments

// fetch("https://jsonplaceholder.typicode.com/comments", {
// method: 'GET'
// })
//      .then((res) => res.json())
//      .then((data) => renderComments(data))
//      .catch((err) => console.log(data))

//      function renderComments(data){
//       data.forEach((comments) => {
//         let html = `
//         <card class="w-25">
//         <h4>${comments.name}</h4>
//         <h5>${comments.email}</h5>
//         <p>${comments.body}</p>
//         `
//         elList.insertAdjacentHTML("beforeend", html)
//       })
//      }

//Albums

// fetch("https://jsonplaceholder.typicode.com/albums", {
//   method: "GET"
// })
//     .then((res) => res.json())
//     .then((data) => renderAlbums(data))
//     .catch((err) => console.log(err))

//     function renderAlbums(data){ 
//       data.forEach((albums) => { 
//         let html = `
//         <card class="w-25">
//         <h3>${albums.id}</h3>
//         <h4>${albums.title}</h4>
//         </card>
//         `
//         elList.insertAdjacentHTML("beforeend", html)
//       })
//     }

//Todos

// fetch("https://jsonplaceholder.typicode.com/todos", {
//   method: "GET"
// })

//       .then((res) => res.json())
//       .then((data) => renderTodos(data))
//       .catch((err) => console.log(err))

//       function renderTodos(data){
//         data.forEach((todos) => {
//           let html = `
//           <card class="w-25">
//           <h4>${todos.title}</h4>
//           <h5>${todos.completed}</h5>
//           </card>
//           `
//           elList.insertAdjacentHTML("beforeend", html)
//         })
//       }