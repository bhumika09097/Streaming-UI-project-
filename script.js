const cards = document.querySelector('.cards');

const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');

rightBtn.addEventListener('click', () => {

    cards.scrollBy({
        left: 900,
        behavior: 'smooth'
    });

});

leftBtn.addEventListener('click', () => {

    cards.scrollBy({
        left: -900,
        behavior: 'smooth'
    });

});

function updateButtons(){

    if(cards.scrollLeft <= 0){
        leftBtn.style.display = 'none';
    }
    else{
        leftBtn.style.display = 'block';
    }

    if(cards.scrollLeft + cards.clientWidth >= cards.scrollWidth - 5){
        rightBtn.style.display = 'none';
    }
    else{
        rightBtn.style.display = 'block';
    }

}

cards.addEventListener('scroll', updateButtons);

updateButtons();

const questions = document.querySelectorAll(".question-item");

questions.forEach((item) => {

    const questionBox = item.querySelector(".question-box");

    const answer = item.querySelector(".answer");

    const icon = item.querySelector(".icon");

    questionBox.addEventListener("click", () => {

        answer.classList.toggle("show");

        if(answer.classList.contains("show")){
            icon.innerHTML = "×";
        }
        else{
            icon.innerHTML = "+";
        }

    });

});