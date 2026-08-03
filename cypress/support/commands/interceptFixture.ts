import type { RouteMatcher, RouteMatcherOptions, StringMatcher } from 'cypress/types/net-stubbing';

type AppHttpMethod = HttpMethod;

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Like cy.intercept(), but the response is always a typed fixture name
       * (autocompleted from cypress/fixtures) instead of a loose RouteHandler.
       */
      interceptFixture<Body = unknown>(
        url: RouteMatcher,
        fixture: FixtureName,
        rest?: Partial<Omit<TypedStaticResponse<Body>, 'fixture'>>,
      ): Chainable<null>;

      interceptFixture<Body = unknown>(
        method: AppHttpMethod,
        url: RouteMatcher,
        fixture: FixtureName,
        rest?: Partial<Omit<TypedStaticResponse<Body>, 'fixture'>>,
      ): Chainable<null>;

      interceptFixture<Body = unknown>(
        url: StringMatcher,
        mergeRouteMatcher: Omit<RouteMatcherOptions, 'url'>,
        fixture: FixtureName,
        rest?: Partial<Omit<TypedStaticResponse<Body>, 'fixture'>>,
      ): Chainable<null>;
    }
  }
}

export const interceptFixture = (...args: unknown[]) => {
  const last = args[args.length - 1];
  const rest = typeof last === 'object' && last !== null ? (args.pop() as object) : {};
  const fixture = args.pop() as string;

  if (args.length === 1) {
    return cy.intercept(args[0] as RouteMatcher, {
      fixture,
      ...rest,
    });
  }

  if (args.length === 2) {
    return cy.intercept(args[0] as AppHttpMethod, args[1] as RouteMatcher, {
      fixture,
      ...rest,
    });
  }

  return cy.intercept(args[0] as StringMatcher, args[1] as RouteMatcherOptions, {
    fixture,
    ...rest,
  });
};
