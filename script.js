let number, result;

function insert(num) {
    number = document.getElementById("result").innerHTML;
    document.getElementById("result").innerHTML = number + num;
}

function c(){
    document.getElementById("result").innerHTML = "";
}

function ce(){
    result = document.getElementById("result").innerHTML;
    document.getElementById("result").innerHTML = result.substring(0, result.length -1);
}

function calc(){
    result = document.getElementById("result").innerHTML;
    if (result){
        document.getElementById("result").innerHTML = eval(result);
    } else {
        document.getElementById("result").innerHTML = "Ocorreu um erro."
    }
}