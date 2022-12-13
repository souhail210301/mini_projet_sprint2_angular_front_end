import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateActeurComponent } from './update-acteur.component';

describe('UpdateActeurComponent', () => {
  let component: UpdateActeurComponent;
  let fixture: ComponentFixture<UpdateActeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateActeurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateActeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
