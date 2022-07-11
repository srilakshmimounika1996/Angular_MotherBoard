import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { platform, defect } from '../contants';
import { environment } from '../../../src/environments/environment';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-ivy-mbbody-page',
  templateUrl: './ivy-mbbody-page.component.html',
  styleUrls: ['./ivy-mbbody-page.component.scss']
})
export class IvyMbBodyPageComponent implements OnInit {

  constructor(private http: HttpClient, private route: ActivatedRoute, private spinnerService: NgxSpinnerService) { }
  Platform = platform;
  Defect = defect;
  isExpertTaskPanelDisplay: boolean = false;
  parentTaskPanelData: any = [];
  buttonDisable: boolean = true
  userName: any;
  locationId: any;
  clientId: any;
  contractId: any;
  errorMessage: any
  unitInfo: any;
  unitIdentificationType: any;
  totalExpertDebugList: any;
  @Output() unitData = new EventEmitter<object>();
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.userName = params["userName"];
      this.locationId = params["loc"];
      this.clientId = params["cln"];
      this.contractId = params["con"];
    });
  }


  MbDataForm = new FormGroup({
    bcnScanName: new FormControl("", Validators.required),
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
      secondSource: "Bydgoszcz|DELL|MB|MB|DELL_MB",
      itemId:"302607351",
      username: this.userName,
      clientId:"17302",
      contractId: "10375",
      locationId: "1444",
      clientName:"DELL",
      locName: "Bydgoszcz",
      contract: "MB",
      opt: "MB",
      workCenter: "DELL_MB"
    }
    this.isExpertTaskPanelDisplay = false;
    this.parentTaskPanelData = [];
    this.spinnerService.show();
    this.http.post(environment.api_url + "custominstructions/getPRV2Json", body).subscribe({
      next: (v: any) => {
        if (v["status"]) {
          this.spinnerService.hide();
          this.parentTaskPanelData.push(v["data"]?.data[0]?.expertDebug);
          this.isExpertTaskPanelDisplay = true;
        } else {
          this.spinnerService.hide();
          this.errorMessage = v.message
        }
      },
      error: (e) => {
        this.errorMessage = e.message
      }
    })
  }

  clarTaskpanelData(parentData: any) {
    this.isExpertTaskPanelDisplay = false;
    this.parentTaskPanelData && this.parentTaskPanelData.map((x, index) => {
      if (index === parentData) {
        this.parentTaskPanelData.splice(index, 1);
      }
    });
  }

  addexpertPanel(answerObj) {
    const body = {
      customInstructionType: "EXPERTSYSTEM",
      sourceType: "DEFECTGROUP",
      firstSource: this.MbDataForm.value['defectDropdown'],
      secondSource: "Bydgoszcz|DELL|MB|MB|DELL_MB",
      itemId:"302607351",
      username: this.userName,
      clientId:"17302",
      contractId: "10375",
      locationId: "1444",
      clientName:"DELL",
      locName: "Bydgoszcz",
      contract: "MB",
      opt: "MB",
      workCenter: "DELL_MB"

    }
    this.spinnerService.show();
    this.http.post(environment.api_url + "custominstructions/getPRV2Json", body).subscribe({
      next: (v: any) => {
        if (v["status"]) {
          this.parentTaskPanelData.push(v["data"]?.data[0]?.expertDebug);
          this.spinnerService.hide();
          this.isExpertTaskPanelDisplay = true;
        } else {
          this.spinnerService.hide();
          this.errorMessage = v.message
        }
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
        this.spinnerService.show();
        this.http.get(environment.api_url + "unitinfo/getUnitInfo?unitIdentificationValue=" + identifierValue + "&identificatorType=" + this.unitIdentificationType + "&locationId=" + this.locationId + "&clientId=" + this.clientId + "&contractId=" + this.contractId).subscribe({
          next: (v: any) => {
            if (v["status"]) {
              this.unitInfo = v["data"];
              this.unitData.emit(this.unitInfo);
              this.unitInfo["UserName"] = this.userName
              this.http.get(environment.api_url + "metadataprocessor/getJsonReponse?itemId=" + identifierValue).subscribe({
                next: (v: any) => {
                  if (v["status"]) {
                    this.totalExpertDebugList = v["data"]
                    this.spinnerService.hide();
                  } else {
                    this.spinnerService.hide();
                  }
                },
                error: (e) => {
                  this.spinnerService.hide();
                  this.errorMessage = e.message
                }
              })
            } else {
              this.spinnerService.hide();
              this.errorMessage = v.message
            }
          },
          error: (e) => {
            this.spinnerService.hide();
            this.errorMessage = e.message
          }
        })
      }
    }
  }

}
