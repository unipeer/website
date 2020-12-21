import { useEffect, useState, useRef} from 'react';
import axios from 'axios';

const FormPanDetails = ((props) => {

    const submitPanDetails = (e) => {
        e.preventDefault();

        const PanName = e.target.Name.value.toUpperCase();
        const PanNumber = e.target.Number.value.toUpperCase();
        
        const data = {
          "service":"Identity",
          "itemId": props.identityItemId,
          "task":"verification",
          "accessToken": props.accessTokenIdentity,
          "essentials":{
            "number": PanNumber,
            "name": PanName,
            "fuzzy":"true/false"
            }
        };
        
        const options = {
          headers: {
            'content-type': 'application/json',
          }
        };
    
        const url = "https://preproduction.signzy.tech/api/v2/snoops";
        axios.post(url, data, options)
          .then((response) => {
            console.log(response);
            isVerified(PanName, PanNumber, response.data.response.result.verified);
          }, (error) => {
            console.log(error);
            isVerified(PanName, PanNumber, false);
          });
    
    };

    const isVerified = (PanName, PanNumber, completeVerified) => {
         let extractNameVerified = false;
         let extractedNumberVerified = false;

         if(props.extractedName == PanName){
            extractNameVerified = true;
         }

         if(props.extractedNumber == PanNumber){
             extractedNumberVerified = true;
         }

         console.log("extracted name " + props.extractedName);
         console.log("entered Name " + PanName);
         console.log("extracted Number " + props.extractedNumber);
         console.log("entered Number " + PanNumber);
         console.log("Entered Entry Verified or not? " + completeVerified);

         console.log(extractNameVerified +" "+ extractedNumberVerified +" "+ completeVerified)
         props.isPanDetailsVerified(extractNameVerified, extractedNumberVerified, completeVerified)
    }

    return <div className="flex items-center h-screen w-full bg-teal-lighter">
    <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
      <h1 className="block w-full text-center text-grey-darkest mb-6">Join Waitlist</h1>
      <form className="mb-4 md:flex md:flex-wrap md:justify-between" onSubmit={submitPanDetails}>
        <div className="field-group  flex flex-col mb-4 md:w-full">
          <label className="uppercase font-bold text-lg text-grey-darkest mb-2" for="Name">Pan Name</label>
          <input className="border py-2 px-3 text-grey-darkest" type="text" name="Name" id="Name" />
        </div>
        <div className="field-group  flex flex-col  mb-6 md:w-full">
          <label className="uppercase font-bold text-lg text-grey-darkest mb-2" for="Number">Pan Number</label>
          <input className="border py-2 px-3 text-grey-darkest" type="text" name="Number" id="Number" />
        </div>
        <button className="block text-red uppercase text-lg p-4 rounded bg-grey mx-auto" type="submit">Submit</button>
      </form>
    </div>
  </div>

});

export default FormPanDetails;