window.onload=function () {
  function El(s) {
    return document.querySelector('#'+s)
  }
  
  El('Submit').addEventListener('mouseover',function () {
    El('tip').className='show'
  })
  El('Submit').addEventListener('click',function () {
    this.innerText='Succeeded';
    this.className='btn s';
    El('tip').className='show'
  })
  El('upbtn').addEventListener('click',function () {
    El('file').click()
  })
}