import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditarimagenPage } from './editarimagen.page';

describe('EditarimagenPage', () => {
  let component: EditarimagenPage;
  let fixture: ComponentFixture<EditarimagenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarimagenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarimagenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
