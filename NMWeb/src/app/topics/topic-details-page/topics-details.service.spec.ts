import { TestBed, inject } from '@angular/core/testing';

import { TopicsDetailsService } from './topics-details.service';

xdescribe('TopicsDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TopicsDetailsService]
    });
  });

  it('should be created', inject([TopicsDetailsService], (service: TopicsDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
