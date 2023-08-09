function validateURL(url) {
    const urlPattern = /^(http:\/\/|https:\/\/)[a-zA-Z0-9.-]+\.[a-zA-Z]+$/;
    return urlPattern.test(url);
}

const testURLs = [
    "http://www.example.com",
    "https://www.example.com",
    "http://123-website.net",
    "https://my-site.org",
    "ftp://invalid.com",
    "htt://invalid-url.com"
];

testURLs.forEach(url => {
    const isValid = validateURL(url);
    if (isValid) {
        console.log(`${url} is a valid URL.`);
    } else {
        console.log(`${url} is not a valid URL.`);
    }
});
