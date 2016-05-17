'use strict'

const express = require('express')
const exec = require('child_process').exec
const app = express()

app.route('/health').get((req, res) => res.send('ok'))

app.use((req, res) => {
  console.log(`time-service: ${req.method} ${req.url}`)
  exec('hostname', (err, stdout) => {
    const out = `time-service: ${(new Date()).toString()} on host "${(err || stdout).trim().slice(-5)}"\n`
    res.send(out)
  })
})

app.listen(3000, () => {
  console.log('time-service started on port 3000')
})
