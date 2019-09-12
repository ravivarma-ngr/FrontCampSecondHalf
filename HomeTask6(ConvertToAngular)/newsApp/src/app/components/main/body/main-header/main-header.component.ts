import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {
  categories: string[] =  ['cnn', 'bbc-news', 'cnbc', 'fortune', 'google-news', 'metro', 'mirror', 'talksport', 'time', 'the-hindu'];
  selectedSourceTitle = 'cnn';

  @Output() selectedSource = new EventEmitter<string>();
  constructor(private router: Router) { }

  ngOnInit() {

  }

  onSelectSource(source: string): void {
    this.selectedSourceTitle = source;
    this.selectedSource.emit(source);
    this.router.navigate(['body', source]);
  }

}
