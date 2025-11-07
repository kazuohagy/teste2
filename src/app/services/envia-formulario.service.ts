import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnviaFormularioService {

  constructor() { }

  enviaInformacaoPara(info:string){
    console.log("Formulario enviado");
    console.log(info);
  }
}
