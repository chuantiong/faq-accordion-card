import  { data }  from "./data.js"
const accordion = document.getElementById("accordion");

accordion.addEventListener('click', e => {
    if (e.target.dataset.accordionBtn) {
        handleAccordionBtnClick(e.target);
    };
});

const handleAccordionBtnClick = (button) => {
    const allAnswers = document.querySelectorAll(".faq__accordion-answer");
    const allQuestions = document.querySelectorAll(".faq__accordion-question");
    const allArrows = document.querySelectorAll(".faq__arrow-icon");
    const accordionAnswer = button.nextElementSibling;
    const isActive = accordionAnswer.classList.contains("active");

    // Remove "active" class from all answers and "bold" from all questions
    allAnswers.forEach(answer => {
        answer.classList.remove("active");
    });
    
    allQuestions.forEach(question => {
        question.classList.remove("bold");
    });

    allArrows.forEach(arrow => {
        arrow.classList.remove("rotate-90")
    })

    if (!isActive) {
        // Add "active" class to the clicked answer, "bold" to the question, and "rotate-90" to the arrow
        accordionAnswer.classList.add("active");
        button.classList.add("bold");
        button.querySelector(".faq__arrow-icon").classList.add("rotate-90");
    }
}

const getFaqHtml = () => {
    let html = `
        <!-- Mobile Image -->
        <div class="faq__mobile-image-container">
            <img
                class="faq__woman-img"
                src="./images/illustration-woman-online-mobile.svg"
                alt="Woman illustration mobile"
            />
            <img
                class="faq__bg-img"
                src="./images/bg-pattern-mobile.svg"
                alt="Pattern background mobile"
            />
        </div>
        <!-- Desktop Image -->
        <div class="faq__desktop-image-container">
            <img
                class="faq__woman-img-desktop"
                src="./images/illustration-woman-online-desktop.svg"
                alt="Woman illustration desktop"
            />
            <img
                class="faq__bg-img-desktop"
                src="./images/bg-pattern-desktop.svg"
                alt="Pattern background desktop"
            />
        </div>
    `
    return html;
};

const getAccordionHtml = () => {
    let html = "";
    data.forEach(item => {
        html += `
        <div class="faq__accordion">
            <button class="faq__accordion-question" id="accordion-question" data-accordion-btn="${item.id}">
                    ${item.question}
                <img
                    class="faq__arrow-icon"
                    src="./images/icon-arrow-down.svg"
                    alt="Arrow icon"
                />
            </button>
            <div class="faq__accordion-answer" id="accordion-answer">
                ${item.answer}
            </div>
        </div>
        `
    })
    return html;
};

const render = () => {
    document.getElementById("faq").innerHTML = getFaqHtml();
    accordion.innerHTML = getAccordionHtml();
};

render()