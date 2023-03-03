import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from "axios";

function AudioFileUpload() {
	const [selectedFile, setSelectedFile] = useState(null);
	const [isFilePicked, setIsFilePicked] = useState(false);
	
	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsFilePicked(true);
	};
	
	const handleSubmission = async() => {
		console.log(selectedFile.name);
		const filename = selectedFile.name;
//post request
		const response = await axios.post('http://localhost:3000/audio', {
			filename: filename
		});
		// console.log(response.data);
  };

  return (
    <div className="audio-file-upload">
      <h3>Upload Your Audio File</h3>
      <Form>
        <Form.Group controlId="formFile">
          <Form.Label>Choose a file to upload:</Form.Label>
          <Form.Control type="file" accept='audio/mpeg, audio/mp3, audio/wav, audio/ogg, audio/aac, audio/flac, audio/wma,' onChange={changeHandler} />
        </Form.Group>

        <Button variant="primary m-3" onClick={handleSubmission}>
          Upload
        </Button>
      </Form>
    </div>
  );
}

export default AudioFileUpload;



