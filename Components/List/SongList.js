import Components from "../../libs/Components/Components.js";
import store from '../../libs/StateManagement/index.js'
import Fetcher from "../../libs/Fetcher/Fetcher.js";
import {LyricURL} from "../../utils/Globals.js";

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

        self.element.querySelectorAll('button').forEach((button, index) => {
            button.addEventListener('click', () => {
                const item = store.state.allSongs[index]
                Fetcher(`${LyricURL}/${item.artist.name}/${item.title}`)
                    .then(response => {
                        if (response.status === 200) {
                            const newItem = {
                                lyrics: response.data.lyrics,
                                ...item
                            }
                            store.dispatch('setView', newItem)
                        }
                    })
            })
        })
    }
}
