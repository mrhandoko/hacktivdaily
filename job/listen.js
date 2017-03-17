'use strict'

const kue = require('kue')
const queue = kue.createQueue()
require('dotenv').config()
var cron = require('node-cron');

cron.schedule('*/12 * * * * *', function() {
  const sg = require('sendgrid')('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')
  queue.process('email', (job, done) => {
    const request = sg.emptyRequest({
      method: 'POST',
      path: '/v3/mail/send',
      body: {
        personalizations: [{
          to: [{
            email: job.data.to
          }],
          subject: job.data.content
        }],
        from: {
          email: 'wahyuwajjoo@gmail.com'
        },
        content: [{
          type: 'text/plain',
          value: job.data.content
        }]
      }
    })

    sg.API(request)
      .then(response => {
        console.log(response.statusCode)
        console.log(response.body)
        console.log(response.headers)
        console.log();
        done()
      })
      .catch(error => {
        // error is an instance of SendGridError
        // The full response is attached to error.response
        console.log(error.response.statusCode)
      })
  })
})
