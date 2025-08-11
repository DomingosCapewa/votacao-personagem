import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-card-personagem',
  imports: [],
  templateUrl: './card-personagem.html',
  styleUrl: './card-personagem.css',
})
export class CardPersonagem {
  nome = input<string>();
  imagem = input<string>();
  totalVotos = input<number>();
  personagens = input<Array<{ nome: string; imagem: string; votos: number }>>();

  votou = output();
}
