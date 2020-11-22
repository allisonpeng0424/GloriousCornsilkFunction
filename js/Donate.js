window.onload=function () {
  function El(s) {
    return document.querySelector('#'+s)
  }

  El('Submit').addEventListener('click',function () {
    this.innerText='Succeeded';
    this.className='btn s';
    El('tip').className='show'
  })
  El('cat').addEventListener('click',function () {
    El('dog').className='';
    this.className='s';
  })
  El('dog').addEventListener('click',function () {
    El('cat').className='';
    this.className='s';
  })

}