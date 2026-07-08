const form = document.querySelector("#contactForm");
const result = document.querySelector("#result");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;

    if(name === "" || email === "" || message === ""){

        result.textContent = "Пожалуйста, заполните все поля.";
        result.style.color = "red";

    } else {

       result.textContent = "Спасибо, " + name + "! Это демо-форма. В реальном проекте заявка будет отправляться на email.";
        result.style.color = "green";

        document.querySelector("#name").value = "";
        document.querySelector("#email").value = "";
        document.querySelector("#message").value = "";

    }

});

const burger = document.querySelector("#burger");
const navMenu = document.querySelector("#navMenu");

burger.addEventListener("click", function(){

    navMenu.classList.toggle("active");

});

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function(link){

    link.addEventListener("click", function(){

        navMenu.classList.remove("active");

    });

});

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver(function(entries){

    entries.forEach(function(entry){

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

hiddenElements.forEach(function(element){

    observer.observe(element);

});