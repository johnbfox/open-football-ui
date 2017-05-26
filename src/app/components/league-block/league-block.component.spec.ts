import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueBlockComponent } from './league-block.component';

describe('LeagueBlockComponent', () => {
  let component: LeagueBlockComponent;
  let fixture: ComponentFixture<LeagueBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeagueBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
