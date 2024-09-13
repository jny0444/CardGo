import './Home.css';

const Home = () => {
    

    return (
        <div className="home">
            <img src='https://i.pinimg.com/originals/03/f4/82/03f4823610a818fec2387ebc59a83923.gif' alt='home-page-gif' className='home-page-gif'/>
            <div className='side'>
                <h3>A card game based on NFTs where users can play card games with other players</h3>
                <p>Click here to start playing</p>
                <button className='start-button'>Start</button>
            </div>
        </div>
    )
}

export default Home;