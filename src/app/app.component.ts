import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AddEmployeeComponent } from './Components/add-employee/add-employee.component';
import { EmployeeListComponent } from './Components/employee-list/employee-list.component';
import { DatabindingComponent } from './Components/databinding/databinding.component';
import { IforforeachComponent } from './Components/iforforeach/iforforeach.component';
import { RoutescomponentpageComponent } from './Components/routescomponentpage/routescomponentpage.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,AddEmployeeComponent,EmployeeListComponent,DatabindingComponent,IforforeachComponent,RoutescomponentpageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularPractice';
}
