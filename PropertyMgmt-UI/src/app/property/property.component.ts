import { Component } from '@angular/core';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent {

PropertyArray : any[] = [];


propertyAddress: string = "";
propertyRentedStatus: string = "";
propertyContactNumber: number =0;

propertyId = "";

}


