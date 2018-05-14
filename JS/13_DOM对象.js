/*
* DOM(Document Object Model)即文档对象模型
* D(文档)可以理解为整个web加载的网页
* O(对象)可以理解为类似window对象之类的东西，可以调用属性和方法
* M(模型)可以理解为网页文档的树型结构
* */

/*
* 节点：就是html中的标签元素。分为3类
* 元素节点：其实就是标签
* 文本节点：其实就是标签内的纯文本
* 属性节点：其实就是标签的属性
* */

/*
* 查找元素
* getElementById():获取特定id元素的节点
* getElementsByTagName():获取相同元素的节点列表
* getElementsByName():获取相同名称的节点列表
* getAttribute():获取特定元素节点属性的值
* */

/*只有页面全部加载完了才能获取到的*/
// var box1 = document.getElementById('box1');
// console.log(box1);
//
window.onload = function () {

    // jiedianDemo();

    // cengciDemo();
    attriDemo();
};

function searchDemo() {
    var box1 = document.getElementById('box1');
    console.log(box1);
    console.log('执行到了这里');
    /*获取这个元素的标签名*/
    console.log(box1.tagName);
    /*获取这个元素节点里的文本内容*/
    console.log(box1.innerHTML);
    /*获得id的值*/
    console.log(box1.id);
    console.log(box1.className);


    // box1.innerHTML = '玩转js';
    // /*可以解析html，不是单纯的复制*/
    // box1.innerHTML = '玩转<strong>js</strong>'

    var pArr = document.getElementsByTagName('p');
    console.log(pArr);
    console.log(pArr[1].innerText);

    /*获取所有节点*/
    /*IE浏览器比火狐浏览器和谷歌浏览器多一个节点，是因为它把<!的文档
    * 声明也算进去了*/
    var all = document.getElementsByTagName("*");
}

// document.getElementsByTagName();
// document.getElementsByName();
// document.getAttribute();

function jiedianDemo() {
    /*
    * 节点分为元素节点，属性节点，文本节点，而这些节点有三个非常有用的属相
    *           nodeName        nodeType        nodeValue
    * 元素节点    元素名称            1              null
    * 属性节点    属性名称            2             属性值
    * 文本节点    #text              3            文本内容
    *
    * 节点的层次结构可以划分为：父节点，子节点，兄弟节点
    * 当我们获取了其中一个节点后，就可以使用这些层次节点属性来获取它相关层次的节点
    * */
    /*元素节点*/
    var box = document.getElementById('box1');
    console.log(box.nodeType);
    console.log(box.nodeName);
    console.log(box.nodeValue);

    /*获取所有子节点*/
    var arr = box.childNodes;
    console.log(arr);

    /*
    * 在获取到文本节点的时候，是无法使用innerHtml这个属性输出文本内容的。
    * nodeValue是在当前节点操作的，而innerHtml是对节点内部操作的
    * 这个非标准的属性必须在获取元素节点的时候，才能输出里面包含的文本
    * innerHtml和nodeValue还有一个区别就是在赋值的时候。
    * nodeValue会把包含在文本里的html标签转换成纯本文，而innerHtml是能识别html标签的
    * */
    var text = arr[0];
    console.log(text.nodeType);
    console.log(text.nodeName);
    console.log(text.nodeValue);

    var pNode = arr[1];
    console.log(pNode.nodeType);
    console.log(pNode.nodeName);
    console.log(pNode.nodeValue);
}

function cengciDemo() {
    var box = document.getElementById('box1');
    var arr = box.childNodes;
    console.log(arr);
    /*获取第一个子节点*/
    var first = box.firstChild;
    console.log(first);
    /*获取最后一个子节点*/
    var last = box.lastChild;
    console.log(last);
    /*返回根节点，其实就是document*/
    var owner = box.ownerDocument;
    console.log(owner);

    /*返回父节点*/
    var parent = first.parentNode;
    console.log(parent);
    var parent1 = first.parentElement;
    console.log(parent1);
    /*返回的是前一个同级节点*/
    var pre = last.previousSibling;
    console.log(pre);
    var pr2 = first.previousSibling;
    console.log(pr2);

    /*返回同一级的后一个节点*/
    var next = first.nextSibling;
    console.log(next);
}

function attriDemo() {
    var box = document.getElementById('box1');
    /*集合数组，保存着这个节点的属性列表，是从后往前列出的*/
    var attrArr = box.attributes;
    console.log(attrArr);
    var attr1 = attrArr[0];
    var attr2 = attrArr['class'];
    console.log(attr1.nodeType);
    console.log(attr1.nodeName);
    console.log(attr1.nodeValue);

    /*获取特定属性*/
    var attrClass = attrArr.getNamedItem('class');
    console.log(attrClass.nodeType);
    console.log(attrClass.nodeName);
    console.log(attrClass.nodeValue);
};