var ul = document.createElement("ul");

document.body.appendChild(ul);

function listAppender () {
  for (var i = 0; i < 3; i++) {
  var li = document.createElement("li");
  ul.appendChild(li);
  }
}

listAppender();

function changeText (tagName, index, string) {
  var addListText = document.getElementsByTagName(tagName);
  addListText[index].innerHTML = string;
}

changeText("li", 0, "Larry");
changeText("li", 1, "Curly");
changeText("li", 2, "Moe");


function changeElementColor(tagName, index, color) {
  var list = document.getElementsByTagName(tagName);
  list[index].style.backgroundColor= color;
}

changeElementColor("li", 0, "yellow");
changeElementColor("li", 1, "orange");
changeElementColor("li", 2, "grey");


function TextAlert(tagName, index) {
  var list = document.getElementsByTagName(tagName);
  //grabs 1st element of the list and alerts the name
  list[index].onclick = function () {
  alert(this.innerHTML);
 }
}

TextAlert("li", 0);
TextAlert("li", 1);
TextAlert("li", 2);



