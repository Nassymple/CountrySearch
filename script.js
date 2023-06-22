const display = document.getElementById('display');
const submit_btn = document.querySelector("#submit-btn");

submit_btn.addEventListener("click", () => {
    const URL = document.querySelector("#scan-input").value;
    get_API(URL);
})

function get_API(URL) {
    if(URL === "" || URL === null) {
        alert("Enter a valid URL");
    } else {
        const requestOptions = {
            method: 'GET',
            headers: {
              'User-Agent': 'MyStudentProject/1.0'
            }
        };
          
        fetch(`https://emailrep.io/${URL}`, requestOptions)
        .then(response => response.json())
        .then(data => {
            // Handle the response data
            console.log(data);
        })
        .catch(error => {
            // Handle any errors
            console.error(error);
        });
    }
    
}

