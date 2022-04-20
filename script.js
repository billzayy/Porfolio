const body = document.querySelector("body");
const pic = document.querySelector(".pic-box");
const nameBox = document.querySelector(".name-box");
const jobBox = document.querySelector(".job-box");
const prevBtn = document.querySelector(".prev-arrow");
const nextBtn = document.querySelector(".next-arrow");

const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let current = 0;
const api = [
    {
        id: 01,
        name: "Phan Le Tuan",
        job: "Web Developer",
        pic: "/image/Le Tuan.jpg"
    },
    {
        id: 02,
        name: "Nguyen Xuan Anh",
        job: "Mobile Developer",
        pic: "/image/Xuan Anh.jpg"
    },
    {
        id: 03,
        name: "Bui Xuan Phuoc",
        job: "Mobile Developer",
        pic: "/image/Xuan Phuoc.jpg"
    }
]
setInterval(() => {
    let hexColor = "#"

    for (let i = 0; i < 6; i++) { 
        hexColor += hex[Math.floor(Math.random() * hex.length)];
    }
    body.style.backgroundColor = hexColor
}, 1000)


window.addEventListener("DOMContentLoaded", () => {
    showPerson(current)

    prevBtn.addEventListener("click", () => {
        current--;
        if (current < 0) {
            current = api.length - 1
        }
        showPerson(current)
    })

    nextBtn.addEventListener("click", () => {
        current++;
        if (current > api.length - 1) { 
            current = 0
        }
        showPerson(current)
    })
})

function showPerson(person) {
    const item = api[person]

    pic.src = item.pic;
    nameBox.textContent = item.name;
    jobBox.textContent = item.job;
}