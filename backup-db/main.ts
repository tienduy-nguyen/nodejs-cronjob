import cron from 'node-cron'
import express from 'express'
import shell from 'shelljs'
// import dateFormat from 'dateformat'

const app = express()

// Backup a database at 11:59 PM every day.
cron.schedule('59 23 * * *', function () {
  console.log('---------------------');
  console.log('Running Cron Job');
  if (shell.exec('sqlite3 database.sqlite .dump > data_dump.sql').code !== 0) {
    shell.exit(1);
  } else {
    shell.echo('Database backup complete');
  }
});

app.listen(3111, () => console.log('App is running on port 3111'))
