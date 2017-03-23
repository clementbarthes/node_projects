window.onload = function(){
  document.getElementById("dynamicHeader").onmouseover = function(){
    document.getElementById("dynamicHeader").style.color = "blue";
    document.getElementById("dynamicHeader").innerHTML = "Now Click Here";
  };

  document.getElementById("dynamicHeader").onclick = function(){
    alert("Header clicked!");
  };
  document.getElementById("dynamicHeader").onmouseout = function(){
    document.getElementById("dynamicHeader").style.color = "red";
    document.getElementById("dynamicHeader").innerHTML = "Hover on top of me";
  };

}
