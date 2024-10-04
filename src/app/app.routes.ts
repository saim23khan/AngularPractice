import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './Components/add-employee/add-employee.component';
import { DatabindingComponent } from './Components/databinding/databinding.component';
import { EmployeeListComponent } from './Components/employee-list/employee-list.component';
import { IforforeachComponent, IforforeachComponentfor } from './Components/iforforeach/iforforeach.component';
import { RoutescomponentpageComponent } from './Components/routescomponentpage/routescomponentpage.component';
import { ControlflowifComponent } from './Components/controlflowif/controlflowif.component';
import { PagePipeComponent } from './Components/page-pipe/page-pipe.component';

export const routes: Routes = [
    {
        path: 'addemployee1' ,
        component: AddEmployeeComponent
    },
    {
        path: 'data-binding' ,
        component: DatabindingComponent
    },
    {
        path: 'employeelist' ,
        component: EmployeeListComponent
    },
    {
        path: 'if-foreach' ,
        component: IforforeachComponent
    },
    {
        path: 'routepage' ,
        component: RoutescomponentpageComponent
    },
    {
        path: 'controlif&elseif',
        component: ControlflowifComponent
    },
    {
        path: 'page-pipe',
        component: PagePipeComponent
    }
];
