var members = ["dad","mom","sister","brother"]
var images = ["bro.jpg","mother.jpg","sister.jpg","brother.jpg","grand-father.png"] // I NEED TO DOWNLOAD IMAGES
  var i = 0;
   function NextSlide() { 
     i++; var member = 5;
      if(i > member )
       { i = 0; } 
       var updatedImage = images[i]; 
       var updatedName = members[i];
        document.getElementById("family_member_image").src = updatedImage; 
        document.getElementById("family_member_name").innerHTML = updatedName; }
  
  
