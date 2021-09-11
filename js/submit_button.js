
// submit button 


document.getElementById('submit_button').onclick = function(){
    // form variables values
    var first_name = document.getElementById('first_name').value;
    var second_name = document.getElementById('second_name').value;

    // paragraph variable

    var first_name_p = document.getElementById('first_name_p');
    var second_name_p = document.getElementById('second_name_p');

    // check for empty field(s)

    if(first_name == "" || second_name == ""){
        switch (""){
            case first_name:
                first_name_p.style.display = 'block';
                first_name_p.style.color = 'red';
                first_name_p.innerHTML = "please fill in the first player's first name field!";
                document.getElementById('first_name').style.border = '1px solid red';
                document.getElementById('first_name').style.boxShadow = '0 0 5px red';
                
            case second_name:
                second_name_p.style.display = 'block';
                second_name_p.style.color = 'red';
                second_name_p.innerHTML = "please fill in second player's first name! ";
                document.getElementById('second_name').style.border = '1px solid red';
                document.getElementById('second_name').style.boxShadow = '0 0 5px red';
                
                break

        }
    }else{
        // check the two strings

        regex_tests(first_name, second_name);
        
    }
}