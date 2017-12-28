{
    let imgs=document.querySelectorAll('.bannerv li');
    let boxs=document.querySelectorAll('.banbox li');
    let father=document.querySelector('.bannerv1');
    let prev=document.querySelector('.bnvz');
    let next=document.querySelector('.bnvy');

    boxs.forEach(function (value, index) {
        value.onclick=function () {
            for (let i=0;i<boxs.length;i++){
                boxs[i].classList.remove('active');
                imgs[i].classList.remove('active');
            }
            boxs[index].classList.add('active');
            imgs[index].classList.add('active');
            n=index;
        }
    })
    let n=0;
    function banner(dir="r") {
        if (dir==="r") {
            n++;
        }else if (dir==="l"){
            n--;
        }
        if (n===boxs.length){
            n=0;
        }
        if (n===-1){
            n=imgs.length-1;
        }
        for (let i=0;i<boxs.length;i++){
            boxs[i].classList.remove('active');
            imgs[i].classList.remove('active');
        }
        boxs[n].classList.add('active');
        imgs[n].classList.add('active');
    }

    let t1=setInterval(banner,2000);
    father.onmouseover = function () {
        clearTimeout(t1)
    }
    father.onmouseout = function () {
        t1 = setInterval(banner, 2000);
    }
    next.onclick=function () {
        banner();
    }
    prev.onclick=function () {
        banner('l');
    }
}