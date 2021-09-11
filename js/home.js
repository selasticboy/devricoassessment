
function regex_test(test_string){
    var testVar = /[^a-zA-Z]/;
    return testVar.test(test_string);
}

// function to check non a-z chararacters
function regex_tests(first_name, second_name){
    var testVar = /[^a-zA-z]/;
    var first_name_p = document.getElementById('first_name_p');
    var second_name_p = document.getElementById('second_name_p');


     switch (true){
         case testVar.test(first_name):
            first_name_p.style.display = 'block';
            first_name_p.style.color = 'red';
            first_name_p.innerHTML = "please type in only letters from a-z or A-Z for the first player's first name!";
            document.getElementById('first_name').style.border = '1px solid red';
            document.getElementById('first_name').style.boxShadow = '0 0 5px red';
           
            break;
        
         case testVar.test(second_name):
            second_name_p.style.display = 'block';
            second_name_p.style.color = 'red';
            second_name_p.innerHTML = "please type in only letters from a-z or A-Z for the second player's first name!";
            document.getElementById('second_name').style.border = '1px solid red';
            document.getElementById('second_name').style.boxShadow = '0 0 5px red';
            
            break;
        
         default:
             start(first_name, second_name);
            
             
        
     }

}


// function to compare the names

function compare(first_name, last_name){
 
   // document.getElementById('loader_div').style.display = 'block';
 

}

function loader_close(){
 
    document.getElementById('loader_div').style.display = 'none';
 

}


function start(name1,name2){


document.getElementById('loader_div').style.display = 'block';
var string = name1+"matches"+name2;
var length = string.length;


var arr = []; // initialise array to store the numbers of characters matched
var arr2 = [string]; // initialise array to store the remaining string after matched characters removed from a srtring





for(var count = 0; count<length; count++){
    remove_matched_char(arr2[count], string[count], count, arr, arr2); // removes all matched characters from the string
    
    if( count == (length-1)){
            
        for(var i = 0 ; i<length; i++){

            if(i == arr.length){
                 
                  
                if(arr.length %2 == 0){
                    add_even(arr, name1, name2); 
                }else{
                    add_odd(arr, name1, name2);
                }
                
            }
        }
    }
}
}

// function to remove matched characters 

function remove_matched_char(string_to, char, index, arr, arr2){


    var num = string_to.split(char).length-1; // number that a character appears in the names
    
    if(num == 0){

    } else{
        
        if(num>= 10){
            var new_num = num.toString();
            
            for(var i = 0; i<new_num.length;i++){
                arr.push(Number(new_num[i]))
            }
        }else{
            arr.push(num);
        }
    }  // push the number that first player name character matches to the second player name character
    
    var new_string = arr2[index].replaceAll(char, ''); // removes all the matched characters

    arr2.push(new_string);
    
    
}




// add function to call itself again

function add_odd_again(arr, name1, name2){
    add_odd(arr, name1, name2);
    
}

function add_even_again(arr){
    add_even(arr, name1, name2);
}

// end code working






