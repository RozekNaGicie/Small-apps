var togglers = document.querySelectorAll('.togglers');
for (i = 0; i < togglers.length; i++) {
    togglers[i].addEventListener('mouseover', function () {
        this.classList.remove('togglers');
        this.classList.add('toggler-active');
    })
    togglers[i].addEventListener('mouseout', function () {
        this.classList.add('togglers');
        this.classList.remove('toggler-active');
    })

}