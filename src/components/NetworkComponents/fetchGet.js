export default function fetchGet(urlString, callback) {
    fetch(urlString, {
        method: 'GET'
    })
    .then(response => response.text())
    .then(result => callback(result));
}
