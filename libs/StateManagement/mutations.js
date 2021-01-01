export default {
    setViewLyrics(state, payload) {
        state.viewLyrics = payload;
        return state;
    },
    removeViewLyrics(state, payload) {
        state.viewLyrics = null;
        return state;
    },
    setSongSearch(state, payload) {
        state.allSongs = payload;
        return state;
    }
}
