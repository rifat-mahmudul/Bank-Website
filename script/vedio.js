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

const demo = {
    "category_id": "1001",
    "video_id": "aaaa",
    "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
    "title": "Shape of You",
    "authors": [
        {
            "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
            "profile_name": "Olivia Mitchell",
            "verified": ""
        }
    ],
    "others": {
        "views": "100K",
        "posted_date": "16278"
    },
    "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
}

const loadVideo = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then((res) => res.json())
    .then((data) => showVideo(data.videos))
}

const showVideo = (videos) => {

    const videoDivContainer = document.getElementById('videoDivContainer');

    videos.forEach((video) => {
        console.log(video);

        const card = document.createElement('div');
        card.classList = 'card card-compact';
        card.innerHTML = `
            <figure class=' h-[200px] w-full relative '>
                <img class = ' h-full w-full object-cover '
                src=${video.thumbnail}
                alt="Shoes" />

                ${video.others.posted_date && `<p class=' absolute text-white bg-black p-1 right-2 bottom-2 rounded-md '>${video.others.posted_date}</p>`}
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