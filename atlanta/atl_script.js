(function () {
  "use strict";

  const containers = document.getElementsByClassName("activityContainer");

  function swapInfo() {
    this.classList.toggle("shown");
    const infoElement = this.getElementsByClassName("activityInfo")[0];
    if (infoElement.style.maxHeight == "50vh") {
      infoElement.style.maxHeight = "0";
    } else {
      infoElement.style.maxHeight = "50vh";
    }
    // hide other
    for (let i = 0; i < containers.length; i++) {
      if (containers[i].id != this.id) {
        containers[i].classList.remove("shown");
        const oldInfoElement =
          containers[i].getElementsByClassName("activityInfo")[0];
        oldInfoElement.style.maxHeight = "0";
      }
    }
  }
  for (let i = 0; i < containers.length; i++) {
    containers[i].addEventListener("click", swapInfo);
  }
})();
