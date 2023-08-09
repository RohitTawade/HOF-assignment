function reverseStringAfterDelay(input) {
    setTimeout(function() {
        const reversedString = input.split('').reverse().join('');
        console.log(reversedString);
    }, 2000);
}

const input = "Hello, world!";
reverseStringAfterDelay(input);
