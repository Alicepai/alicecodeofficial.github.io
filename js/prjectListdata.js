const data = [
    {
        id:1,
        imgUrl:'./img/top-img-1.png',
        title:'泅室設計稿',
        date:'2020-03-24',
        skill:'Adobe Illustrator, Photoshop',
        descripton:'為畫家友人設計的網站設計稿。',
        link:''
    }
    ,
    {
        id:2,
        imgUrl:'./projectpages/blogr-landing-page/design/desktop-preview.jpg',
        title:'Frontend Mentor Challenge<br />Blogr landing page',
        date:'2021-04-28',
        skill:'HTML,CSS,RWD',
        descripton:'費時5小時完成手機版和網頁版。',
        link:'./projectpages/blogr-landing-page/index.html'
    },
    {
        id:3,
        imgUrl:'./projectpages/single-price-grid-component-master/design/desktop-preview.jpg',
        title:'Frontend Mentor Challenge<br/>Single Price Grid Component',
        date:'2021-04-28',
        skill:'HTML,CSS,RWD',
        descripton:'HTML,CSS GRID,CSS FLEX, RWD',
        link:'./projectpages/single-price-grid-component-master/index.html'
    },
    {
        id:4,
        imgUrl:'./projectpages/crowdfunding-product-page-main/design/desktop-preview.jpg',
        title:'Frontend Mentor Challenge<br/>Crowfunding project',
        date:'2021-05-02',
        skill:'HTML,CSS,JS, RWD',
        descripton:'費時12小時完工，完成1440px桌機，和375px手機版本建置。js交互功能包含：1.modal的顯示2.書籤揀選3.價格篩選',
        link:'./projectpages/crowdfunding-product-page-main/index.html'
    },
    {
        id:5,
        imgUrl:'./projectpages/intro-component-with-signup-form-master/design/desktop-preview.jpg',
        title:'Frontend Mentor Challenge<br/>Form Validation project',
        date:'2021-05-03',
        skill:'HTML,CSS,JS, RWD',
        descripton:'費時3小時完工，完成網頁版和手機版本建置。js功能包含驗證輸入格式',
        link:'./projectpages/intro-component-with-signup-form-master/index.html'
    },
    {
        id:6,
        imgUrl:'./projectpages/IP-address-tracker/design/desktop-preview.jpg',
        title:'Frontend Mentor Challenge<br/>IP tracker project',
        date:'2021-05-05',
        skill:'HTML,CSS,JS, API,RWD',
        descripton:'建置網頁版和手機版，串接api',
        link:'./projectpages/IP-address-tracker/index.html'
    },
    {
        id:7,
        imgUrl:'./projectpages/stats-preview-card-component-main/design/desktop-preview.jpg',
        title:'Frontend Mentor Challenge<br/>Stats preview card',
        date:'2021-05-06',
        skill:'HTML,CSS,RWD',
        descripton:'費時2小時，完成手機版加網頁版',
        link:'./projectpages/stats-preview-card-component-main/index.html'
    },
    {
        id:8,
        imgUrl:'./projectpages/todo-app-main/design/desktop-preview.jpg',
        title:'Frontend Mentor Challenge<br/>Todo app',
        date:'2021-05-12',
        skill:'HTML,CSS,RWD',
        descripton:'費時4天，完成手機版加網頁版。功能包括增刪改查，支援行內編輯和拖移項目，播放音樂及背景主題更換',
        link:'./projectpages/todo-app-main/index.html'
    },
]




function renderCard(data){
    const cardList = document.querySelector(".cardList");
    for(let i=0;i<data.length;i++){
        cardList.innerHTML += `
        <div class="card">
        <div class="card-wrapper">
            <div class="front top-img blogr"><img src=${data[i].imgUrl} alt=""></div>
            <div class="back text">
                <div class="text-wrapper">
                    <div class="card-title">${data[i].title}</div>
                    <div class="card-content">
                        <div class="card-content-wrapper">
                            <p class="work-date">日期：${data[i].date}</p>
                            <p class="work-date">技能：${data[i].skill}</p>
                            <p class="work-descript">摘要：${data[i].descripton}</p>
                        </div>
                        <a class="readbtn" href=${data[i].link}>詳細資訊</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="mask mobile">
            <div class="text-wrapper">
            <div class="card-title">${data[i].title}</div>
            <div class="card-content">
                <div class="card-content-wrapper">
                    <p class="work-date">日期：${data[i].date}</p>
                    <p class="work-date">技能：${data[i].skill}</p>
                    <p class="work-descript">摘要：${data[i].descripton}</p>
                </div>
                <a class="readbtn" href=${data[i].link}>詳細資訊</a>
            </div>
        </div>
        </div>
    </div>
        `
    }
}


renderCard(data);