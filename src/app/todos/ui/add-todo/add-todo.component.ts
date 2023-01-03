import { AppState } from 'src/app/app.state';

import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { addTodo } from '../../application/store/todo.actions';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent {
  addForm: FormGroup;

  constructor(private readonly store: Store<AppState>) {
    this.addForm = new FormGroup({
      description: new FormControl('', Validators.required),
    });
  }

  add(): void {
    this.store.dispatch(
      addTodo({
        dto: {
          description: this.addForm.get('description')!.value,
        },
      })
    );
    this.reset();
  }

  reset(): void {
    this.addForm.reset({ description: '' });
  }
}
