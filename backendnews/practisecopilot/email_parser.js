const fs = require('fs');
const { simpleParser } = require('mailparser');

function parseEmail(filePath) {
    fs.readFile(filePath, 'utf8', (err, emailData) => {
        if (err) {
            console.error("Error reading file:", err);
            return;
        }
        simpleParser(emailData)
            .then(parsed => {
                console.log("From: ", parsed.from.text);
                console.log("To: ", parsed.to.text);
                console.log("Subject: ", parsed.subject);
                console.log("Date: ", parsed.date);
                console.log("Body: ", parsed.text);
            })
            .catch(err => {
                console.error("Error parsing email:", err);
            });
    });
}

parseEmail('email.txt');