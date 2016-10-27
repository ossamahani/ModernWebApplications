import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">{{title}}</a>
        </div>
        <ul class="nav navbar-nav">
          <li class="active"><a routerLink="/dashboard">Dashboard</a></li>
          <li><a routerLink="/products">CDs</a></li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `
  //styleUrls: ['app/app.component.css']
})
export class AppComponent {
  title = 'CD Shop';
}
