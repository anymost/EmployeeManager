/**
 * Created by lenovo on 2015/11/9.
 */

$(function () {
    /**
     * Created by lenovo on 2015/11/10.
     */
    var userID = getCookie('userID');
    if (!userID) {
        alert('您尚未登陆，请登录!');
        location.replace('login.html');
    }
    var menu = $('.menu');
    var right = $('.right');
    var welcome = $('.welcome');
    var information = $('#information');
    var employee = $('#employee');
    var attendance = $('#attendance');
    var train = $('#train');
    var evaluation = $('#evaluation');
    var reward = $('#reward');
    var authority = $('#authority');
    var role = $('#role');
    var account = $('#account');
    var otherContent = $('.otherContent')
    var informationMenu = $(".informationMenu");
    var informationBar = $(".informationBar");
    var employeeInformation = $("#employeeInformation");
    var trainInformation = $("#trainInformation");
    var rewardInformation = $("#rewardInformation");
    var checkInformation = $("#checkInformation");
    var attendanceInformation = $("#attendanceInformation");
    var informationContent = $('.informationContent');
    var employeeInformationContent = $("#employeeInformationContent");
    var trainInformationContent = $("#trainInformationContent");
    var rewardInformationContent = $("#rewardInformationContent");
    var checkInformationContent = $("#checkInformationContent");
    var attendanceInformationContent = $("#attendanceInformationContent");
    var attendanceMenu = $('.attendanceMenu');
    var attendanceBar = $('.attendanceBar');
    var editAttendance = $('#editAttendance');
    var addAttendance = $('#addAttendance');
    var attendanceContent = $('.attendanceContent');
    var editAttendanceContent = $('#editAttendanceContent');
    var addAttendanceContent = $('#addAttendanceContent');
    var employeeBar = $('.employeeBar');
    var employeeMenu = $('.employeeMenu');
    var addEmployee = $('#addEmployee');
    var selectEmployee = $('#selectEmployee');
    var modifyEmployee = $('#modifyEmployee');
    var deleteEmployee = $('#deleteEmployee');
    var employeeContent = $('.employeeContent');
    var addEmployeeContent = $('#addEmployeeContent');
    var selectEmployeeContent = $('#selectEmployeeContent');
    var modifyEmployeeContent = $('#modifyEmployeeContent');
    var deleteEmployeeContent = $('#deleteEmployeeContent');
    var trainBar = $('.trainBar');
    var trainMenu = $('.trainMenu');
    var trainContent = $('.trainContent');
    var addTrainContent = $('#addTrainContent');
    var selectTrainContent = $('#selectTrainContent');
    var editTrainContent = $('#editTrainContent');
    var addTrain = $('#addTrain');
    var selectTrain = $('#selectTrain');
    var editTrain = $('#editTrain');
    var evaluationBar = $(".evaluationBar");
    var evaluationMenu = $('.evaluationMenu');
    var evaluationContent = $('.valuationContent');
    var selectEvaluation = $('#selectEvaluation');
    var addEvaluation = $('#addEvaluation');
    var editEvaluation = $('#editEvaluation');
    var selectEvaluationContent = $('#selectEvaluationContent');
    var addEvaluationContent = $('#addEvaluationContent');
    var editEvaluationContent = $('#editEvaluationContent');
    var rewardBar = $('.rewardBar');
    var rewardMenu = $('.rewardMenu');
    var addReward = $('#addReward');
    var editReward = $('#editReward');
    var rewardContent = $('.rewardContent');
    var addRewardContent = $('#addRewardContent');
    var editRewardContent = $('#editRewardContent');
    var accountBar = $('.accountBar');
    var accountMenu = $('.accountMenu');
    var editAccount = $('#editAccount');
    var accountContent = $('.accountContent');
    var editAccountContent = $('#editAccountContent');

    var authorityBar = $('.authorityBar');
    var authorityMenu = $('.authorityMenu');
    var selectAuthority = $('#selectAuthority');
    var editAuthority = $('#editAuthority');
    var authorityContent = $('.authorityContent');
    var selectAuthorityContent = $('#selectAuthorityContent');
    var editAuthorityContent = $('#editAuthorityContent');
    var roleBar = $('.roleBar');
    var roleMenu = $('.roleMenu');
    var selectRole = $('#selectRole');
    var addRole = $('#addRole');
    var deleteRole = $('#deleteRole');
    var editRole = $('#editRole');
    var roleContent = $('.roleContent');
    var selectRoleContent = $('#selectRoleContent');
    var addRoleContent = $('#addRoleContent');
    var deleteRoleContent = $('#deleteRoleContent');
    var editRoleContent = $('#editRoleContent');
    var barColor = $('.barColor');
    var personalInfo = $('.personalInfo');
    var exit = $('#exit');


    //将保存的cookie取出来分解成一个数组
    var employeeAuthority = getCookie('userAuthority').split(',');

    personalInfo.text("欢迎您，" + getCookie('userName') + "！ 今天是" + getDate());

    $('.carousel').carousel({
        interval: 4000
    });


    exit.click(function () {
        var result = confirm("您确认要退出？");
        if (result == true) {
            deleteCookie("userAuthority");
            deleteCookie('userName');
            deleteCookie('userID');
            location.replace('login.html');
        }

    })
    function setColor(object) {
        menu.removeClass('btn-success');
        object.addClass('btn-success');
        informationBar.css('display', 'none');
        employeeBar.css('display', 'none');
        trainBar.css('display', 'none');
        roleBar.css('display', 'none');
        authorityBar.css('display', 'none');
        evaluationBar.css('display', 'none');
        rewardBar.css('display', 'none');
        attendanceBar.css('display', 'none');
        accountBar.css('display', 'none');
    }

    function itemClick(object, str, otherBar) {
        setColor(object);
        right.text(str);
        otherBar.css('display', 'block');
    }

    function menuClick(otherMenu, object) {
        otherMenu.removeClass("btn-info");
        object.addClass("btn-info");
    }

    function contentClick(mainContent, subContent, mainBar, str) {
        otherContent.css('display', 'none');
        mainContent.css('display', 'none');
        subContent.css('display', 'block');
        mainBar.css('display', 'none');
        right.text(str);
    }


    //在用户每次访问时判断用户是否具有访问该页面的权限
    information.click(function () {
        if (employeeAuthority.indexOf('Auth_Info') != -1) {
            itemClick($(this), "信息管理", informationBar);
        } else {
            alert("您没有访问该页面的权限！");
        }

    });
    employee.click(function () {
        if (employeeAuthority.indexOf('Auth_Job') != -1) {
            itemClick($(this), "员工管理", employeeBar);
        } else {
            alert("您没有访问该页面的权限！");
        }

    });
    attendance.click(function () {
        if (employeeAuthority.indexOf('Auth_Attendance') != -1) {
            itemClick($(this), "考勤信息", attendanceBar);
        } else {
            alert("您没有访问该页面的权限！");
        }
    });
    train.click(function () {
        if (employeeAuthority.indexOf('Auth_Training') != -1) {
            itemClick($(this), "培训管理", trainBar);
        } else {
            alert("您没有访问该页面的权限！");
        }

    });
    authority.click(function () {
        if (employeeAuthority.indexOf('Auth_Authority') != -1) {
            itemClick($(this), "权限管理", authorityBar);
        } else {
            alert("您没有访问该页面的权限！");
        }
    });
    evaluation.click(function () {
        if (employeeAuthority.indexOf('Auth_Evaluation') != -1) {
            itemClick($(this), "考核管理", evaluationBar);
        } else {
            alert("您没有访问该页面的权限！");
        }
    });
    reward.click(function () {
        if (employeeAuthority.indexOf('Auth_RP') != -1) {
            itemClick($(this), "奖惩管理", rewardBar);
        } else {
            alert("您没有访问该页面的权限！");
        }
    });
    role.click(function () {
        if (employeeAuthority.indexOf("Auth_Role") != -1) {
            itemClick($(this), "角色管理", roleBar);
        } else {
            alert("您没有访问该页面的权限！");
        }
    });
    account.click(function () {
        itemClick($(this), '账户管理', accountBar);
    });


    informationMenu.click(function () {
        menuClick(informationMenu, $(this));
    });
    employeeMenu.click(function () {
        menuClick(employeeMenu, $(this));
    });
    attendanceMenu.click(function () {
        menuClick(attendanceMenu, $(this));
    });
    trainMenu.click(function () {
        menuClick(trainMenu, $(this));
    });
    authorityMenu.click(function () {
        menuClick(authorityMenu, $(this));
    });
    roleMenu.click(function () {
        menuClick(roleMenu, $(this));
    });
    evaluationMenu.click(function () {
        menuClick(evaluationMenu, $(this));
    });
    rewardMenu.click(function () {
        menuClick(rewardMenu, $(this));
    });
    accountMenu.click(function () {
        menuClick(accountMenu, $(this));
    })


    employeeInformation.click(function () {
        contentClick(informationContent, employeeInformationContent, informationBar, "员工信息");
    });
    trainInformation.click(function () {
        contentClick(informationContent, trainInformationContent, informationBar, "培训信息");
    });
    rewardInformation.click(function () {
        contentClick(informationContent, rewardInformationContent, informationBar, "奖惩信息");
    });
    checkInformation.click(function () {
        contentClick(informationContent, checkInformationContent, informationBar, '考核信息');
    });
    attendanceInformation.click(function () {
        contentClick(informationContent, attendanceInformationContent, informationBar, '出勤信息');
    });
    addEmployee.click(function () {
        contentClick(employeeContent, addEmployeeContent, employeeBar, '添加员工');
    });
    selectEmployee.click(function () {
        contentClick(employeeContent, selectEmployeeContent, employeeBar, '查询员工');
    });
    modifyEmployee.click(function () {
        contentClick(employeeContent, modifyEmployeeContent, employeeBar, '修改员工');
    });
    deleteEmployee.click(function () {
        contentClick(employeeContent, deleteEmployeeContent, employeeBar, '删除员工');
    });
    editAttendance.click(function () {
        contentClick(attendanceContent, editAttendanceContent, attendanceBar, '编辑考勤');
    });
    addAttendance.click(function () {
        contentClick(attendanceContent, addAttendanceContent, attendanceBar, '增加考勤');
    })
    addTrain.click(function () {
        contentClick(trainContent, addTrainContent, trainBar, '添加培训');
    });
    selectTrain.click(function () {
        contentClick(trainContent, selectTrainContent, trainBar, '员工培训信息');
    });
    editTrain.click(function () {
        contentClick(trainContent, editTrainContent, trainBar, '编辑培训');
    });
    selectEvaluation.click(function () {
        contentClick(evaluationContent, selectEvaluationContent, evaluationBar, '查询考核');
    });
    addEvaluation.click(function () {
        contentClick(evaluationContent, addEvaluationContent, evaluationBar, '添加考核');
    });
    editEvaluation.click(function () {
        contentClick(evaluationContent, editEvaluationContent, evaluationBar, '编辑考核');
    });
    addReward.click(function () {
        contentClick(rewardContent, addRewardContent, rewardBar, '添加奖惩');
    });
    editReward.click(function () {
        contentClick(rewardContent, editRewardContent, rewardBar, '编辑奖惩');
    });
    selectAuthority.click(function () {
        contentClick(authorityContent, selectAuthorityContent, authorityBar, '查询权限');
    });
    editAuthority.click(function () {
        contentClick(authorityContent, editAuthorityContent, authorityBar, '权限管理');
    });
    selectRole.click(function () {
        contentClick(roleContent, selectRoleContent, roleBar, '查询角色');
    });
    addRole.click(function () {
        contentClick(roleContent, addRoleContent, roleBar, '增加角色');
    });
    deleteRole.click(function () {
        contentClick(roleContent, deleteRoleContent, roleBar, '删除角色');
    });
    editRole.click(function () {
        contentClick(roleContent, editRoleContent, roleBar, '编辑角色');
    });
    editAccount.click(function () {
        contentClick(accountContent, editAccountContent, accountBar, '修改密码');
    })
    barColor.mouseover(function () {
        $(this).css('background-color', 'rgb(221,221,221)')
    });
    barColor.mouseout(function () {
        $(this).css('background-color', 'rgb(242,242,242)');
    });

});
