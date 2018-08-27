/**
 * easyFetch Library
 * Library for making HTTP requests
 *
 * @version 2.0.0
 * @author  Damian Bauer
 * @license MIT
 *
 **/

 class EasyHTTP {

  //GET
 async get(url){
      const response = await fetch(url);
      const resData = await response.json();
      return resData
   }

   //POST
  async post(url, data){
     const response = await fetch(url, {
        method: 'POST',
        headers:{
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      }); 
      const resData = await response.json()
      return resData
   }

   //PUT
  async put(url, data){
    const response = await fetch(url, {
        method: 'PUT',
        headers:{
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const resData = await response.json();
      return resData;
   }

   //DELETE
  async delete(url){
     const response = await fetch(url, {
        method: 'DELETE',
        headers:{
          'Content-type': 'application/json'
        },
      });
      const resData = await 'Deleted';
      return resData;
   }
}