import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { UiComponent } from './ui.component';

describe('UiComponent', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should call simpson_rule method', () => {
    let result = 0;

    component.f = '2x';
    component.x0 = 0;
    component.x1 =4;
    component.num_seg = 4;
    component.dof = 0;
    

    component.Simpson_rule();
    result = component.TextSimpson;

    expect(result).toBe(16);
  });

  it('Should call T_distribution method', () => {
    let result = 0;

    component.x1 = 1.1;
    component.dof =9;

    component.T_distribution();
    result = component.TextT;

    expect(result).toBe(0.38803);
  });
});
