import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent {

PropertyArray : any[] = [];
isResultLoaded= false;
isUpdateFormActive = false;


propertyAddress: string = "";
propertyRentedStatus: string = "";
propertyContactNumber: number =0;
currentPropertyId = "";

constructor (private http: HttpClient)
{
  this.getAllProperties();
}

 getAllProperties()
  {

    this.http.get("http://localhost:8082/api/v1/property/getAllProperties")

    .subscribe((resultData: any)=>
    {
        this.isResultLoaded = true;
        console.log(resultData);
        this.PropertyArray = resultData;
    });
  }
  register()
  {

    let bodyData = {
      "propertyAddress" : this.propertyAddress,
      "propertyRentedStatus" : this.propertyRentedStatus,
      "propertyContactNumber" : this.propertyContactNumber
    };
    this.http.post("http://localhost:8082/api/v1/property/save",bodyData,{responseType: 'text'}).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Property Added Successfully");
        this.getAllProperties();

        this.propertyAddress = '';
        this.propertyRentedStatus = '';
        this.propertyContactNumber  = 0;
    });
  }
  setUpdate(data: any)
  {
   this.propertyAddress = data.propertyAddress;
   this.propertyRentedStatus = data.propertyRentedStatus;
   this.propertyContactNumber = data.propertyContactNumber;
   this.currentPropertyId = data.propertyId;
  }


  UpdateRecords()
  {
    let bodyData = {
      "propertyId" : this.currentPropertyId,
      "propertyAddress" : this.propertyAddress,
      "propertyRentedStatus" : this.propertyRentedStatus,
      "propertyContactNumber" : this.propertyContactNumber
    };

    this.http.put("http://localhost:8082/api/v1/property/update",bodyData,{responseType: 'text'}).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Property Details Updated")
        this.getAllProperties();
        this.propertyAddress = '';
        this.propertyRentedStatus = '';
        this.propertyContactNumber  = 0;
    });
  }
  save()
  {
    if(this.currentPropertyId == "")
    {
        this.register();
    }
      else
      {
       this.UpdateRecords();
      }
  }


  setDelete(data: any)
  {

    this.http.delete("http://localhost:8082/api/v1/property/delete"+ "/"+ data.propertyId,{responseType: 'text'}).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Property Deleted")
        this.getAllProperties();

        this.propertyAddress = '';
        this.propertyRentedStatus = '';
        this.propertyContactNumber  = 0;

    });
  }
}


