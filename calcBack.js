function buttonClick(val)
{
    document.getElementById("display").value=document.getElementById("display").value+val
    //document.getElementById("display").value+=val
}

function clearDisplay()
{
    document.getElementById("display").value=" "
    //Clear The Texts, Printing a white space
}

function sumResult()
{
    var text=document.getElementById("display").value
    var result=eval(text)
    document.getElementById("display").value=result
}