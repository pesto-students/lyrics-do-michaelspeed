export default {
    setView(context, payload) {
        context.commit('setViewLyrics', payload);
    },
    removeView(context, payload) {
        context.commit('removeViewLyrics');
    }
}
