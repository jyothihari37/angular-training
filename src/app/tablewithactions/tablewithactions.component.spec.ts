import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablewithactionsComponent } from './tablewithactions.component';

describe('TablewithactionsComponent', () => {
  let component: TablewithactionsComponent;
  let fixture: ComponentFixture<TablewithactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablewithactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablewithactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
