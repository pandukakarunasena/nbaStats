import React from 'react';
import './App.css';
import {PlayerProvider} from './PlayerContext'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {SearchPlayerPage} from './pages/SearchPlayer/SearchPlayerPage'
import {TeamList} from './pages/TeamList/TeamList'
//import TeamStat from './pages/TeamList/TeamStat'
import Logo from '../src/Header/Logo'
import Nav from '../src/Header/Nav'
import MenuPage2 from  './Header/MenuPage2'
import Stadiums from './pages/stadiums/Stadiums';
import {News} from './pages/News/News'
import { LiveScores } from './pages/LiveScores/LiveScores';



function App() {

 

  return (
    <Router>
    <PlayerProvider>
        <div className= 'wrapper'>
          <div className= 'nav'>
              <Logo/>
              <Nav/>
          </div>
          <div className='body'>
              <div className='menu'>
                  <MenuPage2/>

              </div>
              <div className='content'>
              
              <Switch>
                  <Route path = '/LiveScores' component = {LiveScores}/>
                  <Route path = '/SearchPlayerPage' component={SearchPlayerPage}/>
                  <Route path = '/TeamList'  component={TeamList}/>
                  <Route path = '/Stadiums'  component={Stadiums}/>
                  <Route path = '/News'  component={News}/>
                  
              </Switch>
              </div>

          </div>
          
        </div>
        
    </PlayerProvider>
    </Router>
    
              
             
  );
}

export default App;

