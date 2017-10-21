
       for (var i=0;i<document.forms.length;i++) {
         var form = document.forms[i];
         form.addEventListener('submit', function(e){
           e.preventDefault();
           var results = '';
         
          var checkboxes = form.querySelectorAll("input[type='checkbox']");
          for(var k = 0; k < checkboxes.length; k++) {
            results += checkboxes[k].id + '=' + checkboxes[k].checked + '\n';
          }
        
          var radiobuttons = form.querySelectorAll("input[type='radio']:checked");
          for(var m = 0; m < radiobuttons.length; m++) {
            results += radiobuttons[m].name + '=' + radiobuttons[m].value + '\n';
          }
        
          console.log(results);
        });
      }
 