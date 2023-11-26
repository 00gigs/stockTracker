the t object in the body response is = The Unix Msec timestamp for the start of the aggregate window.
e.g 1578027600000 =
convert The Unix Msec timestamp into human readble code


READ ME 👇🏻
const express = require('express');
const moment = require('moment');

const app = express();

app.get('/', (req, res) => {
  const timestamp = 1578027600000;
  const date = moment(timestamp).format('hh:mm:ss A');
  res.send(date);
});
