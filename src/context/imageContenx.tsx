import { Context, createContext, ReactNode, useContext, useState } from "react";

type ImageContextValue  = {
    image: string,
    setImage: (image: string) => void;
}

export const ImageContext: Context<ImageContextValue> = createContext({image: '', setImage: (_: string) => {}})

const ImageProvider = ({ children }: {children: ReactNode}) => {
    const [image, setImage] = useState('');
    
    const value: ImageContextValue = {image, setImage};

   return <ImageContext.Provider value={value}>
       {children}
   </ImageContext.Provider>
}

const useImage = () => useContext(ImageContext);

export {useImage, ImageProvider}
