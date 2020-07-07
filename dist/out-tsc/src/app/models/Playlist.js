export class Playlist {
    constructor(id, name, url, items) {
        this._id = id;
        this._name = name;
        this._url = url;
        this._items = items;
    }
    get Id() { return this._id; }
    set Id(id) { this._id = id; }
    get Name() { return this._name; }
    set Name(name) { this._name = name; }
    get Url() { return this._url; }
    set Url(url) { this._url = url; }
    get Items() { return this._items; }
    set Items(items) { this._items = items; }
}
//# sourceMappingURL=Playlist.js.map