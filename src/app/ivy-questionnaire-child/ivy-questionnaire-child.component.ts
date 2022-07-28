import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { environment } from '../../../src/environments/environment';
import { expertJsonObj } from "../contants";
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
	selector: 'app-ivy-questionnaire-child',
	templateUrl: './ivy-questionnaire-child.component.html',
	styleUrls: ['./ivy-questionnaire-child.component.scss']
})
export class IvyQuestionnaireChildComponent implements OnInit {
	@Input() parentPanelClass: any;
	@Input() parentPanelHeaderClass: any;
	@Input() childPanelClass: any;
	@Input() childPanelHeaderClass: any;
	@Input() childPanelContentClass: any;
	@Input() uuid: any;
	@Input() actions: any;
	@Input() index: any;
	@Input() hooks: any;
	@Input() expanded: any;
	@Input() parentTaskPanelData: any = {};
	@Input() totalExpertDebugList: any;
	@Input() unitInfo: any;
	@Output() errorMsg = new EventEmitter<string>();
	@Output() newExpertTaskPanel = new EventEmitter<string>();
	questionsArray = [];
	constructor(private http: HttpClient, private spinnerService: NgxSpinnerService
	) { }

	ngOnInit(): void {
		console.log(this.parentTaskPanelData);
		if (!!this.parentTaskPanelData && this.parentTaskPanelData.expertDebugNodes.length > 0) {
			this.questionsArray.push(this.parentTaskPanelData.expertDebugNodes[0]);
			this.questionsArray[0].expanded = true;
			this.questionsArray[0].selectedValue = "";
			this.questionsArray[0].showIcon = true;
			this.questionsArray[0].headerText = "";
			this.questionsArray[0].icon = "question";
			this.questionsArray[0].disabled = false;
		}
	}

	onToggleChange($event, answerObj, index, childRef) {
		let partsObj = [];
		answerObj?.defectObj?.answerParts?.map((x) => {
			x.part ? partsObj.push(x.part) : null;
		})
		let length = this.questionsArray.length;
		this.questionsArray[index].expanded = false;
		this.questionsArray[index].selectedValue = answerObj.answerText;
		this.questionsArray[index].showIcon = false;
		this.questionsArray[index].headerText = answerObj.answerText;
		childRef.expanded = false;
		let isLastNode = false;
		if (!!answerObj.lastNode) {
			isLastNode = true;
			if (answerObj.answerText.toLowerCase() === "accept") {
				let allActionCodeObjects = []
				let selectedActionCode = allActionCodeObjects.find(eachItem => eachItem.actonCodesAbbreviation.toLowerCase() == answerObj.answerActions.toLowerCase());
				// if (!!answerObj.answerActions && answerObj.answerActions.toLowerCase() == "newdebugflow") {
				// 	// this.newExpertDebug(answerObj);
				// } else if (answerObj.answerActions.toLowerCase() == "result code" && partsObj[0].toLowerCase() == "cid") {

				// 	this.questionsArray.map((eachQuestion) => {
				// 		eachQuestion.disabled = true
				// 	})
				// 	this.errorMsg.emit("Passed CID")
				// 	// this.actionService.handleAction({
				// 	// 	"type": "handleDellCarDebugPredictionActions",
				// 	// 	"methodType": "answerObjsSaveApi"
				// 	// }, this);
				// }
				// else if ((selectedActionCode?.processType == "replace" || selectedActionCode?.processType == "manual") && partsObj.length && partsObj[0] != 'S/A') {
				// 	this.openPredictionPopUp(answerObj);
				// 	this.questionsArray.map((eachQuestion) => {
				// 		eachQuestion.disabled = true
				// 	})
				// } else {
				// 	this.questionsArray.map((eachQuestion) => {
				// 		eachQuestion.disabled = true
				// 	})
				// 	this.transactionsOnClickOfAccept(answerObj, partsObj);
				// }
				this.answerObjsSaveApi()
			}
		} else {
			this.errorMsg.emit("")
			this.questionsArray.splice(index + 1, length - 1);
		}

		let nextQuestion;
		if (!!answerObj.finalNode && answerObj.finalNode && !isLastNode) {
			// if (!!answerObj.answerActions && answerObj.answerActions.toLowerCase() == "newdebugflow") {
			// 	nextQuestion = {
			// 		"nodeText": answerObj.answerRef + " " + answerObj.answerActions + ": " + answerObj.answerNewDebugFlow,
			// 		"answers": [
			// 			{
			// 				"answerText": "Decline",
			// 				"answerActions": answerObj.answerActions,
			// 				"answerRef": answerObj.answerRef,
			// 				"answerNewDebugFlow": answerObj.answerNewDebugFlow,
			// 				"finalNode": true,
			// 				"lastNode": true
			// 			},
			// 			{
			// 				"answerText": "Accept",
			// 				"answerActions": answerObj.answerActions,
			// 				"answerRef": answerObj.answerRef,
			// 				"answerNewDebugFlow": answerObj.answerNewDebugFlow,
			// 				"finalNode": true,
			// 				"lastNode": true
			// 			}
			// 		]
			// 	};
			// 	if (!!nextQuestion) {
			// 		this.pushNextQuestion(nextQuestion)
			// 	}
			// } else {
				answerObj.answerDefect.map((x) => {
					let partsString = "";
					let locationString="";
					x.answerParts.map((part, index) => {
						if(part.location){
							locationString = locationString + part.location;
						}
						if (index === x.answerParts.length - 1) {
							if(part.part){
								partsString = partsString + part.part;
							}
						} else {
							partsString = partsString + part.part + ", ";
						}
					})
					nextQuestion = {
						"nodeText": answerObj.answerRef + " CODE: " + x.code + " " + answerObj.answerActions + ": " + partsString + " " + "LOCATION :" + locationString,
						"answers": [
							{
								"answerText": "Decline",
								"answerActions": answerObj.answerActions,
								"answerRef": answerObj.answerRef,
								"answerNewDebugFlow": answerObj.answerNewDebugFlow,
								"finalNode": true,
								"lastNode": true
							},
							{
								"answerText": "Accept",
								"answerActions": answerObj.answerActions,
								"answerRef": answerObj.answerRef,
								"answerNewDebugFlow": answerObj.answerNewDebugFlow,
								"finalNode": true,
								"lastNode": true,
								"defectObj": x
							}
						]
					};
					if (!!nextQuestion) {
						this.pushNextQuestion(nextQuestion)
					}
				})
			// }
		} else {
			nextQuestion = this.parentTaskPanelData.expertDebugNodes.find((x) => x.nodeID === answerObj.answerRef);
			if (!!nextQuestion) {
				this.pushNextQuestion(nextQuestion)
			}
		}
	}

	/// This is used to push next question
	pushNextQuestion(nextQuestion) {
		nextQuestion.expanded = true;
		nextQuestion.selectedValue = "";
		nextQuestion.showIcon = true;
		nextQuestion.headerText = "";
		nextQuestion.icon = "question";
		nextQuestion.disabled = false;
		this.questionsArray.push(nextQuestion);
	}

	/// This will get the data for prediction popup and opens the popup
	async openPredictionPopUp(answerObj) {
		// let getDellCarDefectGroupList = this.contextService.getDataByKey('getDellCarDefectGroupList');
		// let defectChildOptions;
		// let parts = [];
		// answerObj.defectObj.answerParts.map((x) => {
		// 	parts.push(x.part);
		// })
		// let body = {
		// 	"item_num": "#getPartModelAndWarrentyDetails.SAP_PART_NO",
		// 	"defect_parent": this.parentTaskPanelData.expertDebugTitle,
		// 	"defect_child": answerObj.defectObj.code,
		// 	"service_tag": "#discrepancyUnitInfo.SERIAL_NO",
		// 	"expert_part": parts
		// };
		// let res = await this.utilityService.postApiCallUsingPromise(body, "commClassDellCar");
		// // this.contextService.addToContext('commonClassPredictionData', dummyPartsData) /// WIll be used when the api is failing
		// defectChildOptions = getDellCarDefectGroupList.filter((X) => X.predidcted_class === this.parentTaskPanelData.expertDebugTitle);
		// if (!!res && res["status"]) {
		// 	if (!!res['body']["data"]) {
		// 		this.contextService.addToContext('commonClassPredictionData', res['body']["data"]);
		// 		this.actionService.handleAction({
		// 			"type": "handleDellCarDebugPredictionActions",
		// 			"methodType": "handleDebugAcceptActions",
		// 			"eventSource": "click",
		// 			"isNewPredictiveTask": true,
		// 			"DefectGroupOptions": getDellCarDefectGroupList,
		// 			"DefectCodeOptions": !!defectChildOptions ? defectChildOptions[0].possible_defect_child : [],
		// 			"Defectgroup": this.parentTaskPanelData.expertDebugTitle,
		// 			"DefectCode": answerObj.defectObj.code,
		// 			"ActionCode": answerObj.answerActions,
		// 			"uuid": this.uuid,
		// 			"isFromQuestionnaire": true
		// 		}, this)
		// 	}
		// }
	}

	onClickOfReset() {
		if (!!this.parentTaskPanelData && this.parentTaskPanelData.expertDebugNodes.length > 0) {
			this.questionsArray = [];
			this.questionsArray.push(this.parentTaskPanelData.expertDebugNodes[0]);
			this.questionsArray[0].expanded = true;
			this.questionsArray[0].selectedValue = "";
			this.questionsArray[0].showIcon = true;
			this.questionsArray[0].headerText = "";
			this.questionsArray[0].icon = "question";
			this.questionsArray[0].disabled = false;
		}
	}

	/// This will display the Data without prediction popup for software and other
	transactionsOnClickOfAccept(answerObj, partsObj) {
		// let defectChildOptions;
		// let getDellCarDefectGroupList = this.contextService.getDataByKey('getDellCarDefectGroupList');
		// defectChildOptions = getDellCarDefectGroupList.filter((X) => X.predidcted_class === this.parentTaskPanelData.expertDebugTitle);
		// this.actionService.handleAction({
		// 	"type": "handleDellCarDebugPredictionActions",
		// 	"methodType": "handleFilteringOfSelectedData",
		// 	"eventSource": "click",
		// 	"isNewPredictiveTask": true,
		// 	"nonDisplayPopup": true,
		// 	"index": 0,
		// 	"DefectGroupOptions": getDellCarDefectGroupList,
		// 	"DefectCodeOptions": !!defectChildOptions ? defectChildOptions[0].possible_defect_child : [],
		// 	"Defectgroup": this.parentTaskPanelData.expertDebugTitle,
		// 	"partsObj": partsObj,
		// 	"DefectCode": answerObj.defectObj.code,
		// 	"ActionCode": answerObj.answerActions,
		// 	"uuid": this.uuid,
		// 	"isFromQuestionnaire": true
		// }, this)
	}

	/// Method for creating NewExpert debug flow
	async newExpertDebug(answerObj) {
		this.newExpertTaskPanel.emit(answerObj)
	}

	answerObjsSaveApi() {

		let finalNodeData = {};
		let answersList = [];
		let currentExpertDebugList = {};
		let totalExpertDebugList = this.totalExpertDebugList || [];
		if (this.questionsArray) {
			this.questionsArray.map((data) => {
				if (data.headerText !== "Accept") {
					let eachObj = {};
					eachObj["headerText"] = data.headerText
					eachObj["nodeText"] = data.nodeText
					eachObj["nodeID"] = data.nodeID
					let obj = data.answers.find((x) => x.answerText == data.headerText)
					eachObj["answerRef"] = obj["answerRef"]
					answersList.push(eachObj)
				} else {
					let obj = data.answers.find((x) => x.answerText == data.headerText)
					finalNodeData["headerText"] = data.headerText
					finalNodeData["nodeText"] = data.nodeText
					finalNodeData["nodeID"] = obj["answerRef"]
					finalNodeData["answerDefect"] = obj["defectObj"]
				}
			})
			currentExpertDebugList[this.parentTaskPanelData.expertDebugTitle] = {
				itemId: this.unitInfo.ITEM_BCN,
				serviceTag: this.unitInfo.ITEM_ID,
				answersList: answersList,
				finalNode: finalNodeData
			}
			console.log(currentExpertDebugList);
			totalExpertDebugList.push(currentExpertDebugList);


			const body = {
				itemId: this.unitInfo.ITEM_BCN,
				userName: this.unitInfo.UserName,
				pagePayload: totalExpertDebugList,
			}
			this.spinnerService.show();
			this.http.post(environment.api_url + "metadataprocessor/saveJsonResponse", body).subscribe({
				next: (v: any) => {
					if (v["status"]) {
						this.spinnerService.hide();
					} else {
						this.spinnerService.hide();
						this.errorMsg.emit(v.message)
					}
				},
				error: (e) => {
					this.errorMsg.emit(e.message)
					//   this.errorMessage = e.message
				}
			})

			// this.contextService.addToContext("totalExpertDebugList",totalExpertDebugList)
		}
	}

}
