window.onload=function () {
  var change1=document.querySelector('#change-1');
  var change2=document.querySelector('#change-2');
  var change3=document.querySelector('#change-3');
  var body=document.querySelector('body');
  change1.addEventListener('click',function () {
    body.className='bg1';
    change1.className='select';
    change2.className='';
    change3.className='';
  })
  change2.addEventListener('click',function () {
    body.className='bg2';
    change1.className='';
    change2.className='select';
    change3.className='';
  })
  change3.addEventListener('click',function () {
    body.className='bg3';
    change1.className='';
    change2.className='';
    change3.className='select';
  })
}