import { Task } from "./task";

export class Scheduler {
  private tasks: Task[];

  constructor(tasks: Task[]) {
    this.tasks = tasks;
  }

  public runFCFS(): void {
    let currentTime = 0;

    // Ordenar as tarefas com base no tempo de chegada (FCFS)
    this.tasks.sort((currentTast, nextTask) => currentTast.arrivalTime - nextTask.arrivalTime);
    
    const logFn = () => this.tasks.map(task => console.log(task))
    logFn()

    // Executar as tarefas na ordem
    this.tasks.forEach((task) => {
      // Aguardar até o tempo de chegada, se necessário
      if (currentTime < task.arrivalTime) {
        currentTime = task.arrivalTime;
      }

      // Executar a tarefa
      console.log(`Executando ${task.name} a partir do tempo ${currentTime}`);

      currentTime += task.executionTime;
    });
  }
}

