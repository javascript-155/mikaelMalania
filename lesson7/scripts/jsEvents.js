function submitHandler() {
    let inputData = document.getElementById("userInput");

    let resPtag = document.getElementById("result");

    if (inputData.value == "") {
        resPtag.innerHTML = "Please enter a value";
    } else {
        if (inputData.value.length >= 8) {
            resPtag.innerHTML = "Password is strong";
        } else {
            resPtag.innerHTML = "Password is weak";
        }
    }

}