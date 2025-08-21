import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { IPersonagem, Personagens } from '../../services/Personagens';
import { CardPersonagem } from "../card-personagem/card-personagem";

@Component({
  selector: 'app-detalhe-personagem',
  imports: [CommonModule, CardPersonagem],
  templateUrl: './detalhe-personagem.html',
  styleUrl: './detalhe-personagem.css'
})
export class DetalhePersonagem implements OnInit {
  personagem?: IPersonagem;

  constructor(private route: ActivatedRoute, private personagensService: Personagens) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pegarPersonagemPorId(id);
  }

  ngOnInit(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pegarPersonagemPorId(id);
  }

  pegarPersonagemPorId(id: number) {  debugger;
    this.personagensService.getPersonagemPorId(id).subscribe(
      {
         next:(data: IPersonagem) => {
      
        this.personagem = data;
      },
      error: (error: any) => {
        console.log('Erro ao buscar personagem', error)
      }
      }
    
    );
  }

}
