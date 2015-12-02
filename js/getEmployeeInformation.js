$(function () {
    var employeeInformation = $("#employeeInformation");
    var employeeInformationForm = $("#employeeInformationForm");
    var employeeName = employeeInformationForm.children("#employeeName");
    var employeeID = employeeInformationForm.children("#employeeID");
    var sex = employeeInformationForm.children("#sex");
    var phone = employeeInformationForm.children("#phone");
    var birthDay = employeeInformationForm.children("#birthDay");
    var age = employeeInformationForm.children("#age");
    var degree = employeeInformationForm.children("#degree");
    var department = employeeInformationForm.children("#department");
    var title = employeeInformationForm.children("#title");
    var salary = employeeInformationForm.children("#salary");
    var hireDate = employeeInformationForm.children("#hireDate");
    var employeeType = employeeInformationForm.children("#employeeType");
    employeeInformation.click(function (event) {
        event.preventDefault();
        var data = {
            userID: getCookie("userID")
        };
        jQuery.post("../php/getEmployeeInformation.php", data, function (returnData, status) {
            if (status == 'success') {
                if (returnData) {
                    returnData = JSON.parse(returnData);
                    employeeName.val(returnData.EmployeeName);
                    employeeID.val(returnData.EmployeeID);
                    sex.val(returnData.Sex);
                    phone.val(returnData.Phone);
                    birthDay.val(returnData.BirthDay);
                    age.val(parseInt(2015 - returnData.BirthDay));
                    degree.val(IDTransferName("degree", returnData.DegreeID));
                    department.val(IDTransferName('department', returnData.DepartmentID));
                    title.val(returnData.Title);
                    salary.val(returnData.Salary);
                    hireDate.val(returnData.HireDate);
                    employeeType.val(IDTransferName("employeeType", returnData.EmployeeTypeID));
                    age.val(handleAge(returnData.BirthDay));
                }
            } else {
                alert("获取信息失败，请重试！");
            }
        });

    });
});
