function validateLinkedInURL(url) {
    const urlPattern = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;
    return urlPattern.test(url);
}

const testURLs = [
    "https://www.linkedin.com/in/john_doe123",
    "https://www.linkedin.com/in/jane-smith",
    "https://www.linkedin.com/in/mark-jones-12345",
    "https://www.linkedin.com/in/samantha",
    "https://www.linkedin.com/in/user_with_too_long_profile_id",
    "https://www.linkedin.com/profiles/invalid"
];

testURLs.forEach(url => {
    const isValid = validateLinkedInURL(url);
    if (isValid) {
        console.log(`${url} is a valid LinkedIn profile URL.`);
    } else {
        console.log(`${url} is not a valid LinkedIn profile URL.`);
    }
});
