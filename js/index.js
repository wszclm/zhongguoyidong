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
{
    let num=4;
    let father=document.querySelector('.yhzq_lb')
    let innerobj=document.querySelector('.yhzq_lbt');
    let l=document.querySelectorAll('.yhzq_lbt a').length;
    let prev=document.querySelector('.yhzqz1');
    let next=document.querySelector('.yhzqy1')
    let dir="r"
    function banner() {
        if (dir==="r"){
            num++;
        }else if (dir==="t"){
            num--;
        }
            innerobj.style.transition="all 1s";
        if (num<0){
            innerobj.style.marginLeft=0;
        }
        innerobj.style.marginLeft=-num*241+"px";
    }
    let st=setInterval(banner,2000);
    innerobj.addEventListener("transitionend",function () {
        flag=true;
        if (num===11){
            innerobj.style.transition="none";
            innerobj.style.marginLeft="-964px";
            num=4;
        };
        if (num===0){
            innerobj.style.transition="none";
            innerobj.style.marginLeft="-1687px";
            num=7;
        }
    })
    let flag=true;
    next.onclick=function () {
        if (flag){
            dir="r";
            flag=false;
            banner();
        }
    }
    prev.onclick=function () {
        if (flag){
            dir="t";
            flag=false;
            banner();
        }
    }
    father.onmouseover = function () {
        clearTimeout(st);
    }
    father.onmouseout = function () {
        st=setInterval(banner,2000);
    }
    window.onfocus=function () {
        st=setInterval(banner,2000);
    }
    window.onblur=function () {
        clearTimeout(st);
    }
}
{
    let btns=document.querySelectorAll('.F5bd ul li');
    let imgs=document.querySelectorAll('.F5b ul li');
    let father=document.querySelector('.F5bn');
    btns.forEach(function (value, index) {
        value.onclick=function () {
            for (let i=0;i<btns.length;i++){
                btns[i].classList.remove('active');
                imgs[i].classList.remove('active');
            }
            btns[index].classList.add('active');
            imgs[index].classList.add('active');
            n=index;
        }
    })
    let n=0;
    function minbanner() {
        n++;
        if (n===btns.length){
            n=0;
        }
        for (let i=0;i<btns.length;i++){
            btns[i].classList.remove('active');
            imgs[i].classList.remove('active');
        }
        btns[n].classList.add('active');
        imgs[n].classList.add('active');
    }
    let t=setInterval(minbanner,2000);
    father.onmouseover=function () {
        clearInterval(t);
    }
    father.onmouseout=function () {
        t=setInterval(minbanner,2000)
    }
}
{
    let a2=document.querySelector('.a2');
    let evm=document.querySelector('.evm');
    a2.onmouseenter=function () {
        this.style.background="#fff";
        evm.style.display="block";
    }
    a2.onmouseleave=function () {
        this.style.background="";
        evm.style.display="";
    }
}
{
    let father=document.querySelector('.banner')
    let bnzs=document.querySelectorAll('.bnz');
    let bannerzs=document.querySelectorAll('.bannerz li');
    bannerzs.forEach(function (val,index) {
        val.onmouseenter=function (e) {
            e.stopPropagation()
            for (let i=0;i<bannerzs.length;i++){
                bnzs[i].style.display="none";
                bannerzs[i].classList.remove('active');
            }
            console.log(bnzs[index])
            bnzs[index].style.display="block";
            this.classList.add('active');
        }
        father.onmouseleave=function () {
            for (let i=0;i<bannerzs.length;i++) {
                bnzs[i].style.display = "none"
                bannerzs[i].classList.remove('active');
            }
        }
    })
}
{
    let ss=document.querySelector('.ss');
    ss.onfocus=function () {
        if (this.value=="流量"){
            this.value=""
        }
    }
    ss.onblur=function () {
        if (this.value==""){
            this.value="流量"
        }
    }
}