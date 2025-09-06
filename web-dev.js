function start(){
    document.getElementById("demo").innerHTML= "Lets Begin Learning";
}

function highlightAll() {
      document.querySelectorAll("#card-div h3").forEach(el => {
        el.classList.add("shadow-text");
      });
    }
