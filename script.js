function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let result = ''; // Placeholder for validation result

    // TODO: Write your validation logic here
        // Check if input starts with 'pet_' and followed by alphanumeric characters
        
        /*The code below checks if the input follows a specific syntax pattern starting with "pet_". 
        If it does, it sets the result variable to "Valid Syntax 🟢", otherwise it sets it to "Invalid Syntax 🔴" */
        if(/^pet_[a-zA-Z0-9]+$/.test(input)){
            result = "Valid Syntax 🟢";
         } else {
            result = "Invalid Syntax 🔴";
         } 
           
         /*This code sets the text content of the HTML element with the id "result" to the value of the result variable. 
         The updated text will be displayed in the paragraph element on the webpage */
            document.getElementById('result').innerText = result;
    }