import '@testing-library/jest-dom';

// Add for work with @headlessui/react
global.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};
