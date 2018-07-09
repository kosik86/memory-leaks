"use strict";


function printMemoryUsage() {

    const memoryUsage = process.memoryUsage();
        console.log(Math.round(memoryUsage.heapUsed / 1024 / 1024 * 100) / 100);

}


function generateHeavyItem() {

    return {
        heavyItem: "this is a very heavy object",
        items: Array(1e5).fill("test")
    };

}



module.exports = {
    printMemoryUsage,
    generateHeavyItem
};
