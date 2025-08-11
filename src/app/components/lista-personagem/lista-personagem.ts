import { Component } from '@angular/core';
import { CardPersonagem } from '../card-personagem/card-personagem';




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

  personagem: IPersonagem[] = [
    {
      id: 1,
      nome: 'Rick',
      imagem: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      votos: 0
    },
    {
      id: 2,
      nome: 'Morty',
      imagem: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
      votos: 0
    },
    {
      id: 3,
      nome: 'Summer',
      imagem: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
      votos: 0
    },
    {
      id: 4,
      nome: 'Beth',
      imagem: 'https://tse1.mm.bing.net/th/id/OIP.xP1JRhqSRSllNLNsXgxrPQHaJN?r=0&cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3',
      votos: 0
    },
    {
      id: 5,
      nome: 'Krombopulos',
      imagem: 'https://tse1.mm.bing.net/th/id/OIP.unp4tsLC6y4ucyFafg7gwQHaEM?r=0&cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3',
      votos: 0
    },
  ];

  incremetarVotoPersonagem() {
    this.qtdVotosPersonagem++;
  }
}
