<?php

$response = array(
    'status' => '0',
    'errors'=> array(
        'email'=>'email already exists',
        'street'=>'street has incorrect value',
        'phone'=>'phone has incorrect value',
    ),
);

echo json_encode($response);