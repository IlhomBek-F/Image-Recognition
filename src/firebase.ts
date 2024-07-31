// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getGenerativeModel, getVertexAI } from "firebase/vertexai-preview";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAJMhEXoCLyB3XRu4Lg4D81OkXaNOjJSFg",
    authDomain: "detect-5a5c2.firebaseapp.com",
    projectId: "detect-5a5c2",
    storageBucket: "detect-5a5c2.appspot.com",
    messagingSenderId: "123391432486",
    appId: "1:123391432486:web:39daf498f5fb450b1cd3e7",
    measurementId: "G-P0FW378BGH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize the Vertex AI service
const vertexAI = getVertexAI(app);

// Initialize the generative model with a model that supports your use case
// Gemini 1.5 models are versatile and can be used with all API capabilities
const AImodel = getGenerativeModel(vertexAI, { model: "gemini-1.5-flash" });

export { AImodel }