const awsIot = require('aws-iot-device-sdk');

//Parking - 1//////////////////////////////////////////////////////////////////////////////////
const parking1 = awsIot.device({
    certPath: 'parking1-certificate.pem.crt',
    keyPath: 'parking1-private.pem.key',
    caPath: 'AmazonRootCA1.pem.txt',
    clientId: 'parking-1',
    host: 'a1p59xks45uide-ats.iot.us-east-1.amazonaws.com'
});

parking1.on('connect', () => {
        console.log('connected');
        //device is connected
        isConnected = true;
        parking1.subscribe('ChangeState');
    }
);

parking1.on('message', (topic, payload) => {
    //log to console
    console.log('message', topic, payload.toString());
});
//Parking - 2////////////////////////////////////////////////////////////////////////////////////
const parking2 = awsIot.device({
    certPath: 'parking2-certificate.pem.crt',
    keyPath: 'parking2-private.pem.key',
    caPath: 'AmazonRootCA1.pem.txt',
    clientId: 'parking-2',
    host: 'a1p59xks45uide-ats.iot.us-east-1.amazonaws.com'
});

parking2.on('connect', () => {
        console.log('connected');
        //device is connected
        isConnected = true;
        parking2.subscribe('ChangeState');
    }
);

parking2.on('message', (topic, payload) => {
    //log to console
    console.log('message', topic, payload.toString());
});
//Parking - 3/////////////////////////////////////////////////////////////////////////////////////
const parking3 = awsIot.device({
    certPath: 'parking3-certificate.pem.crt',
    keyPath: 'parking3-private.pem.key',
    caPath: 'AmazonRootCA1.pem.txt',
    clientId: 'parking-3',
    host: 'a1p59xks45uide-ats.iot.us-east-1.amazonaws.com'
});

parking3.on('connect', () => {
        console.log('connected');
        //device is connected
        isConnected = true;
        parking3.subscribe('ChangeState');
    }
);

parking3.on('message', (topic, payload) => {
    //log to console
    console.log('message', topic, payload.toString());
});
//Parking - 4/////////////////////////////////////////////////////////////////////////////////////
const parking4 = awsIot.device({
    certPath: 'parking4-certificate.pem.crt',
    keyPath: 'parking4-private.pem.key',
    caPath: 'AmazonRootCA1.pem.txt',
    clientId: 'parking-4',
    host: 'a1p59xks45uide-ats.iot.us-east-1.amazonaws.com'
});

parking4.on('connect', () => {
        console.log('connected');
        //device is connected
        isConnected = true;
        parking4.subscribe('ChangeState');
    }
);

parking4.on('message', (topic, payload) => {
    //log to console
    console.log('message', topic, payload.toString());
});
//Parking - 5/////////////////////////////////////////////////////////////////////////////////////
const parking5 = awsIot.device({
    certPath: 'parking5-certificate.pem.crt',
    keyPath: 'parking5-private.pem.key',
    caPath: 'AmazonRootCA1.pem.txt',
    clientId: 'parking-5',
    host: 'a1p59xks45uide-ats.iot.us-east-1.amazonaws.com'
});

parking5.on('connect', () => {
        console.log('connected');
        //device is connected
        isConnected = true;
        parking5.subscribe('ChangeState');
    }
);

parking5.on('message', (topic, payload) => {
    //log to console
    console.log('message', topic, payload.toString());
});
//Parking - 6/////////////////////////////////////////////////////////////////////////////////////
const parking6 = awsIot.device({
    certPath: 'parking6-certificate.pem.crt',
    keyPath: 'parking6-private.pem.key',
    caPath: 'AmazonRootCA1.pem.txt',
    clientId: 'parking-6',
    host: 'a1p59xks45uide-ats.iot.us-east-1.amazonaws.com'
});

parking6.on('connect', () => {
        console.log('connected');
        //device is connected
        isConnected = true;
        parking6.subscribe('ChangeState');
    }
);

parking6.on('message', (topic, payload) => {
    //log to console
    console.log('message', topic, payload.toString());
});
//Parking - 7/////////////////////////////////////////////////////////////////////////////////////
const parking7 = awsIot.device({
    certPath: 'parking7-certificate.pem.crt',
    keyPath: 'parking7-private.pem.key',
    caPath: 'AmazonRootCA1.pem.txt',
    clientId: 'parking-7',
    host: 'a1p59xks45uide-ats.iot.us-east-1.amazonaws.com'
});

parking7.on('connect', () => {
        console.log('connected');
        //device is connected
        isConnected = true;
        parking7.subscribe('ChangeState');
    }
);

parking7.on('message', (topic, payload) => {
    //log to console
    console.log('message', topic, payload.toString());
});
//Parking - 8/////////////////////////////////////////////////////////////////////////////////////
const parking8 = awsIot.device({
    certPath: 'parking8-certificate.pem.crt',
    keyPath: 'parking8-private.pem.key',
    caPath: 'AmazonRootCA1.pem.txt',
    clientId: 'parking-8',
    host: 'a1p59xks45uide-ats.iot.us-east-1.amazonaws.com'
});

parking8.on('connect', () => {
        console.log('connected');
        //device is connected
        isConnected = true;
        parking8.subscribe('ChangeState');
    }
);

parking8.on('message', (topic, payload) => {
    //log to console
    console.log('message', topic, payload.toString());
});

//Parking - 9/////////////////////////////////////////////////////////////////////////////////////
const parking9 = awsIot.device({
    certPath: 'parking9-certificate.pem.crt',
    keyPath: 'parking9-private.pem.key',
    caPath: 'AmazonRootCA1.pem.txt',
    clientId: 'parking-9',
    host: 'a1p59xks45uide-ats.iot.us-east-1.amazonaws.com'
});

parking9.on('connect', () => {
        console.log('connected');
        //device is connected
        isConnected = true;
        parking9.subscribe('ChangeState');
    }
);

parking9.on('message', (topic, payload) => {
    //log to console
    console.log('message', topic, payload.toString());
});
//Parking - 10/////////////////////////////////////////////////////////////////////////////////////
const parking10 = awsIot.device({
    certPath: 'parking10-certificate.pem.crt',
    keyPath: 'parking10-private.pem.key',
    caPath: 'AmazonRootCA1.pem.txt',
    clientId: 'parking-10',
    host: 'a1p59xks45uide-ats.iot.us-east-1.amazonaws.com'
});

parking10.on('connect', () => {
        console.log('connected');
        //device is connected
        isConnected = true;
        parking10.subscribe('ChangeState');
    }
);

parking10.on('message', (topic, payload) => {
    //log to console
    console.log('message', topic, payload.toString());
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let parking_1 = { bayID: '1005', status: 'Unoccupied', restriction_duration: '30'};


//store is device is connected or not
let isConnected = false;
//store a reference carSimulation method callback
let timeout = null;

//This method start the simulation when the device is connected. Otherwise, it will wait for 1 seconds and check again.
function sendParkingInformation() {
    if (isConnected)
    sendParkingInformation();
    else {
        setTimeout(sendParkingInformation, 1000);
        console.log('not connected');
    }
}
//This method is used for stopping the simulation.
function stop() {
    //stop the simulation
    clearTimeout(timeout);
}

//this method sends a message to Iot Core
function sendParkingInformation() {
    //console log P-1
    console.log('//////////////////////////////////////////////////////////////////////');
    console.log('Parking-1');
    console.log(parking_1);
    //console.log(final[1].bay_id, final[1].status);
    //console log P-2
    /*
    console.log('Parking-2');
    console.log(final[1].bay_id, final[1].status);
    //console log P-4
    console.log('Parking-3');
    console.log(final[2].bay_id, final[2].status);
    //console log P-4
    console.log('Parking-4');
    console.log(final[3].bay_id, final[3].status);
    //console log P-5
    console.log('Parking-5');
    console.log(final[4].bay_id, final[4].status);
    //console log P-6
    console.log('Parking-6');
    console.log(final[5].bay_id, final[5].status);
    //console log P-8
    console.log('Parking-8');
    console.log(final[6].bay_id, final[6].status);
    //console log P-9
    console.log('Parking-9');
    console.log(final[7].bay_id, final[7].status);
    //console log P-9
    console.log('Parking-9');
    console.log(final[8].bay_id, final[8].status);
    //console log P-10
    console.log('Parking-10');
    console.log(final[9].bay_id, final[9].status);
*/
    //Send an MQTT message with the current state to the AWS
    parking1.publish('parking1', parking_1);/*
    parking2.publish('parking2', JSON.stringify(final[1].bay_id, final[1].status));
    parking3.publish('parking3', JSON.stringify(final[2].bay_id, final[2].status));
    parking4.publish('parking4', JSON.stringify(final[3].bay_id, final[3].status));
    parking5.publish('parking5', JSON.stringify(final[4].bay_id, final[4].status));
    parking6.publish('parking6', JSON.stringify(final[5].bay_id, final[5].status));
    parking7.publish('parking7', JSON.stringify(final[6].bay_id, final[6].status));
    parking8.publish('parking8', JSON.stringify(final[7].bay_id, final[7].status));
    parking9.publish('parking9', JSON.stringify(final[8].bay_id, final[8].status));
    parking10.publish('parking10', JSON.stringify(final[9].bay_id, final[9].status));
    */
    //Callback; recalcuate the number of parking change in 2 seconds
    timeout = setTimeout(sendParkingInformation, 2000000);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

module.exports = {
    sendParkingInformation: sendParkingInformation,
    stop: stop
}

app.listen(3006, () =>
    console.log('Example app listening on port 3005!'),
);