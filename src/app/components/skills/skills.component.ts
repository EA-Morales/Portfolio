// Core Modules
import { Component, OnInit } from '@angular/core';

// Service y componente
import { SkillsService } from 'src/app/services/skills.service';
import { ModalSkillsComponent } from './modal-skills/modal-skills.component';

// Interface
import { skills } from 'src/app/models/interfaceDatos';

// Matdialog
import { MatDialog } from '@angular/material/dialog';

// Change detection
import { ChangeDetectorRef } from '@angular/core';

// MAT SPINNER
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  isLoggedIn!: boolean;

  pruebas: skills[] = [];

  temporal!: skills;

  panelOpenState = false;

  constructor(
    private authService: AuthService,
    private _dataSvc: SkillsService,
    public dialog: MatDialog,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.authService.isUserLoggedIn.subscribe(res => {
      this.isLoggedIn = res;
      //console.log(res);
    });
    this.getSkills();
    //console.log('se recargo la vista!');
  }

  getSkills(): any {
    this._dataSvc
      .getSkills()
      .subscribe(response => (this.pruebas = Object.values(response)));
  }

  edit(skill: skills) {
    let dialogRef = this.dialog.open(ModalSkillsComponent, {
      data: skill,
    });

    dialogRef.afterClosed().subscribe(res => {
      this.ngOnInit();
      this.cdr.detectChanges();
    });
  }

  delete(skill: skills) {
    this._dataSvc.deleteSkills(skill.id).subscribe(res => {
      this.ngOnInit();
    });
  }

  openDialog() {
    let dialogRef = this.dialog.open(ModalSkillsComponent, {
      data: this.pruebas,
    });

    dialogRef.afterClosed().subscribe(res => {
      this.ngOnInit();
    });
  }
}
