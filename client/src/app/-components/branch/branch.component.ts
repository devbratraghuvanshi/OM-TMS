import { BranchService } from './../../-services/branch.service';
import { Branch } from './../../models/branch.model';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'branch-form',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {

  @Output() cancelAddBranch: EventEmitter<boolean> = new EventEmitter<boolean>();

  branchType = [{'key': '', 'val': 'Branch Type'}, {'key': '1', 'val': 'Booking'},
  {'key': '2', 'val': 'Delevery'}, {'key': '3', 'val': 'Both'} ]

  // tslint:disable-next-line:max-line-length
  model = new Branch('Branch', 'BRN001', this.branchType[0].key, true, 'testmail@testmail.com',  'Devbrat', 'NA', 'Uttar Pradesh', 'GZB', 233223, null, 9711259473);
  submitted = false;
  message = '';
  messageColor = 'lightGreen';

  constructor(public service: BranchService) { }

  onSubmit(branchForm: NgForm) {
    this.submitted = true;

    this.service.AddBranch(this.model).then(res => {
      console.log(res);
      if (res && res._id) {
        this.message = 'Branch Added Successfully, ID: ' + res._id;
        this.messageColor = 'lightGreen';
        branchForm.reset();
      }else {
        this.message = 'Somthing went wrong attempt Unsuccessfull';
        this.messageColor = 'lightRed';
      }
    });
  }

  ngOnInit() {
  }

  // TODO: Remove this when we're done
  // get diagnostic() { return JSON.stringify(this.model); }

  cancel() {
    this.cancelAddBranch.emit(false);
  }
}
