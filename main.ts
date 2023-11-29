import { setRandomValues } from "./utils/randomValues";
import { Scheduler } from "./src/scheduler";
import { Task } from "./src/task";

const forTask4 = setRandomValues()
const forTask5 = setRandomValues()
const forTask6 = setRandomValues()

const task1 = new Task('Tarefa A', 0, 5);
const task2 = new Task('Tarefa B', 2, 3);
const task3 = new Task('Tarefa C', 4, 2);
const task4 = new Task('Tarefa D', forTask4.start, forTask4.end);
const task5 = new Task('Tarefa E', forTask5.start, forTask5.end);
const task6 = new Task('Tarefa F', forTask6.start, forTask6.end);

const scheduler = new Scheduler([task1, task2, task3]);
const schedulerWithRandomPriority = new Scheduler([task4, task5, task6]);

console.log("===================== Tarefas com prioridades definidas pelo Usuário ===================")
scheduler.runFCFS();
console.log("===================== Tarefas com prioridades definidas pelo Sistema ===================")
schedulerWithRandomPriority.runFCFS()