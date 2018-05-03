/**
 * Created by Coder on 2018/5/3.
 */
/*
* JavaScript变量是松散型的，不强制类型，决定了它只是在特定时间用于保存特定值的一个名字而已
* 变量的值及类型可以在脚本的生命周期内改变
* 基本数据类型与引用数据类型
* 基本数据类型指那些保存在栈内存中的简单数据段，包括Undefined,Null,Boolean,Number和String
* 引用数据类型是指那些保存在堆内存中的对象
* */
/*这里box1和box2是两个独立的对象，基本数据类型是值访问*/
var box1 = 'Lee';
var box2 = box1;
/*这里的box3和box4是两个指向同一块内存区域的指针*/
var box3 = new  Object();
box3.name = 'Lee';
var box4 = box3;