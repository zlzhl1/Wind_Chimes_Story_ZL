//获取所有内容标签ol
var ols = document.querySelectorAll("ol");
//标题标签ul
var titlec = document.querySelector(".titlec");
//获取所有标题
var titles = document.querySelectorAll(".title");
// //为标题添加鼠标悬停事件
// titlec.addEventListener("mouseover", show, false);
//为标题添加点击事件
titlec.addEventListener("click", show, false);
function show(ev) {
    //console.log(ev);
    //去掉所有的激活active状态
    titles.forEach(function (title) {
        title.classList.remove("active");
    });
    ols.forEach(function (ol) {
        //把与标题data-index属性值一样的内容标签激活active
        if (ol.dataset.index === ev.target.dataset.index) {
            ol.classList.add("active");
        } else {
            ol.classList.remove("active");
        }
    });
    //设置当前标签为激活状态
    ev.target.classList.add("active");
}