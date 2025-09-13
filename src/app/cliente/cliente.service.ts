import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from './cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private apiUrl = 'http://localhost:5062/api/cliente';

  constructor(private http: HttpClient) {}

  agregarCliente(cliente: Cliente): Observable<any> {
    return this.http.post(this.apiUrl, cliente);
  }
}
