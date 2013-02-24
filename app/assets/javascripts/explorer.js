// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

  function validateCollName() {
     var colname =  document.frm.colname.value;
     //collection name must not be empty
     if(colname ==""){
      document.getElementById("colldiv").innerHTML = "<div class = \"alert alert-error\"><h3> Please enter a collection name </h3> </div>"; 
      document.getElementById("btndiv").innerHTML = ""; 
    } 
    //collection name must not contain '$'
    else if(colname.indexOf("$") !=-1) {
      document.getElementById("colldiv").innerHTML = "<div class = \"alert alert-error\"><h3> Collection name cannot contain '$' </h3> </div>"; 
      document.getElementById("btndiv").innerHTML = ""; 
    }
    //must not begin with 'system.'
    else if(colname.search("system.") == 0){
      document.getElementById("colldiv").innerHTML = "<div class = \"alert alert-error\"><h3> Collection name can not begin with 'system.'</h3> </div>"; 
      document.getElementById("btndiv").innerHTML = ""; }
    else {
      document.getElementById("colldiv").innerHTML = ""; document.getElementById("btndiv").innerHTML = "<button type=\"submit\" class=\"btn\">Save Collection</button>"
    }
  }


