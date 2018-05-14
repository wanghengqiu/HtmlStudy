/**
 * Created by Coder on 2018/5/9.
 */
/*
* write能在dom里打印出文本，只是write操作会覆盖掉原有的html里面的元素
* */

window.onload = function () {
    // writeDemo();
    // createDemo();
    // createDemo2();
    // replaceDemo();
    coloneDemo();

}


function writeDemo() {
    document.write('<p>这是一个段落</p>');
}

function createDemo() {
    /*只是创建了一个元素节点p，还没有添加到文档中，只是驻留在内存中*/
    var p = document.createElement('p');
    var box = document.getElementById('id1');
    /*将新节点p加入到box的子节点的末尾*/
    box.appendChild(p);

    /*这里将文本添加到p里面*/
    var text = document.createTextNode('这是测试文本');
    p.appendChild(text);
    box.appendChild(text);
}

function createDemo2() {
    var box = document.getElementsByClassName('box1')[0];
    console.log(box);
    var p = document.createElement('p');
    p.appendChild(document.createTextNode('我现在在前面了'));
    /*将p节点插入到box的前面，并且是对box的父节点来操作才可以*/
    box.parentNode.insertBefore(p,box);
}

function replaceDemo() {
    var span = document.getElementsByTagName('span')[0];
    var em = document.createElement('em');
    em.appendChild(document.createTextNode('倾斜一下'));
    /*替换节点*/
    span.parentNode.replaceChild(em,span);
}

function coloneDemo() {
    var span = document.getElementsByTagName('span')[0];
    /*克隆一个节点。如果是true，则标签将节点中的文本也一起克隆，如果是false，则只克隆标签*/
    var clone = span.cloneNode(true);
    span.parentNode.appendChild(clone);
}