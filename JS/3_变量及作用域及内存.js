/**
 * Created by Coder on 2018/5/3.
 */
/*
* JavaScript变量是松散型的，不强制类型，决定了它只是在特定时间用于保存特定值的一个名字而已
* 变量的值及类型可以在脚本的生命周期内改变
* 基本数据类型与引用数据类型
* 基本数据类型指那些保存在栈内存中的简单数据段，包括Undefined,Null,Boolean,Number和String
* 引用数据类型是指那些保存在堆内存中的对象
* */
/*这里box1和box2是两个独立的对象，基本数据类型是值访问*/
var box1 = 'Lee';
var box2 = box1;
/*这里的box3和box4是两个指向同一块内存区域的指针*/
var box3 = new  Object();
box3.name = 'Lee';
var box4 = box3;

/*
* 在js中，所有函数的参数都是按值传递的，参数不会按引用传递，虽然变量有基本类型和引用类型之分
* */
function add(num) {
    num += 10;
    return num;
}
var num = 50;
var result = add(num);
console.log(result);
console.log(num);

function init(obj) {
    /*这里要传递一个引用类型的参数，但是不是按照引用传递，是按值来传递*/
    obj.name = 'lee';
}
var obj = {};
init(obj);
/*这里打印的还会是lee，但是这里不是引用传递，因为这里的obj传进去的只是一个复制了obj地址的
* 一个地址值，它指向了obj*/
console.log(obj);
/*可以看这个例子*/
function init2(obj) {
    obj.name = 'lee';
    obj = {
        name : 'kkk'
    };
    return obj;
}
var obj2 = new Object();
var reslutObj = init2(obj2);
/*这里两个打印就会不一样，因为将函数内部的那个地址重新指向了一个对象，对外部对象是没有影响的*/
console.log(obj2);
console.log(reslutObj);


/*
* 检测类型：要检测一个变量的类型，我们可以通过typeof来检测
* typeof在检测基础数据类型的时候很好用，但是在检测对象的时候不是那么好用，通常我们并不想
* 知道它是不是对象，而是想知道它到底是什么类型。array和对象还有正则表达式都是object
* */

var arr = [1,2,3];
console.log(typeof arr);
var obj3 = {};
console.log(typeof obj3);
var pattern = new RegExp();

/*这个时候我们应该采用instanceof来查看.注意instanceof不能用来检测基本类型*/
console.log(arr instanceof Array);
console.log(arr instanceof Object);
console.log(obj3 instanceof Object);
console.log(obj3 instanceof Array);
console.log(pattern instanceof RegExp);


/*
* 执行环境及作用域
* 执行环境定义了变量或函数有权访问的其他数据，决定了它们各自的行为。
* 全局执行环境是最外围的执行环境，在web浏览器中，全局执行环境被认为是window对象，因此所有
* 的全局变量和函数都是作为window对象的属性和方法创建的
* 当执行环境中的所有代码执行完成后，该环境被销毁，保存在其中的所有变量和函数定义也随之被
* 销毁。如果是全局环境下，需要程序执行完毕或者网页被关闭才会被销毁
* */
var color = 'blue';
function sayColor() {
    console.log(window.color);
}
window.sayColor();

/*
* 每个函数被调用时都会创建自己的执行环境，当执行到这个函数时，函数的环境会被推到环境栈中
* 执行，而执行后又在环境栈中弹出，把控制权交给上一层执行环境。
* 当代码在一个执行环境中执行时，就会形成一种叫做作用域链的东西
* 它的用途是保护对执行环境中有访问权限的变量和函数进行有序访问。
* 注意一点，在js中是没有块级作用域的，for循环和if语句的花括号没不具有块级作用域
* */

if (true) {
    var ifVar = 'lee';
}
console.log(ifVar);

for (var i=0;i<10;i++){
    var forVar = 'tom';
}
console.log(i);
console.log(forVar);

/*
* js具有自动垃圾回收机制
* js最常见的垃圾收集方式是标记清除，它会在运行的时候给存储在内存中的变量加上标记。
* 然后，它会去掉环境中正在使用变量的标记，而没有去掉的标记的变量被视为准备删除的变量
* 垃圾回收器是周期性运行的，这样它会导致整个程序的性能问题
* */