import './Article.css';
import { UserIcon } from './Icon';
import Image from './Image.js';

function AuthorName({name}) {
    return (
        <div className="author-name">
            {name}
        </div>
    )
}

function AuthorInfo({name, date}){
    return (
        <div className="author-info">
            <UserIcon />
            <div className="author-info-meta-container">
                <AuthorName name={name}/>
                <div>Posted on {date}</div>
            </div>
        </div>
    )
}

function ArticleHeader(){
    return (
        <div className="article-header">
            <AuthorInfo name="Dan Curtis" date="Jun 27, 2020"/>
        </div>
    )
}

function Article() {
  return (
    <div className="article">
        <Image src="https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2Fm625gkej8mgudpalluit.png"/>
        <ArticleHeader />
    </div>
  );
}

export default Article;
