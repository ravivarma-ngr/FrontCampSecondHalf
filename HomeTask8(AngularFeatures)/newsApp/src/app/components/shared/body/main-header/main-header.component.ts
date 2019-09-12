import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { Router } from '@angular/router';
import { MainService } from '../../../../services/main.service';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {
  categories: string[] =  ['cnn', 'bbc-news', 'cnbc', 'fortune', 'google-news', 'metro', 'mirror', 'talksport', 'time', 'the-hindu'];
  selectedSourceTitle = 'cnn';
  // tslint:disable-next-line: no-inferrable-types
  adminFlag: boolean  = false;
  show = true;
  @Output() selectedSource = new EventEmitter<string>();
  constructor(private router: Router , private mainService: MainService) {
  }

  ngOnInit() {
    // this.mainService.loginFlag().subscribe(
    //   (flag) => {
    //     // this.showAdmin(flag);
         this.adminFlag = this.mainService.adminLogedIn;
        //  console.log("adminFlag", this.adminFlag);
    //   }
    // );
  }

  showAdmin(flg) {
    this.adminFlag = flg;
    // this.show = flg;
    console.log(this.adminFlag);
  }

  onSelectSource(source: string): void {
    this.selectedSourceTitle = source;
    this.selectedSource.emit(source);
    this.router.navigate(['body', source]);
  }

}
