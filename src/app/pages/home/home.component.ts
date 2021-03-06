import { Component, OnInit } from '@angular/core';
import { TranslateConfigService } from '../../services/translate-config.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  a = 2;
  b = 1;

  constructor(private translateConfigService: TranslateConfigService) {}

  ngOnInit(): void {
    
  }

  
  changeValue1(){
    this.a = this.a + 1;
  }

  changeValue2(){
    this.b = this.b + 1;
  }

  changeLanguage(type: string) {
    this.translateConfigService.changeLanguage(type);
  }
}
