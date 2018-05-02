import { BranchService } from './../../-services/branch.service';
import { Branch } from './../../models/branch.model';
import { Component, OnInit } from '@angular/core';


const Branches = [
  {
    'Id': '123',
    'Name' : 'Branch Name',
    'Code': '123',
    'Address': 'String',
    'District': 'String',
    'State': 'String',
    'PIN': 233223,
    'Telephone': '9711259473',
    'Mobile': 9711259473,
    'Email': 'String',
    'Type': 'String',
    'IsAgency': true,
    'ContactPerson': 'Devbrat'
  },
  {
    'Id': '123',
    'Name' : 'Branch Name',
    'Code': '123',
    'Address': 'String',
    'District': 'String',
    'State': 'String',
    'PIN': 233223,
    'Telephone': '9711259473',
    'Mobile': 9711259473,
    'Email': 'String',
    'Type': 'String',
    'IsAgency': true,
    'ContactPerson':'Devbrat'
  },
  {
    'Id': '123',
    'Name' : 'Branch Name',
    'Code': '123',
    'Address': 'String',
    'District': 'String',
    'State': 'String',
    'PIN': 233223,
    'Telephone': '9711259473',
    'Mobile': 9711259473,
    'Email': 'String',
    'Type': 'String',
    'IsAgency': true,
    'ContactPerson': 'Devbrat'
  }
];


@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.css']
})
export class BranchesComponent implements OnInit {


  public Branches: Branch[] = Branches;
  public showDialog = false;
  public BranchLink = '/dashboard/branch';
  constructor(public service: BranchService) { }

  ngOnInit() {

    this.UpdateBranchData();

  }

  UpdateBranchData() {
    this.service.GetBranches().then(branches => {
      this.Branches = branches;
      this.BranchLink =  '/dashboard/branch';

    });
  }

}

