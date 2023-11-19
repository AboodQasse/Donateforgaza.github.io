
   // JavaScript to change color on mouseover and revert on mouseout
   document.addEventListener("DOMContentLoaded", function () {
       var elementsToChangeColor = document.querySelectorAll("h1, p,a");

       elementsToChangeColor.forEach(function (element) {
           element.addEventListener("mouseover", function () {
            
               element.style.fontSize = '25px'; 
           });

           element.addEventListener("mouseout", function () {
        
               element.style.fontSize = '16px'; 
           });
       });
   });
