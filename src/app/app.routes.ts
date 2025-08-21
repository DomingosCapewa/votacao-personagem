
import { Routes } from '@angular/router';
import { DetalhePersonagem } from './components/detalhe-personagem/detalhe-personagem';
import { ListaPersonagem } from './components/lista-personagem/lista-personagem';

export const routes: Routes = [
    { path: 'personagens/:id', component: DetalhePersonagem },
    { path: 'personagens', component: ListaPersonagem },
    { path: '*', component: ListaPersonagem },
];
