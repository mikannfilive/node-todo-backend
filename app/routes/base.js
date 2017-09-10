const express = require('express')

function createRouter() {
  const router = new express.Router()

  router.route('/').get((req, res) => {
    res.send('Welcome to the Medlogger backend')
  })

  return router
}

module.exports = {
  createRouter
}