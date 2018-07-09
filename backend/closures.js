"use strict";

const printMemoryUsage = require("./utils").printMemoryUsage,
    generateHeavyItem = require("./utils").generateHeavyItem;

const Promise = require("bluebird");
// node --max-old-space-size=50 backend/closures.js

printMemoryUsage();
setInterval(printMemoryUsage, 3000);


const results = new Array(1000).fill(0);


Promise.map(results, (item, index) => {

    return eventHandlerFixed(item, index);

}, {concurrency: 1});






function eventHandler(index) {

    const callback = () => {

        return true;

    };

    callback.context = generateHeavyItem();

    return Promise.resolve(0).delay(100).then(() => {

        return callback;

    });
}


function eventHandlerFixed(index) {

    return Promise.resolve(0).delay(100).then(() => {

        return callbackFixed;

    });

}

function callbackFixed() {

    return true;

}

callbackFixed.context = generateHeavyItem();
