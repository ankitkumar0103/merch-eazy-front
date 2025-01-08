import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-home',
  imports: [RouterModule, NavbarComponent, CommonModule],
  template: `<div class="drawer drawer-open">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <button class="btn btn-ghost" (click)="toggleSidebar()">
        Toggle Sidebar
      </button>
      <app-navbar></app-navbar>
      <div class="mx-4"><router-outlet></router-outlet></div>
    </div>
    <div class="drawer-side !relative !overflow-visible">
      <label
        for="my-drawer-2"
        aria-label="close sidebar"
        class="drawer-overlay"
      ></label>
      <ul class="menu bg-base-200 text-base-content min-h-full p-4">
        <p class="text-center text-lg font-bold mb-4">
          @if(isSidebarCollapsed){ ME } @else { MerchEazy }
        </p>
        <!-- Sidebar content here -->
        @for (item of menuItems; track item.label) {
        <li
          class="tooltip tooltip-right"
          [attr.data-tip]="isSidebarCollapsed ? item.label : null"
        >
          <a
            [routerLink]="item.routerLink"
            routerLinkActive="active-link"
            class="flex flex-col"
            ><i
              [ngClass]="[
                item.icon,
                isSidebarCollapsed ? 'text-base' : 'text-2xl'
              ]"
            ></i
            >@if(!isSidebarCollapsed) {<span class="text-xs">{{
              item.label
            }}</span
            >}</a
          >
        </li>
        }
      </ul>
    </div>
  </div>`,
  styles: `
  .active-link {
  @apply bg-neutral text-white;
}`,
})
export class DashboardHomeComponent {
  isSidebarCollapsed = false;
  menuItems = [
    {
      label: 'Dashboard',
      icon: 'fa-solid fa-chart-pie',
      routerLink: 'dashboard',
    },
    { label: 'Orders', icon: 'fa-solid fa-box', routerLink: 'orders' },
  ];

  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
}
