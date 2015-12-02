<?php
/**
 * Created by PhpStorm.
 * User: lenovo
 * Date: 2015/11/21
 * Time: 8:55
 */
include_once('tools.php');

$userID = $_POST['userID'];

//在用户修改密码时，使用sha1加密函数加密后
//与数据库中的密码进行比对
$oldPassword = sha1($_POST['oldPassword']);
//将新的密码加密后保存到数据库中
$newPassword = sha1($_POST['newPassword']);


function editAccount($userID, $oldPassword, $newPassword)
{
    $conn = tools::connectDatabase();
    $result = mysqli_query($conn, "SELECT Password FROM  Users WHERE EmployeeID='$userID'");
    $row = mysqli_fetch_array($result);
    if ($row['Password'] == $oldPassword) {
        mysqli_query($conn, "UPDATE Users SET Password='$newPassword' WHERE EmployeeID='$userID' ");
        echo "success";
    } else {
        echo "failed";
    }
}

editAccount($userID, $oldPassword, $newPassword);