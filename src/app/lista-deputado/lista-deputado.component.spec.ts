import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeputadoComponent } from './lista-deputado.component';

describe('ListaDeputadoComponent', () => {
  let component: ListaDeputadoComponent;
  let fixture: ComponentFixture<ListaDeputadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaDeputadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDeputadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
