let winWidth = window.innerWidth;

const navElem = document.querySelector(".nav-menu");

let shown = false;

// resize event...
window.onresize = () => {
  resizeHandler()
}

const resizeHandler  =() => {
  winWidth = window.innerWidth; //get window width value

  if (winWidth <= 900){
    navElem.classList.add("hide")
    shown = false;
  }else{
    navElem.classList.remove("hide")
    shown = true;
  }
}

document.querySelector(".hamburger").addEventListener("click", ()=> {

  if(shown){
    navElem.classList.add("hide")
  }else{
    navElem.classList.remove("hide")
  }

  shown = !shown
})

resizeHandler()