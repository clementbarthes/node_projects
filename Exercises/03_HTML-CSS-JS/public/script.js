// This callback function is called after the window is loaded
// All of our code is contained here because we want to make sure that all the HTML
// objects are loaded before we start tweaking them
window.onload = function(){
  
  
  //We assigned the ID dynamicHeader to an H1 tag. We can now call callback fct
  // for various events. For instance, this function will be called when the mouse hover
  // over the element.
  document.getElementById("dynamicHeader").onmouseover = function(){
    

    // You can change the text of any HTML objec by calling its attribute
    //  Your_HTML_Object.innerHTML = "New text...";
  };


  // This will get called when a user click on the tag
  document.getElementById("dynamicHeader").onclick = function(){
    
    // You can display a pop-up message using the function:
    // alert("My Pop-up message");
    
  };
  
  // This gets called when the mouse of the user leaves the header tag.
  // You can use it to undo what you did with the .onmouseover event
  document.getElementById("dynamicHeader").onmouseout = function(){

  };

}
