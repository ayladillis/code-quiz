
var addBtn = document.querySelector("add-btn");
var initialsList = document.querySelector("initials-list");
var initials = document.querySelector("initials");

var userInitial = [{ initial: " " }];

function addInitialToList(event) {
    event.preventDefault();
    var name = initials.value;
    var li = document.createElement("li");
    li.id = userInitial.length;
    li.innerHTML = name;
    userInitial.push({initial: name});
    initialsList.append(li);
}

addBtn.addEventListener("click", addInitialToList);