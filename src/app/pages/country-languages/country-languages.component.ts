// src/app/pages/country-languages/country-languages.component.ts
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { CommonModule } from '@angular/common';

// Angular Material
import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-country-languages',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './country-languages.component.html',
  styleUrls: ['./country-languages.component.css']
})
export class CountryLanguagesComponent implements OnInit {
  displayedColumns: string[] = ['language', 'official'];
  dataSource: any[] = [];

  countryId!: number;
  currentPage = 1;
  pageSize = 10;
  totalElements = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private route: ActivatedRoute,
    private countriesService: CountriesService
  ) {}

  ngOnInit(): void {
    this.countryId = +this.route.snapshot.paramMap.get('countryId')!;
    this.loadLanguages();
  }

  loadLanguages(): void {
    this.countriesService.getLanguagesByCountryId(this.countryId, this.currentPage, this.pageSize)
      .subscribe((response: any) => {
        this.dataSource = response.data;
        this.totalElements = response.totalElements;
      });
  }

  onPageChange(event: PageEvent): void {
    this.currentPage = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.loadLanguages();
  }
}
