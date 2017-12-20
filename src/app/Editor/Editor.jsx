import React from 'react';
// import Cursor from './Cursor/Cursor.jsx';
import LineNumber from './Lines/LineNumber.jsx';
import LineText from './Lines/LineText.jsx';
import './Editor.scss';

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const nums = Array.from(new Array(this.props.editorText.split('\n').length),(val,index)=>index+1);

    return (
        <div id="editor-container">
          <div id="margin-bar">
            {
              nums.map((num) => {
                return (
                  <LineNumber key={num.toString()} lineNum={num}></LineNumber>
                );
              })
            }
          </div>
          <div id="code-editor">
            {
              this.props.editorText.split(/\n/).map((line, indx) => {
                  return (
                  <LineText key={indx.toString()} line={line}></LineText>
                );
              })
            }
          </div>
        </div>
    )
  }
}

export default Editor;
