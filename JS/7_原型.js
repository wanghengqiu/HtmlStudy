/**
 * Created by Coder on 2018/5/4.
 */
/*
* 我们创建的每个函数都有一个prototype属性，这个属性时一个对象，它的用途是包含可以有特定
* 类型的所有实例共享的属性和方法。逻辑上可以这么理解：prototype通过调用构造函数而创建
* 的那个对象的原型对象。使用原型的好处可以让所有对象实例共享它所包含的属性和方法。
* 也就是说，不必在构造函数中定义对象信息，而是可以直接将这些信息添加到原型中。
* */
function Box() {

}
Box.prototype.name = 'Lee';
Box.prototype.age = 100;
Box.prototype.run = function () {
    return this.name + this.age + '运行中...';
};
var box1 = new Box();
var box2 = new Box();
/* 如果用的是原型方法，那么他们的地址是共享的*/
console.log(box1.run == box2.run);

/*
* 在原型声明中，多了两个属性，这两个属性都是创建对象时自动生成的。
* __proto__属性时实例指向原型对象的一个指针。它的作用就是指向构造函数的原型属性constructor
* 通过这两个属性，就可以访问到原型里的属性和方法
* */
console.log(box1.constructor); //构造属性，可以获取构造函数本身，作用就是被原型指针定位
                                //然后得到构造函数本身，其实就是实例对应的原型对象的作用

/*
* 判断一个对象实例是不是指向了原型对象，可以用isPrototypeOf.
* 基本上，只有实例化了，它会自动指向
* */
console.log(Box.prototype.isPrototypeOf(box1));

box1.name = 'jack';
/*如果实例属性和原型属性中都含有同一个属性，那么会就近选择实例属性*/
console.log(box1.name);

/*
* 判断实例属性中是否包含某个属性用hasOwnProperty
* */
console.log(box1.hasOwnProperty('name'));
console.log(box2.hasOwnProperty('name'));
/*
* 若果不管是实例属性还是原型属性，判断是否包含用in
* */
console.log('name' in box2);


/*采用自变量的方式来定义原型*/
function Obj() {

}
Obj.prototype = {
    /*如果constructor对你很重要，你应该在 Obj.prototype中添加一行这样的代码：*/
    // constructor : Obj;
    name : 'wang',
    age : 30,
    run :function () {
        return this.name + this.age + '运行中...';
    }
}
var obj = new Obj();
/*
    使用构造函数创建原型对象和使用字面量创建对象在使用上基本相同
    但是还有一点区别，字面量创建的方式使用constructor属性不会指向实例
    而会指向Object，构造函数创建的方式则相反
    如果constructor对你很重要，你应该在 Obj.prototype中添加一行这样的代码：
*/
console.log(box1.constructor);
console.log(obj.constructor);

Obj.prototype = {
    age : 32
};
/*
* 重写了原型对象，那么就会切断了原来的原型对象和构造函数之间的关系，不会保留原来的原型的任何信息
* */
console.log(obj.name);

/*
* 数组中有很多的方法，例如sort，我们可以查看sort是否是prototype中的方法
* */
console.log(Array.prototype.sort);
/*
* 我们可以给系统的对象添加方法，例如我们给String对象添加一个方法
* */
String.prototype.addstring = function () {
    return this + '被添加了';
}
console.log('lee'.addstring());


/*
* 为了解决构造函数传参和共享问题，可以用组合构造函数加原型模式来创建对象
* */
function Person(name,age) {
    this.name = name;
    this.age = age;
    this.family = ['父亲','母亲','妹妹'];
}
Person.prototype = {
    constuctor : Person,
    run : function () {
        return this.name + this.age + '运行中...';
    }
};

/*
* 以上的方式还有一种缺点，就是封装性不是很好，可以直接把原型定义放进构造函数
* */
function Person2(name,age) {
    this.name = name;
    this.age = age;
    this.family = ['父亲','母亲','妹妹'];
    Person2.prototype.run = function () {
        return this.name + this.age + '运行中...';
    }
}
/*
* 但是上一种方式也还有一个缺点，就是每次实例化对象都会重新定义一次原型对象
* 其实只要在第一次实例化对象的时候定义就可以了
* */
function Person2(name,age) {
    this.name = name;
    this.age = age;
    this.family = ['父亲','母亲','妹妹'];
    if (typeof this.run != 'function') {
        Person2.prototype.run = function () {
            return this.name + this.age + '运行中...';
        }
    }
}

