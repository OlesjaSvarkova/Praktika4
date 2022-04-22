const express = require('express')
const app = express()
const connect = require('./config2')

app.set('json spaces', 2)

app.get('/api/nameCountry', function (req, res) {
    connect.query("SELECT DISTINCT name FROM country", (error, results) => {
        if (!error) {
            res.json(results.rows)
        }
        else {
            res.json(error.message)
        }
    })
});

app.get('/api/:continent/country', function (req, res) {
    const continent = req.params.continent
    connect.query("SELECT country.name AS countryName, city.name AS capital FROM country INNER JOIN city ON city.id=country.capital " +
    "WHERE continent=  '" + continent + "'", (error, results) => {
        if (!error) {
            res.json(results.rows)
        }
        else {
            res.json(error.message)
        }
    })
});

app.get('/api/cityInfo/name/:nameCity', function (req, res) {
    const nameCity = req.params.nameCity
    connect.query("SELECT DISTINCT * FROM city " + "WHERE name=  '" + nameCity + "'", (error, results) => {
        if (!error) {
            res.json(results.rows)
        }
        else {
            res.json(error.message)
        }
    })
});

app.get('/api/cityInfo/code/:code', function (req, res) {
    const code = req.params.code
    connect.query("SELECT DISTINCT * FROM city " + "WHERE countrycode=  '" + code + "'", (error, results) => {
        if (!error) {
            res.json(results.rows)
        }
        else {
            res.json(error.message)
        }
    })
});

app.get('/api/countryInfo/name/:name', function (req, res) {
    const name = req.params.name
    connect.query("SELECT DISTINCT * FROM country " + "WHERE name=  '" + name + "'", (error, results) => {
        if (!error) {
            res.json(results.rows)
        }
        else {
            res.json(error.message)
        }
    })
});

app.get('/api/countryInfo/code/:code', function (req, res) {
    const code = req.params.code
    connect.query("SELECT DISTINCT * FROM country " + "WHERE code=  '" + code + "'", (error, results) => {
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