const display = document.getElementById('display');
const submit_btn = document.querySelector("#submit-btn");
const report_btn = document.querySelector("#report-btn");
const apiKey = `646a382fa35ef76acadd06fcf5ba59488a92da84aac5ac8502d5c302b2b42e62`;

submit_btn.addEventListener("click", () => {
    const URL = document.querySelector("#scan-input").value;
    requestAPI(URL);
})

report_btn.addEventListener("click", () => {
    requestReport()
})

function requestAPI(URL) {
    if(URL === "" || URL === null) {
        alert("Enter a valid URL");
    }
    const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `apikey=${apiKey}&url=${URL}`
    };
     
    fetch(`https://www.virustotal.com/vtapi/v2/url/scan`, requestOptions)
    .then(response => response.json())
    .then(data => {
        alert(`${data.verbose_msg}\nScan ID:${data.scan_id}\nCopy the scan ID and keep it safe, it will be used to access your scan report`);
    })
    .catch(error => console.error(error));
}

