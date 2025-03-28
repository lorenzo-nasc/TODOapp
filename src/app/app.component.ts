import { Component } from '@angular/core';
import { Tarefa } from "./tarefa";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TODOapp';

  arrayDeTarefas: Tarefa[] = [];

  constructo() {
    this.READ_tarefas();
  }

  READ_tarefas() {
    this.arrayDeTarefas = [
      new Tarefa("Estudar Frameworks", false),
      new Tarefa("Comer Pizza", false), 
      new Tarefa("Ajudar meus pais", false)
    ]
  }
}
