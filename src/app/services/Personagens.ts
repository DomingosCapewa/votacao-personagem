import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Personagens {
   personagens = [
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

  getPersonagens(){
   return this.personagens
  }
}
