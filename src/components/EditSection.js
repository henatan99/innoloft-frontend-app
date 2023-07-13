import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { CiUndo, CiRedo } from 'react-icons/ci';

function EditSection() {
  const [content, setContent] = useState('');
  const [wordCount, setWordCount] = useState(0);

  useEffect(() => {
    const addElementToComponent = () => {
      const undo = document.querySelector('.ql-undo');
      const redo = document.querySelector('.ql-redo');

      if (undo) {
        // Render the React icon component into the DOM element
        ReactDOM.render(<CiUndo />, undo);
        undo.addEventListener('click', handleUndo);
      }

      if (redo) {
        // Render the React icon component into the DOM element
        ReactDOM.render(<CiRedo />, redo);
        redo.addEventListener('click', handleRedo);
      }
    
      return () => {
        
        
        if (undo) {
          ReactDOM.unmountComponentAtNode(undo);
          undo.removeEventListener('click', handleUndo);
        }
        if (redo) {
          ReactDOM.unmountComponentAtNode(redo);
          redo.removeEventListener('click', handleRedo);
        }
      };
    };

    addElementToComponent();
  }, []);
  
  const handleChange = (value) => {
    setContent(value);
    setWordCount(value.trim().split(/\s+/).length);
  };

  const handleUndo = () => {
    const quillInstance = quillRef.current.getEditor();
    quillInstance.history.undo();
  };

  const handleRedo = () => {
    const quillInstance = quillRef.current.getEditor();
    quillInstance.history.redo();
  };

  const modules = {
    toolbar: [
      [
        'bold', 'italic', { 'indent': '-1' }, { 'indent': '+1' },
        { 'list': 'bullet' }, { 'list': 'ordered' }, 
        { 'align': '' }, { 'align': 'center' }, { 'align': 'right' }, 
        { 'align': 'justify' }, 'link', 'undo', 'redo'
      ]
    ]
  };

  const formats = [
    'bold', 'italic', 'indent', 'list', 'align',
    'link', 'undo', 'redo'
  ];

  const quillRef = useRef(null);

  const handleTextChange = () => {
    const quillInstance = quillRef.current.getEditor();
    const wordCount = quillInstance.getText().trim().split(/\s+/).length;
    
    console.log('Word count:', wordCount);
  };

  return (
    <div className='relative'>
      <ReactQuill
        value={content}
        onChange={handleChange}
        modules={modules}
        formats={formats}
        ref={quillRef}
        style={{ height: '200px' }}
      />
      <button onClick={handleTextChange}>Get Word Count: {wordCount}</button>
    </div>
  );
}

export default EditSection;
