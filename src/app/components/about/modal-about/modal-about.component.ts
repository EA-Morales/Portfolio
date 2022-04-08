import { AboutService } from './../../../services/about.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modal-about',
  templateUrl: './modal-about.component.html',
  styleUrls: ['./modal-about.component.scss'],
})
export class ModalAboutComponent implements OnInit {
  aboutform!: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private _dataSvc: AboutService
  ) {}

  ngOnInit(): void {
    this.aboutform = this.initAboutForm();
  }

  initAboutForm(): FormGroup {
    return this.fb.group({
      id: [1],
      texto: [''],
    });
  }

  onSubmitAbout() {
    this._dataSvc.addTextAbout(this.aboutform.value).subscribe();
    console.log(this.aboutform.value);
  }
}
