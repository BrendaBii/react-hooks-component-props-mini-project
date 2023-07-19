import React from "react";
import Article from "./Article";

function ArticleList({posts}) {
    const post = posts.map(post => {
      return <Article key = {post.id} post = {post}/>
    })
    //console.log(post)
    return (
      <main>
        {post}
      </main>
    )
}

export default ArticleList;