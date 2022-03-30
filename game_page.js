function send(){
    number1=document.getElementById("no1").value;
    number1=document.getElementById("no1").value;
    answer=parseInt(number1) * parseInt(number2);
    question_number="<h4>" + number1 + "x" + number2 + "</h4>";
    input_box="<br> Answer: <input type='text' id='input_check_box' placeholder='Answer'>";
    check_button="<br> <br> <button class='btn btn-info' onclick='check()'>Check</button>";
    row=question_number + input_box + check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("no1").value ="";
    document.getElementById("no2").value ="";
}