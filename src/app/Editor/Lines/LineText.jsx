import React from 'react';

class LineText extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const lineText = this.props.line.split('')
          .map((c, indx) => {
            if (c === ' ') {
              return <span key={indx.toString()}>&nbsp;</span>;
            }
            return <span key={indx.toString()}>{c}</span>;
          });


    return (
      <div className="editor-line">
        <span>
          {lineText}
        </span>
      </div>
    )
  }
}

export default LineText;
