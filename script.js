

const characters = [
        {
        name : "Hutao",
        class : "pyro",
        nickname : "hu-tao",
        },
        {
        name : "Klee",
        class : "pyro",
        nickname : "klee",
        },
        {
        name : "Sucrose",
        class : "anemo",
        nickname : "sucrose",
        },
        {
        name : "Albedo",
        class : "geo",
        nickname : "albedo"
        },
        {
        name : "Yelan",
        class : "hydro",
        nickname : "yelan"
        },
        {
        name : "Zhong Li",
        class : "geo",
        nickname : "zhong-li"
        },
        {
        name : "Raiden Shogun",
        class : "electro",
        nickname : "raiden"
        },
        {
        name : "Ningguang",
        class : "geo",
        nickname : "ningguang"
        },
        {
        name : "Chongyun",
        class : "cryo",
        nickname : "chongyun"
        },
        {
        name : "Arataki Itto",
        class : "geo",
        nickname : "arataki-itto"
        },
        {
        name : "Yae Miko",
        class : "electro",
        nickname : "yae-miko"
        },
        {
        name : "Lumine",
        class : "anemo",
        nickname : "traveler-anemo"
        },
        {
        name : "Tighnari",
        class : "dendro",
        nickname : "tighnari"
        },
        {
        name : "Yun Jin",
        class : "geo",
        nickname : "yun-jin"
        },
        {
        name : "Shenhe",
        class : "cryo",
        nickname : "shenhe"
        },
        {
        name : "Rosaria",
        class : "cryo",
        nickname : "rosaria"
        },
        {
        name : "Yanfei",
        class : "pyro",
        nickname : "yan-fei"
        },
        {
        name : "Fischl",
        class : "electro",
        nickname : "fischl"
        },
        {
        name : "Kaedehara Kazuha",
        class : "anemo",
        nickname : "kazuha"
        },
        {
        name : "Jean",
        class : "anemo",
        nickname : "jean"
        },
        {
        name : "Bennett",
        class : "pyro",
        nickname : "bennett"
        },
        {
        name : "Collei",
        class : "dendro",
        nickname : "collei"
        },
        {
        name : "Keqing",
        class : "electro",
        nickname : "keqing"
        },
        {
        name : "Candace",
        class : "hydro",
        nickname : "candace"
        },
        {
        name : "Kamisato Ayaka",
        class : "cryo",
        nickname : "ayaka"
        },
        {
        name : "Ganyu",
        class : "cryo",
        nickname : "ganyu"
        },
        {
        name : "Xiao",
        class : "anemo",
        nickname : "xiao"
        },

        
]
let title = document.getElementById("character-title")
let region = document.getElementById("character-region")
let vision = document.getElementById("character-vision")
let weapon = document.getElementById("character-weapon")
let affiliation = document.getElementById("character-affiliation")
let constellation = document.getElementById("character-constellation")
let desc = document.getElementById("character-desc")
let picture = document.getElementById("popup-picture");
let viewBtn = document.getElementById("view-btn")
let cancelBtn = document.getElementById("cancel-btn")

  //character info API //

const cardsContainer = document.querySelector(".items")

characters.forEach((character) => {
    cardsContainer.innerHTML += `<div id = "card" class = "all ${character.class}"  data-filter="pyro" >
    <div class="image-container">
    <img id="character-image" src="assets/${character.nickname}.png" >
    <div id="character-name" class="category-name" > ${character.name} </div>
    </div>
    <div class="content">
    <div class="title"></div>
    <button id="view-btn" onclick="${displayPopup(character.nickname)}">
        View
    </button>
    </div>
</div>`
})



// POPUP FUNCTION //




cancelBtn.addEventListener("click", function() {
    document.getElementById("popup-1").classList.toggle("active")
})


function displayPopup(nickname) {
    fetch(`https://api.genshin.dev/characters/${nickname}/`)
    .then(response => response.json())
    .then(response => {
        title.textContent = response.name;
        region.textContent = response.nation;
        vision.textContent = response.vision;
        weapon.textContent = response.weapon;
        affiliation.textContent = response.affiliation;
        constellation.textContent = response.constellation;
        desc.textContent = response.description
    })
picture.src = `https://api.genshin.dev/characters/${nickname}/card`
document.getElementById("popup-1").classList.toggle("active")
};





//__________FIlter function_________________________//



const categoryTitle = document.querySelectorAll('.category-title');
const allCategoryPosts = document.querySelectorAll('.all');

for(let i = 0; i < categoryTitle.length; i++){
    categoryTitle[i].addEventListener('click', filterPosts.bind(this, categoryTitle[i]));
}

function filterPosts(item){
    changeActivePosition(item);
    for(let i = 0; i < allCategoryPosts.length; i++){
        if(allCategoryPosts[i].classList.contains(item.attributes.id.value)){
            allCategoryPosts[i].style.display = "block";
        } else {
            allCategoryPosts[i].style.display = "none";
        }
    }
}

function changeActivePosition(activeItem){
    for(let i = 0; i < categoryTitle.length; i++){
        categoryTitle[i].classList.remove('active');
    }
    activeItem.classList.add('active');
};


// COMMENT FUNCTION //

let commentBtn = document.getElementById("comment-btn")
let commentInput = document.getElementById("comment-input")
let nameInput = document.getElementById("name-input")
let commentorName = document.getElementById("commentor-name")
let commentText = document.getElementById ("comment-text")


//

//fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Ia58UmcsbOOzLVcpoayr/comments', Option)//

commentBtn.addEventListener("click", function(){
    const data = { nameInput, commentInput}
    const options = {
    method: 'POST',
    body : JSON.stringify(data),
}
fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/', options)
})

  