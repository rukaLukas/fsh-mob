import { TipoAtendimentoProvider } from './../../providers/tipo-atendimento/tipo-atendimento.provider';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IniciarPage } from './iniciar';

@NgModule({
  declarations: [
    IniciarPage,
  ],
  imports: [
    IonicPageModule.forChild(IniciarPage)
  ],
  providers:[
    TipoAtendimentoProvider
  ]
})
export class IniciarPageModule {}
