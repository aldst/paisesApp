import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl  : string = 'https://restcountries.com/v2';

  get httpParams() {
    return new HttpParams()
      .set( 'fields', 'name,capital,alpha2Code,flag,population' );
  }

  constructor( private http: HttpClient ) { }

  buscarPais( termino: string ): Observable<Country[]> {
    const url = `${ this.apiUrl }/name/${ termino }`;
    return this.http.get<Country[]>( url, { params: this.httpParams } );
  }

  buscarPaisPorAlpha( termino: string ): Observable<Country> {
    const url = `${ this.apiUrl }/alpha/${ termino }`;
    console.log(url);

    return this.http.get<Country>( url );
  }

  buscarCapital( termino: string ): Observable<Country[]> {
    const url = `${ this.apiUrl }/capital/${ termino }`;
    return this.http.get<Country[]>( url, { params: this.httpParams } );
  }

  buscarRegion( termino: string ): Observable<Country[]> {

    const url = `${ this.apiUrl }/regionalbloc/${ termino }`;
    return this.http.get<Country[]>( url, { params: this.httpParams } )
      .pipe(
        tap()
      )
  }
}
