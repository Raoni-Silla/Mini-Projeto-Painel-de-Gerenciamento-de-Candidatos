import { Component } from "@angular/core";

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

  criarCandidato(): Candidato {
    return {
      nome: this.nomeNovoCandidato,
      aprovado: false,
    };
  }

  adicionarCandidato() {
    let novoCandidato : Candidato = this.criarCandidato();
    this.candidatos.push(novoCandidato);
  }

  filtrarListaAprovados(): Candidato[]{
    const aprovados = this.candidatos.filter((candidato) => candidato.aprovado)
    return aprovados;
  }

  filtrarListaReprovados(): Candidato []{
    const reprovados = this.candidatos.filter((candidato) => !candidato.aprovado)
    return reprovados;
  }

}
