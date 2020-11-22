(function(){
  change();
  function change(){
    var _w=document.documentElement.clientWidth;
    if(_w>1200){
      _w=1200
    }else if(_w<350){
      _w=350
    }else if(_w<450){
      _w=450
    }
    document.documentElement.style.fontSize = _w*10/800 + 'px';
  }
  window.addEventListener('resize',change,false);}
)();