const express = require('express');
const request = require('request');
const url = require('url');

const app = express();

const rapidApiKey = 'f0fb454bccmsh5dd8f95149ffa65p1f9ad6jsn0a2a30d55dda';
const rapidApiHost = 'apistocks.p.rapidapi.com';
const apiUrl = 'https://apistocks.p.rapidapi.com/weekly';

app.get('/stocks/:symbol', (req, res) => {
  const symbol = req.params.symbol;

  const options = {
    method: 'GET',
    url: apiUrl,
    qs: {
      symbol: symbol,
      dateStart: '2021-06-01',
      dateEnd: '2021-07-31'
    },
    headers: {
      'X-RapidAPI-Key': rapidApiKey,
      'X-RapidAPI-Host': rapidApiHost
    }
  };

  // Make a request using the constructed URL
  request(options, (error, response, body) => {
    if (error) {
      res.status(500).send('Internal Server Error');
    } else {
      res.send(body);
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});




