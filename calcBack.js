function buttonClick(val){
    console.log(val)
    document.getElementById("display").value=document.getElementById("display").value+val 
}

function clearDisplay(){
    document.getElementById("display").value=" "
}

function sumResult(){
    var text=document.getElementById("display").value
    var result=eval(text)
    document.getElementById("display").value=result
}