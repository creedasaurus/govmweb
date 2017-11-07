import React from 'react';

import './Editor.scss';

class Editor extends React.Component {
  constructor(props) {
    super(props);
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

          <div className="overlay">
            <div className="overlay-line">
              <div id="cursor-thing">
              </div>
            </div>
          </div>

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

          <textarea name="main-input" id="input-follower">
          </textarea>
        </div>
    )
  }
}

export default Editor;