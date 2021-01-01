import Components from "../../libs/Components/Components.js";
import store from '../../libs/StateManagement/index.js'

export default class SongList extends Components {
    constructor() {
        super({
            store,
            element: document.querySelector('.song-container')
        })
    }

    render() {
        const self = this;

        self.element.innerHTML = `<div class="list-container-items">
            ${store.state.allSongs.map(song => {
            return `
                <div class="item-container">
                <div class="item">
                    <div class="item-preview">
                        <img src="${song.album ? song.album.cover : ''}" alt="${song.title}">
                    </div>
                    <div class="item-info">
                        <h2>${song.title}</h2>
                        <h4>${song.artist ? song.artist.name : 'Unknown'}</h4>
                        <button class="btn">Show Lyrics</button>
                    </div>
                </div>
            </div>
                `
        })}
        </div>`
    }
}
