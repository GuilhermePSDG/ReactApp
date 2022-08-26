import React, { memo } from 'react'

export function Post({ post }) {
    return (
        <div style={{ margin: '20px 0', }}>
            <p><strong>{post.title}</strong></p>
            <p><small>{post.body}</small></p>
        </div>
    )
}
export default memo(Post);
// export default Post;