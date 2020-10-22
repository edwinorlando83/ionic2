import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListarolPage } from './listarol.page';

describe('ListarolPage', () => {
  let component: ListarolPage;
  let fixture: ComponentFixture<ListarolPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarolPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListarolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
