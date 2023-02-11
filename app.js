// Variable

let accordion = document.getElementsByClassName('content-container');


for (let i of accordion) {
    i.addEventListener('click', function(){
        this.classList.toggle('active');
    })
}