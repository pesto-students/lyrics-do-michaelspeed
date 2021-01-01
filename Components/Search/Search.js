import Components from "../../libs/Components/Components.js";
import store from '../../libs/StateManagement/index.js'
import Fetcher from "../../libs/Fetcher/Fetcher.js";

export default class Search extends Components {
    constructor() {
        super({
            store,
            element: document.querySelector('.app-background')
        });
    }

    render() {
        const self = this;
        self.element.innerHTML = `<div class="app-input-holder">
                <div class="form-group">
                    <input type="text" class="form-control search-input" placeholder="Search Song / Artist Name">
                </div>
                <button class="btn search-button">Search</button>
            </div>`

        document.querySelector('.search-button').addEventListener('click', () => {
            const inputValue = document.querySelector('.search-input').value;
            store.dispatch('setLoading')
            setTimeout(() => {
                Fetcher(`https://api.lyrics.ovh/suggest/${inputValue}`)
                    .then(response => {
                        store.dispatch('setSongSearch', response.data)
                        console.log(store)
                        console.log(response)
                    })
            }, 3000)
        })
    }
}
