import '../style/News.scss'
import NewsCard from './NewsCard';

const News = () => {
    return (
        <main>
            <div className='container'>
                <div className='news'>
                    <h2>News</h2>
                    <div className='news__cards'>
                        <NewsCard src='https://static.wixstatic.com/media/84770f_de90b7b26eec4e2dad13c95133397f96.jpg/v1/fill/w_350,h_313,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/84770f_de90b7b26eec4e2dad13c95133397f96.jpg'
                            date='December 05, 2023'
                            title='Alexa Hill Nominated for European Best Newcomer and Best Soul Album at the Sound Awards'
                            description='Beau and Nathaniel are said to be overwhelmed with gratitude for having received the nomination. Tune into the Sound Awards to see them perform live. ' />
                        <NewsCard src='https://static.wixstatic.com/media/f98edabbd01643bcb93da696f6fcb10e.jpg/v1/fill/w_350,h_313,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f98edabbd01643bcb93da696f6fcb10e.jpg'
                            date='December 12, 2023'
                            title='John Buckley: European Tour Dates Confirmed'
                            description='European Tour confirmed to start this October, kicking off in Munich, Germany. Cities confirmed so far include Barcelona, Madrid, Lisbon, Berlin, Paris and Prague. ' />
                        <NewsCard src='https://static.wixstatic.com/media/84770f_c9e028a6124e4ac5abd7f856ebedecdd.jpg/v1/fill/w_350,h_313,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/84770f_c9e028a6124e4ac5abd7f856ebedecdd.jpg'
                            date='November 27, 2023'
                            title='Emilia Cole: New Single – Fire, Earth and Stone, OUT NOW'
                            description='The highly anticipated track from Maria Sanchez is out in shops and available to download NOW. The song, featuring DJ Larizia is expected to enter into the charts by the end of the week.' />
                    </div></div>
            </div>
        </main>
    );
}

export default News;