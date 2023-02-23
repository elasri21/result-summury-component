//import results from "./data.json" assert {type: "json"};

// we can use this to get data from data.json or import the line above
async function getData() {
    const res = await fetch("./data.json");
    const data  = await res.json();
    return data;
}
const results = await getData();
const displayResult = document.querySelector(".display-result");
results.forEach(result => {
    let box = document.createElement("div");
    box.setAttribute("class", "category");
    box.innerHTML = `
    <div class="title">
        <img src="${result.icon}" alt="">
        <span class="category-name">${result.category}</span>
    </div>
    <div class="personel-result"><span>${result.score}</span> / 100</div>
    `;
    displayResult.appendChild(box);
});

