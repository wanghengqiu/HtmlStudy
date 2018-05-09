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

/*
* 窗口页面大小，innerWidth和innerHeigh返回浏览器本身的尺寸；
* outerWidth和outerHeight返回浏览器窗口本身及边框的尺寸。
* */
console.log(window.innerWidth);
console.log(window.outerWidth);

/*
* location对象
* location是BOM对象之一，它提供了当前窗口中加载的文档的有关信息
* location对象是window对象的属性，也是document对象的属性
* 一些常用的属性：
 hash 设置或返回从井号 (#) 开始的 URL（锚）。如果地址里没有“#”，则返回空字符串。
 host 设置或返回主机名和当前 URL 的端口号。
 hostname 设置或返回当前 URL 的主机名。
 href 设置或返回完整的 URL。在浏览器的地址栏上怎么显示它就怎么返回。
 pathname 设置或返回当前 URL 的路径部分。
 port 设置或返回当前 URL 的端口号，设置或返回当前 URL 的端口号。
 protocol 设置或返回当前 URL 的协议，取值为 'http:','https:','file:' 等等。
 search 设置或返回从问号 (?) 开始的 URL（查询部分）。
 assign() 加载新的文档。
 reload() 重新加载当前文档，相当于按浏览器上的“刷新”(IE)或“Reload”(Netscape)键。
 replace() 用新的文档替换当前文档，相当于按浏览器上的“刷新”(IE)或“Reload”键


 protocol 返回地址的协议，取值为 'http:','https:','file:' 等等。
 hostname 返回地址的主机名，例如，一个“http://www.microsoft.com/china/”的地址，location.hostname == 'www.microsoft.com'。
 port 返回地址的端口号，一般 http 的端口号是 '80'。
 host 返回主机名和端口号，如：'www.a.com:8080'。

 pathname 返回路径名，如“http://www.a.com/b/c.html”，location.pathname == 'b/c.html'。
 hash 返回“#”以及以后的内容，如“http://www.a.com/b/c.html#chapter4”，location.hash == '#chapter4'；如果地址里没有“#”，则返回空字符串。
 search 返回“?”以及以后的内容，如“http://www.a.com/b/c.asp?selection=3&jumpto=4”，
    location.search == '?selection=3&jumpto=4'；如果地址里没有“?”，则返回空字符串。
 href 返回以上全部内容，也就是说，返回整个地址。在浏览器的地址栏上怎么显示它就怎么返回。如果想一个窗口对象打开某地址，可以使用“location.href = '...'”，也可以直接用“location = '...'”来达到此目的。
* */

/*
* history对象
* length:保存着
* back：后退
* forward：向前
* go():使用go()方法可以在用户的历史记录中任意跳转。这个方法接收一个参数，
*       表示向后或向前跳转的页面数的一个整数值。负数表示向后跳转(类似于后退按钮)，
*       正数表示向前跳转(类似于前进按钮)
* */