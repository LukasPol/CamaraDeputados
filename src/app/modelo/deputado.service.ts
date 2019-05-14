import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeputadoService {
  private url = 'https://dadosabertos.camara.leg.br/api/v2/deputados';

  constructor(private http: HttpClient) { }

  obterDeputados(): Observable<any> {
    return this.http.get<any>(`${this.url}`);
  }

  consultaId(id: number): Observable<any> {
    return this.http.get<any>(`${this.url}/${id}`);
  }
}
