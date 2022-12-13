import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { UiComponent } from './ui.component';

describe('Simsopm UiComponent', () => {
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


  it('Should call Simpson method', () => {
    // Arrange
    let result = 0;
    component.f = '2x';
    component.x0 = 0;
    component.x1 =4;
    component.num_seg = 4;
    component.dof = 0;

    
    // Act
    component.Simpson_rule();
    result = component.resultnumber;

    // Assert
    expect(result).toBe(16);
 });

 it('Should set f model through ngModel', async() => {
   // Arrange 
   await fixture.whenStable();
   fixture.detectChanges();
   const inputElement = fixture.debugElement.query(By.css('input[name="f"]')).nativeElement;

   // Act 
   inputElement.value = '2x';
   inputElement.dispatchEvent(new Event('input'));
   fixture.detectChanges();

   // Assert 
   expect(component.f).toEqual('2x');
 });

 it('Should set x0 model through ngModel', async() => {
  // Arrange 
  await fixture.whenStable();
  fixture.detectChanges();
  const inputElement = fixture.debugElement.query(By.css('input[name="x0"]')).nativeElement;

  // Act 
  inputElement.value = '0';
  inputElement.dispatchEvent(new Event('input'));
  fixture.detectChanges();

  // Assert 
  expect(component.x0).toEqual(0);
  });

  it('Should set x1 model through ngModel', async() => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="x1"]')).nativeElement;
 
    // Act 
    inputElement.value = '4';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
 
    // Assert 
    expect(component.x1).toEqual(4);
  });

  it('Should set num_seg model through ngModel', async() => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="num_seg"]')).nativeElement;
 
    // Act 
    inputElement.value = '4';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
 
    // Assert 
    expect(component.num_seg).toEqual(4);
  });

  it('Should set dof model through ngModel', async() => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="dof"]')).nativeElement;
 
    // Act 
    inputElement.value = '0';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
 
    // Assert 
    expect(component.dof).toEqual(0);
  });

 


 it('should add f, x0, x2, num_seg, dof when i click the Simpson button ', () => {
   // Arrange 
   component.f = '2x';
   component.x0 = 0;
   component.x1 =4;
   component.num_seg = 4;
   component.dof = 0;
   let meanButton = fixture.debugElement.query(By.css('.Simpson-button'));

   // Act
   meanButton.triggerEventHandler('click', null);

   // Assert
   expect(component.TextSimpson).toBe(16);

  });

 it('Should render sum in result div', () => {
   // Arrange
   component.f = '2x';
   component.x0 = 0;
   component.x1 =4;
   component.num_seg = 4;
   component.dof = 0;

   // Act
   component.Simpson_rule();
   fixture.detectChanges();
   
   let de = fixture.debugElement.query(By.css('.resultS'));
   let el : HTMLElement = de.nativeElement;

   // Assert
   expect(el.innerText).toContain('16');
    
 });

});

//----------------------------------------------------------------------

//T_distribution
describe('Ui T_distribution - Component', () => {
 let component: UiComponent;
 let fixture: ComponentFixture<UiComponent>;

 beforeEach(async(() => {
   TestBed.configureTestingModule({
     declarations: [ UiComponent ],
     imports: [FormsModule],
   })
   .compileComponents();
 }));

 beforeEach(() => {
   fixture = TestBed.createComponent(UiComponent);
   component = fixture.componentInstance;
   fixture.detectChanges();
 });

 it('Should call StandardDev method', () => {
    // Arrange
    let result = 0;
    component.x1 = 1.1;
    component.dof = 9;
    
    // Act
    component.T_distribution();
    result = component.resultnumber;

    // Assert
    expect(result).toBe(0.38803);
 });

 it('Should set x1 model through ngModel', async() => {
   // Arrange 
   await fixture.whenStable();
   fixture.detectChanges();
   const inputElement = fixture.debugElement.query(By.css('input[name="x1"]')).nativeElement;

   // Act 
   inputElement.value = '1.1';
   inputElement.dispatchEvent(new Event('input'));
   fixture.detectChanges();

   // Assert 
   expect(component.x1).toEqual(1.1);
 });

 it('Should set dof model through ngModel', async() => {
  // Arrange 
  await fixture.whenStable();
  fixture.detectChanges();
  const inputElement = fixture.debugElement.query(By.css('input[name="dof"]')).nativeElement;

  // Act 
  inputElement.value = '9';
  inputElement.dispatchEvent(new Event('input'));
  fixture.detectChanges();

  // Assert 
  expect(component.dof).toEqual(9);
  });

 


 it('should add x1 and dof when i click the mean button ', () => {
   // Arrange 
   component.x1 = 1.1;
    component.dof = 9;
   let meanButton = fixture.debugElement.query(By.css('.T_distribution-button'));

   // Act
   meanButton.triggerEventHandler('click', null);

   // Assert
   expect(component.resultnumber).toBe(0.38803);

  });

 it('Should render sum in result div', () => {
   // Arrange
   component.x1 = 1.1;
   component.dof = 9;

   // Act
   component.T_distribution();
   fixture.detectChanges();
   
   let de = fixture.debugElement.query(By.css('.resultT'));
   let el : HTMLElement = de.nativeElement;

   // Assert
   expect(el.innerText).toContain('0.38803');
    
 });
});
