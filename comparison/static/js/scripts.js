// scripts.js

function showInput(selectElement) {
    var otherOption = "other";
  
    if (selectElement.value === otherOption) {
      var inputElement = document.createElement("input");
      inputElement.type = "text";
      inputElement.name = selectElement.name;
      inputElement.placeholder = "Enter Playlist ID or Link...";
      inputElement.className = "form-control mt-2";
      selectElement.parentNode.insertBefore(inputElement, selectElement.nextSibling);
    } else {
      var inputElement = selectElement.nextSibling;
      if (inputElement && inputElement.tagName === "INPUT") {
        inputElement.remove();
      }
    }
  }
  