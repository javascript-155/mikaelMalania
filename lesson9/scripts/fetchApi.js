// crypto value converter etc/ btc to eth

fetch('https://api.coincap.io/v2/assets').then(response =>
response.json()
).then(data => {
    // create a dynamic select menu
    let select = document.createElement("select");
    // create a default option
    let option = document.createElement("option");
    option.text = "Select a Crypto";
    select.add(option);
   
    let select2 = document.createElement("select");

    data.data.forEach(crypto => {
        // create options for the select menu
        let option = document.createElement("option");
        option.text = crypto.name;
        option.value = crypto.priceUsd;
        select.add(option);
        
        let option2 = document.createElement("option");

        option2.text = crypto.name;
        option2.value = crypto.priceUsd;

        select2.add(option2);

    })



    document.body.appendChild(select);
    document.body.appendChild(select2);
    
    // create input

    let input1 = document.createElement("input");

    input1.style.marginLeft = "10px";
    input1.placeholder = "Enter amount";

    // let input2 = document.createElement("input"); 
    // input2.style.display = "block"
    // document.body.appendChild(input2);
    

    document.body.appendChild(input1);

})



// console.log(cryptoData);

function converter() {
    let fromCrypto = document.querySelector("select").value;

    let toCrypto = document.querySelector("select:nth-child(2)").value;

    console.log(fromCrypto, toCrypto);
}
