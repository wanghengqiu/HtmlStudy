window.onload = function () {
    hangneiDemo();
};

/*行内css操作*/
function hangneiDemo() {
    var box = document.getElementById('box');
    console.log(box.style.color);
    console.log(box.style.fontSize);
    console.log(box.style.cssFloat);
    /*IE浏览器用如下*/
    // console.log(box.style.styleFloat)
    console.log(box.style.cssText);
}