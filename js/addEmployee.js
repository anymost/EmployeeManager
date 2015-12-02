/**
 * Created by lenovo on 2015/11/16.
 */
$(function () {
    var addEmployeeForm = $('#addEmployeeForm');

    addEmployeeForm.submit(function (event) {
        event.preventDefault();
        var employeeName = addEmployeeForm.children('.employeeName').val();
        var sex = addEmployeeForm.children('.sex').val();
        var phone = addEmployeeForm.children('.phone').val();
        var birthDay = addEmployeeForm.children('.birthDay').val();
        var degree = addEmployeeForm.children('.degree').val();
        var department = addEmployeeForm.children('.department').val();
        var title = addEmployeeForm.children('.title').val();
        var salary = addEmployeeForm.children('.salary').val();
        var employeeType = addEmployeeForm.children('.employeeType').val();
        var hireDate = addEmployeeForm.children('.hireDate').val();
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
        };

        jQuery.post('../php/addEmployee.php', data, function (returnData, status) {
            if (status == 'success') {
                if (returnData == 'success')
                    alert("添加员工成功");
                else
                    console.log(returnData);
                //alert("添加员工失败");
            } else {
                alert("添加员工失败");
            }
        });

    });
});