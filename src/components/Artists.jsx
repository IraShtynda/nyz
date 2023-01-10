import '../style/Artists.scss'
import ArtistCard from './ArtistCard';
import { dataImg } from './dataImg';
import { useState} from 'react';

const Artists = () => {
    const [isCompleted, setIsCompleted] = useState(true)
    const [index, setIndex] = useState(2)
    const initialArtists = dataImg.slice(0, index);
   
    const loadMore = () => {
        setIndex(index + 2)
        if (index >= dataImg.length-index) {
            setIsCompleted(false)
        }
    }

    return (
        <main>
            <div className='container'>
                <div className='artists'>
                    <h2>OUR ARTISTS</h2>
                    <div className='artists__cards'>
                        {initialArtists.map(artist => <ArtistCard src={artist.src} title={artist.title} key={artist.id} />)
                        }
                        {isCompleted  && <button onClick={loadMore} >Load more</button>}
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Artists;