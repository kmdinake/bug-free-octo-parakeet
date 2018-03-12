/*
Send SMS via Twilio

HOW TO RUN

curl localhost:3030 \
    -H "Content-Type: application/json" \
    -X POST \
    -d '{"msg": "Ayyyt I got it on lock!"}'
*/

const twilio = require('twilio')
const express = require('express')
const bodyParser = require("body-parser")

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const accountSID = 'AC990674b9094ad313e9f353f6454f66c7'
const authToken = '14452b21905a049c3f67340221d38159'

let client = new twilio(accountSID, authToken)

let sendSMS = (_to, msg) => {
    client.messages.create({
        body: msg, //'Hello World, you gotta have node!',
        to: _to,
        from: '+15615670440'
    }).then((message) => {
        console.log(message)
        console.log(`Message SID: ${message.sid}`)
    })    
}

app.post('/', (req, res) => {
    let to_list = ["+27764679922", "+27843412465", "+27662296705"]
    to_list.forEach((t) => sendSMS(t, req.body.msg))
    res.status(200).json({result: "message successfully sent"})
    res.end()
})

app.listen(3030, () => { console.log("Twilio SMS server running on port 3030") })