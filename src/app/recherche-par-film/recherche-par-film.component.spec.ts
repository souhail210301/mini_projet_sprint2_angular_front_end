import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheParFilmComponent } from './recherche-par-film.component';

describe('RechercheParFilmComponent', () => {
  let component: RechercheParFilmComponent;
  let fixture: ComponentFixture<RechercheParFilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercheParFilmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RechercheParFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
