const windDataModel = require('../models/windData')

module.exports = {
  create: function (windData) {
    windDataModel.create({ i: windData.i, w_d: windData.w_d, w_s: windData.w_s, v: windData.v }, function (err, result) {
      if (err) {
        console.log(err)
      } else {
        console.log('Wind data create')
      }
    })
  },
  createAll: function (data) {
    Object.keys(data).forEach(function (key, index) {
      windDataModel.create({ timestamp: key, i: data[key].i, w_d: data[key].w_d, w_s: data[key].w_s, v: data[key].v }, function (err, result) {
        if (err) {} else {
          console.log(`Wind data create: ${result}`)
        }
      })
    })
  },
  getAll: function (req, res, next) {
    windDataModel.find({}, function (err, windData) {
      if (err) {
        next(err)
      } else {
        res.json({ status: 'success', message: 'Get todos successfully', wind_data: windData.sort((a, b) => (a.timestamp > b.timestamp) ? 1 : -1) })
      }
    })
  }
}
