# Inertia.js + Rails Demo

A demo application showcasing Inertia.js integration with Ruby on Rails, presented at the Ruby Usergroup Hamburg on May 14th, 2025.

## Features

This application demonstrates the Inertia.js adapter for Ruby on Rails (`inertia_rails`), using React as the frontend framework and Tailwind CSS for styling. It illustrates several key Inertia.js features:

- **Form Helpers**: Simplified form handling with reduced boilerplate code.
- **Deferred Loading**: Load certain page data after the initial page render for improved perceived performance.
- **Load When Visible**: Lazy load data when elements become visible in the viewport.
- **Partial Reloads**: Selectively refresh only specific parts of a page for optimized performance.
- **Preserve Scroll**: Preserve the scroll position when reloading the data on a page.

## Installation

```bash
# Clone the repository
git clone https://github.com/gpaddis/rughh-inertiajs.git
cd rughh-inertiajs

# Install dependencies
bundle install
pnpm install

# Set up the database
bin/rails db:create db:migrate db:seed

# Start the server
bin/dev
```

Navigate to http://localhost:3100/posts.

Check out [the official Inertia.js documentation](https://inertiajs.com/) and the [inertia_rails adapter](https://inertia-rails.dev/) for more information.

The talk is available as PDF in this repository: [talk.pdf](talk.pdf).
