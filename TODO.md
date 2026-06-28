# TODO - Fix TypeScript test runner type errors (Angular + Vitest)

- [ ] Update frontend/tsconfig.spec.json to use vitest types (replace jasmine).
- [ ] Update frontend/tsconfig.app.json to ensure spec files excluded and vitest types not leaked.
- [ ] Ensure vitest is configured for globals in an existing vitest/vite config file (verify file exists or add one only if needed).
- [ ] Install missing dev deps: @vitest/ui and vitest.
- [ ] Run `npm test --silent` and ensure 0 errors.

