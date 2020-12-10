import { TestBed } from '@angular/core/testing';

import { NotaResolverResolver } from './nota-resolver.resolver';

describe('NotaResolverResolver', () => {
  let resolver: NotaResolverResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(NotaResolverResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
