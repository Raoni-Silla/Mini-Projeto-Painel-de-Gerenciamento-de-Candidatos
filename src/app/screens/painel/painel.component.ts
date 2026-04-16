import { Component } from "@angular/core";
import { EditarCandidato } from "src/app/components/cartao-candidato/cartao-candidato.component";

export interface Candidato {
  nome: string;
  aprovado: boolean;
}

@Component({
  selector: "app-painel",
  templateUrl: "./painel.component.html",
  styleUrls: ["./painel.component.css"],
})
export class PainelComponent {
  candidatos: Candidato[] = [];
  nomeNovoCandidato = "";
  exibirNotificacao = false;
  filtroAtual: string = "todos";
  isDuplicado = false;

  criarCandidato(): Candidato {
    return {
      nome: this.nomeNovoCandidato,
      aprovado: false,
    };
  }

  verificarDuplicado(){
     if(this.candidatos.find((c) => c.nome.trim().toLowerCase() === this.nomeNovoCandidato.trim().toLowerCase())){
        this.isDuplicado = true;
      }else{ this.isDuplicado = false}
  }

  adicionarCandidato() {
    if (this.nomeNovoCandidato.trim().length >= 3 ) {
      this.verificarDuplicado();
      if(this.isDuplicado){
        return;
      }
      let novoCandidato: Candidato = this.criarCandidato();
      this.candidatos.push(novoCandidato);
      this.nomeNovoCandidato = "";
    }
  }

  aprovarCandidato(nome: string) {
    const candidato = this.candidatos.find((c) => c.nome === nome);
    if (candidato) {
      candidato.aprovado = true;
    }
  }

  reprovarCandidato(nome: string) {
    const candidato = this.candidatos.find((c) => c.nome === nome);
    if (candidato) {
      candidato.aprovado = false;
    }
  }

  excluirCandidato(nome: string) {
    this.candidatos = this.candidatos.filter((c) => c.nome !== nome);
    this.exibirNotificacao = true;
    setTimeout(() => (this.exibirNotificacao = false), 3000);
  }

  editarNomeCandidato(editarNome: EditarCandidato) {
    const candidato = this.candidatos.find(
      (c) => c.nome === editarNome.nomeAntigo,
    );
    if (candidato && editarNome.nomeNovo.trim().length >= 3) {
      candidato.nome = editarNome.nomeNovo;
    }
  }

  filtrarTodos() {
    this.filtroAtual = "todos";
  }
  filtrarAprovados() {
    this.filtroAtual = "aprovados";
  }
  filtrarReprovados() {
    this.filtroAtual = "reprovados";
  }

  candidatosFiltrados() {
  if (this.filtroAtual === 'aprovados') {
    return this.candidatos.filter(c => c.aprovado);
  }

  if (this.filtroAtual === 'reprovados') {
    return this.candidatos.filter(c => !c.aprovado);
  }

  return this.candidatos;
}
}
