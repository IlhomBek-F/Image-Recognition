import { PlusOutlined } from "@ant-design/icons";
import { Card, Flex, Space, Upload, UploadProps } from "antd";
import { useImage } from "../context/imageContenx";
import { beforeUpload, FileType, getBase64 } from "../helper";


function UploadImage() {
    const {image, setImage} = useImage();
  
    const handleChange: UploadProps['onChange'] = (info) => {
        getBase64(info.file.originFileObj as FileType, (url: string) => {
          setImage(url.split(',')[1])
        });
    };

    const uploadButton = (
        <button style={{ border: 0, background: 'none' }} type="button">
          <PlusOutlined />
          <div style={{ marginTop: 8 }}>Upload</div>
        </button>
      );

    return (
        <Space direction="vertical" size={16}>
        <Card title="Upload your image" style={{ width: 500}}>
            <Flex>
             <Upload
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                beforeUpload={beforeUpload}
                onChange={handleChange}
             >
        {image ? <img src={'data:image/jpeg;base64,' + image} alt="avatar" style={{ width: '100%', height: '100%'}} /> : uploadButton}
      </Upload>
            </Flex>
        </Card>
      </Space>
    )
}

export default UploadImage