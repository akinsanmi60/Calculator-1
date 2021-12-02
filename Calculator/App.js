// get all the buttons
const buttons = document.querySelectorAll('button');

// get the input box with class display
const display = document.querySelector('.display');

// looping through the button elements inside buttons array with forEach and add Click eventlistener
buttons.forEach( button => {
    button.addEventListener('click', calculate);
});

// calculate function
function calculate(e) {

    /*in the calculate function, 'we firstly get clicked button value in the html 
    then store inside buttonValue*/
    const buttonValue = e.target.value;

    if (buttonValue === '=') {

          // display.value is use to set the value of te screen
        if (display.value !== '') {
          
            /*display.value !== '' means if the screen is not empty*/
          
            // But if not empty, then perform math operations using eval() operator [use for the math]
            display.value = eval(display.value);
        }
       
    }  else if (buttonValue === 'C') {  
            // clear everything on display
             display.value = '';
    }  else {
         // otherwise 2 it to the display
         display.value += buttonValue;
    }
    
    
   
   
}

