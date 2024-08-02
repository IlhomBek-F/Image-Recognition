import { useCallback, useState } from 'react'
import Content from './components/Content'
import DefaultPrompt from './components/DefaultPromt'
import ImagePrompt from './components/ImagePrompt'
import UploadImage from './components/UploadIMage'
import { useImage } from './context/imageContenx'
import { run } from './server'
import { useAlert } from './hooks/useAlert'
import './App.css'

function App() {
  const {image} = useImage();
  const {contextHolder, errorAlert, infoAlert} = useAlert();
  const [content, setContent] = useState({loading: false, content: '', prompt: ''});
  
  const handleAIRequest = (prompt: string = '') => {
      if(!image || !prompt) {
        infoAlert(image);
        return;
      }

      setContent({...content, loading: true})
      run(image, prompt)
        .then((resAI) => {
          setContent({loading: false, content: resAI, prompt})
        }).catch(() => {
          errorAlert();
          setContent({...content, loading: false})
        })
   }

   const handleDefaultPrompt = useCallback((prompt: string) => {
      setContent((prev) => ({...prev, prompt}))
   }, [])
   
  return (
    <div className='container'>
      {contextHolder}
      <h1 className='title'>Hello , Let's visualize the scene.</h1>
      <UploadImage />
      <DefaultPrompt handleDefaultPrompt={handleDefaultPrompt}/>
      <ImagePrompt handleAIRequest={handleAIRequest} content={content.prompt} loading={content.loading}/>
      {(content.content || content.loading) && <Content content={content}/>}
    </div>
  )
}

export default App
