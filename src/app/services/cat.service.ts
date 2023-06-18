import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cat } from '../models/cat';
import { Observable } from 'rxjs/internal/Observable';
import { CatResponse } from '../models/responses/catResponse';
import { CatImageResponse } from '../models/responses/catImageResponse';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  readonly API_KEY : string;
  readonly API_BASE_URL : string;
  readonly BREED_ENDPOINT : string;
  readonly FIND_IMAGE_BY_ID_ENDPOINT : string;

  constructor(private http: HttpClient) {
    this.API_KEY = "live_4hzU1V4d05G1iMH8fLZRZuxE6EA5b4gY5NmDodBJQZ9S9Qrn9wA4X5JYWm9ij1jH";  
    this.API_BASE_URL = "https://api.thecatapi.com/";
    this.BREED_ENDPOINT = this.API_BASE_URL + "v1/breeds";
    this.FIND_IMAGE_BY_ID_ENDPOINT = this.API_BASE_URL + "v1/images";

   }

   //https://api.thecatapi.com/v1/breeds?limit=10&page=0
   getPageCatsBreed(limit: number, page: number) : Observable<CatResponse>{
      let params = new HttpParams();
      params = params.append("limit", limit);
      params = params.append("page", page);

      let headers = new HttpHeaders();
      headers = headers.append("x-api-key", this.API_KEY);


      return <Observable<CatResponse>> this.http.get(this.BREED_ENDPOINT, {"params": params, "headers": headers});
   }

   getImageById(id: string) : Observable<CatImageResponse>{
    const getFullImageUrl = this.FIND_IMAGE_BY_ID_ENDPOINT + `/${id}` + "?size=med";

    let headers = new HttpHeaders();
    headers = headers.append("x-api-key", this.API_KEY);


    return <Observable<CatImageResponse>> this.http.get(getFullImageUrl, {"headers": headers});
 }
}
