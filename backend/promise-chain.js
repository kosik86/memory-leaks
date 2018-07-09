"use strict";
const printMemoryUsage = require("./utils").printMemoryUsage;
// test with and without bluebird and in node v8 and v6
const Promise = require("bluebird");

// node --max-old-space-size=50 backend/promise-chain.js

printMemoryUsage();
setInterval(printMemoryUsage, 100);



function readEvent(i) {

    return new Promise((resolve) => {

        setImmediate(() => {

            resolve(i);

        });

    });

}

function process(n) {

    return readEvent(n).then(() => {

        return process(n + 1);

    });

}

process(0);
