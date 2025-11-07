import { Component, inject } from '@angular/core';
import { EnviaFormularioService } from '../../services/envia-formulario.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private enviaFormularioService = inject(EnviaFormularioService);
  meuBoleano = false;
  idButton= "mario";
  devMostrarTitulo = false;
  meuTitulo = "Meu Primeiro App com Angular";
  listItems = [{id:"1",nome:"Gustavo"},{id:"2",nome:"Kazuo"},{id:"3",nome:"Silva"}];

  atualizaBoleano(valor: boolean){
    this.meuBoleano = valor;
  }
  submit(){
    console.log("merda")

  }
}
