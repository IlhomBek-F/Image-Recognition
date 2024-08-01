import { useState } from 'react'
import './App.css'
import Content from './components/Content'
import DefaultPrompt from './components/DefaultPromt'
import ImagePrompt from './components/ImagePrompt'
import UploadImage from './components/UploadIMage'
import { useImage } from './context/imageContenx'
import { run } from './server'
import { message } from 'antd'

function App() {
  const {image} = useImage();
  const [content, setContent] = useState({loading: false, content: '', prompt: ''});
  const [messageApi, contextHolder] = message.useMessage();

  const handleAIRequest = (prompt: string = '') => {
      if(!image || !prompt) {
        infoAlert();
        return;
      }

      setContent({...content, loading: true})
      run(image, prompt)
        .then((resAI) => {
             setContent({loading: false, content: resAI, prompt: ''})
        }).catch((error) => {
          errorAlert(error);
          setContent({...content, loading: false})
        })
   }

   const handleDefaultPrompt = (prompt: string) => {
      setContent({...content, prompt})
   }

   const infoAlert = () => {
     messageApi.open({
      type: 'info',
      content: !image ? 'Please upload your image' : 'Please enter your prompt',
     });
  };

  const errorAlert = (error: Error) => {
    messageApi.open({
      type: 'error',
      content: error.message
     });
  }
   
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
