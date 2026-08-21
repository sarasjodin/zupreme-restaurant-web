# Changelog

All notable changes to this project will be documented in this file.

This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

Planned activities:
- Test responsive layout and accessibility
- Deploy and test against the production API

### Optional

- Connect contact form to `POST /api/messages`
- Add form validation and success/error feedback

---

## [0.2.0] - 2026-08-22

### Added

- Added `CHANGELOG.md` for tracking project changes
- Added `README.md` with project information and setup instructions
- Added Prettier as a development dependency
- Added the `format` script to run Prettier with `npm run format`
- Added a responsive menu layout with temporary dummy data for styling
- Added a contact form with accessible form fields
- Added AI-generated menu imagery for seeded menu items and category fallback images
- Converted menu images from PNG to optimized WebP using Squoosh to reduce file size and improve web performance
- Added visible `AI-GENERERAD BILD` labels to identify AI-generated imagery
- Added centralized API configuration in `config.js`
- Added functions for fetching and rendering menu items
- Integrated `GET /api/menu-items` to fetch and render menu data dynamically
- Added category-specific fallback images for menu items without a saved `image_path`
- Verified the public site locally against the local API
- Added loading, empty and error states

## [0.1.0]

### Added

Created the basic layout of the public site with:

- Header
- Hero section
- About us section
- Footer with:
  - Branding
  - Address
  - Opening hours
  - Accessibility statement
  - Terms
  - Privacy
- Login link to the admin portal from the footer
- Portfolio page accessible from the footer

### Notes

- Menu section not yet implemented
- Contact section not yet implemented

## Legend

- **Added**: new features or components
- **Changed**: updates to existing behavior
- **Deprecated**: soon-to-be removed features
- **Removed**: deprecated features now gone
- **Fixed**: bug fixes
- **Security**: security-related fixes or enhancements
- **Notes**: related comments, limitations, or clarifications
