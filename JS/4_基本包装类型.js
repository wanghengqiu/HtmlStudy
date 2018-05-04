/**
 * Created by Coder on 2018/5/4.
 */

/*
* 为了方便操作基本类型值，js提供了3个特殊的引用类型，Boolean,Number,String。
* 这些类型与其他引用类型相同，但同时也具有与各自的基本类型相应的特殊行为。
* */

var str = 'Mr.Lee';
str.name = 'Lee';
str.age = function () {
    return 100;
};
/*基本类型是无法给自己创建属性和方法的，但是可以调用系统内置的属性和方法*/
console.log(str);
console.log(typeof str);
console.log(str.name);
// console.log(str.age());

var str2 = new String('Mr.Lee');
str2.name = 'Lee';
str2.age = function () {
    return 100;
};
/*自变量声明和用new方法声明的基本类型是有区别的
* 用new定义的对象是可以自定义属性和方法的*/
console.log(str2);
console.log(typeof str2);
console.log(str2.name);
console.log(str2.age());


/*
* Number类型有一些静态属性（直接通过Number调用的属性，无需new一个对象）
* MAX_VALUE:最大值
* MIN_VALUE：最小值
* NaN：非数值
* NEGATIVE_INFINITY：负无穷大
* POSITIVE_INFINITY：无穷大
* prototype：原型，用于增加新属性和方法
*
* Number的对象方法
* toString：把数值转换字符串
* toLocalString：本地化
* toFixed:小数点保留指定位数，并转换字符串
* toExponential：以指数形式表示，并准换成字符串
* toPrecision
*
* */
var box = 1000.0231;
console.log(box.toString());
console.log(box.toLocaleString());
console.log(box.toFixed(3));
console.log(box.toExponential());


/*
*length:返回字符串的字符长度
* constructor:返回创建String对象的函数
* prototype:通过添加属性和方法扩展字符串定义
* */
var str = 'Mr.Lee';
console.log(str.length);
console.log(str.constructor);

/*
* charAt(n):返回指定索引位置的字符
* charCodeAt(n):以Unicode编码形式返回指定索引位置的字符
* */
console.log(str.charAt(1));
console.log(str.charCodeAt(1));
console.log(str[1]);//通过数组方式截取

/*
* concat(str1...str2):将字符串参数串联到调用该方法的字符串
*  slice(n,m)：返回字符串n到m之间位置的字符串
*  subString(n,m):同上
*  subStr(n,m):返回字符串n开始的m个字符串
* */
console.log(str.concat('wang','heng'));
console.log(str.slice(1,3));
console.log(str.substring(1,3));

console.log(str.slice(3));//从3开始截取至最后
console.log(str.substring(3));

console.log(str.slice(-2));//从字符串的长度+（-2）位开始
console.log(str.substring(-2));//只有是负数就全部返回
console.log(str.substr(-2));//从字符串的长度+（-2）位开始

console.log(str.slice(2,-1));//从2到7+(-1)

/*
* indexOf:返回从初始位置搜索L的位置,找不到返回-1
* lastIndexOf：返回从末尾位置搜索第一次出现的位置
* */
var str = 'Mr.Lee is Mr Lee';
console.log(str.indexOf('L'));
console.log(str.lastIndexOf('L'));
console.log(str.indexOf('L',5));//从第5个位置开始搜索L第一次出现的位置
console.log(str.lastIndexOf('L',5));

var posArr = [];
var pos = str.indexOf('e');
while (pos > -1) {
    posArr.push(pos);
    pos = str.indexOf('e',pos+1);
}
console.log(posArr);

/*
* toLowerCase:转换成小写
* toUpperCase:转换成大写
* */
console.log(str.toLowerCase());
console.log(str.toUpperCase());


/*
* localCompare(str1,str2)方法。
* 比较两个字符串并返回以下值中的一个
* 1.如果字符串再字母表中排在字符串参数之前，则返回一个负数
* 如果字符串等于字符串参数，则返回0
* 如果字符串再字符表中排在字符串参数之后，则返回一个正数
* */