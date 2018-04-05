import { User } from './user.model';
import {
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  AfterContentInit,
  ComponentFactory,
  ComponentRef
} from '@angular/core';
import { AuthFormComponent } from './auth-form/auth-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentInit {
  title = 'app';
  component: ComponentRef<AuthFormComponent>;
  authFormFactory: ComponentFactory<AuthFormComponent>;
  @ViewChild('entry', {read: ViewContainerRef}) entry: ViewContainerRef;

  constructor(
    private resolver: ComponentFactoryResolver
  ) {}

  ngAfterContentInit() {
    this.authFormFactory = this.resolver.resolveComponentFactory(AuthFormComponent);
  }

  showForm() {
    this.component = this.entry.createComponent(this.authFormFactory);
    this.component.instance.title = 'Create Account';
    this.component.instance.submitted.subscribe((user: User) => {
      console.log(user, 'user');
    });
  }

  deleteForm() {
    this.component.instance.destroyComponent().subscribe(() => {
    this.component.destroy();
    });
  }
}
