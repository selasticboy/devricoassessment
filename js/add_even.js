// function add even sum



function add_even(addition_numbers, name1, name2){
    
    
    var length = addition_numbers.length;
    var a = addition_numbers.length-1;
    var sum_array = [];
    
    var p = document.getElementById('loader_p');
   // console.log(length)

    
   // check if the array is even

    if(length %2 == 0){
        
        // if the array contains only to numbers 

       if(addition_numbers.length == 2){
           var num = addition_numbers[0].toString() + addition_numbers[1].toString(); // combine the numbers to give the percentage
           
           if(Number(num) >= 80){
               var output = name1+' matches '+name2+' '+Number(num) + '% good match';
               p.innerHTML = output;
               
           }else{
            var output = name1+' matchs '+name2+' '+ Number(num) + '%';
            p.innerHTML = output;
            
           }
       }else{
           
            for(var i = 0; i<length/2; i++){
                var num = addition_numbers[i]+addition_numbers[a-i];

                if( num >= 10){
                    var new_num = num.toString();
                    for(count = 0; count < new_num.length; count++){
                        sum_array.push(Number(new_num[count]));
                    }
                }else{
                    sum_array.push(num);
                }

                // when the loop is done check
                
                if(i == Math.floor(length/2-1)){
                    // check even or odd sum
                    if(sum_array.length %2 == 0){
                        add_even_again(sum_array, name1, name2);
                        

                    }else{
                        add_odd(sum_array, name1, name2);
                        
                    }
                }

            }

       }
    
    }
}
