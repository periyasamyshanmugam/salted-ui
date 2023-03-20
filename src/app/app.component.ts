import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public name: string = '';
  public result: any;

  constructor(private appService: AppService) {}

  /**
   * Method will be called on button click
   */
  public onSubmit() {
    console.log('this is called');
    this.appService.getGender(this.name).subscribe((data) => {
      console.log(data);
      this.result = data?.message;
    });
  }
}
