import { Component } from '@angular/core';
import { CardPersonagem } from '../card-personagem/card-personagem';
import { Personagens } from '../../services/Personagens';





interface IPersonagem {
  id: number;
  nome: string;
  imagem: string;
  votos: number;
}

@Component({
  selector: 'app-lista-personagem',
  imports: [CardPersonagem],
  templateUrl: './lista-personagem.html',
  styleUrl: './lista-personagem.css',
})
export class ListaPersonagem {
  nomePersonagem = 'Rick Sanchez';
  imagePersonagem = 'https://rickandmortyapi.com/api/character/avatar/1.jpeg';
  qtdVotosPersonagem = 0;

  personagens : IPersonagem[] = [];
  
    
  constructor(private personagensService: Personagens) {  
    this.personagens = this.personagensService.getPersonagens();
  }


  incremetarVotoPersonagem(id: number) {
    this.personagensService.adicionarVoto(id);
  }
}
