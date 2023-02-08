const callback = function (elem) {
  elem.style.backgroundColor = "red";
  elem.style.width = "100px";
  elem.style.height = "100px";
};

function elemCreator(elem, callback) {
  const newElem = document.createElement(elem);
  callback(newElem);
  document.body.appendChild(newElem);
}
elemCreator("div", callback);
