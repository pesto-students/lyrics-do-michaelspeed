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
    }
}
