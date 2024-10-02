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

        const btnContainer = document.createElement('div');
        btnContainer.innerHTML = `
        <button onclick= 'loadCategoryVideo(${item.category_id})' class = 'btn'>${item.category}</button>
        `
        

        btnDiv.appendChild(btnContainer);
    });
};

const loadCategoryVideo = (id) =>{
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then(res => res.json())
    .then(data => showVideo(data.category))
}


const loadVideo = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then((res) => res.json())
    .then((data) => showVideo(data.videos))
};

const showVideo = (videos) => {

    const videoDivContainer = document.getElementById('videoDivContainer');
    videoDivContainer.innerHTML = '';

    videos.forEach((video) => {
        // console.log(video);

        const card = document.createElement('div');
        card.classList = 'card card-compact';
        card.innerHTML = `
            <figure class=' h-[200px] w-full relative '>
                <img class = ' h-full w-full object-cover '
                src=${video.thumbnail}
                alt="Shoes" />

                ${video.others.posted_date && `<p class=' absolute text-white bg-black p-1 right-2 bottom-2 rounded-md '>${parseInt(video.others.posted_date / 3600)} h ${parseInt(video.others.posted_date / 60)} m ${video.others.posted_date % 3600} s</p>`}
            </figure>

            <div class="py-4 flex gap-3">

                <div>
                    <img class=' h-10 w-10 rounded-full ' src = ${video.authors[0].profile_picture}/>
                </div>

                <div>
                    <h2 class = ' font-semibold text-xl '>${video.title}</h2>
                    <div class=' flex gap-2 items-start '>
                        <p class=' text-gray-500 '>${video.authors[0].profile_name}</p>
                        ${video.authors[0].verified && `<img class = ' h-5 w-5 ' src='https://img.icons8.com/?size=96&id=D9RtvkuOe31p&format=png' />`}
                    </div>
                    <p class=' text-gray-500 '>${video.others.views} views</p>
                </div>

            </div>
        `

        videoDivContainer.append(card);

    });
}


loadBtn();
loadVideo();