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



let title = document.getElementById("character-title")
let region = document.getElementById("character-region")
let vision = document.getElementById("character-vision")
let weapon = document.getElementById("character-weapon")
let affiliation = document.getElementById("character-affiliation")
let constellation = document.getElementById("character-constellation")
let desc = document.getElementById("character-desc")
let picture = document.getElementById("popup-picture");





  //character info API //

  function view() {
    document.getElementById("popup-1").classList.toggle("active")
}
  
function huTao() {
    fetch('https://api.genshin.dev/characters/hu-tao/')
.then(response => response.json())
.then(response => {title.textContent = response.name ; 
                    region.textContent = response.nation ; 
                    vision.textContent = response.vision ;
                    weapon.textContent = response.weapon ; 
                    affiliation.textContent = response.affiliation ;
                    constellation.textContent = response.constellation ;
                    desc.textContent = response.description })
picture.src = 'https://api.genshin.dev/characters/hu-tao/card'
document.getElementById("popup-1").classList.toggle("active")

  }; 



function tartaglia() {
    fetch('https://api.genshin.dev/characters/tartaglia/')
.then(response => response.json())
.then(response => {title.textContent = response.name ; 
                    region.textContent = response.nation ; 
                    vision.textContent = response.vision ;
                    weapon.textContent = response.weapon ; 
                    affiliation.textContent = response.affiliation ;
                    constellation.textContent = response.constellation ;
                    desc.textContent = response.description })
picture.src = 'https://api.genshin.dev/characters/tartaglia/card'
document.getElementById("popup-1").classList.toggle("active")
 }


 function eula() {
    fetch('https://api.genshin.dev/characters/eula/')
.then(response => response.json())
.then(response => {title.textContent = response.name ; 
                    region.textContent = response.nation ; 
                    vision.textContent = response.vision ;
                    weapon.textContent = response.weapon ; 
                    affiliation.textContent = response.affiliation ;
                    constellation.textContent = response.constellation ;
                    desc.textContent = response.description })
picture.src = 'https://api.genshin.dev/characters/eula/card'
document.getElementById("popup-1").classList.toggle("active")
 }


 function klee() {
    fetch('https://api.genshin.dev/characters/klee/')
.then(response => response.json())
.then(response => {title.textContent = response.name ; 
                    region.textContent = response.nation ; 
                    vision.textContent = response.vision ;
                    weapon.textContent = response.weapon ; 
                    affiliation.textContent = response.affiliation ;
                    constellation.textContent = response.constellation ;
                    desc.textContent = response.description })
picture.src = 'https://api.genshin.dev/characters/klee/card'
document.getElementById("popup-1").classList.toggle("active")
 }


 function ningguang() {
    fetch('https://api.genshin.dev/characters/ningguang/')
.then(response => response.json())
.then(response => {title.textContent = response.name ; 
                    region.textContent = response.nation ; 
                    vision.textContent = response.vision ;
                    weapon.textContent = response.weapon ; 
                    affiliation.textContent = response.affiliation ;
                    constellation.textContent = response.constellation ;
                    desc.textContent = response.description })
picture.src = 'https://api.genshin.dev/characters/ningguang/card'
document.getElementById("popup-1").classList.toggle("active")
 }

 function itto() {
    fetch('https://api.genshin.dev/characters/arataki-itto/')
.then(response => response.json())
.then(response => {title.textContent = response.name ; 
                    region.textContent = response.nation ; 
                    vision.textContent = response.vision ;
                    weapon.textContent = response.weapon ; 
                    affiliation.textContent = response.affiliation ;
                    constellation.textContent = response.constellation ;
                    desc.textContent = response.description })
picture.src = 'https://api.genshin.dev/characters/arataki-itto/card'
document.getElementById("popup-1").classList.toggle("active")
 }

 function miko() {
    fetch('https://api.genshin.dev/characters/yae-miko/')
.then(response => response.json())
.then(response => {title.textContent = response.name ; 
                    region.textContent = response.nation ; 
                    vision.textContent = response.vision ;
                    weapon.textContent = response.weapon ; 
                    affiliation.textContent = response.affiliation ;
                    constellation.textContent = response.constellation ;
                    desc.textContent = response.description })
picture.src = 'https://api.genshin.dev/characters/yae-miko/card'
document.getElementById("popup-1").classList.toggle("active")
 }


 function Lumine() {
    fetch('https://api.genshin.dev/characters/traveler-anemo/')
.then(response => response.json())
.then(response => {title.textContent = response.name ; 
                    region.textContent = response.nation ; 
                    vision.textContent = response.vision ;
                    weapon.textContent = response.weapon ; 
                    affiliation.textContent = response.affiliation ;
                    constellation.textContent = response.constellation ;
                    desc.textContent = response.description })
picture.src = 'https://api.genshin.dev/characters/traveler-anemo/card'
document.getElementById("popup-1").classList.toggle("active")
 }

 function tighnari() {
    fetch('https://api.genshin.dev/characters/tighnari/')
.then(response => response.json())
.then(response => {title.textContent = response.name ; 
                    region.textContent = response.nation ; 
                    vision.textContent = response.vision ;
                    weapon.textContent = response.weapon ; 
                    affiliation.textContent = response.affiliation ;
                    constellation.textContent = response.constellation ;
                    desc.textContent = response.description })
picture.src = 'https://api.genshin.dev/characters/tighnari/card'
document.getElementById("popup-1").classList.toggle("active")
 }

 function chongyun() {
    fetch('https://api.genshin.dev/characters/chongyun/')
.then(response => response.json())
.then(response => {title.textContent = response.name ; 
                    region.textContent = response.nation ; 
                    vision.textContent = response.vision ;
                    weapon.textContent = response.weapon ; 
                    affiliation.textContent = response.affiliation ;
                    constellation.textContent = response.constellation ;
                    desc.textContent = response.description })
picture.src = 'https://api.genshin.dev/characters/chongyun/card'
document.getElementById("popup-1").classList.toggle("active")
 }

 function zhongli() {
    fetch('https://api.genshin.dev/characters/zhongli/')
.then(response => response.json())
.then(response => {title.textContent = response.name ; 
                    region.textContent = response.nation ; 
                    vision.textContent = response.vision ;
                    weapon.textContent = response.weapon ; 
                    affiliation.textContent = response.affiliation ;
                    constellation.textContent = response.constellation ;
                    desc.textContent = response.description })
picture.src = 'https://api.genshin.dev/characters/zhongli/card'
document.getElementById("popup-1").classList.toggle("active")
 }

 function yunjin() {
    fetch('https://api.genshin.dev/characters/yun-jin/')
.then(response => response.json())
.then(response => {title.textContent = response.name ; 
                    region.textContent = response.nation ; 
                    vision.textContent = response.vision ;
                    weapon.textContent = response.weapon ; 
                    affiliation.textContent = response.affiliation ;
                    constellation.textContent = response.constellation ;
                    desc.textContent = response.description })
picture.src = 'https://api.genshin.dev/characters/yun-jin/card'
document.getElementById("popup-1").classList.toggle("active")
 }

 function yoimiya() {
    fetch('https://api.genshin.dev/characters/yoimiya/')
.then(response => response.json())
.then(response => {title.textContent = response.name ; 
                    region.textContent = response.nation ; 
                    vision.textContent = response.vision ;
                    weapon.textContent = response.weapon ; 
                    affiliation.textContent = response.affiliation ;
                    constellation.textContent = response.constellation ;
                    desc.textContent = response.description })
picture.src = 'https://api.genshin.dev/characters/yoimiya/card'
document.getElementById("popup-1").classList.toggle("active")
 }

 function sucrose() {
    fetch('https://api.genshin.dev/characters/sucrose/')
.then(response => response.json())
.then(response => {title.textContent = response.name ; 
                    region.textContent = response.nation ; 
                    vision.textContent = response.vision ;
                    weapon.textContent = response.weapon ; 
                    affiliation.textContent = response.affiliation ;
                    constellation.textContent = response.constellation ;
                    desc.textContent = response.description })
picture.src = 'https://api.genshin.dev/characters/sucrose/card'
document.getElementById("popup-1").classList.toggle("active")
 }

 function rosaria() {
    fetch('https://api.genshin.dev/characters/rosaria/')
.then(response => response.json())
.then(response => {title.textContent = response.name ; 
                    region.textContent = response.nation ; 
                    vision.textContent = response.vision ;
                    weapon.textContent = response.weapon ; 
                    affiliation.textContent = response.affiliation ;
                    constellation.textContent = response.constellation ;
                    desc.textContent = response.description })
picture.src = 'https://api.genshin.dev/characters/rosaria/card'
document.getElementById("popup-1").classList.toggle("active")
 }

 function yelan() {
    fetch('https://api.genshin.dev/characters/yelan/')
.then(response => response.json())
.then(response => {title.textContent = response.name ; 
                    region.textContent = response.nation ; 
                    vision.textContent = response.vision ;
                    weapon.textContent = response.weapon ; 
                    affiliation.textContent = response.affiliation ;
                    constellation.textContent = response.constellation ;
                    desc.textContent = response.description })
picture.src = 'https://api.genshin.dev/characters/yelan/card'
document.getElementById("popup-1").classList.toggle("active")
 }

 function yanfei() {
    fetch('https://api.genshin.dev/characters/yanfei/')
.then(response => response.json())
.then(response => {title.textContent = response.name ; 
                    region.textContent = response.nation ; 
                    vision.textContent = response.vision ;
                    weapon.textContent = response.weapon ; 
                    affiliation.textContent = response.affiliation ;
                    constellation.textContent = response.constellation ;
                    desc.textContent = response.description })
picture.src = 'https://api.genshin.dev/characters/yanfei/card'
document.getElementById("popup-1").classList.toggle("active")
 }

 function shenhe() {
    fetch('https://api.genshin.dev/characters/shenhe/')
.then(response => response.json())
.then(response => {title.textContent = response.name ; 
                    region.textContent = response.nation ; 
                    vision.textContent = response.vision ;
                    weapon.textContent = response.weapon ; 
                    affiliation.textContent = response.affiliation ;
                    constellation.textContent = response.constellation ;
                    desc.textContent = response.description })
picture.src = 'https://api.genshin.dev/characters/shenhe/card'
document.getElementById("popup-1").classList.toggle("active")
 }

 function raiden() {
    fetch('https://api.genshin.dev/characters/raiden/')
.then(response => response.json())
.then(response => {title.textContent = response.name ; 
                    region.textContent = response.nation ; 
                    vision.textContent = response.vision ;
                    weapon.textContent = response.weapon ; 
                    affiliation.textContent = response.affiliation ;
                    constellation.textContent = response.constellation ;
                    desc.textContent = response.description })
picture.src = 'https://api.genshin.dev/characters/raiden/card'
document.getElementById("popup-1").classList.toggle("active")
 }

 function noelle() {
    fetch('https://api.genshin.dev/characters/noelle/')
.then(response => response.json())
.then(response => {title.textContent = response.name ; 
                    region.textContent = response.nation ; 
                    vision.textContent = response.vision ;
                    weapon.textContent = response.weapon ; 
                    affiliation.textContent = response.affiliation ;
                    constellation.textContent = response.constellation ;
                    desc.textContent = response.description })
picture.src = 'https://api.genshin.dev/characters/noelle/card'
document.getElementById("popup-1").classList.toggle("active")
 }

 function jean() {
    fetch('https://api.genshin.dev/characters/jean/')
.then(response => response.json())
.then(response => {title.textContent = response.name ; 
                    region.textContent = response.nation ; 
                    vision.textContent = response.vision ;
                    weapon.textContent = response.weapon ; 
                    affiliation.textContent = response.affiliation ;
                    constellation.textContent = response.constellation ;
                    desc.textContent = response.description })
picture.src = 'https://api.genshin.dev/characters/jean/card'
document.getElementById("popup-1").classList.toggle("active")
 }

 function keqing() {
    fetch('https://api.genshin.dev/characters/keqing/')
.then(response => response.json())
.then(response => {title.textContent = response.name ; 
                    region.textContent = response.nation ; 
                    vision.textContent = response.vision ;
                    weapon.textContent = response.weapon ; 
                    affiliation.textContent = response.affiliation ;
                    constellation.textContent = response.constellation ;
                    desc.textContent = response.description })
picture.src = 'https://api.genshin.dev/characters/keqing/card'
document.getElementById("popup-1").classList.toggle("active")
 }

 function kazuha() {
    fetch('https://api.genshin.dev/characters/kazuha/')
.then(response => response.json())
.then(response => {title.textContent = response.name ; 
                    region.textContent = response.nation ; 
                    vision.textContent = response.vision ;
                    weapon.textContent = response.weapon ; 
                    affiliation.textContent = response.affiliation ;
                    constellation.textContent = response.constellation ;
                    desc.textContent = response.description })
picture.src = 'https://api.genshin.dev/characters/kazuha/card'
document.getElementById("popup-1").classList.toggle("active")
 }

 
 function fischl() {
    fetch('https://api.genshin.dev/characters/fischl/')
.then(response => response.json())
.then(response => {title.textContent = response.name ; 
                    region.textContent = response.nation ; 
                    vision.textContent = response.vision ;
                    weapon.textContent = response.weapon ; 
                    affiliation.textContent = response.affiliation ;
                    constellation.textContent = response.constellation ;
                    desc.textContent = response.description })
picture.src = 'https://api.genshin.dev/characters/fischl/card'
document.getElementById("popup-1").classList.toggle("active")
 }

 function collei() {
    fetch('https://api.genshin.dev/characters/collei/')
.then(response => response.json())
.then(response => {title.textContent = response.name ; 
                    region.textContent = response.nation ; 
                    vision.textContent = response.vision ;
                    weapon.textContent = response.weapon ; 
                    affiliation.textContent = response.affiliation ;
                    constellation.textContent = response.constellation ;
                    desc.textContent = response.description })
picture.src = 'https://api.genshin.dev/characters/collei/card'
document.getElementById("popup-1").classList.toggle("active")
 }

 function albedo() {
    fetch('https://api.genshin.dev/characters/albedo/')
.then(response => response.json())
.then(response => {title.textContent = response.name ; 
                    region.textContent = response.nation ; 
                    vision.textContent = response.vision ;
                    weapon.textContent = response.weapon ; 
                    affiliation.textContent = response.affiliation ;
                    constellation.textContent = response.constellation ;
                    desc.textContent = response.description })
picture.src = 'https://api.genshin.dev/characters/albedo/card'
document.getElementById("popup-1").classList.toggle("active")
 }

 function bennett() {
    fetch('https://api.genshin.dev/characters/bennett/')
.then(response => response.json())
.then(response => {title.textContent = response.name ; 
                    region.textContent = response.nation ; 
                    vision.textContent = response.vision ;
                    weapon.textContent = response.weapon ; 
                    affiliation.textContent = response.affiliation ;
                    constellation.textContent = response.constellation ;
                    desc.textContent = response.description })
picture.src = 'https://api.genshin.dev/characters/bennett/card'
document.getElementById("popup-1").classList.toggle("active")
 }

 function venti() {
    fetch('https://api.genshin.dev/characters/venti/')
.then(response => response.json())
.then(response => {title.textContent = response.name ; 
                    region.textContent = response.nation ; 
                    vision.textContent = response.vision ;
                    weapon.textContent = response.weapon ; 
                    affiliation.textContent = response.affiliation ;
                    constellation.textContent = response.constellation ;
                    desc.textContent = response.description })
picture.src = 'https://api.genshin.dev/characters/venti/card'
document.getElementById("popup-1").classList.toggle("active")
 }

 function ganyu() {
    fetch('https://api.genshin.dev/characters/ganyu/')
.then(response => response.json())
.then(response => {title.textContent = response.name ; 
                    region.textContent = response.nation ; 
                    vision.textContent = response.vision ;
                    weapon.textContent = response.weapon ; 
                    affiliation.textContent = response.affiliation ;
                    constellation.textContent = response.constellation ;
                    desc.textContent = response.description })
picture.src = 'https://api.genshin.dev/characters/ganyu/card'
document.getElementById("popup-1").classList.toggle("active")
 }

  
 function ayaka() {
    fetch('https://api.genshin.dev/characters/ayaka/')
.then(response => response.json())
.then(response => {title.textContent = response.name ; 
                    region.textContent = response.nation ; 
                    vision.textContent = response.vision ;
                    weapon.textContent = response.weapon ; 
                    affiliation.textContent = response.affiliation ;
                    constellation.textContent = response.constellation ;
                    desc.textContent = response.description })
picture.src = 'https://api.genshin.dev/characters/ayaka/card'
document.getElementById("popup-1").classList.toggle("active")
 }

  
 function mona() {
    fetch('https://api.genshin.dev/characters/mona/')
.then(response => response.json())
.then(response => {title.textContent = response.name ; 
                    region.textContent = response.nation ; 
                    vision.textContent = response.vision ;
                    weapon.textContent = response.weapon ; 
                    affiliation.textContent = response.affiliation ;
                    constellation.textContent = response.constellation ;
                    desc.textContent = response.description })
picture.src = 'https://api.genshin.dev/characters/mona/card'
document.getElementById("popup-1").classList.toggle("active")
 }
  
 function lisa() {
    fetch('https://api.genshin.dev/characters/lisa/')
.then(response => response.json())
.then(response => {title.textContent = response.name ; 
                    region.textContent = response.nation ; 
                    vision.textContent = response.vision ;
                    weapon.textContent = response.weapon ; 
                    affiliation.textContent = response.affiliation ;
                    constellation.textContent = response.constellation ;
                    desc.textContent = response.description })
picture.src = 'https://api.genshin.dev/characters/lisa/card'
document.getElementById("popup-1").classList.toggle("active")
 }
  
 function xiao() {
    fetch('https://api.genshin.dev/characters/xiao/')
.then(response => response.json())
.then(response => {title.textContent = response.name ; 
                    region.textContent = response.nation ; 
                    vision.textContent = response.vision ;
                    weapon.textContent = response.weapon ; 
                    affiliation.textContent = response.affiliation ;
                    constellation.textContent = response.constellation ;
                    desc.textContent = response.description })
picture.src = 'https://api.genshin.dev/characters/xiao/card'
document.getElementById("popup-1").classList.toggle("active")
 }






// COMMENT FUNCTION //

let commentBtn = document.getElementById("comment-btn")
let commentInput = document.getElementById("comment-input")
let nameInput = document.getElementById("name-input")
let commentorName = document.getElementById("commentor-name")
let commentText = document.getElementById ("comment-text")
let items = document.getElementsByClassName("items")

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

  