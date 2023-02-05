import { TestBed } from '@angular/core/testing';

import { DetalheProdutoGuard } from './detalhe-produto.guard';

describe('DetalheProdutoGuard', () => {
  let guard: DetalheProdutoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DetalheProdutoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
