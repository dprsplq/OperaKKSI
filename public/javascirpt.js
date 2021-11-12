// MenuToggle
let toggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
let main = document.querySelector('.main');

toggle.onclick = function(){
  navigation.classList.toggle('active');
  main.classList.toggle('active');
}

// add hovered class in selected list item
let list = document.querySelectorAll('.list');
for (let i=0; i<list.length; i++){
  list[i].onclick = function(){
    let j = 0;
    while(j < list.length){
      list[j++].className = 'list';
    }
    list[i].className ='list active';
  }
}
// darkmode
function setDarkMode(isDark){

  if(isDark){
    document.body.setAttribute('id', 'darkmode')
  } else {
    document.body.setAttribute('id', '')
  }
}