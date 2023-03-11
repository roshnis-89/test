import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyyprojectsComponent } from './myyprojects.component';

describe('MyyprojectsComponent', () => {
  let component: MyyprojectsComponent;
  let fixture: ComponentFixture<MyyprojectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyyprojectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyyprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
