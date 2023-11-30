fetch("https://api.coincap.io/v2/assets")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    let select1 = document.getElementById("select1");
    let select2 = document.getElementById("select2");

    data.data.forEach(crypto => {
      let option1 = document.createElement("option");
      let option2 = document.createElement("option");

      option1.text = crypto.name;
      option1.value = crypto.priceUsd;

      option2.text = crypto.name;
      option2.value = crypto.priceUsd;

      select1.add(option1);
      select2.add(option2);
    });
})

function converter() {
    let result = document.getElementById("result");

    let fromCrypto = document.getElementById("select1").value;

    let toCrypto = document.getElementById("select2").value;

    let amount = document.getElementById("amount").value;

    let converted = amount * (toCrypto / fromCrypto);

    result.innerHTML = converted;
}

function swapCurrencies() {
    let select1 = document.getElementById("select1");
    let select2 = document.getElementById("select2");

    let temp = select1.value;
    select1.value = select2.value;
    select2.value = temp;
}