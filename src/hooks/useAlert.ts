import { message } from "antd";

export function useAlert() {
    const [messageApi, contextHolder] = message.useMessage();

    const infoAlert = (image: string) => {
        messageApi.open({
            type: 'info',
            content: !image ? 'Please upload your image' : 'Please enter your prompt',
        });
    };

    const errorAlert = () => {
        messageApi.open({
            type: 'error',
            content: 'Something went wrong, Please try later.'
        });
    };

    return { contextHolder, errorAlert, infoAlert }
}