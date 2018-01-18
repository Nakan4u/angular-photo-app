import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IllustrationsListComponent } from './illustrations-list.component';

describe('IllustrationsListComponent', () => {
  let component: IllustrationsListComponent;
  let fixture: ComponentFixture<IllustrationsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IllustrationsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IllustrationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
