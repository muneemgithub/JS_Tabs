// script.js
// const tabs = document.querySelectorAll(".tabs button");
// const tabsContent = document.querySelectorAll(".content_panel div");


// tabs.forEach((tab, index) => {
//     tab.addEventListener("click", () => {
//         tabsContent.forEach((content) => {
//             content.classList.remove("content");
//             content.style.display = "none";
//         });
//         tabs.forEach((tab)=> {
//             tab.classList.remove("content");
//         });
//         tabsContent[index].classList.add("content");
//         tabsContent[index].style.display = "block";
//         tabs[index].classList.add("content");
//     });
// });

const tabs = document.querySelectorAll(".tabs button");
const tabContents = document.querySelectorAll(".content_panel div");

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        switchTab(index);
    });

    tab.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") {
            const nextIndex = (index + 1) % tabs.length;
            tabs[nextIndex].focus();
            switchTab(nextIndex);
        } else if (e.key === "ArrowLeft") {
            const prevIndex = (index - 1 + tabs.length) % tabs.length;
            tabs[prevIndex].focus();
            switchTab(prevIndex);
        }
    });
});

function switchTab(index) {
    tabContents.forEach((content) => {
        content.classList.remove("content");
        content.style.display = "none";
    });
    tabs.forEach((tab) => {
        tab.classList.remove("content");
    });
    tabContents[index].classList.add("content");
    tabContents[index].style.display = "block";
    tabs[index].classList.add("content");
};
