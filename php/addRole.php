<?php
/**
 * Created by PhpStorm.
 * User: lenovo
 * Date: 2015/11/21
 * Time: 21:46
 */
include_once("tools.php");
include_once('SQLSafe.php');
$SQLSafe=new SQLSafe();

$roleName = $_POST['roleName'];
$roleAuthority = $_POST['roleAuthority'];

function addRole($roleName, $roleAuthority)
{
    $conn = tools::connectDatabase();
    $roleID = tools::getMaxRoleID() + 1;
    mysqli_query($conn, "INSERT INTO Roles(RoleID,RoleName,Auth_Authority,Auth_Info,Auth_Job,Auth_Attendance,Auth_Training,Auth_Evaluation,Auth_RP,Auth_Role,Auth_Encrypt) VALUES ('$roleID','$roleName','$roleAuthority[0]','$roleAuthority[1]','$roleAuthority[2]','$roleAuthority[3]','$roleAuthority[4]','$roleAuthority[5]','$roleAuthority[6]','$roleAuthority[7]','$roleAuthority[8]')");
    echo "success";
}

addRole($roleName, $roleAuthority);