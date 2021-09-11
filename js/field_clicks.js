// first name one input click



document.getElementById('first_name').onclick = function(){

    // declaration of first and second first names paragraph
    var first_name_p = document.getElementById('first_name_p');
    var second_name_p = document.getElementById('second_name_p');

    first_name_p.style.display = 'block';
    first_name_p.style.color = 'lime';
    first_name_p.innerHTML = 'please type in only the letters from a-z or A-Z';

    var second_name = document.getElementById('second_name').value;
    
    if(second_name != ""){

        var testVar = /[^a-zA-Z]/;
        if(testVar.test(second_name) == false){
            second_name_p.style.display = 'none';
            second_name_p.innerHTML = '';
            document.getElementById('second_name').style.boxShadow = '0 0 5px lime';
            
            
        }else{
            second_name_p.style.display = 'block';
            second_name_p.style.color = 'red';
            second_name_p.innerHTML = "please type in only letters from a-z or A-Z for the second player's first name!";
            document.getElementById('second_name').style.border = '1px solid red';
            document.getElementById('second_name').style.boxShadow = '0 0 5px red';
            
        }

    }else{
        second_name_p.style.display = 'none';
        second_name_p.innerHTML = '';
        document.getElementById('second_name').style.boxShadow = '0 0 0px lime'; 
    }
    
}


// end frist name one input click



// frist name two input click

document.getElementById('second_name').onclick = function(){
    // declaration of first and second first names paragraph
    var first_name_p = document.getElementById('first_name_p');
    var second_name_p = document.getElementById('second_name_p');

    second_name_p.style.display = 'block';
    second_name_p.style.color = 'lime';
    second_name_p.innerHTML = 'please type in only the letters from a-z or A-Z';

    var first_name = document.getElementById('first_name').value;

    
    if(first_name != ""){

        var testVar = /[^a-zA-z]/;
        if(testVar.test(first_name) == false){
            first_name_p.style.display = 'none';
            first_name_p.innerHTML = '';
            first_name_p.style.boxShadow = '0 0 5px lime';
            
            
            
        }else{
            first_name_p.style.display = 'block';
            first_name_p.style.color = 'red';
            first_name_p.innerHTML = "please type in only letters from a-z or A-Z for the first player's first name!";
            document.getElementById('first_name').style.border = '1px solid red';
            document.getElementById('first_name').style.boxShadow = '0 0 5px red';
            
        }

    }else{
        first_name_p.style.display = 'none';
        first_name_p.innerHTML = '';
        document.getElementById('first_name').style.boxShadow = '0 0 0 lime';
    }
    
    

}

// end frist name two input click