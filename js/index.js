console.log('Welcome to Web Postman App');

// If the user clicks on submit button
let submit = document.getElementById('submit');
submit.addEventListener('click', () => {
    document.getElementById('responseDiv').innerHTML = "Please wait.. Fetching response...";
    // Fetch all the values user has entered
    let keyword = document.getElementById("keyword").value;
    let url = `https://crypto-info-api.herokuapp.com/api/${keyword}`;
    fetch(url, {
        method: 'GET',   
    })
    .then(response=> response.json())
    .then((data) =>{
        console.log(data);
        let name = document.getElementById('name');
        let url = document.getElementById('url');
        let desc = document.getElementById('desc');
        let explorer = document.getElementById('explorer');
        let ticker = document.getElementById('ticker');
        let result = `<h1><span class="results">Name</span>: ${data[0].name}</h1>
                      <h1><span class="results">Description</span>: ${data[0].description}</h1>
                      <h1><span class="results">Site</span>: <a href="${data[0].url}">${data[0].url}</a></h1>
                      <h1><span class="results">Explorer</span>: <a href="${data[0].explorer}">${data[0].explorer}</a></h1>
                      <h1><span class="results">Ticker</span>: ${data[0].ticker}</h1>`;
        document.getElementById('responseDiv').innerHTML = result;
        document.getElementById('responseDiv').classList.add('after-response');
        document.getElementById("keyword").value = '';
    })
    .catch(err => {
        document.getElementById('responseDiv').innerHTML = `Cryptocurrency with the keyword ${keyword} does not exist.`;
    })
});