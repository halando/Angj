import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-doboz',
  templateUrl: './doboz.component.html',
  styleUrls: ['./doboz.component.css']
})
export class DobozComponent {
  eppenMozgatvaVan = false;
  @Input() xPozicio =0;
  @Input() yPozicio =0;
  @Input() szin= "purple";
dobozdragVege(){
  this.eppenMozgatvaVan=false;
}
dobozdragfolyamatban(event:any){
  if(this.eppenMozgatvaVan){
    console.log(event)
    this.xPozicio=event.clientX-150;
    this.yPozicio=event.clientY-100;
  }

}
}
