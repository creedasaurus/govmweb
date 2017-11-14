import React from 'react';
import Cursor from './Cursor/Cursor.jsx';
import './Editor.scss';

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cursor: {
        top: 38,
        left: 27
      }
    };

    this.onKeyPress = this.onKeyPress.bind(this);
  }

  onKeyPress(e) {
    console.log(e.key);
    let left = this.state.cursor.left;
    let top = this.state.cursor.top;
    
    switch (e.key) {
      case 'ArrowUp':
        top -= 19;
        break;
      case 'ArrowDown':
        top += 19;
        break;
      case 'ArrowLeft':
        left -= 9;
        break;
      case 'ArrowRight':
        left += 9;
        break;
    }

    if (left < 0) {
      left = 0;
    }
    if (top < 0) {
      top = 0;
    }

    this.setState({cursor: {top: top, left: left}});
  }

  render() {
    return (
        <div id="editor-container">
          <div id="margin-bar">
            <div className="margin-line">
              <div className="line-number">1</div>
            </div>
            <div className="margin-line">
              <div className="line-number">2</div>
            </div>
            <div className="margin-line">
              <div className="line-number">3</div>
            </div>
            <div className="margin-line">
              <div className="line-number">4</div>
            </div>
            <div className="margin-line">
              <div className="line-number">5</div>
            </div>
          </div>

          <Cursor left={this.state.cursor.left} top={this.state.cursor.top}/>

          <div id="code-editor">
            <div className="editor-line">
              <span>
                <span>asdf</span>
                <span>asdf</span>
                <span>asdf</span>
              </span>
            </div>
            <div className="editor-line">
              <span>
                <span>asdf</span>
                <span>asdf</span>
                <span>asdf</span>
              </span>
            </div>
            <div className="editor-line">
              <span>
                <span>asdf</span>
                <span>asdf</span>
                <span>asdf</span>
              </span>
            </div>
          </div>

          <textarea autoFocus name="main-input" id="input-follower" onKeyDown={this.onKeyPress}>
          </textarea>
        </div>
    )
  }
}

export default Editor;
