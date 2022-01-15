const axios = require('axios')

// GETTING ALL
function gettingall() {
  // Make a request for a user with a given ID
axios.get('http://localhost:1917/database/')
.then(function (response) {
  // handle success
  console.log(response.data);
})
.catch(function (error) {
  // handle error
  console.log(error);
})
.then(function () {
  // always executed
});
}


// GETTING ONE
function gettingone() {
  // Make a request for a user with a given ID
axios.get('http://localhost:1917/database/61e161c916d08380364c3806')
.then(function (response) {
  // handle success
  console.log(response.data);
})
.catch(function (error) {
  // handle error
  console.log(error);
})
.then(function () {
  // always executed
});
}
// DELETING ONE
function deleteingone() {
  // Make a request for a user with a given ID
axios.delete('http://localhost:1917/database/61e161718a45470badb4964f')
.then(function (response) {
  // handle success
  console.log(response.data);
})
.catch(function (error) {
  // handle error
  console.log(error);
})
.then(function () {
  // always executed
});
}
// POSTING ONE
  function posting(){
 
    axios.post('http://localhost:1917/database', {
      name:"hp",
      date:2012019,
      avaliblity:true
    })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    }) 
    
}

// UPDATING ONE
function updatingone(){
 
  axios.patch('http://localhost:1917/database/61e1832dff50f2a71a743871', {
    name:"dell",
    date:2012019,
    avaliblity:true
  })
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  }) 
  
}
// updatingone()
  gettingall()
// gettingone()
// posting()
// deleteingone()