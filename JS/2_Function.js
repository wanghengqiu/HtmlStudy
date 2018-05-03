/**
 * Created by Coder on 2018/5/3.
 */
/*
* 在JS中，函数是一个对象，函数名是指向这个对象的指针
* */

function box1(num1,num2) {
    return num1+num2;
}

var box2 = function (num1,num2) {
    return num1+num2;
}
console.log(box1(1,2));

/*函数也可以作为值来使用，也就是说，不仅可以像传递参数一样把一个函数传递给另一个函数
* 而且可以将一个函数作为另一个函数的结果返回
* */
function box3(sumFunction,num) {
    return sumFunction(num);
}
function sum(num) {
    return num+10;
}
console.log(box3(sum,10));

/*
* 函数内部属性
* 在函数内部，有两个特殊的对象：arguments和this
* arguments是一个数组对象，包含着传入函数中的所有参数，主要用途是保存参数
* 这个对象还有一个名叫callee的属性，该属性是一个指针，指向拥有这个arguments对象的函数
* */
function func(num) {
    if (num<=1) {
        return 1;
    } else {
        return num*func(num-1);
    }
}
console.log(func(10));

/*对于上面的阶乘函数，内部调用自己，如果需要修改函数名，那么内部也需要修改
* 此时就可以用callee来代替*/
function func2(num) {
    if (num<=1) {
        return 1;
    } else {
        return num*arguments.callee(num-1);
    }
}
console.log(func2(10));

/*
* 函数内部有另一个特殊的对象this
* this引用的是函数据以执行操作的对象，或者说函数调用语句所处的那个作用域
* 当在全局作用域中调用函数时，this对象引用的就是window
* */
/*window是一个对象，是js中最大的对象*/
window.color = '红色';
/*或者如下定义一个全局变量*/
var color2 = '红色';
console.log(this.color,this.color2);
var boxObject = {
    color : '蓝色',
    sayColor : function () {
        console.log(this.color);
    }
};
boxObject.sayColor();
console.log(this.color);

/*
* 函数的属性和方法
* 函数是对象，因此函数也有属性和方法。
* 每个函数包含两个属性：length和prototype。
* length属性表示函数希望接收的命名参数的个数
* */
function func3(name,age) {
    console.log(name+age);
}
console.log(func3.length);
/*prototype属性，它是保存所有实例方法的真正所在，也就是原型。
* 在prototype下有两个方法：apply和call。这两个方法的用途都在特定的作用域中调用函数
* 实际上等于设置函数体内this对象的值
* apply和call可以冒充另外一个函数
* */
function pfunc(num1,num2) {
    return num1+num2;
}
function sayPFunc1(num1,num2) {
    return pfunc.apply(this,[num1,num2]);
}
function sayPFunc2(num1,num2) {
    return pfunc.apply(this,arguments);
}
console.log(sayPFunc1(10,20));
console.log(sayPFunc2(10,20));
/*call与apply方法相同，他们的区别仅仅在于接收参数的方式不同*/
function sayPFunc3(num1,num2) {
    return pfunc.call(this,num1,num2);
}
/*实事上，传递参数并不是apply和call的真正用处，它们经常使用的地方是能够扩展函数赖以运行的
* 作用域*/
var color = 'hongse';
var obj = {
    color:'lanse'
}
function sayColor2() {
    console.log(this.color);
}
sayColor2();
sayColor2.call(this);
sayColor2.call(window);
sayColor2.call(obj);