import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-extras',
  templateUrl: './extras.component.html',
  styleUrls: ['./extras.component.scss']
})
export class ExtrasComponent implements OnInit, OnDestroy, AfterViewInit {
  welcomeMessage= 'ngOnInit initial message!';

  constructor() {
    console.log("constructor")
    
  }

  ngOnInit() {
    console.log(this.welcomeMessage);
  }

  ngOnDestroy() {
   console.log('ngOnDestroy: Bye, bye, my friend!')
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit: Can do stuff after TitleCardComponent initialized');
  }
}
