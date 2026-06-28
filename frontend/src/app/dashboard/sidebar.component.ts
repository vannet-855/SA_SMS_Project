import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

declare const localStorage: Storage | undefined;




@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],

  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  userInitials = 'JD';
  userName = 'John Doe';
  userRole = 'Administrator';







  navMain = [

    { label: 'Dashboard', route: '/dashboard', badge: null },
    { label: 'Students', route: '/dashboard', badge: '1,247' },
    { label: 'Teachers', route: '/dashboard', badge: null },
    { label: 'Classes', route: '/dashboard', badge: null },
    { label: 'Subjects', route: '/dashboard', badge: null },
  ];


  navAcademic = [
    { label: 'Attendance', route: '/dashboard', badge: '3' },
    { label: 'Exams', route: '/dashboard', badge: null },
    { label: 'Timetable', route: '/dashboard', badge: null },
  ];

  navFinance = [
    { label: 'Fees', route: '/dashboard', badge: null },
    { label: 'Payments', route: '/dashboard', badge: null },
  ];

  navSystem = [
    { label: 'Reports', route: '/dashboard', badge: null },
    { label: 'User Management', route: '/dashboard', badge: null },
    { label: 'Notifications', route: '/dashboard', badge: '7' },
    { label: 'Audit Logs', route: '/dashboard', badge: null },
    { label: 'Settings', route: '/dashboard', badge: null },
  ];

  logout(): void {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      localStorage.removeItem('edutrack_token');
    }
    // Navigation handled by guard on next route.
  }

}


