import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-error',
  standalone: false,
  templateUrl: './error.component.html',
  styleUrl: './error.component.css'
})
export class ErrorComponent {
 @Output() reintentar = new EventEmitter<void>();

  // @Input para poder personalizar el mensaje de error si es necesario
  @Input() titulo: string = '¡Algo salió mal!';
  @Input() mensaje: string = 'Hubo un problema al cargar los datos. Por favor, revisa tu conexión a internet o inténtalo de nuevo.';
  @Input() textoBoton: string = 'Reintentar';

  onReintentarClick(): void {
    // Cuando el usuario hace clic, emitimos el evento
    this.reintentar.emit();
  }
}
