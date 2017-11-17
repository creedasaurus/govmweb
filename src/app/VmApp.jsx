import React from 'react';
import './VmApp.scss';
// SOMEDAY
// import Editor from './Editor.jsx';
import Uploader from './Uploader/Uploader.jsx'

class VmApp extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
        <div id="vm-container">
          <h1>COOL</h1>
          <Uploader></Uploader>
        </div>
    );
  }
}

export default VmApp;