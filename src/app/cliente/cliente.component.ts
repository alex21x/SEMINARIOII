import { Component } from '@angular/core';
import { Cliente } from './cliente.model';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {
  cliente: Cliente = {
    nombres: '',
    apellidos: '',
    dni: '',
    direccion: '',
    telefono: '',
    email: '',
    mensaje: ''
  };

  constructor(private clienteService: ClienteService) {}

  registrarCliente() {
    this.clienteService.agregarCliente(this.cliente).subscribe({
      next: () => {
        alert('Cliente registrado correctamente');
        this.cliente = { nombres: '', apellidos: '', dni: '', direccion: '', telefono: '', email: '', mensaje: '' };
      },
      error: () => {
        alert('Error al registrar cliente');
      }
    });
  }
}
