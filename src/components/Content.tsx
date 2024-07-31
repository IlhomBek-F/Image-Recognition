import { Skeleton } from "antd"

function Content({content}: {content: {loading: boolean, content: string}}) {
    
    return (
        <div className="content">
            {content.loading ? <Skeleton loading={true} active/> : content.content}
        </div>
    )
}

export default Content