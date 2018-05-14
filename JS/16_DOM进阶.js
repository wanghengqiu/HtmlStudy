/**
 * Created by Coder on 2018/5/9.
 */

/*
*
* */
window.onload = function () {
    // nodeDemo();
    // documentDemo();
    // elementDemo();
    kuozhanDemo();
};

function nodeDemo() {
    console.log(Node); //IE不支持
    /*表示元素节点的类型值*/
    console.log(Node.ELEMENT_NODE);
    /*表示文本节点的类型值*/
    console.log(Node.TEXT_NODE);
    console.log(Node.DOCUMENT_NODE);
}

function documentDemo() {
    /*document类型表示文档，或文档的根节点，而这个根节点是隐藏的，没有具体的元素标签*/
    console.log(document.nodeType);
    console.log(document.nodeName);
    console.log(document.nodeValue);
    console.log(document.childNodes);
    /*10表示文档声明*/
    console.log(document.childNodes[0]);
    console.log(document.childNodes[0].nodeType);
    console.log(document.childNodes[0].nodeName);
    console.log(document.childNodes[0].nodeValue);

    /*表示html*/
    console.log(document.childNodes[1]);
    console.log(document.childNodes[1].nodeType);
    console.log(document.childNodes[1].nodeName);
    console.log(document.childNodes[1].nodeValue);

    /*如果想直接得到<html>标签的元素节点对象,不必用chileNode这么麻烦*/
    var htmlNode = document.documentElement;
    console.log(htmlNode);

    /*获取body标签*/
    var bodyNode = document.body;
    console.log(bodyNode);

    /*document中还有一些遗留的属性和对象合集*/
    console.log(document.title);
    console.log(document.URL);
    console.log(document.domain);
    console.log(document.referrer);

    /*对象集合*/
    /*获取文档中带name属性的<a>元素集合*/
    console.log(document.anchors);
    /*获取文档中带href属性的<a>元素集合*/
    console.log(document.links);
    /*获取文档中<form>元素的集合*/
    console.log(document.forms);
    /*获取文档中<img>元素集合*/
    console.log(document.images);
}

function elementDemo() {
    /*element类型用于表现HTML中的元素节点*/
    /*
    *   元素名             类型
    *   HTML            HTMLHtmlElement
    *   DIV             HTMLDivElement
    *   BODY            HTMLBodyElement
    *   P               HTMLParamElemet
    *
    * */
}

function textDemo() {
    var box = document.getElementById('box1');
    var text1 = document.createTextNode('Mr.');
    var text2 = document.createTextNode('Lee');
    /*这里会是两个文本标签*/
    box.appendChild(text1);
    box.appendChild(text2);

    /*将两个相邻的文本标签合并*/
    box.normalize();
    /*分离*/
    text1.splitText(2);
    /*插入*/
    text1.insertData(0,'Hello');
    /*替换*/
    text1.replaceData(0,2,'Miss');
}

function kuozhanDemo() {
    /*如果一个标签在当前的页显示，需要滚动才能看到，可以用以下操作*/
    var box = document.getElementById('id1');
    document.getElementById('id1').scrollIntoView();

    /*由于子节点空白问题，IE和其他浏览器解释不一致，虽然可以过滤，
    * 但是如果只是想获得非空白的有效子节点，可以用children属性*/
    console.log(document.body.children);
    console.log(document.body.childNodes);

    /*判断一个节点是不是另一个节点的后代*/
    /*火狐旧版本不支持*/
    console.log(box.contains(box.firstChild));
}