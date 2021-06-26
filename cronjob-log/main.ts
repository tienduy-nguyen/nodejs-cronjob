import cron from 'node-cron'
import express from 'express'
import fs from 'fs'
// import dateFormat from 'dateformat'

const app = express()

app.get('/', (req, res) => {
  return res.send('Hi there!')
})

// cron.schedule('* * * * *', function() {
//   // @ts-ignore
//   const now = dateFormat(new Date(), "dddd, mmmm dS, yyyy, h:MM:ss TT");
//   console.log(`Running cronjob log every minute. Now is ${now}`); })


// Remove the error.log file every twenty-first day of the month.
cron.schedule('0 0 21 * *', function () {
  console.log('---------------------');
  console.log('Running Cron Job');
  fs.unlink('./error.log', err => {
    if (err) throw err;
    console.log('Error file successfully deleted');
  });
});

app.listen(3111, () => console.log('App is running on port 3111'))
