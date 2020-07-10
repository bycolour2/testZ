let URL = "https://jsonplaceholder.typicode.com/users";

let xhr = new XMLHttpRequest();
xhr.open("GET", URL, false);
xhr.send();
let users = JSON.parse(xhr.responseText);
let table = document.querySelector("table");

users.forEach((user) => {
  let tr = document.createElement("tr");
  tr.appendChild(document.createElement("td"));
  tr.appendChild(document.createElement("td"));
  tr.cells[0].appendChild(document.createTextNode(user.name));
  tr.cells[1].appendChild(document.createTextNode(user.company.name));
  tr.cells[0].setAttribute("class", "users__label--data");
  tr.cells[1].setAttribute("class", "users__label--data");
  table.appendChild(tr);
});

function searchTableFunc() {
  let filter = document.querySelector("input").value.toUpperCase();
  let tr = document.querySelectorAll("tr");

  for (i = 1; i < tr.length; i++) {
    a = tr[i].cells[0].textContent + " " + tr[i].cells[1].textContent;
    if (a.toUpperCase().indexOf(filter) > -1) {
      tr[i].style.display = "";
    } else {
      tr[i].style.display = "none";
    }
  }
}
