import store from './libs/StateManagement/Store.js'
import Search from "./Components/Search/Search.js";
import SongList from "./Components/List/SongList.js";
import Loader from "./Components/Loader/Loader.js";

const searchInstance = new Search();
const loaderInstance = new Loader()
const songListInstance = new SongList();

searchInstance.render();
loaderInstance.render();
songListInstance.render();
