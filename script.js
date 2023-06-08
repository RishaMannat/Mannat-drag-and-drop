function allowDrop(event) {
    event.preventDefault();
  }
  
  function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
    event.target.classList.add("dragged");
  }
  
  function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var element = document.getElementById(data);
    var container = event.target;
    container.appendChild(element);
    element.classList.remove("dragged");
    element.classList.add("dropped");
    document.getElementById("message").textContent = "Item dropped successfully!";
  }
  
  function resetContainers() {
    var container1 = document.getElementById("container1");
    var container2 = document.getElementById("container2");
    while (container2.firstChild) {
      container1.appendChild(container2.firstChild);
    }
    document.getElementById("message").textContent = "";
  }
  
  // Additional visual appeal
  var items = document.getElementsByClassName("item");
  Array.from(items).forEach(function(item) {
    item.addEventListener("mouseenter", function() {
      item.style.backgroundColor = "#ddd";
    });
    item.addEventListener("mouseleave", function() {
      item.style.backgroundColor = "#fff";
    });
  });
  
  var resetButton = document.getElementById("resetButton");
  resetButton.addEventListener("mouseover", function() {
    resetButton.style.backgroundColor = "#555";
  });
  resetButton.addEventListener("mouseout", function() {
    resetButton.style.backgroundColor = "#333";
  });
  