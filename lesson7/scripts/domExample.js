let blogTitle = document.getElementById("blogTitle");

blogTitle.innerHTML = "This is a new blog title";

let comments = document.getElementsByClassName("commentList");

comments.innerHTML = "This is a new comment"; // ეს არ იმუშავებს

comments[0].innerHTML = "This is a new comment"; // ეს იმუშავებს

// console.log(comments[0].innerHTML);

let blogDesc = document.getElementsByTagName("p");

let selectWithQuerySelector = document.querySelector("#blogTitle");

let selectWithQuerySelectorAll = document.querySelectorAll(".commentList");

let visitLink = document.querySelector("a");