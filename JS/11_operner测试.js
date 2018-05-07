/*
* operner可以让子窗口操作父窗口
* */
document.onclick = function () {
    window.opener.document.write('子窗口让我打印一行字');
}