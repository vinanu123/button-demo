import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-button',
  template: ` <button (click)="sendData()">{{ data }}</button> `,
  styles: [],
})
export class ButtonComponent implements OnInit {
  @Input() data: any = 'none';
  @Output() send = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  sendData() {
    this.send.emit(this.data);
  }
}
