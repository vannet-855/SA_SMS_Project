import { Component, Input, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import {
  DashboardService,
  DashboardStats,
  RecentStudent,
  AttendanceTodayRow,
  UpcomingExam,
} from './dashboard.service';
import { SidebarComponent } from './sidebar.component';
import { TopbarComponent } from './topbar.component';

@Component({
  selector: 'app-stat-card',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  template: `
    <div class="stat">
      <div class="stat__label">{{ label }}</div>
      <div class="stat__value">
        <ng-container *ngIf="!currency; else money">{{ value }}</ng-container>
        <ng-template #money>{{ value | currency:'USD':'symbol':'1.0-1' }}</ng-template>
        <span *ngIf="suffix" class="stat__suffix">{{ suffix }}</span>
      </div>
      <div class="stat__trend" [ngClass]="'stat__trend--' + color">
        {{ trend }}
      </div>
      <div class="stat__line" [ngClass]="'stat__line--' + color"></div>
    </div>
  `,
  styles: [
    `
      .stat {
        background: var(--bg-card);
        border: 1px solid rgba(255,255,255,0.06);
        border-radius: 16px;
        padding: 16px;
      }
      .stat__label { color: var(--text-muted); font-weight: 900; font-size: 12px; }
      .stat__value { margin-top: 8px; font-weight: 1000; font-size: 26px; letter-spacing: 0.2px; color: var(--text-primary); }
      .stat__suffix { font-size: 16px; margin-left: 4px; color: var(--text-muted); }
      .stat__trend { margin-top: 10px; font-weight: 900; font-size: 12.5px; }
      .stat__trend--green { color: var(--accent-green); }
      .stat__trend--orange { color: var(--accent-orange); }
      .stat__trend--red { color: var(--accent-red); }
      .stat__trend--blue { color: var(--accent-blue); }
      .stat__line { height: 4px; border-radius: 999px; margin-top: 10px; background: rgba(255,255,255,0.06); overflow:hidden; }
      .stat__line--green { background: rgba(34,197,94,0.55); }
      .stat__line--orange { background: rgba(249,115,22,0.55); }
      .stat__line--red { background: rgba(239,68,68,0.55); }
      .stat__line--blue { background: rgba(59,130,246,0.55); }
    `,
  ],
})
export class StatCardComponent {
  @Input() label = '';
  @Input() value: number | string = 0;
  @Input() trend = '';
  @Input() color: 'green' | 'orange' | 'red' | 'blue' = 'green';
  @Input() currency = false;
  @Input() suffix = '';
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, SidebarComponent, TopbarComponent, StatCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  loading = true;

  stats: DashboardStats = {
    totalStudents: 0,
    totalTeachers: 0,
    totalClasses: 0,
    totalSubjects: 0,
    feesCollected: 0,
    activeExams: 0,
    reportsGenerated: 0,
    attendanceRate: 0,
  };

  recentStudents: RecentStudent[] = [];
  attendanceToday: AttendanceTodayRow[] = [];
  upcomingExams: UpcomingExam[] = [];

  constructor(private dashboard: DashboardService) {}

  ngOnInit(): void {
    this.load();
  }

  private async load(): Promise<void> {
    this.loading = true;
    try {
      const [stats, recent, attendance, exams] = await Promise.all([
        this.dashboard.getStats().toPromise(),
        this.dashboard.getRecentStudents().toPromise(),
        this.dashboard.getAttendanceToday().toPromise(),
        this.dashboard.getUpcomingExams().toPromise(),
      ]);

      if (stats) this.stats = stats;

      this.recentStudents = Array.isArray(recent) ? recent : [];
      this.attendanceToday = Array.isArray(attendance) ? attendance : [];
      this.upcomingExams = Array.isArray(exams) ? exams : [];

    } finally {
      this.loading = false;
    }
  }

  avatarColor(initials: string): 'green' | 'blue' | 'red' | 'purple' {
    const i = (initials ?? '').charCodeAt(0) || 0;
    return (i % 4) === 0 ? 'green' : (i % 4) === 1 ? 'blue' : (i % 4) === 2 ? 'red' : 'purple';
  }



  feeBadgeClass(status: RecentStudent['feeStatus']): string {

    switch (status) {
      case 'Paid':
        return 'pill pill--green';
      case 'Pending':
        return 'pill pill--yellow';
      case 'Overdue':
        return 'pill pill--red';
      case 'Partial':
        return 'pill pill--purple';
      default:
        return 'pill';
    }
  }


  examStatusClass(status: UpcomingExam['status']): string {
    switch (status) {
      case 'Active':
        return 'status status--blue';
      case 'Pending':
        return 'status status--orange';
      case 'Draft':
        return 'status status--gray';
      default:
        return 'status';
    }
  }

  attendanceBarColor(pct: number): string {
    if (pct >= 90) return 'bar bar--green';
    if (pct >= 75) return 'bar bar--yellow';
    if (pct >= 60) return 'bar bar--orange';
    return 'bar bar--red';
  }
}


