let string = "";
let buttons = document.querySelectorAll('.numbtns');
let display = document.querySelector('input');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(anEvent)=>{
        if(anEvent.target.innerHTML == '=')
        {
            string = eval(string.replace('X','*'));
            if(string != undefined)
            {
                display.value=string;
            }
            else
            {
                string="";
                display.value=string;
            }
        }
        else if(anEvent.target.innerHTML == 'DEL')
        {
            string=string.substring(0,string.length-1);
            display.value=string;
        }
        else if(anEvent.target.innerHTML == 'RESET')
        {
            string = "";
            display.value=string;
        }
        else
        {
            string = string + anEvent.target.innerHTML;
            display.value=string;
        }           
    });
});
