var express = require("express");
var parking = require('./Parking.js');
const app = express();
const index = require('./Map.js');
app.get('/start', (req, res) => {
    //fetch the data based on the lat lng. 
        //nested fetch, fetch the restrictions 
        //form the final data
        //call the method to do the parsing
        // return res.send(parsed data)

   parking.sendParkingInformation();

   return res.send("Parking info sent" );
});

app.get('/stop', (req, res) => {
    parking.stop();
    return res.send('Terminated');
});

app.listen(3005, () =>
    console.log('Example app listening on port 3005!'),
);

