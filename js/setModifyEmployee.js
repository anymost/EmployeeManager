/**
 * Created by lenovo on 2015/11/17.
 */
$(function () {
    var setModifyEmployeeForm = $("#setModifyEmployeeForm");

    setModifyEmployeeForm.submit(function (event) {
        event.preventDefault();
        var employeeName = setModifyEmployeeForm.children(".employeeName").val();
        var sex = setModifyEmployeeForm.children(".sex").val();
        var phone = setModifyEmployeeForm.children(".phone").val();
        var birthDay = setModifyEmployeeForm.children(".birthDay").val();
        var degree = setModifyEmployeeForm.children(".degree").val();
        var department = setModifyEmployeeForm.children(".department").val();
        var title = setModifyEmployeeForm.children(".title").val();
        var salary = setModifyEmployeeForm.children(".salary").val();
        var employeeType = setModifyEmployeeForm.children(".employeeType").val();
        var hireDate = setModifyEmployeeForm.children(".hireDate").val();
        if (!matchPhone(phone)) {
            alert("手机号格式有误，请重新输入！");
            return;
        }
        if (!matchSalary(salary)) {
            alert("薪水输入有误，请重新输入！");
            return;
        }
        if (!employeeName || filterSqlStr(employeeName)) {
            alert("姓名格式有问题，请重新输入！");
            return;
        }
        if (!title || filterSqlStr(title)) {
            alert("姓名格式有问题，请重新输入！");
            return;
        }
        if (!birthDay) {
            alert("生日不能为空，请重新输入！");
            return;
        }
        if (!hireDate) {
            alert("入职日期不能为空，请重新输入！");
            return;
        }
        var data = {
            userID: getCookie('selectEmployee'),
            employeeName: employeeName,
            sex: sex,
            phone: phone,
            birthDay: birthDay,
            degreeID: NameTransferID('degree', degree),
            departmentID: NameTransferID('department', department),
            title: title,
            salary: salary,
            employeeTypeID: NameTransferID('employeeType', employeeType),
            hireDate: hireDate
        }
        jQuery.post("../php/setModifyEmployee.php", data, function (returnData, status) {
            if (status == 'success') {
                if (returnData == 'success') {
                    alert("修改信息成功");
                } else {
                    console.log(returnData);

                }

            } else {
                alert("修改信息失败");
            }
        });
    })
})