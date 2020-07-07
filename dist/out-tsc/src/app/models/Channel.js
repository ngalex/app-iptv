export class Channel {
    constructor(idPlaylist, id, url) {
        this._idPlaylist = idPlaylist;
        this._id = id;
        this._url = url;
    }
    get IdPlaylist() { return this._idPlaylist; }
    set IdPlaylist(idPlaylist) { this._idPlaylist = idPlaylist; }
    get Id() {
        return this._id;
    }
    set Id(id) {
        this._id = id;
    }
    get Url() {
        return this._url;
    }
    set Url(url) {
        this._url = url;
    }
}
//# sourceMappingURL=Channel.js.map