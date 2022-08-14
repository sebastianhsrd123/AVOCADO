import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegmodalComponent } from './regmodal.component';

describe('RegmodalComponent', () => {
  let component: RegmodalComponent;
  let fixture: ComponentFixture<RegmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegmodalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
