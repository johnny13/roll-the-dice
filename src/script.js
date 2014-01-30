var roll = function() {
  return ~~(Math.random() * 6) + 1;
};

window.addEventListener('load', function(e) {

var button = document.querySelector('body');
var dice = document.querySelector('.dice');

button.addEventListener('click', function(e) {
  e.preventDefault();

  var num = roll();

  var dots = document.createElement('ul');
  dots.className = 'dots';
  
  var face = document.createElement('li');
  face.className = 'n'+num;
  
  for(var x=0; x<num; x++) {
    var dot = document.createElement("li");
    dot.className = 'd'+x;
    dots.appendChild(dot);
  }

  face.appendChild(dots);
  dice.appendChild(face);

  setTimeout(function(){
    face.style.bottom = (~~(Math.random()*screen.height)+1)+"px";
    face.style.left = (~~(Math.random()*screen.width)+1)+"px";
    face.style['-webkit-transform'] = "rotate("+(~~(Math.random()*670)+1)+"deg)";
  },5);

});
  
}, false);
