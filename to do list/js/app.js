var buts = document.querySelector('button');
var count = 0;
var taskList = document.querySelector('.container-task');
var taskValue = document.querySelector('#user-task');
var text;
// var inputs = document.querySelectorAll('input');
var inputsArr = [];
var screenW = window.screen.width;

function screenSpy (){
    if(screenW < 520){
        console.log(taskValue.attributes.maxlength.value = "30")
    }

};
screenSpy();





function createTask() {
    if (taskValue.value == "") {
        alert('prosze wpisac zadanie')
    } else {
        var task = document.createElement('div');
        task.classList.add('to-do-task');
        task.innerHTML = `<div class = "checkbox-style"><input id = "check-hide${count}" type="checkbox" name = "checkboxer" value = 0;><label for="check-hide${count}" class = "check-label"></label></div><p class= "task">${text}</p>`
        taskList.appendChild(task)

    }
    taskValue.value = "";

}
var lastChecked;

function handleCheck(e) {
    //    var inputs = document.querySelectorAll(`#check-hide${count}`);
    var between = false;
    for (i = 0; i < inputsArr.length; i++) {
        //    console.log(inputsArr[i])
        if (e.ctrlKey && this.checked) {
            inputsArr[i].forEach(input => {
                console.log(input)
                if (input === this || input === lastChecked) {
                    between = !between
                    console.log('startin to check')
                }
                if (between) {
                    input.checked = 1;
                }
            })
        }
    }

    lastChecked = this;
}

// Adding new elements function

buts.addEventListener('click', function () {
    count++
    taskText = taskValue.value;
    text = taskText;
    createTask()
    return text;
})
// Shift key functional

buts.addEventListener('click', function () {
    var inputs = document.querySelectorAll(`#check-hide${count}`);
    inputsArr.push(inputs);
    inputs.forEach(input => input.addEventListener('click', handleCheck));
    return inputsArr;
})

// mobile version
