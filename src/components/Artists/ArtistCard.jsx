const ArtistCard = ({ src, title}) => {
    return (
        <div className='artists__card'>
            <img src={src} alt='artist' />
            <div>
                <h4>{title}</h4>
            </div>
        </div>
    );
}

export default ArtistCard;