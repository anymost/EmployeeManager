<?php
/**
 * Created by PhpStorm.
 * User: lenovo
 * Date: 2015/11/21
 * Time: 23:02
 */
include_once('tools.php');
include_once('SQLSafe.php');
$SQLSafe=new SQLSafe();

$roleName = $_POST['roleName'];

function setRoleName($roleName)
{
    $conn = tools::connectDatabase();
    mysqli_query($conn, "DELETE FROM Roles WHERE RoleID='$roleName'");
    echo "success";

}

setRoleName($roleName);