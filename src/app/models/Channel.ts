export class Channel{
    private _idPlaylist: number;
    private _id: number;
    private _url: string;
    get IdPlaylist(): number{ return this._idPlaylist; }
    set IdPlaylist(idPlaylist: number){ this._idPlaylist = idPlaylist; }
    get Id(): number{
        return this._id;
    }
    set Id(id: number){
        this._id = id;
    }
    get Url(): string{
        return this._url;
    }
    set Url(url: string){
        this._url = url;
    }
    
    constructor(idPlaylist: number, id: number, url: string){
        this._idPlaylist= idPlaylist;
        this._id = id;
        this._url = url;
    }
}