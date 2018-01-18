import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VectorGraphicsListComponent } from './vector-graphics-list.component';

describe('VectorGraphicsListComponent', () => {
  let component: VectorGraphicsListComponent;
  let fixture: ComponentFixture<VectorGraphicsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VectorGraphicsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VectorGraphicsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
