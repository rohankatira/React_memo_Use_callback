# React Memo & useCallback Guide

## Overview

This document explains how to optimize React applications using `React.memo` and the `useCallback` hook. These tools help prevent unnecessary re-renders, improving performance.

---

## Table of Contents

1. [What is React.memo?](#what-is-reactmemo)
2. [What is useCallback?](#what-is-usecallback)
3. [When to Use Them](#when-to-use-them)
4. [Examples](#examples)
5. [Best Practices](#best-practices)
6. [References](#references)

---

## What is React.memo?

`React.memo` is a higher-order component that memoizes a functional component. It prevents re-rendering if the component's props have not changed.

```jsx
const MyComponent = React.memo(function MyComponent(props) {
    // component code
});
```

---

## What is useCallback?

`useCallback` is a React hook that returns a memoized version of a callback function. It only changes if one of its dependencies changes.

```jsx
const memoizedCallback = useCallback(
    () => {
        // function code
    },
    [dependencies],
);
```

---

## When to Use Them

- Use `React.memo` for functional components that render the same output given the same props.
- Use `useCallback` to memoize functions passed as props to child components.

---

## Examples

### Using React.memo

```jsx
const Button = React.memo(({ onClick, children }) => (
    <button onClick={onClick}>{children}</button>
));
```

### Using useCallback

```jsx
const handleClick = useCallback(() => {
    // handle click
}, [dependency]);
```

---

## Best Practices

- Only optimize components that re-render frequently with the same props.
- Avoid premature optimization; measure performance first.
- Combine with `useMemo` for expensive calculations.

---

## References

- [React.memo Documentation](https://react.dev/reference/react/memo)
- [useCallback Documentation](https://react.dev/reference/react/useCallback)

---

*© 2024 Your Company Name*