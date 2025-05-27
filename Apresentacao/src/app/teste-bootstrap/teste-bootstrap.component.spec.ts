import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteBootstrapComponent } from './teste-bootstrap.component';

describe('TesteBootstrapComponent', () => {
  let component: TesteBootstrapComponent;
  let fixture: ComponentFixture<TesteBootstrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TesteBootstrapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TesteBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
