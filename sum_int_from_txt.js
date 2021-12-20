// Challenge: Sum up integers from a text file, line by line.
// Problem: Numbers are in a different (input) file scattered across multiple lines.
// Solution: Implement a function that takes file as an input, reads it line by line and sums all the numbers.



// SOLUTION IN PSEUDOCODE

// - Define an input field (input file).
// - Identify file reader function/class, identify string split method, identify parse number/integer method. 
// - Bake a function that'll take a file as an input, parse it line by line and sum all the numbers.




// CODING SOLUTION WITH FOR LOOP

<input type="file" name="file" id="file"></input> // HTML part

document.getElementById('file').onchange = function(){
    var file = this.files[0];
    var sum = 0;
    var fileReader = new FileReader();
    fileReader.onload = function(progress){
      // get the lines
      var lines = this.result.split('\n');
      // loop through the lines
      for(var line = 0; line < lines.length; line++){
        // console.log(lines[line]);
        sum += Number(lines[line]);
      }
    }
    fileReader.readAsText(file);
    console.log(sum);
  };






