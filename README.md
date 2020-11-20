[![Netlify Status](https://api.netlify.com/api/v1/badges/4f759b93-61e7-44fc-abbb-233bab468b9d/deploy-status)](https://app.netlify.com/sites/epic-lichterman-3494de/deploys)

# Decolonizing New Mexico
A scholarly project. This site uses Hugo for static site generation, content is managed via Forestry.io and hosted on Netlify.com. This site is visible here: https://decolonizingnewmexico.com

## Releases & Change Log:

### v0.0.7

- Styles for footnotes, subtle hover effect
- Fixed #27, `<dl>`s on small screens were breaking due to display grid.
- Completed #9, add GA to the project

### v0.0.6

- Fully clickable cards in the TOC
- Minor styling fixes across the site
- Aria hidden added to graphics
- Added logic to avoid templates adding empty html

### v0.0.5

- Short code for adding images to any part of a markdown file, so 
- Responsive images dynamically updated via Cloudinary
- Full bleed images are now possible
- Home page and interior page hero 
- Gootnotes fixed due to screw up w/ Forestry not using them
  - Users will be forced into using the raw markdown editor to avoidthe about screw up
- Some simple hover animations added where appropriate
  - Prefers reduced motion media query has also been added

### v0.0.4

- Design updates
- Added footnote heading
- Fixed issues w/ pager
- Better variable naming in templates
- TOC, Footer, About section(s) reflects design
- Other additions to code to reflect design
  - Better spacing between subsections
  - Eyebrows added
  - Interior page grids
  - Hero section

### v0.0.3

- reorganizing the way css is written to the CUBE style (fixes #10) 
- added accessible drop caps
- other typographics addressed
- have a completed poc for the header
- using svg for graphic elements
- using hugo's esBuild for js bundling

### v0.0.2

- improved TOC
- minor styling improvements
- template logic improvements

### v0.0.1

- initial works...