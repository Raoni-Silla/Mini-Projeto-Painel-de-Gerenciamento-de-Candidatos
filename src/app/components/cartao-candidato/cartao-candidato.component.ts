import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Candidato } from "src/app/screens/painel/painel.component";

export interface EditarCandidato {
  nomeAntigo: string;
  nomeNovo: string;
}

@Component({
  selector: "app-cartao-candidato",
  templateUrl: "./cartao-candidato.component.html",
  styleUrls: ["./cartao-candidato.component.css"],
})
export class CartaoCandidatoComponent {
  @Input() candidato!: Candidato;
  @Output() deletar = new EventEmitter<string>();
  @Output() aprovar = new EventEmitter<string>();
  @Output() reprovar = new EventEmitter<string>();
  @Output() editar = new EventEmitter<EditarCandidato>();
  nomeCandidato = "";
  exibirModal = false;

  abrirModal() {
    this.exibirModal = true;
  }

  fecharModal() {
    this.exibirModal = false;
    this.nomeCandidato = "";
  }

  confirmarAcao() {
    console.log("Nome digitado:", this.nomeCandidato);
    this.editarNomeCandidato();
    this.fecharModal();
  }

  deletarCandidato() {
    this.deletar.emit(this.candidato.nome);
  }

  aprovarCandidato() {
    this.aprovar.emit(this.candidato.nome);
  }

  reprovarCandidato() {
    this.reprovar.emit(this.candidato.nome);
  }

  editarNomeCandidato() {
    if (!this.nomeCandidato || !this.nomeCandidato.trim()) return;

    const candidato: EditarCandidato = {
      nomeAntigo: this.candidato.nome,
      nomeNovo: this.nomeCandidato.trim(),
    };

    this.editar.emit(candidato);
  }
}
