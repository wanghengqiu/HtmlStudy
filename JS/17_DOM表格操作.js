
window.onload = function () {
    // tableDemo();
    // tableDemo2();
    // tableDemo3();
    createDemo();
};

function tableDemo() {
    /*使用DOM去获取表格数据*/
    /*获取table表*/
    var table = document.getElementsByTagName('table')[0];

    var cap = table.children[0];
    console.log(cap);
    console.log(cap.nodeType);
    console.log(cap.nodeName);
    console.log(cap.innerHTML);
    console.log(cap.nodeValue);

    /*获取表头*/
    var th = table.children[1];
    console.log(th);
    console.log(th.nodeType);
    console.log(th.nodeName);
    console.log(th.innerHTML);
    console.log(th.nodeValue);

    /*获取table的body*/
    var tb = table.children[2];
    console.log(tb);
    console.log(tb.nodeType);
    console.log(tb.nodeName);
    console.log(tb.innerHTML);
    console.log(tb.nodeValue);

    /*获取第一行*/
    var tr2 = tb.children[0];
    console.log(tr2);
    console.log(tr2.nodeType);
    console.log(tr2.nodeName);
    console.log(tr2.innerHTML);
    console.log(tr2.nodeValue);

    /*获取第二列*/
    var td2 = tr2.children[1];
    console.log(td2);
    console.log(td2.nodeType);
    console.log(td2.nodeName);
    console.log(td2.innerHTML);
    console.log(td2.nodeValue);
}

function tableDemo2() {
    var table = document.getElementsByTagName('table')[0];

    /*获取body*/
    var tbody = table.getElementsByTagName('tbody')[0];
    console.log(tbody);
    console.log(tbody.nodeType);
    console.log(tbody.nodeName);
    console.log(tbody.innerHTML);
    console.log(tbody.nodeValue);

    /*获取tr*/
    var trArr = tbody.getElementsByTagName('tr');
    console.log(trArr);
    var tr1 = trArr[0];
    console.log(tr1);
    console.log(tr1.nodeType);
    console.log(tr1.nodeName);
    console.log(tr1.innerHTML);
    console.log(tr1.nodeValue);

    var td = tr1.children[0];
    console.log(td);
    console.log(td.nodeType);
    console.log(td.nodeName);
    console.log(td.innerHTML);
    console.log(td.nodeValue);
}

/*
* 以上两种方法来操作table都非常繁琐
* 使用HTML DOM来获取和创建相同的表格
* */
function tableDemo3() {
    var table = document.getElementsByTagName('table')[0];
    /*获取caption*/
    var cap = table.caption;
    console.log(cap);
    console.log(cap.nodeType);
    console.log(cap.nodeName);
    console.log(cap.innerHTML);
    console.log(cap.nodeValue);

    /*获取thead*/
    var th = table.tHead;
    console.log(th);
    console.log(th.nodeType);
    console.log(th.nodeName);
    console.log(th.innerHTML);
    console.log(th.nodeValue);

    /*获取tfoot*/
    var foot = table.tFoot;

    /*thead和tfood都是只有一个，上面两个返回的就是对应的对象*/
    /*tbody可以有多个，返回的是一个数组*/
    var tbody = table.tBodies;
    console.log(tbody.length);

    /*获取tr*/
    var rows = table.rows;
    console.log(rows.length);
    console.log(rows[0]);
    console.log(rows[1]);
    console.log(rows[2]);
    console.log(rows[3]);

    /*这是获取tbody里面的行*/
    var rows2 = tbody[0].rows;
    console.log(rows2.length);
    console.log(rows2[0]);

    /*获取第一行的所有单元格*/
    var cells = rows2[0].cells;
    console.log(cells.length);
    console.log(cells[0]);
}

function createDemo() {
    /*创建一个表*/
    console.log('创建表');
    var table = document.createElement('table');
    table.width = 300;
    table.border = 1;

    table.createCaption().innerHTML = '人员表2';

    var thead = table.createTHead();
    var tr = thead.insertRow(0);
    tr.insertCell(0).innerHTML = '数据1';
    tr.insertCell(1).innerHTML = '数据1';
    tr.insertCell(2).innerHTML = '数据1';

    document.body.appendChild(table);
}