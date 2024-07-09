function flipCard(card) {
    card.classList.toggle('flipped');
    let front = card.querySelector('.front');
    let back = card.querySelector('.back');
    if (card.classList.contains('flipped')) {
        front.style.transform = 'rotateY(180deg)';
        back.style.transform = 'rotateY(360deg)';
    } else {
        front.style.transform = 'rotateY(0deg)';
        back.style.transform = 'rotateY(180deg)';
    }
}

function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.innerText);
}

function drop(event) {
    event.preventDefault();
    let data = event.dataTransfer.getData("text");
    event.target.innerText = data;
}

function checkAnswers(event) {
    event.preventDefault();
    let q1 = document.forms["quizForm"]["q1"].value;
    let q2 = document.forms["quizForm"]["q2"].value;

    document.getElementById("feedback1").innerText = q1.toLowerCase() === "новый" ? "Правильно!" : "Неправильно.";
    document.getElementById("feedback2").innerText = q2.toLowerCase() === "закон" ? "Правильно!" : "Неправильно.";
}