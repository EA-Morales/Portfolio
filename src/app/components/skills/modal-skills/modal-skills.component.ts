// Core Modules
import { Component, Inject, OnInit } from '@angular/core';

// SERVICIO SKILLS
import { SkillsService } from 'src/app/services/skills.service';

// FORMULARIOS SKILLS
import { FormBuilder, FormGroup } from '@angular/forms';

// ANGULAR MATERIAL DIALOG
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

// ANGULAR SELECTIO
import { MatSelectModule } from '@angular/material/select';

// INTERFACE SKILLS
import { skills } from 'src/app/models/interfaceDatos';

@Component({
  selector: 'app-modal-skills',
  templateUrl: './modal-skills.component.html',
  styleUrls: ['./modal-skills.component.scss'],
})
export class ModalSkillsComponent implements OnInit {
  skillsform!: FormGroup;

  colors = [
    { value: 'primary', viewValue: 'Primary' },
    { value: 'accent', viewValue: 'Accent' },
    { value: 'warn', viewValue: 'Warning' },
  ];

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: skills,
    public readonly fb: FormBuilder,
    private _dataSvc: SkillsService
  ) {}

  ngOnInit(): void {
    this.skillsform = this.initSkillsForm();

    this.skillsform.patchValue({
      titulo: this.data.titulo,
      color: this.data.color,
      value: this.data.value,
    });
  }

  initSkillsForm(): FormGroup {
    return this.fb.group({
      id: [],
      titulo: [],
      color: [],
      value: [],
    });
  }

  onSubmitSkills() {
    if (this.data.id > 0) {
      this._dataSvc.editSkills(this.skillsform.value, this.data.id).subscribe();
    } else {
      this._dataSvc.addSkills(this.skillsform.value).subscribe();
    }
  }
}
