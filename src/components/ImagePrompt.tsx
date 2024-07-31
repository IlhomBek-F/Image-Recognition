import { Button, Input, Space } from "antd";
import { useRef } from "react";

function ImagePrompt({handleAIRequest}: {handleAIRequest: (text: any) => void;}) {
    const ref = useRef(null);

    return (
    <Space.Compact style={{ width: '100%', marginBottom: '10px' }}>
      <Input ref={ref} placeholder="Enter a prompt here..." />
      <Button type="primary" onClick={() => handleAIRequest((ref.current as any).input.value)}>Go</Button>
    </Space.Compact>
    )
}

export default ImagePrompt