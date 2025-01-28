import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'my-popup',
  standalone: false,

  templateUrl: './my-popup.component.html',
  styleUrl: './my-popup.component.scss'
})
export class MyPopupComponent {
  @ViewChild('UserName') UserName!: ElementRef;
  @ViewChild('UserPass') UserPass!: ElementRef;
  @Input() message: string = ''
  @Output() OutPut_UserName = new EventEmitter<string>();
  @Output() OutPut_UserPassword = new EventEmitter<string>();
  @Output() OutPut_Array = new EventEmitter<any>();

  onClickButton() {
    let UserName = this.UserName.nativeElement.value
    let UserPass = this.UserPass.nativeElement.value
    this.OutPut_UserName.emit(UserName);
    this.OutPut_UserPassword.emit(UserPass);
    this.OutPut_Array.emit(
      [
        {
          UserName: UserName,
          UserPass: UserPass,
        },
        {
          UserName: UserName,
          UserPass: UserPass,
        },
        {
          UserName: UserName,
          UserPass: UserPass,
        },
      ]
    )
  }
}
