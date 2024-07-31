import { useState } from 'react'
import './App.css'
import Content from './components/Content'
import DefaultPrompt from './components/DefaultPromt'
import ImagePrompt from './components/ImagePrompt'
import UploadImage from './components/UploadIMage'
import { useImage } from './context/imageContenx'
import { run } from './server'

function App() {
  const {image} = useImage();
  const [content, setContent] = useState({loading: false, content: ''});
  
  const handleAIRequest = (prompt: string = '') => {
      setContent({loading: true, content: ''})
      run(image, prompt)
      .then((content) => {
           setContent({loading: false, content})
      }).catch(console.log)
   }
   
  return (
    <div className='container'>
      <UploadImage />
      <DefaultPrompt />
      <ImagePrompt handleAIRequest={handleAIRequest}/>
      {(content.content || content.loading) && <Content content={content}/>}
    </div>
  )
}

export default App
