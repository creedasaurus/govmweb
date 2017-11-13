import React from 'react';
import './Cursor.scss';

class Cursor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {left: props.left, top: props.top};
        console.log(props);
    }

  componentWillReceiveProps(nextProps) {
    this.setState({
      left: nextProps.left,
      top: nextProps.top
    });
  }

    render() {
        return (
            <div className="overlay">
                <div className="overlay-line">
                    <div id="cursor-thing" style={this.state}>
                    </div>
                </div>
            </div>
        )
    }

}

export default Cursor;