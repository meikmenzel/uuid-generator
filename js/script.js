const { v4: uuidv4 } = require('uuid');

function setYear() {
    const year = new Date().getFullYear();
    document.getElementById("year").innerText = year;
}
setYear();

function setUuid() {
    const uuid = uuidv4().toUpperCase();
    document.getElementById("uuid").innerText = uuid;

    return uuid
}
setUuid();

document.getElementById("setNewUuid").onclick = function() {
    setUuid();
}

document.getElementById("copy").onclick = function() {
    const uuid = document.getElementById("uuid").innerText;
    navigator.clipboard.writeText(uuid);
}

document.getElementById("setNewUuidAndCopy").onclick = function() {
    navigator.clipboard.writeText(setUuid());
}