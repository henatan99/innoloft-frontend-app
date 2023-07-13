import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { CiUndo, CiRedo } from 'react-icons/ci';
import { BsCheck2 } from 'react-icons/bs';
import MainContentImg from "../main.svg"; 
import './product.css';

function Product(props) {
  const { edit, product, editProduct } = props;
  const [wordCount, setWordCount] = useState(0);
  const [description, setDescription] = useState(product.description); 
  const [name, setName] = useState(product.name)
  const maxWord = 200;

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
    wordCount <= maxWord ? setDescription(value) : setDescription(description);
    setWordCount(value.trim().split(/\s+/).length);
  };

  const editName = (e) => {
    setName(e.target.textContent)
  }

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

  const handleSave = () => {
    editProduct('1598', {...product, name: name, description: description})
  }

  const handleCancel = () => {
    setName(product.name);
    setDescription(product.description);
  }

  return (

    <div className="flex-grow">
      <div className="w-full">
          <img src={MainContentImg} className="w-full"></img>
      </div>
      <div className="p-4">
        <div className='relative'>
          <div className={`${edit && 'border'} ${edit && 'p-1'} mb-2 rounded-md text-left text-md`}>
            <h2 onBlur={(e) => editName(e)} contentEditable={edit && "true"}>
              {name}
            </h2>
          </div>
          <span className="absolute right-1 text-xs opacity-75" style={{color: wordCount >= maxWord && 'red'}}>{`${wordCount}/${maxWord}`}</span>
            {
              edit ?
              <>
                <ReactQuill
                  value={description}
                  onChange={handleChange}
                  modules={modules}
                  formats={formats}
                  ref={quillRef}
                  className={edit ? 'quill-edit' : 'quill'}
                />
                <div className='mt-2 flex flex-row justify-end'>
                  <button onClick={handleCancel} className='px-3 py-1'>Cancel</button>
                  <button onClick={handleSave} className='px-3 py-1 bg-custom-blue rounded-md text-white flex items-center'>
                    <BsCheck2 />
                    <span className='ml-1'>Save</span>
                  </button>
                </div>
              </> : 
              <ReactQuill
                value={description}
                modules={{toolbar: false}}
                formats={formats}
                readOnly={true}
                className={edit ? 'quill-edit' : 'quill'}
              />
            }
        </div>
      </div>
    </div>
  );
}

export default Product;
