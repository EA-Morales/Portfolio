import { Portfolio } from './../../portfolio';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Cards } from './../../mock-portfolio';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  portfolio = Cards;

  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      id: '',
      title: '',
      description: '',
      img: '',
    });
  }

  ngOnInit(): void {}
}
