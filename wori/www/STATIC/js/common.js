let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', vh + 'px');
window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', vh + 'px');
});


document.addEventListener("DOMContentLoaded", function(){

    // gnb
    let gnbMenu = document.querySelector('.header-menu-wrap');
    let gnbBtn = document.querySelector('.header-menu-button');
    let gnbClose =  document.querySelector('#gnbClose');
    if(gnbMenu){
        gnbBtn.addEventListener('click', function(){
           gnbMenu.classList.add('open');
        });

        gnbClose.addEventListener('click', function(){
            gnbMenu.classList.remove('open');
        });

        // 각 활성 요소 제외 클릭시 닫기
        window.addEventListener('click', function(e) {
           if(!e.target.closest('.header-menu') && e.target.className.indexOf('header-menu-button') == -1){
                gnbMenu.classList.remove('open');
            }
        });
    }
});