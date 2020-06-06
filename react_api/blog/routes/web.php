<?php



$router->get('/ChartData', ['middleware'=>'auth','uses'=>'ChartDataController@onAllSelect']);
$router->get('/ClientReview', ['middleware'=>'auth','uses'=>'ClientReviewController@onAllSelect']);
$router->post('/ContactSend', ['middleware'=>'auth','uses'=>'ContactController@onContactSend']);

$router->get('/CourseHome', ['middleware'=>'auth','uses'=>'CourseController@onSelectFour']);
$router->get('/CourseAll', ['middleware'=>'auth','uses'=>'CourseController@onSelectAll']);
$router->post('/CourseDetails', ['middleware'=>'auth','uses'=>'CourseController@onSelectDetails']);


$router->get('/Footer', ['middleware'=>'auth','uses'=>'FooterController@onSelect']);

$router->get('/Information', ['middleware'=>'auth','uses'=>'InformationController@onSelect']);

$router->get('/Services', ['middleware'=>'auth','uses'=>'ServiceController@onSelect']);


$router->get('/ProjectThree', ['middleware'=>'auth','uses'=>'ProjectController@onSelectThree']);
$router->get('/ProjectAll', ['middleware'=>'auth','uses'=>'ProjectController@onSelectAll']);
$router->post('/ProjectDetails', ['middleware'=>'auth','uses'=>'ProjectController@onSelectDetails']);



$router->get('/VideoHome', ['middleware'=>'auth','uses'=>'HomeEtcController@onSelectVideo']);
$router->get('/TotalProjectClient', ['middleware'=>'auth','uses'=>'HomeEtcController@onSelectProjectClient']);
$router->get('/TechDesc', ['middleware'=>'auth','uses'=>'HomeEtcController@onSelectTechDesc']);

$router->get('/HomeTopTitle', ['middleware'=>'auth','uses'=>'HomeEtcController@onSelectHomeTitle']);