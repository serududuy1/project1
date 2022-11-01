-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 01, 2022 at 10:39 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `project1`
--

-- --------------------------------------------------------

--
-- Table structure for table `harta`
--

CREATE TABLE `harta` (
  `id` int(11) NOT NULL,
  `tgl` varchar(20) DEFAULT NULL,
  `saldo` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `harta`
--

INSERT INTO `harta` (`id`, `tgl`, `saldo`) VALUES
(1, '01-11-2022', '278000');

-- --------------------------------------------------------

--
-- Table structure for table `riwayat`
--

CREATE TABLE `riwayat` (
  `id` int(11) NOT NULL,
  `tgl` varchar(20) DEFAULT NULL,
  `nominal` varchar(255) DEFAULT NULL,
  `provider` varchar(255) DEFAULT NULL,
  `nomerhp` varchar(255) DEFAULT NULL,
  `saldoawal` varchar(255) NOT NULL,
  `saldoakhir` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `riwayat`
--

INSERT INTO `riwayat` (`id`, `tgl`, `nominal`, `provider`, `nomerhp`, `saldoawal`, `saldoakhir`) VALUES
(1, '25-12-2022', '1080000', 'TOPUP', 'TOPUP', '1000000', 'undefined'),
(2, '25-12-2022', '80000', 'TOPUP', 'TOPUP', '1000000', '1080000'),
(3, '25-12-2022', '80000', 'TOPUP', 'TOPUP', '1000000', '1080000'),
(4, '25-12-2022', '80000', 'TOPUP', 'TOPUP', '1000000', '1080000'),
(5, '25-12-2022', '200000', 'TOPUP', 'TOPUP', '1000000', '1200000'),
(6, '25-12-2022', '200000', 'TOPUP', 'TOPUP', '100000', '300000'),
(7, '25-12-2022', '2000', 'as', '0832749823743', '20000099', '19998099'),
(8, 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'NaN'),
(9, '25-12-2022', '50000', 'TOPUP', 'TOPUP', '190000', '240000'),
(10, '10-10-2022', '100000', 'TOPUP', 'TOPUP', '190000', '290000'),
(11, '21-12-2022', '1000', 'TOPUP', 'TOPUP', '290000', '291000'),
(12, '22-12-2022', '100000', 'TOPUP', 'TOPUP', '291000', '391000'),
(13, '25-22-2012', '80000', 'TOPUP', 'TOPUP', '391000', '471000'),
(14, '25-11-2012', '100', 'TOPUP', 'TOPUP', '471000', '471100'),
(15, '25-11-2023', '600000', 'TOPUP', 'TOPUP', '471100', '1071100'),
(16, '25-23-1020', '100', 'TOPUP', 'TOPUP', '1071100', '1071200'),
(17, '22-12-2012', '50000', 'mentari', '08123945345345', '1071200', '1021200'),
(18, '22-12-2012', '50000', 'mentari', '08123945345345', '1071200', '1021200'),
(19, '12-12-2012', '100000', 'simpati', '082237435345', '1071200', '971200'),
(20, 'asdasd', '50000', 'asdasd', '0812311231421', '1071200', '1021200'),
(21, '12-12-2022', '', 'simpati', '081237637424', '1071200', 'NaN'),
(22, '12-12-2022', '', 'simpati', '081237637424', '1071200', 'NaN'),
(23, '12-12-2022', '', 'simpati', '081237637424', '1071200', 'NaN'),
(24, 'asdasd', '100000', 'asdasd', 'asdasdasdasd', 'NaN', 'NaN'),
(25, '25-12-2012', '', 'mentari', '0826765435', '98000', 'NaN'),
(26, '25-12-2012', '', 'mentari', '0826765435', '98000', 'NaN'),
(27, '25-12-2012', '50000', 'mentari', '0826765435', '98000', '48000'),
(28, '2022-11-01', '', 'asdasdas', '07825789623978', '48000', 'NaN'),
(29, '', '200000', 'TOPUP', 'TOPUP', '-2000', '198000'),
(30, '2022-11-01', '100000', 'simpati', '0836743267423', '198000', '98000'),
(31, '2022-11-08', '50000', 'mentari', '03786278657235', '98000', '48000'),
(32, '25-12-2021', '20000', 'TOPUP', 'TOPUP', '48000', '68000'),
(33, '12-12-12', '100000', 'TOPUP', 'TOPUP', '68000', '168000'),
(34, '1201202922', '100000', 'TOPUP', 'TOPUP', '178000', '278000'),
(35, '1201202922', '100000', 'TOPUP', 'TOPUP', '178000', '278000'),
(36, '1201202922', '100000', 'TOPUP', 'TOPUP', '178000', '278000'),
(37, '05-1101999', '100000', 'TOPUP', 'TOPUP', '178000', '278000');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `harta`
--
ALTER TABLE `harta`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `riwayat`
--
ALTER TABLE `riwayat`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `harta`
--
ALTER TABLE `harta`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `riwayat`
--
ALTER TABLE `riwayat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
