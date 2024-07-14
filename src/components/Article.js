import './Article.css';
import { UsernameButton, DarkenButton, AccentButton, SecondaryButton } from './Button';
import { HorizontalIconButton, IconButton, UserIcon } from './Icon';
import Image from './Image.js';
import Selector from './Selector';
import TextArea from './TextArea';

function AuthorName({ name }) {
    return (
        <a href="https://google.com" className="author-name">
            {name}
        </a>
    )
}

function AuthorInfo({ name, date }) {
    return (
        <div className="author-info">
            <UserIcon />
            <div className="author-info-meta-container">
                <AuthorName name={name} />
                <p role="time" className="date">Posted on {date}</p>
            </div>
        </div>
    )
}

function Tags() {
    return (
        <div className="tags">
            <a href="https://google.com">#react</a>
            <a href="https://google.com">#codenewbie</a>
            <a href="https://google.com">#javascript</a>
            <a href="https://google.com">#beginners</a>
        </div>
    )
}

function ArticleHeader() {
    return (
        <div className="article-header">
            <AuthorInfo name="Dan Curtis" date="Jun 27, 2020" />
            <h1>Learn React by Recreating this Dev.to Article</h1>
            <Tags />
        </div>
    )
}

function ArticleBody(props) {
    return (
        <div className="article-body">
            {props.children}
        </div>
    )
}

/*
{
    name: "Anurag Hazra",
    date: "Jun 28 `20",
    message: "And this article also teaches you recursion..",
    likes: 2,
    replies: [
        {
            name: "Dan Curtis",
            date: "Jun 28 `20",
            message: "I was hoping somebody would catch that 😄",
            likes: 2,
            replies: []
        }
    ]
}
*/

function Comment({com}) {

    console.log(com.date)
    return (
        <div className="comment">
            <div className="top-comment">
                <div className="comment-avatar-collapse">
                    <UserIcon />
                    <IconButton icon="more" />
                </div>
                <div className="comment-info">
                    <div className="comment-main-card">
                        <div className="comment-header">
                            <UsernameButton>{com.name}</UsernameButton>
                            <span className="dot-separator"></span>
                            <p className="comment-date" role="date">{com.date}</p>
                            <IconButton icon="more" shape="square icon-40 right"/>
                        </div>
                        <p className="comment-message">{com.message}</p>
                    </div>
                    <div className="comment-footer">
                        <HorizontalIconButton icon="heart-add">2 likes</HorizontalIconButton>
                        {/* make horizontal icon button with number and label */}
                    </div>
                </div>
            </div>
            <div className="comment-replies">
            {com.replies.length > 0 ? <Comment com={com.replies[0]} /> : null}
            </div>
        </div>
    )
}

function CommentFeed() {
    return (
        <div className="comment-feed">
            <Comment com={
                {
                    name: "Anurag Hazra",
                    date: "Jun 28 `20",
                    message: "And this article also teaches you recursion..",
                    likes: 2,
                    replies: [
                        {
                            name: "Dan Curtis",
                            date: "Jun 28 `20",
                            message: "I was hoping somebody would catch that 😄",
                            likes: 2,
                            replies: [],
                        },
                    ]
                }
            } />
        </div>
    )
}

function ArticleComments() {
    return (
        <div className="article-comments">
            <div className="comments-header">
                <Selector options={["Top", "Latest", "Oldest"]} amt={3} />
                <DarkenButton>Subscribe</DarkenButton>
            </div>
            <div className="user-comment-container">
                <UserIcon />
                <TextArea />
            </div>
            <CommentFeed />
        </div>
    );
}

function Article() {
    return (
        <div className="article">
            <Image src="https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2Fm625gkej8mgudpalluit.png" />
            <ArticleHeader />
            <ArticleBody>
                <h2>What is React anyways? 🕵️‍♀️</h2>
                <p>Websites consist of data, whether that's text or boxes. React makes it easy to change the data displayed. Instead of reloading the page, React automatically changes data, giving it the feel of a mobile app.</p>
                <p>We're going to recreate this article from scratch to learn React! Skip to the end for the full code.</p>
                <h2>Thinking in React 🤔</h2>
                <p>Websites used to be "pages" of data. React splits the page UI up into chunks known as components. We create components by calling a function.</p>
                <p>For example, this page has a header, article, sidebar, and a title inside of the article. Each could of these be their own component.</p>
                <Image src="https://res.cloudinary.com/practicaldev/image/fetch/s--NWVNftCk--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/i/a5ga58sackje5lqzsvai.png"></Image>
                <h2>Functions, classes, components - oh my! 🤯</h2>
                <p>Functions, classes, and components are synonymous in React. Every component in React should be a class or function. Classes in JavaScript are special functions. Older React code uses classes, but functions are the standard now.</p>
                <p>Every component returns HTML, known as JSX. Traditionally, JavaScript and HTML are separated. In React, functions encapsulate all the code (JS, HTML, even CSS!) for a component.</p>
                <div className="code-block">
                    <pre className="highlight javascript">
                        <code>
                            <span className="kd">function</span>
                            <span className="nf">Article</span>
                            <span className="p">()</span>
                            <span className="p">{"{"}</span>
                            <br></br>
                            <span className="k">{"  "}return</span>
                            <span className="o">&lt;</span>
                            <span className="nx">h1</span>
                            <span className="o">&gt;</span>
                            <span className="nx">Hello{" "}</span>
                            <span className="nx">World</span>
                            <span className="o">&lt;</span>
                            <span className="sr">/h1&gt;</span>
                            <span className="err">;</span>
                            <br></br>
                            <span className="p">{"}"}</span>
                        </code>
                    </pre>
                </div>
                <h2>The power of components 🦾</h2>
                <p>Why use components? Components are reusable, and they can easily manipulate HTML and CSS. Parent components can call children components. For example, our Article component can call Title, Author, and Body children components.</p>
                <ul>
                    <li>Article (Parent)</li>
                    <ul>
                        <li>Title (Child)</li>
                        <li>Author (Child)</li>
                        <li>Body (Child)</li>
                    </ul>
                </ul>
                <p>Let's say we build Dev.to and use the same Article component for every article on the site. The data inside the Title, Author, and Body components would need to change. Instead of hardcoding data into our JSX, we can use what is known as props.</p>
                <div className="code-block">
                    <pre className="highlight javascript">
                        <code>
                            <span className="kd">function</span>
                            <span className="nf">Title</span>
                            <span className="p">()</span>
                            <span className="p">{"{"}<br></br></span>
                            <span className="k">{"  "}return</span>
                            <span className="o">&lt;</span>
                            <span className="nx">h1</span>
                            <span className="o">&gt;</span>
                            <span className="nx">Fun</span>
                            <span className="nx">Fact</span>
                            <span className="o">&lt;</span>
                            <span className="sr">/h1</span>
                            <span className="err">&gt;<br></br></span>
                            <span className="p">{"}"}<br></br></span>
                            <br></br>
                            <span className="kd">function</span>
                            <span className="nf">Author</span>
                            <span className="p">()</span>
                            <span className="p">{"{"}<br></br></span>
                            <span className="k">{"  "}return</span>
                            <span className="o">&lt;</span>
                            <span className="nx">span</span>
                            <span className="o">&gt;</span>
                            <span className="nx">Daniel</span>
                            <span className="nx">Curtis</span>
                            <span className="o">&lt;</span>
                            <span className="sr">/span</span>
                            <span className="err">&gt;<br></br></span>
                            <span className="p">{"}"}</span>
                        </code>
                    </pre>
                </div>
                <p>Whichever method you choose, avoid global styles - make them specific to components.</p>
                <p>I'm using an external stylesheet with classes in this example.</p>
                <p>Here's the finished product. Fork the pen and try adding tags!</p>
            </ArticleBody>
            <ArticleComments />
            <div style={{ "height": "400px" }}>hi</div>
        </div>
    );
}

export default Article;
