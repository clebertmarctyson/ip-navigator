# Contributing to ip-navigator

First off, thank you for considering contributing to ip-navigator! It's people like you that make ip-navigator such a great tool.

## Code of Conduct

By participating in this project, you are expected to uphold our Code of Conduct. Please report unacceptable behavior to marctysonclebert9@gmail.com.

## How Can I Contribute?

### Reporting Bugs

This section guides you through submitting a bug report for ip-navigator. Following these guidelines helps maintainers and the community understand your report, reproduce the behavior, and find related reports.

- Use a clear and descriptive title for the issue to identify the problem.
- Describe the exact steps which reproduce the problem in as many details as possible.
- Provide specific examples to demonstrate the steps.

### Suggesting Enhancements

This section guides you through submitting an enhancement suggestion for ip-navigator, including completely new features and minor improvements to existing functionality.

- Use a clear and descriptive title for the issue to identify the suggestion.
- Provide a step-by-step description of the suggested enhancement in as many details as possible.
- Provide specific examples to demonstrate the steps or point out the part of ip-navigator which the suggestion is related to.
- Explain why this enhancement would be useful to most ip-navigator users.

### Your First Code Contribution

Unsure where to begin contributing to ip-navigator? You can start by looking through these `beginner` and `help-wanted` issues:

- Beginner issues - issues which should only require a few lines of code, and a test or two.
- Help wanted issues - issues which should be a bit more involved than `beginner` issues.

### Pull Requests

The process described here has several goals:

- Maintain ip-navigator's quality
- Fix problems that are important to users
- Engage the community in working toward the best possible ip-navigator
- Enable a sustainable system for ip-navigator's maintainers to review contributions

Please follow these steps to have your contribution considered by the maintainers:

1. Follow all instructions in [the template](PULL_REQUEST_TEMPLATE.md)
2. Follow the [styleguides](#styleguides)
3. After you submit your pull request, verify that all [status checks](https://help.github.com/articles/about-status-checks/) are passing

## Styleguides

### Git Commit Messages

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests liberally after the first line

### TypeScript Styleguide

- Use 2 spaces for indentation
- Prefer `const` over `let`. Never use `var`
- Prefer the object spread operator (`{...anotherObj}`) to `Object.assign()`
- Inline `export`s with expressions whenever possible

```typescript
// Use this:
export const someFunction = () => { ... }
// Instead of:
const someFunction = () => { ... }
export { someFunction }
```

### Documentation Styleguide

- Use [Markdown](https://daringfireball.net/projects/markdown) for documentation.
- Reference functions and classes in backticks: \`someFunction()\`

## Additional Notes

### Issue and Pull Request Labels

This section lists the labels we use to help us track and manage issues and pull requests.

- `bug` - Issues for bugs in the code
- `enhancement` - Issues for new features or improvements
- `documentation` - Issues related to documentation
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention is needed
- `question` - Further information is requested

## Getting Help

If you need help, you can ask questions on marctysonclebert9@gmail.com.

Thank you for contributing to ip-navigator!
