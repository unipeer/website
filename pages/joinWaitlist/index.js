import { withRouter } from 'next/router';
import { useEffect, useState, useRef} from 'react';
import Footer from "../../components/Footer";
import Nav from "../../components/nav";
import FormPanDetails from "./formPanDetails";
import FileUpload from './fileUpload';
import InsideBox from './insideBox';
import axios from 'axios';

const JoinWaitlist = withRouter((props) => {

  const [valid, setValid] = useState(0);
  const [patronId, setpatronId] = useState(0);
  const [accessTokenAuth, setaccessTokenAuth] = useState(0);
  const [accessTokenIdentity, setaccessTokenIdentity] = useState(0);
  const [identityItemId, setIdentityItemId] = useState(0);
  const [imageDirectLink, setImageDirectLink] = useState(0);
  const [videoDirectLink, setVideoDirectLink] = useState(0);
  const [extractedName, setextractedName] = useState(0);
  const [extractedNumber, setextractedNumber] = useState(0);
  const [endResult, setEndResult] = useState('Loading ... Please Wait');
   
  useEffect(() => {
    const data = {
      username: "unipeerexchange_test",
      password: "tz3H0eD1ux4RkHHXs7Ot"
    };
    const options = {
      headers: {
        'content-type': 'application/json'
      }
    };
    const url = "https://preproduction.signzy.tech/api/v2/patrons/login";
    axios.post(url, data, options)
      .then((response) => {
        console.log(response);
        // accessTokenAuth = response.data.id;
        // patronId = response.data.userId;

        setpatronId(response.data.userId);
        setaccessTokenAuth(response.data.id);

        setValid(1);
        
      }, (error) => {
        console.log(error);
        setValid(5);
      });

  }, []);

  useEffect(() => {
    if(identityItemId !=0 && accessTokenIdentity!=0)
    panExtraction();
  }, [identityItemId, accessTokenIdentity]);

  useEffect(() => {
    if(videoDirectLink != 0)
    videoVerification();
  }, [videoDirectLink]);
  
  const uploadedLinkImageVideo = (link) => {
    if(valid == 1) {
      setImageDirectLink(link);
      createIdentityObject(link);
      setValid(2);
    } else if(valid == 3) {
      setVideoDirectLink(link);
      setValid(4);
    }
  }

  const createIdentityObject = (ImageUrl) => {
    console.log(accessTokenAuth);
    const data = {
      "type": "individualPan",
      "email": props.router.query.title,
      "callbackUrl": `http://localhost:3000/joinWaitlist?title=${props.router.query.title}`,
      "images": [
        ImageUrl
      ]
    };
    
    const options = {
      headers: {
        'content-type': 'application/json',
        'Authorization': accessTokenAuth
      }
    };
    const url = `https://preproduction.signzy.tech/api/v2/patrons/${patronId}/identities`;
        
    axios.post(url , data, options)
      .then((response) => {
        console.log(response);
        setIdentityItemId(response.data.id)
        setaccessTokenIdentity(response.data.accessToken);
      }, (error) => {
        console.log(error);
        setValid(5);
      });

  }

  const panExtraction = () => {

    console.log(identityItemId);
    console.log(accessTokenIdentity);
    const data = {
      "service":"Identity",
      "itemId": identityItemId,
      "task":"autoRecognition",
      "accessToken": accessTokenIdentity,
      "essentials":{}
    };
    const options = {
      headers: {
        'content-type': 'application/json'
      }
    };
    const url = "https://preproduction.signzy.tech/api/v2/snoops";
    axios.post(url, data, options)
      .then((response) => {
        console.log("Pan Extraction!");
        console.log(response);
        setextractedName(response.data.response.result.name);
        setextractedNumber(response.data.response.result.number);
        setValid(2);
      }, (error) => {
        console.log(error);
        setValid(0);
      });

  }

  const isPanDetailsVerified = (_extractNameVerified,
                                _extractedNumberVerified,
                                _completeVerified) => {

    const extractNameVerified = _extractNameVerified;
    const extractedNumberVerified = _extractedNumberVerified;
    const completeVerified = _completeVerified;

    alert(" Name has been matched : " + extractNameVerified +
          " Pan Number has been matched : " + extractedNumberVerified);

    (completeVerified) ? (setValid(3)) : (setValid(5));
  }
  
  const videoVerification = () => {
    const data = {
      "task": "videoApiMode",
	    "essentials": {
		      "toMatchImage": imageDirectLink,
		      "videoUrl": videoDirectLink
	}
    };
    const options = {
      headers: {
        'content-type': 'application/json',
        'Authorization': accessTokenAuth
      }
    };
    const url = `https://preproduction.signzy.tech/api/v2/patrons/${patronId}/videoforensics`;
    axios.post(url, data, options)
      .then((response) => {
        console.log(response);
        (response.data.result.faceMatch.isMatch == "yes") ?
        setEndResult("Match is successful!") :
        setEndResult("Match Failed, Please contact Support");
      }, (error) => {
        console.log(error);
        setValid(5);
      });

  }

  return <div>
    <Nav />

    {valid == 0 &&
      <InsideBox>
        <div>Loading..</div>
      </InsideBox>
      
    }

    {valid == 1 &&
      <InsideBox>
        Upload the Pan Card Image in jpg format. <br/>
        <FileUpload uploadedLinkImageVideo={uploadedLinkImageVideo}/>
      </InsideBox>
    }

    {valid == 2 &&
      <FormPanDetails
       identityItemId = {identityItemId}
       accessTokenIdentity = {accessTokenIdentity}
       extractedName = {extractedName}
       extractedNumber = {extractedNumber}
       isPanDetailsVerified = {isPanDetailsVerified}
      />
    }

    {valid == 3 &&
        <InsideBox>
          Upload the recording of face of 10sec. <br/>
          <FileUpload uploadedLinkImageVideo={uploadedLinkImageVideo}/>
        </InsideBox>
       
    }

    {valid == 4 &&
       <InsideBox>
          {endResult}
       </InsideBox>    
    }

    {valid == 5 &&
        <InsideBox>
          Something is Gone Wrong. Error!
        </InsideBox>    
    }

    <br /><br /><br />
    <Footer />
  </div>
})

export default JoinWaitlist;