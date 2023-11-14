import { Component, Injector, OnInit, computed, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { uid } from 'uid';

import { Task } from '../../model/task.model';
import { FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import { StatusFilter } from '../../type/status';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  formTaskCtrl = new FormControl(
    '',
    {
       nonNullable: true,
       validators: [
          Validators.required,
          Validators.pattern('^\\S.*$'),
          Validators.minLength(3),
        ],
    }

  );

  private _tasks = signal<Task[]>([
    {
      id: uid(16),
      title: 'Instalar Angular CLI',
      isCompleted: false
    },
    {
      id: uid(16),
      title: 'Crear proyecto',
      isCompleted: false
    },
    {
      id: uid(16),
      title: 'Crear componente',
      isCompleted: false
    },
    {
      id: uid(16),
      title: 'Crear servicio',
      isCompleted: false
    },
  ]);


  get tasks(): Task[] {
    return this._tasks();
  }


  private _filter = signal<StatusFilter>('all');

  get filter(): string {
    return this._filter();
  }

  //Estados computados o derivados de otros
  private _tasksByFilter = computed(()=>{
    const filter = this.filter;
    const tasks = this.tasks;

    if(filter === 'pending') return tasks.filter((task)=> !task.isCompleted);
    if(filter === 'completed') return tasks.filter((task)=> task.isCompleted);
    return tasks;
  });

  get tasksByFilter():  Task[] {
    return this._tasksByFilter();
  }

  //injector
  injector = inject(Injector)

  ngOnInit(): void {
    this.readLocalStore();
    this.trackTasks();
  }


  trackTasks() {
     //LA funcionalidad del effect es como hacer trakin rastrear cada vez que algo cambia, este no retorna
    // pero permite vigilar espiar una signal
    // Esto va en el contructor, pero si no debe llever el injector
    effect(()=>{
      const tasks = this.tasks;
      localStorage.setItem('tasks', JSON.stringify(tasks));
      console.log('run effect')
    },{injector: this.injector});
  }

  readLocalStore() {
    const store = localStorage.getItem('tasks');
    if(store){
      const tasks = JSON.parse(store);
      this._tasks.set(tasks);
    }
  }
  addTaskHandler(): void {
    //Recibia event: Event
    //const input = event.target as HTMLInputElement;
    //this._tasks().push(this.createTask(input.value));
    if(this.formTaskCtrl.invalid || this.formTaskCtrl.value.trim() === '')return;


    this._tasks.update((task) => [...task, this.createTask(this.formTaskCtrl.value.trim())])
    this.formTaskCtrl.setValue('');
  }


  editingTaskHandler(id: string, event: Event): void {
    const input = event.target as HTMLInputElement;
    this._tasks.update((tasksPrevStatus) =>
      tasksPrevStatus.map((task) =>
        task.id === id ? { ...task, isEditing: false, title: input.value.trim()} : task
      )
    );
    this.formTaskCtrl.setValue('');
  }

  endEditingTaskHandler(id:string): void {
    this._tasks.update((tasksPrevStatus) =>
      tasksPrevStatus.map((task) =>
        task.id === id ? { ...task, isEditing: false } : { ...task, isEditing: false }
      )
    );
  }

  setEditingTask(task:Task): void {
    if(task.isCompleted) return;
    this._tasks.update((tasksPrevStatus) =>
      tasksPrevStatus.map((taskInStatu) =>
        taskInStatu.id === task.id ? { ...taskInStatu, isEditing: true } : { ...taskInStatu, isEditing: false }
      )
    );
  }

  deleteTask(id: string): void {
    this._tasks.update((tasks) => tasks.filter((task) => task.id != id));
  }

  toggleChecked(id: string) {
    this._tasks.update((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  }

  deleteTaskWhithIndex(index: number): void {
    this._tasks.update((tasks) => {
      tasks.splice(index, 1);
      return tasks;
    });
  }

  deleteTaskWhithIndexMoreFilter(index: number): void {
    this._tasks.update((tasks) => tasks.filter((task, position) => position != index));
  }
  private createTask(title: string): Task {
    return {
      id: uid(16),
      title: title,
      isCompleted: false
    };
  }

  changeFilterHandler(filter: StatusFilter): void {
    this._filter.set(filter);
  }
}
