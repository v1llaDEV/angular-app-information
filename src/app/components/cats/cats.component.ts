import { Component, OnInit } from '@angular/core';
import { Cat } from 'src/app/models/cat';
import { CatService } from 'src/app/services/cat.service';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit{

  catArray : Cat[];
  pageSize : number = 10;
  actualPage : number = 0;


  constructor(private catService : CatService){
    this.catArray = [];
  }

  ngOnInit(): void {

    this.catService.getPageCatsBreed(this.pageSize, this.actualPage).subscribe(
      {
        error: (error_rx) => console.error(error_rx),
        next: (catResponse:any) => {
          this.catArray = catResponse;
          this.getCatImages();
      }
    });//final del suscribe de getPageCatsBreed

   
  }

  getCatImages(){
    this.catArray.forEach(cat => {
      this.catService.getImageById(cat.reference_image_id).subscribe({
        error: (error_rx) => console.error(error_rx),
        next: (catImageResponse:any) => {
          cat.img_src = catImageResponse.url;
        }
      });
    })//final del suscribe de recibir la imágen
  }



}
