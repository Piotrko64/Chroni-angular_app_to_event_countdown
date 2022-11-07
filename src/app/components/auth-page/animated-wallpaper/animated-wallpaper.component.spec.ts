import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedWallpaperComponent } from './animated-wallpaper.component';

describe('AnimatedWallpaperComponent', () => {
  let component: AnimatedWallpaperComponent;
  let fixture: ComponentFixture<AnimatedWallpaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimatedWallpaperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedWallpaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
