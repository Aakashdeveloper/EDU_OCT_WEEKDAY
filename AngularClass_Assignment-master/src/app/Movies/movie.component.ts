import { Component } from '@angular/core';
import {IMovie} from './movie';
import { IArtist } from './movie';
import { IAlbums } from './movie';


import { MovieService } from './movie.service';


@Component({  
    templateUrl: './movie.component.html',
    styleUrls: ['./movie.component.css']
})

export class MovieComponent  {

    title : string =  'Movies';
    filterText:string ="";
    showFilterTextBox:boolean=false;
    selectedArtist: IArtist;
    selectedAlbumList:IAlbums[];
    showDiv:boolean;
    selectedRow : Number;
    setClickedRow : Function;
    movies : IMovie[] ;

    constructor(private _movieService: MovieService){
      this.setClickedRow = function(index){
          this.selectedRow = index;
      }
    }

    ngOnInit():void{

      this._movieService.getMovies()
                        .subscribe((prds :IMovie[]) => {
                                    this.movies = prds;
                                    this.onSelect(this.movies[0].artists[0]);
                           });

      //this.movies = this._movieService.getMovies();
      //this.onSelect(this.movies[0].artists[0]);
  }

  onSelect(artist: IArtist): void {
    this.showDiv = artist.showAlbums;
    this.selectedArtist = artist;
    this.selectedAlbumList = artist.albums;
  }        
}