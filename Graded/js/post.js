$(document).ready(function(){
    
    function alignModal(){
        var modalDialog = $(this).find(".modal-dialog");
        
       
        modalDialog.css("margin-top", Math.max(0, ($(window).height() - modalDialog.height()) / 2));
    }
    
    $(".modal").on("shown.bs.modal", alignModal);
    
    
    $(window).on("resize", function(){
        $(".modal:visible").each(alignModal);
    });   
});




function addComments(id){        
    if(document.getElementById('userComments').value.length>0){
        var a = document.getElementById('userComments');
     
         var newItem = document.createElement("LI");
  var textnode = document.createTextNode(a.value);
  newItem.appendChild(textnode);

  var list = document.getElementById("myList");
        list.insertBefore(newItem, list.childNodes[0]);
         a.value=a.defaultValue;
    }
    }
    //Enter your code here
var numberOfClicks=0;
function postLiked(){
    document.getElementById("likeBlog").innerHTML = "<i class='fa fa-thumbs-up'></i> Liked!";
    numberOfClicks += 1;
    if(numberOfClicks!=0){
        if (numberOfClicks==1){
            document.getElementById('commentCount').innerHTML = numberOfClicks + " person likes this!";
        }
        else {
            document.getElementById('commentCount').innerHTML = numberOfClicks + " people have liked this!";
        }
        }
    }


function myFunction() {
  var x = document.getElementById("btnSave");
    var y = document.getElementById("btnEdit");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
      document.getElementById("blogTitleNew").contentEditable = "true"; 
      document.getElementById("blogBody").contentEditable = "true"; 
         document.getElementById("blogTitleNew").focus(); 
      document.getElementById("blogBody").focus();
  } else {
    x.style.display = "none";
    y.style.display = "block";
       document.getElementById("blogTitleNew").contentEditable = "false"; 
      document.getElementById("blogBody").contentEditable = "false"; 
  }
}
