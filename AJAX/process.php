<?php

echo 'Processing...';

if(isset($_POST['name'])){
    $name = mysqli_real_escape_string($conn, $_POST['name']);