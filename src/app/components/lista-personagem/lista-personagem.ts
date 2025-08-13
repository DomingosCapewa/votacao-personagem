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

  personagens: IPersonagem[] = [
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
      imagem: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
      votos: 0
    },
    {
      id: 5,
      nome: 'Krombopulos',
      imagem: 'https://rickandmortyapi.com/api/character/avatar/10.jpeg',
      votos: 0
    },
  ];

  incremetarVotoPersonagem(id: number) {
    const personagem = this.personagens.find((personagem) => personagem.id === id );
    personagem!.votos++;
    console.log(personagem)
  }
}
