/**
 * Created by Coder on 2018/5/3.
 */
/*
* 正则表达式的定义。有两种方式
* 1.用new的方式定义一个RegExp对象。
* 2.字面量的方式定义
* 第二个参数是模式匹配，i表示忽略大小写,g表示全局搜索
* */

var box1 = new RegExp('Box');
// alert(box);
var box2 = /Box/;
// alert(box2);
var box3 = new RegExp('Box','ig');
// alert(box3);
var box4 = /Box/ig;

/*
* RegExp对象包含两个方法，test()和exec()，功能基本相似，用于测试字符串匹配
* test：在字符串中测试模式匹配，返回true或false
* exec：在字符串中执行匹配搜索，返回结果数组,没有就返回null
* */
var patten = new RegExp('Box','i');
var str = 'box';
console.log(patten.test(str));
//使用一条语句实现正则匹配
console.log(/Box/i.test('This is abox'));
/*使用exec返回匹配数组*/
var str2 = 'This is a box,Box is a boxes';
console.log(patten.exec(str2));

/*
* 使用string的匹配表达式来实现
* match(pattern):返回pattern中的子串数组或null
* replace(pattern,replacement):用replacement替换pattern
* search(pattern):返回字符串中pattern开始位置
* split(pattern)：返回字符串按指定pattern拆分的数组
* */
var pattern2 = /Box/ig;
var str3 = 'This is a Box,That is a box';
console.log(str3.match(pattern2));
console.log(str3.search(pattern2));
console.log(str3.replace(pattern2,'Tom'));
console.log(str3);
console.log(str3.split(pattern2));

/*
* RegExp对象的静态属性
* input:短名:$_,当前背匹配的字符串
* lastMatch:$&,最后一个匹配字符串
* lastParen:$+,最后一对圆括号内的匹配子串
* leftContext:最后一次匹配前的子串
* multiline:用于指定是否所有的表达式都用于多行的布尔值
* rightContext:在上次匹配之后的子串
* */
var pattern3 = /(g)oogle/ig;
var str4 = 'This is google! That is Google';
pattern3.test(str4);
console.log(RegExp.input);
/*可以用短名来替代,其中input特殊，可以用.来操作*/
console.log(RegExp['$_']);
console.log(RegExp.$_);
console.log(RegExp.leftContext);
console.log(RegExp.rightContext);
console.log(RegExp.lastMatch);
console.log(RegExp.lastParen);
// console.log(RegExp.multiline);
