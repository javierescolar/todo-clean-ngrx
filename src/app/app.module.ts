import { isDevMode, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { ROOT_EFFECTS, ROOT_REDUCERS } from './app.state';
import { TodoRepositoy } from './todos/domain/todo.repository';
import { TodoMockService } from './todos/infrastucture/mock/services/todo-mock.service';
import { AddTodoComponent } from './todos/ui/add-todo/add-todo.component';
import { TodoComponent } from './todos/ui/todo/todo.component';
import { TodosComponent } from './todos/ui/todos.component';

@NgModule({
  declarations: [AppComponent, TodosComponent, TodoComponent, AddTodoComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    EffectsModule.forRoot(ROOT_EFFECTS),
    StoreDevtoolsModule.instrument({ logOnly: isDevMode(), maxAge: 25 }),
  ],
  providers: [
    {
      provide: TodoRepositoy,
      useClass: TodoMockService,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
