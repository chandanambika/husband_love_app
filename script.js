let selectedFood = "";

function nextPage(number) {
    if (number === 3) {
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;

        if (!date || !time) {
            alert("Please choose a date and time first! 💗");
            return;
        }
    }

    if (number === 4) {
        if (!selectedFood) {
            alert("Please choose our date food! 🍕");
            return;
        }

        const dateValue = document.getElementById("date").value;
        const parts = dateValue.split("-");

        document.getElementById("finalDate").textContent =
            `${parts[2]}/${parts[1]}/${parts[0]}`;

        document.getElementById("finalTime").textContent =
            document.getElementById("time").value;

        document.getElementById("finalFood").textContent =
            selectedFood;
    }

    document.querySelectorAll("main section").forEach(section => {
        section.classList.add("hidden");
    });

    document.getElementById("page" + number)
        .classList.remove("hidden");
}

function sayNo() {
    document.getElementById("noMessage").textContent =
        "Aww 🥹 That's okay! Your choice matters to me. ❤️";
}

function moveNoButton() {
    const button = document.querySelector("#page1 .no");
    const page = document.getElementById("page1");

    if (button.style.position !== "absolute") {
        const buttonRect = button.getBoundingClientRect();
        const pageRect = page.getBoundingClientRect();

        button.style.left = `${buttonRect.left - pageRect.left}px`;
        button.style.top = `${buttonRect.top - pageRect.top}px`;
        button.style.position = "absolute";
    }

    const maxLeft = Math.max(0, page.clientWidth - button.offsetWidth);
    const maxTop = Math.max(0, page.clientHeight - button.offsetHeight);

    button.style.left = `${Math.random() * maxLeft}px`;
    button.style.top = `${Math.random() * maxTop}px`;
}

function chooseFood(food, button) {
    selectedFood = food;

    document.querySelectorAll(".food").forEach(item => {
        item.classList.remove("selected");
    });

    button.classList.add("selected");
}

function finishDate() {
    document.getElementById("finalMessage").textContent =
        "Yay! 💖 Our date plan is ready! " +
        "Can't wait to make a beautiful memory with you. 🥰";
}

document.querySelector("#page1 .no")
    .addEventListener("pointerenter", moveNoButton);