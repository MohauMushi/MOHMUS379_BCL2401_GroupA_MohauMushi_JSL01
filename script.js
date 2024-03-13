function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let result = ''; // Placeholder for validation result

    // TODO: Write your validation logic here
       /*The code below declares a variable petSyntax using the let and assigns a Regular expression to match strings that start with 'pet_', followed by exactly 4 digits of a year, 
       and then one or more alphabetical characters. */
        let petSyntax = /^pet_[0-9]{4}[a-zA-Z]+$/;
        
        /*The code below checks if the input follows a specific syntax pattern starting with "pet_" and followed by alphanumeric characters
         in the Regular Expression above. If it does, it sets the result variable to "Valid Syntax 🟢", otherwise it sets it to "Invalid Syntax 🔴" */
        if(petSyntax.test(input)){
            result = "Valid Syntax 🟢";
         } else {
            result = "Invalid Syntax 🔴";
         } 
           
         /*This code sets the text content of the HTML element with the id "result" to the value of the result variable. 
         The updated text will be displayed in the paragraph element on the webpage */
            document.getElementById('result').innerText = result;
    }