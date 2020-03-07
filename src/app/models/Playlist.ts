export class Playlist {
    private _id: number;
    private _name: string;
    private _url: string;
    private _items: number;
    get Id(){ return this._id; }
    set Id(id: number){ this._id = id; }
    get Name(){ return this._name; }
    set Name(name: string){ this._name = name; }
    get Url(){ return this._url; }
    set Url(url: string){ this._url = url; }
    get Items(){ return this._items; }
    set Items(items: number){ this._items = items; }
    
    constructor (id: number, name:string, url:string, items: number){
        this._id = id;
        this._name = name;
        this._url = url;
        this._items = items;
    }
}