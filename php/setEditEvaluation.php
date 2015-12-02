<?php
/**
 * Created by PhpStorm.
 * User: lenovo
 * Date: 2015/11/18
 * Time: 18:24
 */
include_once("tools.php");
include_once('SQLSafe.php');
$SQLSafe=new SQLSafe();


$data = $_POST['allInfo'];


function setEvaluation($data)
{
    $conn = tools::connectDatabase();
    try {
        for ($i = 0; $i < count($data); $i++) {
            $projectName = $data[$i]['projectName'];
            $projectID = $data[$i]['projectID'];
            mysqli_query($conn, "UPDATE EvaluationProjects SET ProjectName='$projectName' WHERE EP_ID='$projectID'");
        }
    } catch (Exception $e) {
        echo $e->getMessage();
    }
    echo "success";
}

setEvaluation($data);