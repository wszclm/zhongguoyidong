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



{
    let aside=document.querySelector('aside');
    let btns=document.querySelectorAll('.btn');
    let floors=document.querySelectorAll('.Nf1');
    let Top=document.querySelector('.navtop');
    window.onscroll=function () {
        if (document.documentElement.scrollTop>600){
            Top.style.display="block";
        }else {
            Top.style.display="none";
        }
        if (document.documentElement.scrollTop>700){
            aside.style.display="block";
        }else {
            aside.style.display="none";
        }
        floors.forEach(function (value, index) {
            if (document.documentElement.scrollTop>value.offsetTop-160){
                for (let i=0;i<btns.length;i++){
                    btns[i].classList.remove('active');
                }
                btns[index].classList.add("active")
            }
        })
    }


    btns.forEach(function (value, index) {
        value.onclick=function () {
            let ot=floors[index].offsetTop-120;
            let now=document.documentElement.scrollTop;
            let speed=(ot-now)*30/300;
            let time=0;
            let t=setInterval(function () {
                now+=speed;
                document.documentElement.scrollTop=now;
                time+=30;
                if (time===300){
                    clearInterval(t);
                    now=ot;
                }
            },30)
        }
    })

    let totop=document.querySelector('#back');
    totop.onclick=function () {
        let st=document.documentElement.scrollTop;
        let speed=st*30/500;
        let t=setInterval(function () {
            st-=speed;
            if (st<=0){
                st=0;
                clearInterval(t);
            }
            document.documentElement.scrollTop=st;
        },30)
    }
}