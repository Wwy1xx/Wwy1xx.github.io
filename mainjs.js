
//homepage内容切换
let flag = true;//在外设置全局变量,方便来回切换

//点击后来回切换内容
function aboutMe() {

    var change = document.getElementById("change");//控制高度变化
    var change1 = document.getElementById("change1");//控制内容
    var  info=document.getElementById("info");
    if (flag==true) {
        change.style.height = "170px";
        //change.style.width="700px";
        info.innerHTML="Study experience";
        change1.style.fontSize="20px";
        change1.innerHTML = "<br>" +
            "2022.9.1-now&nbsp;&nbsp;&nbsp;&nbsp;<strong><abbr title='Hong Kong Polytechnic University'>Polyu</strong></abbr>" +
            "<br><br>" +
            "20xx.9.1-20xx.7.1&nbsp;&nbsp;&nbsp;&nbsp;<strong><abbr title='Sichuan University'>SCU</strong></abbr>" ;
        flag=false;
    } else {
        change.style.height = "60px";
        info.innerHTML="motto";
        change1.style.fontSize="17px";
        change1.innerHTML = "Every cloud has a silver lining.";
        flag=true;
    }
}

function hobby() {

    var change = document.getElementById("change");//控制高度变化
    var change1 = document.getElementById("change1");//控制内容
    var  info=document.getElementById("info");
    if (flag==true) {
        change.style.height = "150px";
        info.innerHTML="some hobbies";
        change1.style.fontSize="17px";
        change1.innerHTML = "<br>Surfing the Internet, listening to music, fishing, running...";
        flag=false;
    } else {
        change.style.height = "60px";
        info.innerHTML="motto";
        change1.style.fontSize="17px";
        change1.innerHTML = "Deliberate slowly，execute promptly.";
        flag=true;
    }
}




