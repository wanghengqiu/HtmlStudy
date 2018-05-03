/**
 * Created by Coder on 2018/4/26.
 */
var date = new Date();
console.log(date);

//返回毫秒数
console.log(Date.parse('4/12/2017'));
console.log(Date.UTC(2017,12));

date = new Date(1491926400000);
console.log(date);

/*1月贸易34号，多出来的，有些浏览器是可以进到2月的,有些事显示无效时间*/
var box = new Date('1/34/2018');
console.log(box);
alert(box);

var temp = new Date(2018,4,14,5,20,22);
console.log(temp)
console.log(temp.toString());
console.log(temp.toLocaleDateString());
console.log(temp.valueOf());
console.log(temp.toJSON());
console.log(temp.toDateString());
console.log(temp.toISOString());


var nowTime = new Date();
console.log(nowTime.getDay());
console.log(nowTime.getFullYear()+'-'+nowTime.getMonth()+'-'+
    nowTime.getDay()+'-'+nowTime.getHours() + '-' + nowTime.getMinutes());
