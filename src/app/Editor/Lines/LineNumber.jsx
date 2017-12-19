import React from 'react';

class LineNumber extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <div className="margin-line">
            <div className="line-number">{this.props.lineNum}</div>
        </div>    
    )
  }
}

export default LineNumber;
