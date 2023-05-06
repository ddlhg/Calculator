function myFunction() {

    var number1 =parseInt(document.getElementById("num1").value);//getting num1

    var number2 =parseInt(document.getElementById("num2").value);//getting num2

    var number3 =parseInt(document.getElementById("num3").value);//getting num3


    var maxValue=findMax(number1, number2, number3);//call function to find maximum value

    var minValue=findMin(number1, number2, number3);//call function to find minimum value

    document.getElementById("max").innerHTML =maxValue;//display maximum value

    document.getElementById("min").innerHTML =minValue;//display minimum value

    document.getElementById("median").innerHTML =number2;//display median

    document.getElementById("average").innerHTML =((number1 + number2 + number3) / 3);//display mean

    document.getElementById("range").innerHTML =(maxValue - minValue);   //display range

}

//function to find minimum value
function findMin(number1,number2, number3) {

    var min;

    if (number1 < number2) {
        if (number1 < number3) {
             min=number1;
        }

        else {
            min=number3;
        }
    }

    else if (number2 < number3) {
           min= number2;
        }

        else{
            min=number3;
        }
    return min;
}

//function to maximum element
function findMax(number1,number2,number3) {
    var max;

    if (number1 > number2) {
        if (number1 > number3) {
             max=number1;
        }
        else {
            max=number3;
        }
    }

    else if (number2 > number3) {
            max=number2;
        }
        else{
            max=number3;
        }
    return max;
}
