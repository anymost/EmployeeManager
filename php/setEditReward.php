<?php
/**
 * Created by PhpStorm.
 * User: lenovo
 * Date: 2015/11/18
 * Time: 20:27
 */
include_once('tools.php');
include_once('SQLSafe.php');
$SQLSafe=new SQLSafe();

$RP_ID = $_POST['RP_ID'];
$employeeID = $_POST['employeeID'];
$type = $_POST['type'];
$date = $_POST['date'];

function setEditReward($RP_ID, $employeeID, $type, $date)
{
    $conn = tools::connectDatabase();
    for ($i = 0; $i < count($RP_ID); $i++) {
        $RP = $RP_ID[$i];
        $Employee = $employeeID[$i];
        $Type = $type[$i];
        $Date = $date[$i];
        echo "$RP $Employee $Type $Date \n ";
        echo "UPDATE RewardsAndPunishments SET Type=$Type,Date=$Date WHERE RP_ID=$RP     \n";
        mysqli_query($conn, "UPDATE RewardsAndPunishments SET Type=$type[$i],Date='$date[$i]' WHERE RP_ID=$RP_ID[$i])");

    }
    mysqli_query($conn,"UPDATE RewardsAndPunishments SET Type=4,Date='2015-11-26' WHERE RP_ID=9");


}

setEditReward($RP_ID, $employeeID, $type, $date);