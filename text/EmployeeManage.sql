-- phpMyAdmin SQL Dump
-- version 4.0.4.1
-- http://www.phpmyadmin.net
--
-- 主机: 127.0.0.1
-- 生成日期: 2015 �?11 �?16 �?01:12
-- 服务器版本: 5.6.11
-- PHP 版本: 5.5.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `EmployeeManage`
--
CREATE DATABASE IF NOT EXISTS `EmployeeManage` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `EmployeeManage`;

-- --------------------------------------------------------

--
-- 表的结构 `Attendances`
--

CREATE TABLE IF NOT EXISTS `Attendances` (
  `EmployeeID` int(11) NOT NULL,
  `StatusID` int(11) NOT NULL,
  `Date` date NOT NULL,
  PRIMARY KEY (`EmployeeID`,`Date`),
  KEY `StatusID` (`StatusID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `Attendances`
--

INSERT INTO `Attendances` (`EmployeeID`, `StatusID`, `Date`) VALUES
(53130301, 1, '2015-11-01'),
(53130301, 1, '2015-11-02'),
(53130301, 1, '2015-11-03'),
(53130301, 1, '2015-11-04'),
(53130301, 1, '2015-11-05'),
(53130301, 1, '2015-11-06'),
(53130301, 1, '2015-11-07'),
(53130301, 1, '2015-11-08'),
(53130301, 1, '2015-11-09'),
(53130301, 1, '2015-11-10'),
(53130301, 1, '2015-11-11'),
(53130301, 1, '2015-11-12'),
(53130301, 1, '2015-11-13'),
(53130301, 1, '2015-11-14'),
(53130301, 1, '2015-11-15'),
(53130302, 1, '2015-11-01'),
(53130302, 1, '2015-11-02'),
(53130302, 1, '2015-11-03'),
(53130302, 1, '2015-11-04'),
(53130302, 1, '2015-11-05'),
(53130302, 1, '2015-11-06'),
(53130302, 1, '2015-11-07'),
(53130302, 1, '2015-11-08'),
(53130302, 1, '2015-11-09'),
(53130302, 1, '2015-11-10'),
(53130302, 1, '2015-11-11'),
(53130302, 1, '2015-11-12'),
(53130302, 1, '2015-11-13'),
(53130302, 1, '2015-11-14'),
(53130302, 1, '2015-11-15'),
(53130303, 1, '2015-11-01'),
(53130303, 1, '2015-11-02'),
(53130303, 1, '2015-11-03'),
(53130303, 1, '2015-11-04'),
(53130303, 1, '2015-11-05'),
(53130303, 1, '2015-11-06'),
(53130303, 1, '2015-11-07'),
(53130303, 1, '2015-11-08'),
(53130303, 1, '2015-11-09'),
(53130303, 1, '2015-11-10'),
(53130303, 1, '2015-11-11'),
(53130303, 1, '2015-11-12'),
(53130303, 1, '2015-11-13'),
(53130303, 1, '2015-11-14'),
(53130303, 1, '2015-11-15'),
(53130304, 1, '2015-11-01'),
(53130304, 1, '2015-11-02'),
(53130304, 1, '2015-11-03'),
(53130304, 1, '2015-11-04'),
(53130304, 1, '2015-11-05'),
(53130304, 1, '2015-11-06'),
(53130304, 1, '2015-11-07'),
(53130304, 1, '2015-11-08'),
(53130304, 1, '2015-11-09'),
(53130304, 1, '2015-11-10'),
(53130304, 1, '2015-11-11'),
(53130304, 1, '2015-11-12'),
(53130304, 1, '2015-11-13'),
(53130304, 1, '2015-11-14'),
(53130304, 1, '2015-11-15'),
(53130305, 1, '2015-11-01'),
(53130305, 1, '2015-11-02'),
(53130305, 1, '2015-11-03'),
(53130305, 1, '2015-11-04'),
(53130305, 1, '2015-11-05'),
(53130305, 1, '2015-11-06'),
(53130305, 1, '2015-11-07'),
(53130305, 1, '2015-11-08'),
(53130305, 1, '2015-11-09'),
(53130305, 1, '2015-11-10'),
(53130305, 1, '2015-11-11'),
(53130305, 1, '2015-11-12'),
(53130305, 1, '2015-11-13'),
(53130305, 1, '2015-11-14'),
(53130305, 1, '2015-11-15'),
(53130306, 1, '2015-11-01'),
(53130306, 1, '2015-11-02'),
(53130306, 1, '2015-11-03'),
(53130306, 1, '2015-11-04'),
(53130306, 1, '2015-11-05'),
(53130306, 1, '2015-11-06'),
(53130306, 1, '2015-11-07'),
(53130306, 1, '2015-11-08'),
(53130306, 1, '2015-11-09'),
(53130306, 1, '2015-11-10'),
(53130306, 1, '2015-11-11'),
(53130306, 1, '2015-11-12'),
(53130306, 1, '2015-11-13'),
(53130306, 1, '2015-11-14'),
(53130306, 1, '2015-11-15'),
(53130307, 1, '2015-11-01'),
(53130307, 1, '2015-11-02'),
(53130307, 1, '2015-11-03'),
(53130307, 1, '2015-11-04'),
(53130307, 1, '2015-11-05'),
(53130307, 1, '2015-11-06'),
(53130307, 1, '2015-11-07'),
(53130307, 1, '2015-11-08'),
(53130307, 1, '2015-11-09'),
(53130307, 1, '2015-11-10'),
(53130307, 1, '2015-11-11'),
(53130307, 1, '2015-11-12'),
(53130307, 1, '2015-11-13'),
(53130307, 1, '2015-11-14'),
(53130307, 1, '2015-11-15');

-- --------------------------------------------------------

--
-- 表的结构 `AttendanceStatus`
--

CREATE TABLE IF NOT EXISTS `AttendanceStatus` (
  `StatusID` int(11) NOT NULL,
  `Status` varchar(50) NOT NULL,
  PRIMARY KEY (`StatusID`),
  UNIQUE KEY `Status` (`Status`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `AttendanceStatus`
--

INSERT INTO `AttendanceStatus` (`StatusID`, `Status`) VALUES
(1, '出勤'),
(2, '未出勤');

-- --------------------------------------------------------

--
-- 表的结构 `Degrees`
--

CREATE TABLE IF NOT EXISTS `Degrees` (
  `DegreeID` int(11) NOT NULL,
  `DegreeName` varchar(20) NOT NULL,
  PRIMARY KEY (`DegreeID`),
  UNIQUE KEY `DegreeName` (`DegreeName`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `Degrees`
--

INSERT INTO `Degrees` (`DegreeID`, `DegreeName`) VALUES
(3, '博士'),
(1, '学士'),
(2, '硕士');

-- --------------------------------------------------------

--
-- 表的结构 `Departments`
--

CREATE TABLE IF NOT EXISTS `Departments` (
  `DepartmentID` int(11) NOT NULL,
  `DepartmentName` varchar(50) NOT NULL,
  `ManagerID` int(11) DEFAULT NULL,
  PRIMARY KEY (`DepartmentID`),
  UNIQUE KEY `DepartmentName` (`DepartmentName`),
  KEY `ManagerID` (`ManagerID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `Departments`
--

INSERT INTO `Departments` (`DepartmentID`, `DepartmentName`, `ManagerID`) VALUES
(1, '人事部门', NULL),
(2, '销售部门', NULL),
(3, '技术部门', NULL),
(4, '后勤部门', NULL),
(5, '总经理部门', NULL);

-- --------------------------------------------------------

--
-- 表的结构 `Employees`
--

CREATE TABLE IF NOT EXISTS `Employees` (
  `EmployeeID` int(11) NOT NULL,
  `EmployeeName` varchar(20) NOT NULL,
  `Sex` char(1) NOT NULL,
  `BirthDay` date NOT NULL,
  `Phone` varchar(20) NOT NULL,
  `DegreeID` int(11) NOT NULL,
  `HireDate` date NOT NULL,
  `EmployeeTypeID` int(11) NOT NULL,
  `DepartmentID` int(11) NOT NULL,
  `Title` varchar(50) NOT NULL,
  `Salary` int(11) NOT NULL,
  `ManagerID` int(11) DEFAULT NULL,
  PRIMARY KEY (`EmployeeID`),
  KEY `DegreeID` (`DegreeID`),
  KEY `ManagerID` (`ManagerID`),
  KEY `EmployeeTypeID` (`EmployeeTypeID`),
  KEY `DepartmentID` (`DepartmentID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `Employees`
--

INSERT INTO `Employees` (`EmployeeID`, `EmployeeName`, `Sex`, `BirthDay`, `Phone`, `DegreeID`, `HireDate`, `EmployeeTypeID`, `DepartmentID`, `Title`, `Salary`, `ManagerID`) VALUES
(53130301, '马云', '男', '1974-12-15', '18844548962', 1, '2001-02-15', 1, 5, '董事长', 10000, NULL),
(53130302, '马化腾', '男', '1978-11-15', '18844548963', 2, '2005-07-15', 1, 3, '总经理', 9000, NULL),
(53130303, '李彦宏', '男', '1979-09-15', '18844548964', 3, '2007-08-15', 1, 1, '副总经理', 11000, NULL),
(53130304, '马克扎克伯格', '男', '1980-09-15', '18888888888', 2, '2006-05-15', 1, 3, 'CTO', 9500, NULL),
(53130305, '比尔盖茨', '男', '1996-10-15', '19632451964', 2, '2009-08-15', 1, 5, '雇员', 6000, NULL),
(53130306, '拉里佩奇', '男', '1995-07-15', '18844548762', 1, '2008-11-15', 1, 2, '销售经理', 9000, NULL),
(53130307, '张亚勤', '男', '1992-06-15', '18823698546', 3, '2005-10-15', 1, 4, 'HR', 9000, NULL);

-- ------------------------------------------------
--
-- 表的结构 `EmployeeTraining`
--

CREATE TABLE IF NOT EXISTS `EmployeeTraining` (
  `TrainingID` int(11) NOT NULL,
  `EmployeeID` int(11) NOT NULL,
  PRIMARY KEY (`TrainingID`,`EmployeeID`),
  KEY `EmployeeID` (`EmployeeID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `EmployeeTraining`
--

INSERT INTO `EmployeeTraining` (`TrainingID`, `EmployeeID`) VALUES
(1, 53130301),
(3, 53130301),
(1, 53130302),
(3, 53130302),
(1, 53130303),
(3, 53130303),
(2, 53130304),
(3, 53130304),
(2, 53130305),
(3, 53130305),
(2, 53130306),
(3, 53130306),
(2, 53130307),
(3, 53130307);

-- --------------------------------------------------------

--
-- 表的结构 `EmployeeType`
--

CREATE TABLE IF NOT EXISTS `EmployeeType` (
  `EmployeeTypeID` int(11) NOT NULL,
  `EmployeeTypeName` varchar(50) NOT NULL,
  PRIMARY KEY (`EmployeeTypeID`),
  UNIQUE KEY `EmployeeTypeName` (`EmployeeTypeName`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `EmployeeType`
--

INSERT INTO `EmployeeType` (`EmployeeTypeID`, `EmployeeTypeName`) VALUES
(2, '实习员工'),
(1, '正式员工');

-- --------------------------------------------------------

--
-- 表的结构 `EvaluationProjects`
--

CREATE TABLE IF NOT EXISTS `EvaluationProjects` (
  `EP_ID` int(11) NOT NULL,
  `ProjectName` varchar(20) NOT NULL,
  PRIMARY KEY (`EP_ID`),
  UNIQUE KEY `ProjectName` (`ProjectName`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `EvaluationProjects`
--

INSERT INTO `EvaluationProjects` (`EP_ID`, `ProjectName`) VALUES
(2, '业绩指标'),
(1, '出勤天数');

-- --------------------------------------------------------

--
-- 表的结构 `Evaluations`
--

CREATE TABLE IF NOT EXISTS `Evaluations` (
  `EvaluationID` int(11) NOT NULL,
  `EmployeeID` int(11) NOT NULL,
  `EvaluationProjectID` int(11) NOT NULL,
  `Date` date NOT NULL,
  `Result` varchar(2) NOT NULL,
  PRIMARY KEY (`EvaluationID`),
  KEY `EmployeeID` (`EmployeeID`),
  KEY `EvaluationProjectID` (`EvaluationProjectID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `Evaluations`
--

INSERT INTO `Evaluations` (`EvaluationID`, `EmployeeID`, `EvaluationProjectID`, `Date`, `Result`) VALUES
(1, 53130301, 1, '2015-11-15', '优'),
(2, 53130301, 2, '2015-11-15', '良'),
(3, 53130302, 1, '2015-11-15', '优'),
(4, 53130302, 2, '2015-11-15', '良'),
(5, 53130303, 1, '2015-11-15', '优'),
(6, 53130303, 2, '2015-11-15', '优'),
(7, 53130304, 1, '2015-11-15', '良'),
(8, 53130304, 2, '2015-11-15', '中'),
(9, 53130305, 1, '2015-11-15', '优'),
(10, 53130305, 2, '2015-11-15', '优'),
(11, 53130306, 1, '2015-11-15', '优'),
(12, 53130306, 2, '2015-11-15', '良'),
(13, 53130307, 1, '2015-11-15', '优'),
(14, 53130307, 2, '2015-11-15', '良');

-- --------------------------------------------------------

--
-- 表的结构 `RewardsAndPunishments`
--

CREATE TABLE IF NOT EXISTS `RewardsAndPunishments` (
  `RP_ID` int(11) NOT NULL,
  `EmployeeID` int(11) NOT NULL,
  `Type` char(2) NOT NULL,
  `Date` date NOT NULL,
  PRIMARY KEY (`RP_ID`),
  KEY `EmployeeID` (`EmployeeID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `RewardsAndPunishments`
--

INSERT INTO `RewardsAndPunishments` (`RP_ID`, `EmployeeID`, `Type`, `Date`) VALUES
(1, 53130301, '奖', '2'),
(2, 53130302, '奖', '2'),
(3, 53130303, '奖', '2'),
(4, 53130304, '奖', '2'),
(5, 53130305, '奖', '2'),
(6, 53130306, '奖', '2'),
(7, 53130307, '奖', '2');

-- --------------------------------------------------------

--
-- 表的结构 `Roles`
--

CREATE TABLE IF NOT EXISTS `Roles` (
  `RoleID` int(11) NOT NULL,
  `RoleName` varchar(50) NOT NULL,
  `Auth_Authority` int(11) NOT NULL DEFAULT '0',
  `Auth_Info` int(11) NOT NULL DEFAULT '0',
  `Auth_Job` int(11) NOT NULL DEFAULT '0',
  `Auth_Attendance` int(11) NOT NULL DEFAULT '0',
  `Auth_Training` int(11) NOT NULL DEFAULT '0',
  `Auth_Evaluation` int(11) NOT NULL DEFAULT '0',
  `Auth_RP` int(11) NOT NULL DEFAULT '0',
  `Auth_Role` int(11) NOT NULL DEFAULT '0',
  `Auth_Encrypt` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`RoleID`),
  UNIQUE KEY `RoleName` (`RoleName`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `Roles`
--

INSERT INTO `Roles` (`RoleID`, `RoleName`, `Auth_Authority`, `Auth_Info`, `Auth_Job`, `Auth_Attendance`, `Auth_Training`, `Auth_Evaluation`, `Auth_RP`, `Auth_Role`, `Auth_Encrypt`) VALUES
(1, '权限管理', 1, 0, 0, 0, 0, 0, 0, 0, 0),
(2, '员工管理', 0, 0, 1, 0, 0, 0, 0, 0, 0),
(3, '考勤管理', 0, 0, 0, 1, 0, 0, 0, 0, 0),
(4, '培训管理', 0, 0, 1, 0, 0, 0, 0, 0, 0),
(5, '考核管理', 0, 0, 0, 0, 0, 1, 0, 0, 0),
(6, '奖惩管理', 0, 0, 0, 0, 0, 0, 1, 0, 0),
(7, '角色管理', 0, 0, 0, 0, 0, 0, 0, 1, 0);

-- --------------------------------------------------------

--
-- 表的结构 `Training`
--

CREATE TABLE IF NOT EXISTS `Training` (
  `TrainingID` int(11) NOT NULL,
  `BeginDate` date NOT NULL,
  `EndDate` date NOT NULL,
  `TrainingType` varchar(20) NOT NULL,
  `Description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`TrainingID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `Training`
--

INSERT INTO `Training` (`TrainingID`, `BeginDate`, `EndDate`, `TrainingType`, `Description`) VALUES
(1, '2015-11-02', '2015-11-05', '技能培训', '所有员工的技能培训，为期4天'),
(2, '2015-11-10', '2015-11-12', '素质培训', '所有员工的素质培训，为期3天'),
(3, '2015-11-18', '2015-11-19', '年会', '年会');

-- --------------------------------------------------------

--
-- 表的结构 `UserRole`
--

CREATE TABLE IF NOT EXISTS `UserRole` (
  `EmployeeID` int(11) NOT NULL,
  `RoleID` int(11) NOT NULL,
  PRIMARY KEY (`EmployeeID`,`RoleID`),
  KEY `RoleID` (`RoleID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `UserRole`
--

INSERT INTO `UserRole` (`EmployeeID`, `RoleID`) VALUES
(53130301, 1),
(53130302, 2),
(53130303, 3),
(53130304, 4),
(53130305, 5),
(53130306, 6),
(53130307, 7);

-- --------------------------------------------------------

--
-- 表的结构 `Users`
--

CREATE TABLE IF NOT EXISTS `Users` (
  `EmployeeID` int(11) NOT NULL,
  `Password` varchar(50) NOT NULL,
  PRIMARY KEY (`EmployeeID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `Users`
--

INSERT INTO `Users` (`EmployeeID`, `Password`) VALUES
(53130301, '53130301'),
(53130302, '53130302'),
(53130303, '53130303'),
(53130304, '53130304'),
(53130305, '53130305'),
(53130306, '53130306'),
(53130307, '53130307');

--
-- 限制导出的表
--

--
-- 限制表 `Attendances`
--
ALTER TABLE `Attendances`
  ADD CONSTRAINT `attendances_ibfk_1` FOREIGN KEY (`StatusID`) REFERENCES `attendancestatus` (`StatusID`);

--
-- 限制表 `Departments`
--
ALTER TABLE `Departments`
  ADD CONSTRAINT `departments_ibfk_1` FOREIGN KEY (`ManagerID`) REFERENCES `employees` (`EmployeeID`);

--
-- 限制表 `Employees`
--
ALTER TABLE `Employees`
  ADD CONSTRAINT `employees_ibfk_1` FOREIGN KEY (`DegreeID`) REFERENCES `degrees` (`DegreeID`),
  ADD CONSTRAINT `employees_ibfk_2` FOREIGN KEY (`ManagerID`) REFERENCES `employees` (`EmployeeID`),
  ADD CONSTRAINT `employees_ibfk_3` FOREIGN KEY (`EmployeeTypeID`) REFERENCES `employeetype` (`EmployeeTypeID`),
  ADD CONSTRAINT `employees_ibfk_4` FOREIGN KEY (`DepartmentID`) REFERENCES `departments` (`DepartmentID`);

--
-- 限制表 `EmployeeTraining`
--
ALTER TABLE `EmployeeTraining`
  ADD CONSTRAINT `employeetraining_ibfk_1` FOREIGN KEY (`TrainingID`) REFERENCES `training` (`TrainingID`),
  ADD CONSTRAINT `employeetraining_ibfk_2` FOREIGN KEY (`EmployeeID`) REFERENCES `employees` (`EmployeeID`);

--
-- 限制表 `Evaluations`
--
ALTER TABLE `Evaluations`
  ADD CONSTRAINT `evaluations_ibfk_1` FOREIGN KEY (`EmployeeID`) REFERENCES `employees` (`EmployeeID`),
  ADD CONSTRAINT `evaluations_ibfk_2` FOREIGN KEY (`EvaluationProjectID`) REFERENCES `evaluationprojects` (`EP_ID`);

--
-- 限制表 `RewardsAndPunishments`
--
ALTER TABLE `RewardsAndPunishments`
  ADD CONSTRAINT `rewardsandpunishments_ibfk_1` FOREIGN KEY (`EmployeeID`) REFERENCES `employees` (`EmployeeID`);

--
-- 限制表 `UserRole`
--
ALTER TABLE `UserRole`
  ADD CONSTRAINT `userrole_ibfk_1` FOREIGN KEY (`EmployeeID`) REFERENCES `employees` (`EmployeeID`),
  ADD CONSTRAINT `userrole_ibfk_2` FOREIGN KEY (`RoleID`) REFERENCES `roles` (`RoleID`);

--
-- 限制表 `Users`
--
ALTER TABLE `Users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`EmployeeID`) REFERENCES `employees` (`EmployeeID`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
