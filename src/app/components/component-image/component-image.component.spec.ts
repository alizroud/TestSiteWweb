import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentImageComponent } from './component-image.component';

describe('ComponentImageComponent', () => {
  let component: ComponentImageComponent;
  let fixture: ComponentFixture<ComponentImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
