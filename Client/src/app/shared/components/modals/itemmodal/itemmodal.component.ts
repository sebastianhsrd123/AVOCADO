import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-itemmodal',
  templateUrl: './itemmodal.component.html',
  styleUrls: ['./itemmodal.component.css']
})
export class ItemmodalComponent {

  @Input() title = '';
  
  public show = false;

  changeStatusModal(){
    if(this.show == true){
      this.show = false;
    }
    else{
      this.show = true;
    }
  }

}
