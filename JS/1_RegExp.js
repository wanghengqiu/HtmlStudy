/**
 * Created by Coder on 2018/5/3.
 */
/*
* 正则表达式的定义。有两种方式
* 1.用new的方式定义一个RegExp对象。
* 2.字面量的方式定义
* 第二个参数是模式匹配，i表示忽略大小写
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
* exec：在字符串中执行匹配搜索，返回结果数组
* */
var patten = new RegExp('Box','i');
var str = 'box';
console.log(patten.test(str));
//使用一条语句实现正则匹配
console.log(/Box/i.test('This is abox'));
/*使用exec返回匹配数组*/
var str2 = 'This is a box,Box is a boxes';
console.log(patten.exec(str2));

/*使用string的匹配表达式来实现*/