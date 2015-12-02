<?php
/**
 * Created by PhpStorm.
 * User: lenovo
 * Date: 2015/11/26
 * Time: 17:30
 */

include_once('tools.php');
include_once('SQLSafe.php');
$SQLSafe=new SQLSafe();

$employeeID=$_POST['employeeID'];
$phone=$_POST['phone'];

function findPassword($employeeID,$phone){

    $conn = tools::connectDatabase();
    $result = mysqli_query($conn, "SELECT Phone from Employees WHERE EmployeeID='$employeeID'");
    $row=mysqli_fetch_array($result);
    if($row){

        if ($phone == $row['Phone']) {
            echo 'best match';
        } else {
            echo "phone not match";
        }
    }else{
        echo  "not exist the employeeID";
    }
}
findPassword($employeeID,$phone);