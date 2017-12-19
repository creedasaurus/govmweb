import React from 'react';
import './VmApp.scss';
import Editor from './Editor/Editor.jsx';
import Uploader from './Uploader/Uploader.jsx'

class VmApp extends React.Component {
  constructor(props) {
    super(props);
    this.setEditorText = this.setEditorText.bind(this);
    this.state = {editorText: ''};
  }

  setEditorText(text) {
    this.setState({editorText: text});
  }

  render() {
    return (
        <div id="vm-container">
          <h1>COOL</h1>
          <Uploader setEditorText={this.setEditorText}></Uploader>
          <Editor editorText={this.state.editorText}></Editor>
        </div>
    );
  }
}

export default VmApp;
