import React from 'react';
import './VmApp.scss';
import Editor from './Editor.jsx';

class VmApp extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
        <div id="vm-container">
          <h1>COOL</h1>
          <Editor/>
        </div>
    );
  }
}

export default VmApp;