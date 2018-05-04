/**
 * Created by Coder on 2018/5/4.
 */
/*
* 内置对象：由ECMAScript实现提供的，不依赖宿主环境的对象，这些对象在ECMAScript程序执行
* 之前就已经存在了。只定义了两个内置对象：Global和Math
* */
/*
* Global对象是ECMAScript中一个特别的对象，因为这个对象不存在的，在ECMAScript中不属于任何
* 其他对象的属性和方法，都属于它的属性和方法。所以，事实上并不存在全局变量和全局函数，所有
* 在全局作用域定义的变量和函数，都是Global对象的属性和函数
* URI编码方法
* encodeURI
* encodeURIComponent
* encodeURIComponent编码比encodeURI编码来的更加彻底
* 反编码方法：
*
* */
var box = '//Lee李';
console.log(encodeURI(box))
console.log(encodeURIComponent(box));
var a = encodeURI(box);
console.log(decodeURI(a));
var b = encodeURIComponent(box);
console.log(decodeURIComponent(b));

/*
* eval方法
* eval方法主要担当一个字符串解析器的作用，他只接受一个参数，而这个参数就是要执行的js代码
* 的字符串
* */
eval('var num = 100');
console.log(num);
eval('function test() {return 123}');
console.log(test());


/*
* ECMAScript为了保存数学公式和信息提供了一个对象，即Math对象
* 1.Math对象的属性
* Math.E:自然对数的底数，即常量e的值
* Math,LN10:10的自然对数
* Math.LN2:2的自然对数
* */
/*
* min方法和max方法
* */
console.log(Math.min(1,2,3,4,5,6));
console.log(Math.max(1,2,3,4,5,6));

/*
* ceil:执行向上舌入
* floor:执行向下舍入
* round:四舍五入
* */
console.log(Math.round(25.9));
console.log(Math.round(25.1));

/*
* random方法：返回0到1之间的一个随机数，不包括0和1
*
* */
console.log(Math.random());
for (var i=0;i<10;i++) {
    document.write(Math.random());
    document.write('<br/>');
}
