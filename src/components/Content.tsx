import { Skeleton } from "antd"
import React, { useMemo } from "react";

function Content({content}: {content: {loading: boolean, content: string}}) {
  const memoized = useMemo(() => transformContent(content.content), [content.content]);

    return (
        <div className="content">
            {content.loading ? <Skeleton loading={true} active/> : memoized}
        </div>
    )
}

function transformContent(text: string) {
    // Split text into sentences
    const sentences = text.split(/(?<=\.)\s+/);
  
    // Function to convert URLs into <a> tags
    const convertUrlsToLinks = (sentence: string) => {
      const urlRegex = /(\bhttps?:\/\/[^\s]+)/g;
      return sentence.split(urlRegex).map((part, index) => {
        if (urlRegex.test(part)) {
          return (
            <a href={part} key={index} target="_blank" rel="noopener noreferrer">
              {part}
            </a>
          );
        }
        return part;
      });
    };
  
    return sentences.map((sentence, index) => (
      <div key={index}>{convertUrlsToLinks(sentence)}</div>
    ));
  }

export default React.memo(Content)