import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('banner') bannerElement!: ElementRef;
  @ViewChild('about') aboutElement!: ElementRef;
  @ViewChild('portfolio') portfolioElement!: ElementRef;
  @ViewChild('info') infoElement!: ElementRef;
  @ViewChild('skills') skillsElement!: ElementRef;
  @ViewChild('contact') contactElement!: ElementRef;

  public currentActive = 0;
  public bannerOffset!: Number;
  public aboutOffset!: Number;
  public portfolioOffset!: Number;
  public infoOffset!: Number;
  public skillsOffset!: Number;
  public contactOffset!: Number;

  constructor() {}

  ngAfterViewInit(): void {
    this.bannerOffset = this.bannerElement.nativeElement.offsetTop;
    this.aboutOffset = this.aboutElement.nativeElement.offsetTop;
    this.portfolioOffset = this.portfolioElement.nativeElement.offsetTop;
    this.infoOffset = this.infoElement.nativeElement.offsetTop;
    this.skillsOffset = this.skillsElement.nativeElement.offsetTop;
    this.contactOffset = this.contactElement.nativeElement.offsetTop;
  }

  @HostListener('window:scroll', ['$event'])
  checkOffsetTop() {
    console.log(window.scrollY);
    if (
      window.scrollY >= this.bannerOffset &&
      window.scrollY < this.aboutOffset
    ) {
      console.log('ESTAS EN BANNER');
      this.currentActive = 1;
    } else if (
      window.scrollY >= this.aboutOffset &&
      window.scrollY < this.portfolioOffset
    ) {
      console.log('ESTAS EN ABOUT');
      this.currentActive = 2;
    } else if (
      window.scrollY >= this.portfolioOffset &&
      window.scrollY < this.infoOffset
    ) {
      console.log('ESTAS EN PORTFOLIO');
      this.currentActive = 3;
    } else if (
      window.scrollY >= this.infoOffset &&
      window.scrollY < this.skillsOffset
    ) {
      console.log('ESTAS EN INFO');
      this.currentActive = 4;
    } else if (
      window.scrollY >= this.skillsOffset &&
      window.scrollY < this.contactOffset
    ) {
      console.log('ESTAS EN SKILLS');
      this.currentActive = 5;
    } else if (window.scrollY >= this.contactOffset) {
      console.log('ESTAS EN CONTACT');
      this.currentActive = 6;
    } else {
      this.currentActive = 0;
    }
  }
}
