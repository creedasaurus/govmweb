import React from 'react';
import Dropzone from 'react-dropzone';

class Uploader extends React.Component {
    render() {
        return (
            <Dropzone accept="text/plain">
                {({isDragActive, isDragReject, acceptedFiles, rejectedFiles}) => {
                    if (isDragActive) {
                        return "This file is authorized";
                    }
                    if (isDragReject) {
                        return "This file is not authorized";
                    }
                    return acceptedFiles.length || rejectedFiles.length
                        ? `Accepted ${acceptedFiles.length}, rejected ${rejectedFiles.length} files`
                        : "Try dropping some files.";
                }}
            </Dropzone>
        )
    }
}

export default Uploader;