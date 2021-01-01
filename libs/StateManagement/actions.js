export default {
    setView(context, payload) {
        context.commit('setViewLyrics', payload);
    },
    removeView(context, payload) {
        context.commit('removeViewLyrics');
    },
    setSongSearch(context, payload) {
        context.commit('setSongSearch', payload);
    },
    setLoading(context, payload) {
        context.commit('setLoading')
    },
    setSearchTerm(context, payload) {
        context.commit('setSearch', payload)
    },
    clearSearch(context, payload) {
        context.commit('clearSongSearch')
    }
}
