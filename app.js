let output = document.getElementById('box1');
let buttons = document.querySelectorAll(".child");
let btn = Array.from(buttons);
let string ='';
btn.forEach(btnn =>{
    btnn.addEventListener('click',(e)=>{
       
         if(e.target.innerHTML=='DEL'){
            string = string.substring(0,string.length-1);
            output.value = string;
         }
         else if(e.target.innerHTML=='AC'){
            string = '';
           output.value = string;
         }
        else if(e.target.innerHTML=='='){
            string = eval(string);
           output.value = string;
         }
     else{  string += e.target.innerHTML;
         output.value = string;
      
     }

    });
});