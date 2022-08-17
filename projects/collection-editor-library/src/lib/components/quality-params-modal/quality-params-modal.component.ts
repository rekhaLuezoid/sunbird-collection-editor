import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { config } from './quality-params.data';
import * as _ from 'lodash-es';

@Component({
  selector: 'lib-quality-params-modal',
  templateUrl: './quality-params-modal.component.html',
  styleUrls: ['./quality-params-modal.component.css']
})
export class QualityParamsModalComponent implements OnInit {
  @Input() qualityFormConfig:any 
  @Output() qualityParamChanged = new EventEmitter<any>()
  formData: any;
  isApprovalBtnEnable:boolean;
  constructor() { }

  ngOnInit(): void {
}
  onStatusChanges(event) {
    this.isApprovalBtnEnable = event?.isValid;
  }
  valueChanges(event) {
    this.formData = event;
  }
  submitApproval() {
    this.qualityParamChanged.emit(this.formData);
  }
}
