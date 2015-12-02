<?php
/**
 * Created by PhpStorm.
 * User: lenovo
 * Date: 2015/11/18
 * Time: 14:38
 */
include_once('tools.php');
include_once('SQLSafe.php');
$SQLSafe=new SQLSafe();

$ID = $_POST['ID'];
$name = $_POST['name'];

function addEvaluation($ID, $name)
{
    $conn = tools::connectDatabase();
    try {
        mysqli_query($conn, "INSERT INTO EvaluationProjects(RP_ID,ProjectName) VALUES($ID,$name)");
    } catch (Exception $e) {
        echo $e->getMessage();
    }
    echo "success";
}

addEvaluation($ID, $name);