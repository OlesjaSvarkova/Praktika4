const express = require('express')
const app = express()
const connect = require('./config1')

app.set('json spaces', 2)

app.get('/', function (req, res) {
    res.send('Hello, World');
});

app.get('/tere', function (req, res) {
    res.send('Tere, Maailm');
});

app.get('/api/rooms', function (req, res) {
    connect.query("SELECT DISTINCT room FROM controller_sensor", (error, results) => {
        if (!error) {
            res.json(results.rows)
        }
        else {
            res.json(error.message)
        }
    })
});

app.get('/api/room/:room/sensors', function (req, res) {
    const room=req.params.room
    connect.query("SELECT sensor.sensorname FROM sensor INNER JOIN controller_sensor ON controller_sensor.id_sensor=sensor.id " +
    "WHERE controller_sensor.room= '" + room + "'", (error, results) => {
        if (!error) {
            res.json(results.rows)
        }
        else {
            res.json(error.message)
        }
    })
});

app.get('/api/controller', function (req, res) {
    connect.query("SELECT DISTINCT controllername FROM controller", (error, results) => {
        if (!error) {
            res.json(results.rows)
        }
        else {
            res.json(error.message)
        }
    })
});

app.get('/api/controller/sensor/:controller', function (req, res) {
    const controller=req.params.controller
    connect.query("SELECT sensor.sensorname FROM sensor INNER JOIN controller_sensor ON controller_sensor.id_sensor=sensor.id " +
    "INNER JOIN controller ON controller.id=controller_sensor.id_controller " +
    "WHERE controller.controllername=  '" + controller + "'", (error, results) => {
        if (!error) {
            res.json(results.rows)
        }
        else {
            res.json(error.message)
        }
    })
});

app.listen(3000, () => {
    console.log('Server is running')
})