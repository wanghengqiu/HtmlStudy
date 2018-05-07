/*
* 匿名函数就是没有名字的函数
* 闭包是可访问一个函数作用域里的变量的函数
* */
function box() {
    return 'lee';
};
/*单独的匿名函数，是无法运行的*/
// function () {
//     return 'lee';
// }
/*匿名函数赋值给变量*/
var box = function () {
    return 'lee';
};
/*通过自我执行来执行匿名函数*/
(function () {
    console.log('lee');
})();
var str = (function () {
    return 'tom';
})();
console.log(str);

/*自我执行匿名函数的传参*/
(function (age) {
    console.log('年龄是'+age);
})(125);

/*函数里放一个匿名函数*/
function box3() {
    return function () { //闭包
        return 'wang';
    }
}
console.log(box3()());

/*
* 闭包就是指有权访问另一个函数作用域中的变量的函数，创建闭包的常见方法
* 就是在一个函数内创建另一个函数，通过另一个函数访问这个函数的局部变量
* */
function box4() {
    var user = 'lili';
    return function () {
        return user;
    }
};
console.log(box4()());

/*
* 使用闭包有一个优点，也是它的缺点，就是可以把局部变量驻留在内存中，可以避免使用全局变量。
* 全局变量污染导致应用程序不可预测性，每个模块都可调用必将引来灾难。
* 所以推荐使用私有的，封装的局部变量
* */
/*使用全局变量来累加*/
var age = 100;
function add() {
    return age++;
}
add()
console.log(age);
add()
console.log(age);
add()
console.log(age);

/*使用局部变量无法完成累加*/
function add2() {
    var age = 100;
    return age++;
}
console.log(add2());
console.log(add2());
console.log(add2());

/*通过闭包可以实现局部变量的累加*/
function add3() {
    var age = 100;
    return function () {
        return age++;
    }
};
var b = add3();
console.log(b());
console.log(b());
console.log(b());
b = null;//接触引用，等待垃圾回收
/*
* 由于闭包里作用域返回的局部变量资源不会被立刻销毁回收，所以可能会占用更多的内存。
* 过度使用闭包会导致性能下降。建议在非常必要的时候才使用闭包
* */


/*
* 关于this对象
* 在闭包中使用this对象也可能会导致一些问题，this对象在运行时基于函数的执行环境绑定的
* 如果this在全局范围就是window，如果在队形内部就是指向这个对象，而闭包在运行时是指向windonw的
* 因为闭包并不属于这个对象的属性或方法。
* */
var user = 'Window';
var obj = {
    user : 'Object',
    getUser : function () {
        return function () {
            return this.user;
        }
    }
};
/*此时打印的会是window*/
console.log(obj.getUser()());
/*如果我想这个时候打印的是Object，可以使用对象冒充*/
console.log(obj.getUser().call(obj));
/*也可以使用如下方式*/
var obj2 = {
    user : 'Object2',
    getUser : function () {
        var that = this;
        return function () {
            return that.user;
        }
    }
}
console.log(obj2.getUser()());


/*
* 模拟块级作用域
* js中没有块级作用域
* */
function kuaiji() {
    /*包含自我执行的匿名函数，就可以实现私有作用域*/
    (function () {
        for (var i=0;i<5;i++)
        {

        }
    })();//出了这个私有作用域，变量就会被销毁
    console.log('块级作用域');
    /*这个时候就会报错，i就访问不到了*/
    // console.log(i);
}
kuaiji();

/*
* 模拟私有变量和私有函数
* 在js中是没有私有变量和私有函数的，所有的属性和函数都是对外开放的
* 这里可以利用闭包来模拟一个私有的变量和方法
* */
function privateObj() {
    var age = 100; //私有变量
    function run() { //私有函数
        return '运行中...';
    }
    this.publicGo = function () {
        return age;
    }
}

/*
* 可以用原型属性来共享。
* 在这里我们可以用闭包来实现一个静态私有变量，也可以做到共享
* */
(function () {
    var user = '';
    /*匿名的构造函数是不支持的，因为私有作用域内的函数，外部是访问不到的*/
    // function Box6() {
    //
    // }
    /*可以用下面这种写法*/
    Box6 = function (value) { //全局的构造函数
        user = value;
    };
    /*使用了prototype导致方法被共享了，儿user也就变成了静态属性，即共享与不同对象中的属性*/
    Box6.prototype.getUser = function () {
        return user;
    };

})();
var testObj = new Box6('heng');
console.log(testObj.getUser());
var testObj2 = new Box6('lili');
/*这个时候两个打印出来的都是一样的，实现了共享*/
console.log(testObj2.getUser());
console.log(testObj.getUser());





