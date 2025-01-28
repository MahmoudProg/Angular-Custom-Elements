import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'my-popup',
  standalone: false,

  templateUrl: './my-popup.component.html',
  styleUrl: './my-popup.component.scss'
})
export class MyPopupComponent {
  @ViewChild('UserName') UserName!: ElementRef;
  @ViewChild('UserPass') UserPass!: ElementRef;
  @Input() message : string = ''
  
  onClickButton(){
    let UserName = this.UserName.nativeElement.value
    let UserPass = this.UserPass.nativeElement.value
    if (UserName == 'Admin' && UserPass == '123'){
      alert('Welcome To my Angular !')
    }else{
      alert('Error To Login With Angular !')
    }
  }
}
