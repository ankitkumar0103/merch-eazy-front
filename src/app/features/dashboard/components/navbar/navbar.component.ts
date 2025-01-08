import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  template: `
    <div class="navbar bg-base-100 gap-2">
      <button class="btn btn-ghost btn-">
        <i class="fa-solid fa-bars fa-lg"></i>
      </button>
      <p class="text-lg font-bold">Hello, Ankit</p>
      <span class="flex-1"></span>
      <div class="flex-none">
        <div class="dropdown dropdown-end">
          <div
            tabindex="0"
            role="button"
            class="btn btn-ghost btn-circle avatar"
          >
            <div class="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a class="justify-between">
                Profile
                <span class="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class NavbarComponent {}
