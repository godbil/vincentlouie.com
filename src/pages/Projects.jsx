import git from '../assets/github.svg'
import gamejolt from '../assets/gamejolt.png'
import mtdmenu from '../assets/mtd-menu.png'
import graph from '../assets/consoless.png'
import card from '../assets/cardgame.png'
import site from '../assets/site.png'

function Projects() {
    return (
        <div className="projects" id="projects">
            <div className="title">Projects</div>
            <div className="section">
                <img className='menu' src={mtdmenu} alt="Midieval Tower Defense Main Menu"/>
                Medieval Tower Defense
                <a href="https://github.com/godbil/tower-defense-game"><img src={git} alt="GitHub"/></a>
                <a href="https://gamejolt.com/games/medievaltowerdefense/678221"><img className='gamejolt' src={gamejolt} alt="GameJolt"/></a>
                <div></div>
            </div>
            <div className="section">
                <img className='graph' src={graph} alt="Graph"/>
                NBA Statistic Graph
                <a href="https://github.com/godbil/nba-player-graph"><img src={git} alt="GitHub"/></a>
            </div>
            <div className="section">
                <img className='site' src={site} alt="Website"/>
                vincentlouie.com
                <a href="https://github.com/godbil/nba-player-graph"><img src={git} alt="GitHub"/></a>
            </div>
            <div className="section">
                <img className='card' src={card} alt="Card Game"/>
                Console Based BlackJack and Three Card Poker
                <a href="https://github.com/godbil/cardgame"><img src={git} alt="GitHub"/></a>
            </div>
        </div>
    );
}

export default Projects;