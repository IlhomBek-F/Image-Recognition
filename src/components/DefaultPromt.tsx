import { Divider, Flex, Tag } from "antd";

function DefaultPrompt({handleDefaultPrompt}: {handleDefaultPrompt: (prompt: string) => void}) {
    const  prompts = ['Describe the image in detail.', 'What objects are in this image?', 'What is the main subject of this image?'];

    return (
    <>
        <Divider orientation="left">Prompts</Divider>
        <Flex gap="4px 0" wrap className="tags">
         {prompts.map((prompt, index) => {
             return <Tag key={index} style={{cursor: 'pointer'}} className="tag" color="geekblue" onClick={() => handleDefaultPrompt(prompt)}>{prompt}</Tag>
         })}
       </Flex>
    </>
    )
}

export default DefaultPrompt;