import { Component } from '@angular/core';

@Component({
  selector: 'app-for',
  imports: [],
  templateUrl: './for.component.html',
  styleUrl: './for.component.css'
})
export class ForComponent {

    professores: string[] = ["Saulo", "Mirian", "Tadã", "Edshow", "Janas", "ROBERTOOOO", "ARDIDO", "GUIGAS", "Debolindíssima"];

    listaTarefas: any[] = [{"id": 1, "nome" : "Varrer o chão", "concluido" : false}, {"id" : 2, "nome" : "LockPick", "concluido" : true}, {"id" : 3, "nome" : "Rasteira no nargas", "concluido" : true}];

    remover(index: number){
      this.professores.splice(index, 1);
    }

    mostrarConcluido(item: any){
      if (item.concluido == true){

      }
    }


    mostraTudo: boolean = false;
    text: string = "Mostrar Tudo";
    mostrarTudo(){
      if(this.mostraTudo == false){
        this.mostraTudo = true;
        this.text = "Mostrar Concluidos";
      }
      else{
        this.mostraTudo = false;
        this.text = "Mostrar tudo";
      }
    }





}
