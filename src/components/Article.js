import './Article.css';

function Article(props)
{
    return(
        <article>
        {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et dolores odit at excepturi, quos, consequatur sed voluptatem corporis fugiat quaerat pariatur, hic laborum id corrupti. Reprehenderit in iure dolores tenetur.</p> */}
        <h2>{props.title}</h2>
        <p>{props.content}</p>
        </article>
    );
}
export default Article;