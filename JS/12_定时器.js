/**
 * Created by Coder on 2018/5/7.
 */
/*
* JavaScript是单线程语言，但它允许通过设置超时值和间歇时间值来调度代码在特定的时刻执行
* 前者在指定的时间过后执行代码，而后者则是每隔指定的时间就执行一次代码
*
* 间歇调用和超时调用
* 超时调用需要使用window对象的setTimeout方法，它接受两个参数：要执行的代码和毫秒级的超时时间
* 调用setTimeout之后，该方法会返回一个数值ID，表示超时调用。
* 这个超时调用的ID是计划执行代码的唯一标识符，可以通过它来取消超时调用
* 要取消尚未执行的超时调用计划，可以调用clearTimeout()方法并将对应的超时调用ID作为参数
* 传递给它
* */
setTimeout("console.log('lee1')",1000);
function box1() {
    // alert('lee1');
    console.log('lee1');
}
var timer = setTimeout(box1,1000);
clearTimeout(timer);
setTimeout(function () {
    // alert('lee3');
    console.log('lee3');
},1000);

/*间歇调用，每隔一段时间调用一次*/
// setInterval(function () {
//     console.log('tom');
// },1000);
/*实现一个定时器*/
var num = 0;
var id = null;
function box2() {
    num++;
    if (num == 5) {
        clearInterval(id);
        console.log('定时器结束了');
    }
    console.log('tom222');
}
id =  setInterval(box2,1000);