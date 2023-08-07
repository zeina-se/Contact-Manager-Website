<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Contact;

class ContactController extends Controller
{
    
    function addOrUpdateContact(Request $request, $id = "add") {
        if ($id == "add") {
            $Contact = new Contact;            
        } else {
           
            $Contact = Contact::find($id);
            if (!$Contact) {
                return  response()->json(['error' => "No Contact Found"]);
            }           
            }
        
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'phone' => 'required',
            'latitude' => 'required',
            'longitude' => 'required',
        ]);
        
        if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()], 422); 
        }

        
        $Contact->id = $request->id ? $request->id : $Contact->id;
        $Contact->name = $request->name ? $request->name : $Contact->name;
        $Contact->phone = $request->phone ? $request->phone : $Contact->phone;
        $Contact->latitude = $request->latitude ? $request->latitude : $Contact->latitude;
        $Contact->longitude = $request->longitude ? $request->longitude : $Contact->longitude;
        $Contact->save();
    
       
        return response()->json(["Contacts" => $Contact]);
    }

    function getContacts($id = null){
        if($id){
            $contacts = Contact::find($id);
        }else{
            $contacts = Contact::all();
        }
        
        return response()->json(["contacts" => $contacts]);
    
    }

    function deleteContact($id){
        
        $contact = Contact::find($id);
        if (!$contact) {
            return  response()->json(['error' => "No contact Found"]);
        }   
      
        // delete from db
        $contact = Contact::find($id)->delete();
        return  response()->json(['error' => "contact Deleted"]);
    } 
}
