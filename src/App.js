import React from 'react';
import Header from './components/Header';
import AddSong from './components/AddSong';
import SongList from './components/SongList';
import SongPlayer from './components/SongPlayer';
import QueuedSongList from './components/QueuedSongList';

import { Grid, useMediaQuery, Hidden } from '@material-ui/core';
import songReducer from './reducer';

export const SongContext = React.createContext({
    song: {
        id: "465df049-f66b-4f41-a0dc-9373d2488807",
        title: 'Carolyns Fingers',
        artist: 'Cocteau Twins',
        url: 'https://www.youtube.com/watch?v=NhGoZLudKyk',
        duration: 185,
        thumbnail: 'http://img.youtube.com/vi/NhGoZLudKyk/0.jpg'
    },
    isPlaying: false
})

function App() {
const initialSongState = React.useContext(SongContext)
const [state, dispatch] = React.useReducer(songReducer, initialSongState)
 const greaterThanMd = useMediaQuery(theme => theme.breakpoints.up('md'));
const greaterThanSm = useMediaQuery(theme => theme.breakpoints.up('sm'));    
  return (
    <SongContext.Provider value={{state, dispatch}}>
    
      {/* greaterThanSm && <Header /> */}
    <Hidden only="xs">
      <Header />
    </Hidden>
    <Grid container spacing={3}>
        <Grid style={{ paddingTop: greaterThanSm ? 80 : 10 }}
      item xs={12} md={7}>
            <AddSong />
            <SongList />
          </Grid>   
        <Grid style={
            greaterThanMd ? {
              
            position: "fixed",
            width: "100%",
            right: 0,
            top: 70
      
        } : {
      
            position: "fixed",
            width: "100%",
            left: 0,
            bottom: 0
      }} 
            item 
            xs={12} 
            md={5}>  
            <SongPlayer />  
        </Grid>
    </Grid>  
    
    </SongContext.Provider>
  );
}

export default App;
