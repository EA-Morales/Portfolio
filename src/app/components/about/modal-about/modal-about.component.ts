import { AboutService } from './../../../services/about.service';
import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-about',
  templateUrl: './modal-about.component.html',
  styleUrls: ['./modal-about.component.scss'],
})
export class ModalAboutComponent implements OnInit {
  aboutform!: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: string,
    private readonly fb: FormBuilder,
    private _dataSvc: AboutService
  ) {}

  ngOnInit(): void {
    this.aboutform = this.initAboutForm();

    this.aboutform.patchValue({
      texto: this.data,
    });
  }

  initAboutForm(): FormGroup {
    return this.fb.group({
      id: [1],
      texto: new FormControl('', [Validators.required]),
    });
  }

  get errorAbout() {
    return this.aboutform.get('texto');
  }

  onSubmitAbout() {
    this._dataSvc.addTextAbout(this.aboutform.value).subscribe();
    console.log(this.aboutform.value);
  }
}
