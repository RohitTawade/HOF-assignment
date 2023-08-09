function generateRandomNumberWithDelay(delayInSeconds) {
    let remainingTime = delayInSeconds;
    
    const progressInterval = setInterval(function() {
        console.log(`Generating random number in ${remainingTime} seconds...`);
        remainingTime--;

        if (remainingTime < 0) {
            clearInterval(progressInterval);
            const randomNumber = Math.floor(Math.random() * 100); // Change the range as needed
            console.log(`Random number generated: ${randomNumber}`);
        }
    }, 1000); // Display progress every second
    
    setTimeout(function() {
        clearInterval(progressInterval);
        const randomNumber = Math.floor(Math.random() * 100); // Change the range as needed
        console.log(`Random number generated: ${randomNumber}`);
    }, delayInSeconds * 1000); // Generate random number after the specified delay
}

const delayInSeconds = 3;
generateRandomNumberWithDelay(delayInSeconds);
