// need myAlert.js
function checkInput() {
    var form = document.getElementById("input");
    if (form.username.value == "") {
        say("呀，你特么的不输入账号怎么玩 ！");
        form.username.focus();
        return false;
    } else if (form.password.value == "") {
        say("你的密码被狗吃了 ？ ！");
        form.password.focus();
        return false;
    } else if (form.authCode.value == "") {
        say("验证码 ！验证码 ！验证码 ！");
        form.authCode.focus();
        return false;
    } else if (form.authCode.value != form.correctCode.value) {
        say("QAQ  验证码不对哦 ，看仔细点 ！");
        form.authCode.focus();
        return false;
    }
    form.submit();
}

function reloadCode() {
    location.reload(true);
}
function select() {
    var boxes = document.getElementsByName("rememberPsw");
    if (boxes[0].checked == true) {
        boxes[0].checked = false;
    } else
        boxes[0].checked = true;
}
function clean() {
    $('#username').val("");
    $('#password').val("");
    $('#sex').val("");
    $('#age').val("");
    $('#email').val("");
}