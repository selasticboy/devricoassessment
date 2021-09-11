
// function add odd
function add_odd(addition_numbers, name1, name2){

    var sum = 0;
    var length = addition_numbers.length; // length of addition numbers

    var a = addition_numbers.length-1;   
    var p = document.getElementById('loader_p');
    
    var sum_array = [];
    
    

    if(length %2 != 0){
        // when the array have three numbers
        if(length == 3){
            var num = addition_numbers[0] + addition_numbers[2];
            
            if(num >=10){
                if(num == 10 && addition_numbers[1] == 0){
                    var output = name1+' matches '+name2+' 100%, good match';
                    p.innerHTML = output;
                    
                }else{
                    var new_num = num.toString();
                    for(var i = 0; i<new_num.length; i++){
                        sum_array.push(Number(new_num[i]));
                        if(i == new_num.length-1){
                            sum_array.push(addition_numbers[1]);
                            if(sum_array.length %2 == 0){
                                
                                add_even(sum_array, name1, name2)
                            }else{
                                
                                add_odd_again(sum_array, name1, name2);
                            }
                        }
                    }
                }
            }else{
                var percent = Number(num.toString() + addition_numbers[1].toString())
                if( percent >=80){
                    var output = name1+' matches '+name2+' '+percent.toString()+'%, good match';
                    p.innerHTML = output;
                    
                }else{
                    var output = name1+' matches '+name2+' '+percent.toString()+'%';
                    p.innerHTML = output;
                }
            }
        }else{
            // add the remaining numbers

            for(var i = 0; i<Math.floor(length/2); i++){
                var num = addition_numbers[i] + addition_numbers[a-i];


                if(num >= 10){
                    var new_num = num.toString();
                    for(var b = 0; b<new_num.length;b++){
                        sum_array.push(Number(new_num[b]));
                        
                    }
                }else{
                    sum_array.push(num)
                }

                // after the loop stops

                if(i == Math.floor(length/2-1)){
                    sum_array.push(addition_numbers[i+1]);

                    // check if the sum is even or odd
                    if(sum_array.length %2 == 0){
                        add_even(sum_array, name1, name2)
                    }else{
                        add_odd_again(sum_array, name1, name2);
                    }
                }

            }
        }
        
    
    }

}
// end function add to percent




//end function add odd sum