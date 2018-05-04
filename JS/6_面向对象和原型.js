/**
 * Created by Coder on 2018/5/4.
 */
/*
* ECMAScript有两种开发模式：
* 1.函数式（过程化）
* 2.面向对象（OOP）
* 面向对象的语言有一个标志，那就是类的概念，而通过类可以穿件任意多个具有相同属性和
* 方法的对象，但是ECMAScript没有类的概念，因此它的对象也与基于类的语言中的对象有所不同
* */
var obj = new Object();
obj.name = 'Lee';
obj.age = 100;
obj.run = function () {
    return this.name+this.age+'运行中'
};
console.log(obj.run());
/*以上这种创建对象的方法有一个弊端，就是创建相似对象的时候会有很多重复代码
* 为了解决多个类似对象声明的问题，我们可以用一种叫做工厂模式的方法
* */
function createObject(name,age) {
    var obj = new Object();
    obj.name = name;
    obj.age = age;
    obj.run = function () {
        return this.name+this.age+'运行中。。。';
    };
    return obj;
}
// var box1 = createObject('lee',100);
// var box2 = createObject('jack',200);
// console.log(box1.run());
// console.log(box2.run());
/*
* 但是工厂模式也有一个弊端，那就是创建出来的对象都是object类型，没办法区分
* */
/*
* 采用构造函数可用来创建特定的对象
* 构造函数没有new object，但它后台会自动var obj = new Object
* this就相当于obj
* 构造函数不需要返回对象引用，它是后台自动返回
* 使用的时候，必须用new 构造函数
* */
function Box(name,age) {
    this.name = name;
    this.age = age;
    this.run = function () {
        return this.name + this.age +'运行中...';
    };
};
var obj1 = new Box('wang',30);
var obj2 = new Box('tao',25);
console.log(obj1.name);
console.log(obj2.run());
console.log(typeof obj1);
console.log(obj1 instanceof Box);

var o = new Object();
/*这个时候如果想让对象噢耶能调用run方法，就需要用到对象冒充*/
// console.log(o.run());
Box.call(o,'lili',26);
console.log(o.run());

var obj3 = new Box('tom',100);
var obj4 = new Box('tom',100);
console.log(obj3.name == obj4.name);
/*这里不相等，因为比较的是引用地址*/
console.log(obj3.run == obj4.run);

function Box2(name,age) {
    this.name = name;
    this.age = age;
    this.run = run;
};
function run() {
    return this.name + this.age +'运行中...';
};
var obj5 = new Box2('tom',100);
var obj6 = new Box2('tom',100);
console.log(obj5.name == obj6.name);
/*这里是相等的，因为这里的run是个全局变量，引用地址是一致的*/
console.log(obj5.run == obj6.run);