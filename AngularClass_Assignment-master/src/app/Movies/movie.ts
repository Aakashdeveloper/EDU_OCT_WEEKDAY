export interface IMovie{
    _id:string,
    artists:IArtist[] 
}

export interface IArtist{    
    id:number,
    name:string,
    cover:string,
    bio:string ,
    albums:IAlbums[],
    genre: string,    
    showAlbums:boolean
}
export interface IAlbums{    
    albumId:string,
    title:string,
    year:number,
    cover:string ,
    price:number,   
}