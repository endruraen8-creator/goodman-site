// live search по таблице рейтинга
const search=document.querySelector('#search');
if(search){
  search.addEventListener('input',e=>{
    const val=e.target.value.toLowerCase();
    document.querySelectorAll('#ratingBody tr').forEach(row=>{
      row.style.display=row.textContent.toLowerCase().includes(val)?'':'none';
    });
  });
}

// простой слайдер новостей
let idx=0;
const slides=document.querySelectorAll('.slide');
if(slides.length){
  setInterval(()=>{
    slides.forEach(s=>s.classList.remove('active'));
    idx=(idx+1)%slides.length;
    slides[idx].classList.add('active');
  },6000);
}