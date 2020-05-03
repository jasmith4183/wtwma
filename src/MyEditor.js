import React, { Component } from 'react'
import {Editor, EditorState, RichUtils, convertToRaw, convertFromRaw} from 'draft-js'

class MyEditor extends Component {
    constructor(props) {
        super(props);
        this.state = { };
        const content = window.localStorage.getItem('content'); 
        if (content) {
            this.state.editorState = EditorState.createWithContent(convertFromRaw(JSON.parse(content)));
        } 
        else {
            this.state.editorState = EditorState.createEmpty();
        }
    }
    handleKeyCommand = (command) => {
        const newState = RichUtils.handleKeyCommand(this.state.editorState, command);
        if (newState) {
            this.onChange(newState);
            return 'handled';
        }
            return 'not-handled';
    }
    saveContent = (content) => {
        window.localStorage.setItem('content', JSON.stringify(convertToRaw(content)));
    }
    onChange = (editorState) => {
        const contentState = editorState.getCurrentContent();
        console.log('content state', convertToRaw(contentState));
        this.saveContent(contentState);
        this.setState({
            editorState,
        });

    }
    render() {
      return (
          <div>
              <Editor
              readOnly={false}
              enableHorizontalRule
              showUndoControl
              editorState={this.state.editorState} 
              onChange={this.onChange}
              handleKeyCommand={this.handleKeyCommand}
              placeholder="Tell a story..." />
          </div>
      );
    }
  }

  export default MyEditor;
