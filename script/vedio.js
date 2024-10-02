//loadBtn
const loadBtn = () =>{
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then((res) => res.json())
    .then((data) => showBtn(data.categories))
}


//showBtn
const showBtn = (categories) =>{

    const btnDiv = document.getElementById('btnDiv');

    categories.forEach(item => {
        const button = document.createElement('button');
        button.classList.add('btn');
        button.innerText = item.category;

        btnDiv.appendChild(button);
    });
}


loadBtn();