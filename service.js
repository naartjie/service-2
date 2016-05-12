'use strict'

const express = require('express')
const exec = require('child_process').exec
const app = express()

app.use((req, res) => {
  console.log(`service-2: ${req.method} ${req.url}`)
  exec('hostname', (err, stdout) => {
    if (err) {
      res.send('service-2: ' + err)
    } else {
      res.send('service-2: ' + stdout)
    }
  })
})

app.listen(3000, () => {
  console.log('service-2 started on port 3000')
})
