/**
 * Static class to call all the external services through fetch method. 
 * 
 *  @class API
 */


import React from 'react';

class API{
    static getRandomUsersAPI = async (count:number) => {
        try {
          let response = await fetch(
            `https://randomuser.me/api/?results=${count}`
          );
          let json = await response.json();
       
          return json.results;
        } catch (error) {
           console.error(error);
        }
      };
    
    
      static login = async (data: {username:string, password:string}, onSuccess=(result:any)=>{}, onError=(result:any)=>{}) => {
        try {
          let response = await fetch(
            'https://dummyjson.com/auth/login', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body:JSON.stringify(data)
            }  
          );
    
          let json = await response.json();
    
          if (response.status == 200){
            console.log("json: ", json)
            onSuccess(json)
          }else{
            onError(json.message)
          }
          
        } catch (error) {
          onError(error)
          console.error(error);
        }
      };
    
      static tokenValidation = async (data: {token: string, id: number}, onSuccess=(result:any)=>{}, onError=(result:any)=>{}) => {
        try {
          let response = await fetch(
            `https://dummyjson.com/auth/users/${data.id}`, {
              method: 'GET',
              headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${data.token}`,  
              },
            }  
          );
    
          let json = await response.json();
          console.log(json)
          if (response.status == 200){
            onSuccess(json)
          }else{
            onError(json.message)
          }
          
        } catch (error) {
          onError(error)
          console.error(error);
        }
      };
    
    

}

export default API;