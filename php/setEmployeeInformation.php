<?php
include_once("tools.php");
include_once('SQLSafe.php');
$SQLSafe=new SQLSafe();
/**
 * Created by PhpStorm.
 * User: lenovo
 * Date: 2015/11/15
 * Time: 18:48
 */
$userID = $_POST['userID'];
$birthDay = $_POST['birthDay'];
$phone = $_POST['phone'];
function setEmployeeInformation($userID, $birthDay, $phone)
{
    $conn = tools::connectDatabase();
    mysqli_query($conn, "UPDATE Employees SET BirthDay='$birthDay',Phone='$phone' WHERE EmployeeID='$userID'");
}

setEmployeeInformation($userID, $birthDay, $phone);


