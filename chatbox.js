const fs = require('fs');

function export1(text) {
    console.log('hi')
    fs.writeFileSync("chatbox.txt", "hi");
    document.getElementById('user').innerHTML = "123"
}