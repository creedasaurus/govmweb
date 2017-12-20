import React from 'react';
import './Uploader.scss';

class Uploader extends React.Component {
    constructor(props) {
        super(props);
        this.handleUploadFile = this.handleUploadFile.bind(this);
    }

    handleUploadFile(e) {
        let reader = new FileReader();
        reader.onloadend = () => {
            this.props.setEditorText(reader.result);
        }
        reader.readAsText(e.target.files[0]);
    }

    render() {
        return (
            <div id="assembly-uploader">
                <input type="file"
                id="fileUploader"
                name="file"
                onChange={this.handleUploadFile}/>
            </div>
        )
    }
}

export default Uploader;
