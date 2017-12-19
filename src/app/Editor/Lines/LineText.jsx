import React from 'react';

class LineNumber extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const lineText = this.props.line.split(' ');
    return (
      <div className="editor-line">
        <span>
          <span>asdf</span>
          <span>asdf</span>
          <span>asdf</span>
        </span>
      </div>
    )
  }
}

export default LineNumber;
