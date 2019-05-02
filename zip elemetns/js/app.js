var inputs = document.querySelectorAll('input');
var image = document.querySelector('.background-image');
var color = document.querySelector('.background-color');

function setThis() {}
for (i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('change', function () {
        if (this.name == 'blur') {
            image.style.filter = `blur(${this.value}px)`
        } else if (this.name == 'colors') {
            color.style.background = `${this.value}`
        } else if (this.name == 'range') {
            color.style.padding = `${this.value}` + "px"
        }
    });
}