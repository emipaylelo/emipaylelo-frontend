import { Router } from '@angular/router';
import { DocDTO } from './../../Models/doc-upload-dto';
import { NgForm } from '@angular/forms';
import { UploadDocsServiceService } from './../../services/upload-docs-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-docs',
  templateUrl: './upload-docs.component.html',
  styleUrls: ['./upload-docs.component.css']
})
export class UploadDocsComponent implements OnInit {
  uploadDocs: DocDTO = new DocDTO();
  uploadData: FormData = new FormData();

  userId: number;
  aadharFile: File;
  panFile: File;

  constructor(private uploadDocsService: UploadDocsServiceService, private router: Router) { }

  ngOnInit(): void {
  }
  setUserDocumentDetails(docDetailForm: NgForm) {
    this.uploadData.append("aadharFile", this.aadharFile);
    this.uploadData.append("panFile", this.panFile);
    this.uploadData.append("aadharNo", this.uploadDocs.aadharNo);
    this.uploadData.append("panNo", this.uploadDocs.panNo);



    // console.log(this.user);
    this.userId = Number(localStorage.getItem("userId"));

    this.uploadDocsService.setUserDocumentDetails(this.userId, this.uploadData).subscribe(
      userPersisted => {
        console.log(userPersisted);

        this.router.navigate(['/cardselection']);
      }
    );


  }
  aadharfileupload(targetvar: any) {
    this.aadharFile = targetvar.files[0];
  }
  panfileupload(targetvar: any) {
    this.panFile = targetvar.files[0];
  }
}
