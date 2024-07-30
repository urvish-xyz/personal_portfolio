function calculateFuel() {
    const distance = parseFloat(document.getElementById('distance').value);
    const efficiency = parseFloat(document.getElementById('efficiency').value);
    const fuelPrice = parseFloat(document.getElementById('fuel-price').value);

    if (isNaN(distance) || isNaN(efficiency) || isNaN(fuelPrice) || distance <= 0 || efficiency <= 0 || fuelPrice <= 0) {
        document.getElementById('result').textContent = 'Invalid input. Please enter positive numbers.';
    } else {
        const fuelNeeded = distance / efficiency;
        const totalCost = fuelNeeded * fuelPrice;
        document.getElementById('result').textContent = `Total fuel needed: ${fuelNeeded.toFixed(2)} Liters. Total cost: Rs.${totalCost.toFixed(2)}.`;
    }
}
