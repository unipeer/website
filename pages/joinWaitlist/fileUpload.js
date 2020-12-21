import axios from 'axios';

const FileUpload = ((props) => {

    const fileupload = (e) => {
        var file = e.target.files[0];
    
        let formdata = new FormData();
        formdata.append('file', file);
        formdata.append('ttl', '2 hrs');
    
        const options = {
          headers: {
            'content-type': 'application/json'
          }
        };
    
        const url = "https://preproduction-persist.signzy.tech/api/files/upload";
        axios.post(url, formdata, options)
          .then((response) => {
            console.log(response.data.file.directURL);
            props.uploadedLinkImageVideo(response.data.file.directURL);
            alert("Upload is successful!");
          }, (error) => {
            console.log(error);
            // setValid(false);
          });
      }

    return <div>
        <input type="file" onChange={(e) => fileupload(e)}/>
    </div>

});

export default FileUpload;