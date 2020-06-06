<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\FooterTableModel;

class FooterController extends Controller
{
   function onSelect(){
    $result=FooterTableModel::all();
    return $result;

   }
}
