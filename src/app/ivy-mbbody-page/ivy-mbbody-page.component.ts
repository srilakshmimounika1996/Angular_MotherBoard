import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { platform, defect } from '../contants';
import { environment } from '../../../src/environments/environment';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-ivy-mbbody-page',
  templateUrl: './ivy-mbbody-page.component.html',
  styleUrls: ['./ivy-mbbody-page.component.scss']
})
export class IvyMbBodyPageComponent implements OnInit {

  constructor(private http: HttpClient,private route: ActivatedRoute) { }
  Platform = platform;
  Defect = defect;
  isExpertTaskPanelDisplay: boolean = false;
  parentTaskPanelData: any = [];
  buttonDisable: boolean = true
  userName:any;
  locationId:any;
  clientId:any;
  contractId:any;
  errorMessage: any
  unitInfo:any;
  unitIdentificationType:any;
  totalExpertDebugList:any;
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
        this.userName = params["userName"];
        this.locationId = params["loc"];
        this.clientId = params["cln"];
        this.contractId = params["con"];
      });

     
  }


  MbDataForm = new FormGroup({
    bcnScanName: new FormControl(""),
    platformDropdown: new FormControl("", Validators.required),
    defectDropdown: new FormControl("", Validators.required)
  })

  changeDropdown(event) {
    this.isExpertTaskPanelDisplay = false;
    this.parentTaskPanelData = []
    if (this.MbDataForm.status == "VALID") {
      this.buttonDisable = false
    }
  }

  onClick() {
    const body = {
      customInstructionType: "EXPERTSYSTEM",
      sourceType: "DEFECTGROUP",
      firstSource: this.MbDataForm.value['defectDropdown'],
      secondSource: "",
      itemId: this.unitInfo.ITEM_ID,
      username: this.userName,
      clientId: this.clientId,
      contractId:  this.contractId,
      locationId: this.locationId,
      clientName: this.unitInfo.CLIENTNAME,
      locName: this.unitInfo.GEONAME,
      contract: this.unitInfo.CONTRACTNAME,
      opt: this.unitInfo.ROUTE,
      workCenter:  this.unitInfo.WORKCENTER
    }
    this.isExpertTaskPanelDisplay = false;
    this.parentTaskPanelData = [];
    this.http.post(environment.api_url + "custominstructions/getPRV2Json", body).subscribe({
      next: (v) => {
        this.parentTaskPanelData.push(v["data"]?.data[0]?.expertDebug);
        this.isExpertTaskPanelDisplay = true;
      },
      error: (e) => {
        this.errorMessage = e.message
      }
    })
  }

  clarTaskpanelData(parentData: any) {
    this.isExpertTaskPanelDisplay = false
    // this.parentTaskPanelData = parentData;
    this.parentTaskPanelData  && this.parentTaskPanelData .map((x,index) => {
      // if (x.defectCode === defectCode) {
          // x.childList && x.childList.map((child, index) => {
              if (index === parentData) {
                  this.parentTaskPanelData.splice(index, 1);
              }
          // })
      // }
  })
  console.log(this.parentTaskPanelData);
  
  }
  addexpertPanel(answerObj) {
    const body = {
      customInstructionType: "EXPERTSYSTEM",
      sourceType: "DEFECTGROUP",
      firstSource: answerObj.answerNewDebugFlow,
      secondSource: "",
      itemId: this.unitInfo.ITEM_ID,
      username: this.userName,
      clientId: this.clientId,
      contractId:  this.contractId,
      locationId: this.locationId,
      clientName: this.unitInfo.CLIENTNAME,
      locName: this.unitInfo.GEONAME,
      contract: this.unitInfo.CONTRACTNAME,
      opt: this.unitInfo.ROUTE,
      workCenter:  this.unitInfo.WORKCENTER
      
    }
    this.http.post(environment.api_url + "custominstructions/getPRV2Json", body).subscribe({
      next: (v) => {
        this.parentTaskPanelData.push(v["data"]?.data[0]?.expertDebug);

        this.isExpertTaskPanelDisplay = true;
      },
      error: (e) => {
        this.errorMessage = e.message
      }
    })

  }
  displayErrorMsg(msg: any) {
    this.errorMessage = msg;
  }

  onInput(event) {
    let firstThreeChar = event.target.value.substring(0, 3);
    let firstFourChar = event.target.value.substring(0, 4);
    let identifierValue = event.target.value.trim();
    this.unitIdentificationType = "SerialNumber";
    let charRegex = /^[A-Za-z]+$/;
    let numberRegex = /^[0-9]+$/;
    if (identifierValue.length >= 4) {
      if (firstThreeChar == "BCN") {
        this.unitIdentificationType = "BCN";
      } else if (identifierValue.length == 7 && numberRegex.test(identifierValue) && charRegex.test(identifierValue)) {
        this.unitIdentificationType = "SerialNumber";
      } else if (identifierValue.length == 11 && numberRegex.test(identifierValue)) {
        this.unitIdentificationType = "FixedAssetTag";
      }

      if (this.unitIdentificationType) {
        this.http.get(environment.api_url + "unitinfo/getUnitInfo?unitIdentificationValue=" + identifierValue + "&identificatorType=" + this.unitIdentificationType + "&locationId=" + this.locationId + "&clientId=" + this.clientId + "&contractId=" + this.contractId).subscribe({
          next: (v) => {
            this.unitInfo = v["data"]
            this.unitInfo["UserName"]=this.userName
            this.http.get(environment.api_url + "metadataprocessor/getJsonReponse?itemId="+identifierValue).subscribe({
              next: (v) => {
                this.totalExpertDebugList = v["data"]
                
              },
              error: (e) => {
                this.errorMessage = e.message
              }
            })
          },
          error: (e) => {
            this.errorMessage = e.message
          }
        })
      }
    }
  }

}
