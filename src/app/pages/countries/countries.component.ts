import { Component, OnInit, ViewChild } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// Angular Material imports
import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-countries',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
  ],
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  countries: any[] = [];
  displayedColumns: string[] = ['name', 'area', 'countryCode2', 'actions'];

  // Pagination variables
  currentPage: number = 1;
  pageSize: number = 10;
  totalPages: number = 0;
  totalElements: number = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private countriesService: CountriesService, private router: Router) {}

  ngOnInit(): void {
    this.loadCountries();
  }

  loadCountries(): void {
    this.countriesService.getAllCountries(this.currentPage, this.pageSize)
      .subscribe((response: any) => {
        this.countries = response.data;
        this.totalPages = response.totalPages;
        this.totalElements = response.totalElements;
      });
  }

  onPageChange(event: PageEvent): void {
    this.currentPage = event.pageIndex + 1; // pageIndex is zero-based
    this.pageSize = event.pageSize;
    this.loadCountries();
  }

  goToLanguages(code: string): void {
    this.router.navigate(['/countries', code, 'languages']);
  }
}
