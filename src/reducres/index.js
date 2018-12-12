import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'Hey you', duration: '3:21' },
        { title: 'TIme', duration: '8:09' },
        { title: 'Money', duration: '4:17' },
        { title: 'CCC', duration: '2:22' },
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer,
});