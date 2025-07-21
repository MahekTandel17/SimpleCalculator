let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let operators = ['+', '-', '*', '/', '%'];
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML == '='){
            try {
                if (string === "" || operators.includes(string.slice(-1))) {
                    input.value = "Error";
                } else {
                    string = eval(string);
                    input.value = string;
                }
            } catch {
                input.value = "Error";
                string = "";
            }
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0,string.length - 1);
            input.value = string;
        }
        else{

            // Prevent two consecutive operators
            if (operators.includes(e.target.innerHTML)) {
                if (string === "" && e.target.innerHTML !== '-') {
                    // Prevent starting with an operator (except minus)
                    return;
                }

                if (operators.includes(string.slice(-1))) {
                    // Replace last operator with new one
                    string = string.slice(0, -1);
                }
            }
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})