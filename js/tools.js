/**
 * Created by lenovo on 2015/11/9.
 */


/*
 一些工具函数
 */


//过滤非法字符，防止sql注入
function filterSqlStr(value) {
    var str = "and,delete,or,exec,insert,select,union,update,count,*,',join,>,<";
    var sqlStr = str.split(',');
    var flag = false;
    for (var i = 0; i < sqlStr.length; i++) {
        if (value.toLowerCase().indexOf(sqlStr[i]) != -1) {
            flag = true;
            break;
        }
    }
    return flag;
}


//将反斜杠替换为正斜杠
function replaceAll(str) {
    var strArray = str.split('\\');
    str = strArray.join('/');
    return str;
}

//获取cookie
function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
        return arr[2];
    else
        return null;
}

//删除cookie
function deleteCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null)
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}

//存入cookie
function setCookie(name, value) {
    document.cookie = name + "=" + value;
}


function IDTransferName(name, id) {
    if (name == 'degree') {
        if (id == "1")
            return "学士";
        if (id == "2")
            return "硕士";
        if (id == "3")
            return "博士";
    }
    if (name == 'employeeType') {
        if (id == "1")
            return "正式员工";
        if (id == "2")
            return "实习员工";
    }
    if (name == 'department') {
        if (id == '1')
            return "人事部门";
        if (id == '2')
            return "销售部门";
        if (id == '3')
            return "技术部门";
        if (id == '4')
            return "后勤部门";
        if (id == "5")
            return "总经理部门";
    }
    if (name == 'check') {
        if (id == '1')
            return "出勤天数";
        if (id == '2')
            return "业绩指标";
    }
    if (name == "attendance") {
        if (id == '1')
            return "出勤";
        if (id == '2')
            return "未出勤";
    }
}
function NameTransferID(name, subName) {
    if (name == 'degree') {
        if (subName == "学士")
            return "1";
        if (subName == "硕士")
            return "2";
        if (subName == "博士")
            return "3";
    }
    if (name == 'employeeType') {
        if (subName == "正式员工")
            return "1";
        if (subName == "实习员工")
            return "2";
        if (subName == "不限")
            return "3";
    }
    if (name == 'department') {

        if (subName == '人事部门')
            return "1";
        if (subName == '销售部门')
            return "2";
        if (subName == '技术部门')
            return "3";
        if (subName == '后勤部门')
            return "4";
        if (subName == "总经理部门")
            return "5";
        if (subName == '不限')
            return "6";
    }
    if (name == "attendance") {
        if (subName == '出勤')
            return "1";
        if (subName == '未出勤')
            return "2";
    }
}


//根据生日计算出年龄
function handleAge(birthDay) {
    var today = new Date();
    today = today.toString();
    var year = parseInt(today.split(" ")[3]);
    var birth = parseInt(birthDay.split("-")[0]);
    return (year - birth);
}
function getDate() {
    var date = new Date();
    var time = date.getFullYear() + "-";
    if ((date.getUTCMonth() + 1) < 10) {
        time += '0';
        time += (date.getUTCMonth() + 1);
    } else {
        time += (date.getUTCMonth() + 1);
    }
    if (date.getDate() < 10) {
        time += '-0';
        time += date.getDate();
    } else {
        time += '-' + date.getDate();
    }
    return time;
}
function filterEmployee(employeeName, phone, birthDay, title, salary, hireDate) {
    if (filterSqlStr(employeeName)) {
        alert("您输入的姓名中含有非法字符,请重新输入！");
        return true;
    }
    if (filterSqlStr(phone)) {
        alert("您输入的电话中含有非法字符,请重新输入！");
        return true;
    }
    if (filterSqlStr(birthDay)) {
        alert("您输入的生日中含有非法字符,请重新输入！");
        return true;
    }
    if (filterSqlStr(title)) {
        alert("您输入的职位中含有非法字符,请重新输入！");
        return true;
    }
    if (filterSqlStr(salary)) {
        alert("您输入的薪水中含有非法字符,请重新输入！");
        return true;
    }
    if (filterSqlStr(hireDate)) {
        alert("您输入的雇佣日期中含有非法字符,请重新输入！");
        return true;
    }
    return false;

}
function checkNull(employeeName, phone, birthDay, title, salary, hireDate) {
    if (!employeeName) {
        alert("您输入的姓名为空,请重新输入！");
        return true;
    }
    if (!phone) {
        alert("您输入的电话为空,请重新输入！");
        return true;
    }
    if (!birthDay) {
        alert("您输入的生日为空,请重新输入！");
        return true;
    }
    if (!title) {
        alert("您输入的职位为空,请重新输入！");
        return true;
    }
    if (!salary) {
        alert("您输入的薪水为空,请重新输入！");
        return true;
    }
    if (!hireDate) {
        alert("您输入的雇佣日期中为空,请重新输入！");
        return true;
    }
    return false;

}
function check(item) {
    if (!item)
        return false;
    else
        return true;
}

function matchPhone(phone) {
    if (phone.match(/^1\d{10}$/))
        return true;
    else
        return false;
}
function matchSalary(salary) {
    if (salary.match(/^\d+$/))
        return true;
    else
        return false;
}

function setAuthority(authority) {
    var employeeAuthority = [];
    for (var i = 0; i < authority.length; i++) {
        for (var x in authority[i]) {
            if ((x.match(/^Auth_/)) && authority[i][x] == 1 && employeeAuthority.indexOf(x) == -1) {
                employeeAuthority.push(x);
            }
        }
    }
    return employeeAuthority;
}
function getYear() {
    var newYear = new Date().getFullYear();
    return newYear;
}


