import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Personagens implements OnInit {
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

   private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient){}

   ngOnInit() {
  }

  getPersonagens(){
      return this.http.get(`${this.apiUrl}/personagens`);
  }

  adicionarVoto(idDoPersonagem: number, totalVotos: number)
  {
    
    // const personagem = this.personagens.find(p => p.id === idDoPersonagem);
    // if (personagem) {
    //   personagem.votos += 1;
    // }
    return this.http.patch(`${this.apiUrl}/personagens/${idDoPersonagem}`, { totalVotos: totalVotos + 1 });
  }

}
