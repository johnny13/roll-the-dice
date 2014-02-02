var button = document.querySelector('#roll'),
    dice = document.querySelector('.dice'),
    quantity = document.querySelector('#quantity'),
    total = document.querySelector('b');

button.addEventListener('click', function(e){
  e.preventDefault();

  var y = 0, x, d = document,
      num, die, dots, dot, diameter, sum,
      rand, randomise, el;

  rand = function(factor){
    return ~~(Math.random() * factor) + 1;
  };

  randomise = function(){
    die.style.bottom = rand(d.documentElement.clientHeight-diameter)+"px";
    die.style.left = rand(d.documentElement.clientWidth-diameter)+"px";
    die.style['-webkit-transform'] = "rotate("+(rand(1340)-670)+"deg)";
  };

  el = function(e){
    return d.createElement(e);
  };
  
  sum = 0;
  
  while (dice.childNodes.length > 0){
    dice.removeChild(dice.childNodes[0]);
  }

  while (y < quantity.value){

    num = rand(6);

    sum+= num;

    dots = el('ul');
    dots.className = 'dots';
    
    die = el('li');
    die.className = 'n'+num;
    
    for (x=0; x<num; x++){
      dot = el("li");
      dot.className = 'd'+x;
      dots.appendChild(dot);
    }

    die.appendChild(dots);
    dice.appendChild(die);

    diameter = die.offsetWidth;

    setTimeout(randomise(), 5);

    y++;
  }

  total.innerHTML = sum;

});
