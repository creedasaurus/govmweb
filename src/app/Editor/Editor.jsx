import React from 'react';
// import Cursor from './Cursor/Cursor.jsx';
import LineNumber from './Lines/LineNumber.jsx';
import './Editor.scss';

class Editor extends React.Component         {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // console.log(this.props.editorText);
    const nums = Array.from(new Array(this.props.editorText.split('\n').length),(val,index)=>index+1);
    let lines = [];
    if (this.props.editorText !== "") {
      lines = this.props.editorText.split('\n').map((line) => {
        // const words = line.split(' ').map((word) => {
        //   return <span>{word} </span>
        // });
        let cat = "wow there is  \t   a cat";
        // console.log(String.raw`${cat}`);
        return (
          <div className="editor-line">
            <span>
              <pre>{cat}</pre>
            </span>
          </div>
        )
      });
    }

    const lineNums = nums.map((num) => {
      return <LineNumber key={num.toString()} lineNum={num}></LineNumber>;
    });

    return (
        <div id="editor-container">
          <div id="margin-bar">
            {lineNums}
          </div>
          <div id="code-editor">
            {lines}
          </div>

        </div>
    )
  }
}

export default Editor;
