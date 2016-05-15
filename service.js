'use strict'

const express = require('express')
const exec = require('child_process').exec
const app = express()

app.route('/health').get((req, res) => res.send('ok'))

app.use((req, res) => {
  console.log(`service-2: ${req.method} ${req.url}`)
  exec('/sbin/ifconfig eth0 | grep \'inet addr:\' | cut -d: -f2 | awk \'{ print $1}\'', (err, stdout) => {
    const out = `service-2: ${(new Date()).toString()} on ${(err || stdout)}`
    res.send(out)
  })
})

app.listen(3000, () => {
  console.log('service-2 started on port 3000')
})
