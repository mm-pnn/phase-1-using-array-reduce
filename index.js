const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

function countBatteries(totalBatteries, element) {
    totalBatteries += element;
    return totalBatteries;
};

const totalBatteries = batteryBatches.reduce(countBatteries, 0);