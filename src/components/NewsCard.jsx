
const NewsCard = ({src, date, title, description}) => {
    return (
        <div className='news__card'>
            <img src={src} alt='news'/>
            <h6>{date}</h6>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

export default NewsCard;