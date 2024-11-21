// function for display content
function displayContent(content){
    result.value +=content
}

// function for clear
function calcClear(){
    result.value= ""
}

// function for finding result
function calcResult(){
    result.value=eval(result.value)
}

// function for backspace
function removeLast(){
    result.value =result.value.slice(0,-1)
}