const request = require('request');


request('https://api.thecatapi.com/v1/breeds/search?q=siaasdfsa', (error, response, body) => {
  if (error) throw error;
  let data = JSON.parse(body);
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);
  if (data[0]) {
    console.log(data[0].description);
  } else {
    return console.log('You cant spell cat names... Try again.');
  }
  console.log(typeof data);
});

