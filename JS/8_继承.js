/*
* 继承是面向对象中一个比较核心的概念，其他正统面向对象语音都会用两种方式实现继承：
* 一个是接口实现，一个是继承。儿ECMASript只支持继承，不支持接口实现
* 而实现继承的方式是依靠原型链完成
* */
function Father() {
    this.name = 'Lee';
};
function Son() {
    this.age = 100;
};
/*
* 通过原型链继承，超类型实例化后的对象实例，赋值给子类型的原型属性
* new Father()会将Father构造里的信息和原型里的信息都交给Son
* */
Son.prototype = new  Father();
var son = new Son();
console.log(son.name);

/*
* 在刚才的例子中，有一个弊端，就是子类型无法给超类型传递参数
* 为了解决引用共享和超类无法传参的问题，我们采用一种叫借用构造函数的技术
* 或者成为对象冒充（伪造对象、经典继承）的技术来解决这两种问题
* */
function Box(age) {
    this.name = ['Lee','Jack','Tom'];//引用类型放在构造函数里面就不会被共享
    this.age = age;
}
function Desk(age) {
    Box.call(this,age);//对象冒充给超类传参，不过对象冒充只能继承构造函数里的信息
}
/*
* 上一种方式没有办法继承原型对象里面的信息，所有函数没有办法继承
* 所以我们需要原型链加借用构造函数的模式，这种模式称为组合继承
* */
function Box2(age) {
    this.name = ['lee','jack','tom'];
    this.age = age;
}
Box2.prototype.run = function () {
    return this.name + this.age;
}
function Desk2(age) {
    Box2.call(this,age);//对象冒充
    this.family = '家庭';
}
Desk2.prototype = new Box2();//原型链继承
Desk2.prototype.say = function () {
    return 'say' + this.name;
}
var  desk2 = new Desk2(18);
console.log(desk2.say());
console.log(desk2.run());

/*
* 原型式继承
* */