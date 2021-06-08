let active = 2;

const switchPhone = (index, elm) => {
  const imgElem = document.querySelector(".image1");
  let path = `/imgs/Phone${index}.png`

  active = index;

  // set src value sa img
  imgElem.setAttribute("src", path);

  // remove active class
  let elems = document.getElementsByClassName("btnclass");
  for (let item of elems) {
    item.classList.remove("active")
  }

  elm.classList.add("active"); 

}

// click events for button
document.querySelector(".button1").addEventListener("click", ()=> {
  switchPhone(1, document.querySelector(".button1"))
});

document.querySelector(".button2").addEventListener("click", ()=> {
  switchPhone(2,document.querySelector(".button2")) 
});

document.querySelector(".button3").addEventListener("click", ()=> {
  switchPhone(3, document.querySelector(".button3"))
});
document.querySelector(".button4").addEventListener("click", ()=> {
  switchPhone(4, document.querySelector(".button4"))
});

// initializer
function _init(){
  switchPhone(active, document.querySelector(`.button${active}`))
}


_init()