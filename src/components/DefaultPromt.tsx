import { Divider, Flex, Tag } from "antd";

function DefaultPrompt() {
    const  prompts = ['Describe the image in detail.', 'What objects are in this image?', 'What is the main subject of this image?'];
    
    const selectPrompt = (prompt: string) => {
       console.log(prompt)
    }

    return (
    <>
        <Divider orientation="left">Prompts</Divider>
        <Flex gap="4px 0" wrap className="tags">
         {prompts.map((prompt, index) => {
             return <Tag key={index} style={{cursor: 'pointer'}} className="tag" color="geekblue" onClick={() => selectPrompt(prompt)}>{prompt}</Tag>
         })}
       </Flex>
    </>
    )
}

export default DefaultPrompt;