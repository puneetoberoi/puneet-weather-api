const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/b2de32f7d5159a8aa5cb97a317aa76e7/' + latitude + ',' + longitude

    request({url, json: true}, (error, response) => {
        if(error){ //This error here is for the network problems
            callback('Unable to connect to the weather service!', undefined)
        } else if(response.body.error){
            callback('Unable to find the location', undefined)
        } else{
            callback(undefined, response.body.daily.data[0].summary + 'It is currently ' + response.body.currently.temperature + ' This high today is ' + response.body.daily.data[0].temperatureHigh + ' with a low of ' + response.body.daily.data[0].temperatureLow + '. There is a ' + response.body.currently.precipProbability + '% chance of rain.' )
        }
    })
}




module.exports = forecast