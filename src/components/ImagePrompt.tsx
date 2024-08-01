import { Button, Input, Space } from "antd";
import { useEffect, useState } from "react";

function ImagePrompt({handleAIRequest, content, loading}: {handleAIRequest: (text: any) => void; content: string, loading: boolean}) {
    const [prompt, setPrompt] = useState<string>('');

    useEffect(() => {
      setPrompt(content)
    }, [content])

    return (
    <Space.Compact style={{ width: '100%', marginBottom: '10px' }}>
      <Input  placeholder="Enter a prompt here..." value={prompt} onChange={(e) => setPrompt(e.target.value)}/>
      <Button type="primary" disabled={loading} onClick={() => handleAIRequest(prompt)}>Go</Button>
    </Space.Compact>
    )
}

export default ImagePrompt