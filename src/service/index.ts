
import { GenerateContentRequest } from 'firebase/vertexai-preview';
import { AImodel } from '../firebase'

async function run(base64: string, prompt: string) {
    const request = {
        contents: [
            {
                role: 'user',
                parts: [
                    {
                        inlineData: {
                            data: base64,
                            mimeType: 'image/png',
                        },
                    },
                    {
                        text: prompt,
                    },
                ],
            },
        ],
    };

    // Provide a prompt that contains text
    // To generate text output, call generateContent with the text input
    const result = await AImodel.generateContent(request as GenerateContentRequest);

    const response = result.response;
    const text = response.text();
    return text;
}

export { run };