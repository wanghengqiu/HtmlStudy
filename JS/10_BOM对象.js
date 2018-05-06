/*
* BOM也叫浏览器对象模型，它提供了很多对象，用于访问浏览器功能。
* BOM的核心对象是window，它表示浏览器的一个实例。
* window对象处于js结构的最顶层。对于每个打开的窗口，系统都会自动为其定义window对象
* */

/*
* window对象有六大属性，这六大属性本身也是对象
* window对象的属性
* closed:当窗口关闭时为真
* defaultStatus:窗口底部状态栏显示的默认状态消息
* document:窗口中当前显示的文档对象
* frames:窗口中的框架对象数组
* history:保存窗口最近加载的URL
* length:窗口中的框架数
* location:当前窗口的URL
* name：窗口名
* offscreenBuffering：用于绘制窗口内容并在完成后复制已存在的内容，控制屏幕更新
* opener：打开当前窗口的窗口
* */

/*这个不同alert，这个函数有确定和取消按钮的，并有一个bool型的返回值*/
// confirm('请。。。');
//
if (confirm('请选择！')) {
    alert('您按了确定按钮！');
} else {
    alert('您按了取消按钮！');
}

/*输入提示框*/
var box = prompt('请输入一个数字',0);
if (box != null) {
    alert(box);
}

/*新建窗口
* open方法可以导航到一个特定的URL，也可以打开一个新的浏览器窗口。
* 它可以接受4个参数：1.要加载的URL，2.窗口的名称或窗口目标。3.一个特性字符串
*                 4.一个表示新页面是否取代浏览器记录中当前加载页面的布尔值
* open返回的是一个window对象
* */
if (confirm('确定打开？')) {
    // open('http://www.baidu.com');

    /*设置了名称后，以后凡是以这个窗口名称打开的窗口都不会重新开一个窗口，而是在已经打开的
    * 这个名称的窗口刷新页面
    * 这个名称还可以设置目标
    * _blank:新建一个窗口
    * _parent:表示在本窗口内加载*/
    // open('http://www.baidu.com','baidu');

    // open('http://www.baidu.com','baidu','width=400,height=400,top=100,left=100');
} else {

}

/*
* opener,子窗口操作父窗口
* */
// open('11_opener测试.html');

/*
* 窗口大小相关的
* */
console.log(screenLeft);
console.log(screenTop);