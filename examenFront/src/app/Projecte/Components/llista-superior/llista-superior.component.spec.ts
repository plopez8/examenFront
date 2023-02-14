import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlistaSuperiorComponent } from './llista-superior.component';

describe('LlistaSuperiorComponent', () => {
  let component: LlistaSuperiorComponent;
  let fixture: ComponentFixture<LlistaSuperiorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LlistaSuperiorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LlistaSuperiorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
