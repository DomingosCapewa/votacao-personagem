import { Component, input, output } from '@angular/core';


@Component({
  selector: 'app-card-personagem',
  imports: [],
  templateUrl: './card-personagem.html',
  styleUrl: './card-personagem.css',
})
export class CardPersonagem {
  id = input<number>()
  nome = input<string>();
  imagem = input<string>();
  totalVotos = input<number>();
  personagens = input<Array<{ id: number; nome: string; imagem: string; totalVotos: number }>>();

  votou = output<{ id: number; totalVotos: number }>();

}
