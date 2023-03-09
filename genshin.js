

filterObjects ("all")

function filterObjects (c) {
  var x, i 
  x = document.getElementsByClassName ('vision')
  if ( c == 'all') c = ""
  for ( i = 0; i< x.length; i++) {
    removeClass(x[i], "show")
    if (x[i].className.indexOf(c) > -1 ) addClass(x[i], "show")
  }
}

function addClass( element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split (" ")
  arr2 = name.split(" ")
  for (i - 0; i< arr2.length; i++) {
    if ( arr1.indexOf(arr2[i] == -1 )){
      element.className += " " + arr2[i];
    }
  }
}
let selector = document.getElementById("selector")
let vision = document.querySelectorAll (".vision")
let activeTab = document.querySelectorAll(".category-title")

function filter( ) {
  for ( let i = 0 ; i < vision.length ; i ++)
  if ( vision.classList = selector.classList ){
    vision.style.display = "show"
  } else {
    vision.style.display = "none"
  }
}

filter ("pyro")




// popup function //



function render(leads) {
  let listItems = ""
  for ( let i = 0 ; i < leads.length ; i ++ ) {
    listItems += `
    <li>
      <a target='_blank' href = ' ${leads[i]}'>
       ${leads[i]}
      </a>
    </li>`
    
  }
  ulEl.innerHTML = listItems 
}




