//fetch always return promises and wont reject on Http error status even if the response is 404 or 500. It will only reject on Network failing..

//const checkStatusAndParse = (response) => {
// 	if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);

// 	return response.json();
// };

// const printPlanets = (data) => {
// 	console.log('Loaded 10 more planets...');
// 	for (let planet of data.results) {
// 		console.log(planet.name);
// 	}
// 	return Promise.resolve(data.next);
// };

// const fetchNextPlanets = (url = 'https://swapi.co/api/planets/') => {
// 	return fetch(url);
// };

// fetchNextPlanets()
// 	.then(checkStatusAndParse)
// 	.then(printPlanets)
// 	.then(fetchNextPlanets)
// 	.then(checkStatusAndParse)
// 	.then(printPlanets)
// 	.then(fetchNextPlanets)
// 	.then(checkStatusAndParse)
// 	.then(printPlanets)
// 	.catch((err) => {
// 		console.log('SOMETHING WENT WRONG WITH FETCH!');
// 		console.log(err);
// 	});

const promse = fetch('https://randomuser.me/api/?result=10')
  .then((response) => {
    if (!response.ok) {
      throw new Error(`The status code is ${response.status}`);
    } else {
      response.json().then((data) => {
        const dataaa= Array(data);
        for (let results of data.results) {
          console.log(results);
          console.log(results.gender);
        }
      });
    }
  })
  .catch((err) => {
    console.log('Something went wrong');
    console.log(err);
  });
