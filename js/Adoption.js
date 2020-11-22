window.onload=function () {
  function El(s) {
    return document.querySelector('#'+s)
  }
  var Breed,Age,Location;

  El('dogs').addEventListener('click',function () {
    alert('There are no dogs waiting for adoption.')
  })

  El('sel-Breed').addEventListener('click',function () {
    El('menu-1').className='memu s';
  })
  El('sel-Age').addEventListener('click',function () {
    El('menu-2').className='memu s';
  })
  El('sel-Location').addEventListener('click',function () {
    El('menu-3').className='memu s';
  })

  El('Breed-1').addEventListener('click',function (e) {
    e.stopPropagation()
    El('menu-1').className='memu';
    El('sel-Breed span').innerText='Domestic Short';
    Breed=1;
  })
  El('Breed-2').addEventListener('click',function (e) {
    e.stopPropagation()
    El('menu-1').className='memu';
    El('sel-Breed span').innerText='Hair';
    Breed=2;
  })

  El('Age-1').addEventListener('click',function (e) {
    e.stopPropagation()
    El('menu-2').className='memu';
    El('sel-Age span').innerText='Under 1 year';
    Age=1;
  })
  El('Age-2').addEventListener('click',function (e) {
    e.stopPropagation()
    El('menu-2').className='memu';
    El('sel-Age span').innerText='1-3 years';
    Age=2;
  })
  El('Age-3').addEventListener('click',function (e) {
    e.stopPropagation()
    El('menu-2').className='memu';
    El('sel-Age span').innerText='Over 5 years';
    Age=3;
  })

  El('Location-1').addEventListener('click',function (e) {
    e.stopPropagation()
    El('menu-3').className='memu';
    El('sel-Location span').innerText='NSW';
    Location=1;
  })
  El('find').addEventListener('click',function (e) {
    if (!Breed){
      alert('Please select Breed')
      return
    }
    if (!Age){
      alert('Please select Age')
      return
    }
    if (!Location){
      alert('Please select Location')
      return
    }
    El('cat-1').className='cats';
    El('cat-2').className='cats';
    El('cat-3').className='cats';
    El('none').className='none';
    if(Breed===1 && Age===2){
      El('cat-1').className+=' show';
      El('cat-2').className+=' show';
      return
    }else if(Breed===1 && Age===3){
      El('cat-3').className+=' show';
      return
    }
    El('none').className+=' show';
  })

}