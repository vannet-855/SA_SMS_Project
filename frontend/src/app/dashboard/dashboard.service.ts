import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface DashboardStats {
  totalStudents: number;
  totalTeachers: number;
  totalClasses: number;
  totalSubjects: number;
  feesCollected: number;
  activeExams: number;
  reportsGenerated: number;
  attendanceRate: number;
}

export interface RecentStudent {
  id: number;
  name: string;
  initials: string;
  color: string;
  class: string;
  gender: 'Male' | 'Female';
  feeStatus: 'Paid' | 'Pending' | 'Overdue' | 'Partial';
  enrolled: string;
}

export interface AttendanceTodayRow {
  class: string;
  subject: string;
  percentage: number;
}

export interface UpcomingExam {
  name: string;
  class: string;
  date: string;
  status: 'Active' | 'Pending' | 'Draft';
}


@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private readonly baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  private authHeaders() {
    const token =
      typeof window !== 'undefined' && typeof localStorage !== 'undefined'
        ? localStorage.getItem('edutrack_token')
        : null;

    return {
      Authorization: `Bearer ${token ?? ''}`,
    };
  }

  getStats(): Observable<DashboardStats> {
    return this.http.get<DashboardStats>(
      `${this.baseUrl}/api/dashboard/stats`,
      { headers: this.authHeaders() }
    );
  }

  getRecentStudents(): Observable<RecentStudent[]> {
    return this.http.get<RecentStudent[]>(
      `${this.baseUrl}/api/students/recent`,
      { headers: this.authHeaders() }
    );
  }

  getAttendanceToday(): Observable<AttendanceTodayRow[]> {
    return this.http.get<AttendanceTodayRow[]>(
      `${this.baseUrl}/api/attendance/today`,
      { headers: this.authHeaders() }
    );
  }

  getUpcomingExams(): Observable<UpcomingExam[]> {
    return this.http.get<UpcomingExam[]>(
      `${this.baseUrl}/api/exams/upcoming`,
      { headers: this.authHeaders() }
    );
  }

}

