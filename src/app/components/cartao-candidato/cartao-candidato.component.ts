import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Candidato } from 'src/app/screens/painel/painel.component';


@Component({
  selector: 'app-cartao-candidato',
  templateUrl: './cartao-candidato.component.html',
  styleUrls: ['./cartao-candidato.component.css']
})
export class CartaoCandidatoComponent {
  
  @Input() candidato!: Candidato;
  @Input() isAprovado = false;
  @Output() aprovarCandidato = new EventEmitter<string>();




}

