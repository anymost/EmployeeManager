/**
 * Created by lenovo on 2015/11/17.
 */
/**
 * Created by lenovo on 2015/11/17.
 */
$(function () {
    var getModifyEmployeeForm = $("#getModifyEmployeeForm");

    var setModifyEmployeeForm = $("#setModifyEmployeeForm");
    var employeeName = setModifyEmployeeForm.children(".employeeName");
    var sex = setModifyEmployeeForm.children(".sex");
    var phone = setModifyEmployeeForm.children(".phone");
    var birthDay = setModifyEmployeeForm.children(".birthDay");
    var degree = setModifyEmployeeForm.children(".degree");
    var department = setModifyEmployeeForm.children(".department");
    var title = setModifyEmployeeForm.children(".title");
    var salary = setModifyEmployeeForm.children(".salary");
    var employeeType = setModifyEmployeeForm.children(".employeeType");
    var hireDate = setModifyEmployeeForm.children(".hireDate");


    getModifyEmployeeForm.submit(function (event) {
        var user = $("#checkModify").val();
        event.preventDefault();

        event.preventDefault();
        var data = {
            userID: user
        }
        setCookie("selectEmployee", user);

        jQuery.post("../php/checkModifyEmployee.php", data, function (returnData, status) {
            if (status == "success") {
                var allInfo = [];
                var subInfo = {};

                returnData = JSON.parse(returnData);
                for (var i in returnData) {
                    for (var x in returnData[i]) {
                        subInfo[x] = returnData[i][x];
                    }

                }
                employeeName.val(subInfo['EmployeeName']);
                sex.val(subInfo['Sex']);
                phone.val(subInfo['Phone']);
                birthDay.val(subInfo['BirthDay']);
                degree.val(IDTransferName('degree', subInfo['DegreeID']));
                hireDate.val(subInfo['HireDate']);
                employeeType.val(IDTransferName('employeeType', subInfo['EmployeeTypeID']));
                department.val(IDTransferName('department', subInfo['DepartmentID']));
                title.val(subInfo['Title']);
                salary.val(subInfo['Salary']);

            } else {
                alert("获取信息失败！");
            }
        });
    });
});