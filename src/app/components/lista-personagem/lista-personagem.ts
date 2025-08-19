import { Component, OnDestroy, OnInit } from '@angular/core';
import { CardPersonagem } from '../card-personagem/card-personagem';
import { Personagens } from '../../services/Personagens';





interface IPersonagem {
  id: number;
  nome: string;
  imagem: string;
  totalVotos: number;
}

@Component({
  selector: 'app-lista-personagem',
  imports: [CardPersonagem],
  templateUrl: './lista-personagem.html',
  styleUrl: './lista-personagem.css',
})
export class ListaPersonagem implements OnInit, OnDestroy {
  nomePersonagem = 'Rick Sanchez';
  imagePersonagem = 'https://rickandmortyapi.com/api/character/avatar/1.jpeg';
  qtdVotosPersonagem = 0;

  personagens : IPersonagem[] = [];
  
    
  constructor(private personagensService: Personagens) {  
        console.log('constructor')
  }

  carregarPersonagens() {
    this.personagensService.getPersonagens().subscribe(
      (data: any) => {
        this.personagens = data;
      }
    );
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.carregarPersonagens();
  }
  
  
  incrementarVotoPersonagem(event: { id: number; totalVotos: number }) {
    this.personagensService.adicionarVoto(event.id, event.totalVotos).subscribe(
      (data: any) => {
        console.log('Voto adicionado:', data);
        this.carregarPersonagens();
      },
      (error: any) => {
        console.error('Erro ao adicionar voto:', error);
      }
    );
  }


  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
}
