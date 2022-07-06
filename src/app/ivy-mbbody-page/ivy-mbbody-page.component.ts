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
  errorMessage: any
  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.userName=params["userName"];
      }
    );
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
      itemId: "302607351",
      username: this.userName,
      clientId: "17302",
      contractId: "10375",
      locationId: "1444",
      clientName: "DELL",
      locName: "Bydgoszcz",
      contract: "CAR",
      opt: "DCAR",
      workCenter: "DELL_CAR_DEBUG"
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
      itemId: "302607351",
      username: this.userName,
      clientId: "17302",
      contractId: "10375",
      locationId: "1444",
      clientName: "DELL",
      locName: "Bydgoszcz",
      contract: "CAR",
      opt: "DCAR",
      workCenter: "DELL_CAR_DEBUG"
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

}
