import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-szinvalszto',
  templateUrl: './szinvalszto.component.html',
  styleUrls: ['./szinvalszto.component.css']
})
export class SzinvalsztoComponent {

  @Output() szin = new EventEmitter();
  formSubmitTortent(event:any){
    event.preventDefault();
   // console.log(event.target.elements.szin.value)
   this.szin.emit(event.target.elements.szin.value)
  }
}
