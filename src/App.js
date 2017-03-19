import React, { Component } from 'react';
import './App.css';
import Clarifai from 'clarifai';
import picture from './frame75.jpg'
import base64 from 'file-base64';
import {clientId, clientSecret} from './clarifaiID.js';




// function to encode file data to base64 encoded string
// function base64_encode(file) {
//     // read binary data
//     console.log(file)
//     var bitmap = fs.readFileSync(file, 'utf8')
//     // convert binary data to base64 encoded string
//     return new Buffer(bitmap).toString('base64');
// }
// convert image to base64 encoded string
//var base64str = base64_encode('./frame75.jpg');

var b64str = base64.encode(picture, function(err, base64String) {
    return base64String;
});


  // instantiate a new Clarifai app passing in your clientId and clientSecret
  var citool = new Clarifai.App(
         clientId,
         clientSecret
      );

      // predict the contents of an image by passing in a url
      citool.models.predict(Clarifai.GENERAL_MODEL, {base64: b64str}).then(
        function(response) {
          console.log(response);
        },
        function(err) {
          console.error(err);
        }
      );

class App extends Component {
  render() {
    return (
      <div className="App">
         <div>
          <h2>Clarifai Demo</h2>
         </div>
        <div>
         <img src={picture} className="test-image" alt="logo" />
        <p className="App-intro">
          Open console for data.
        </p>
        </div>
      </div>
    );
  }
}

export default App;
