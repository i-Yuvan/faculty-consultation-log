# FacultyConnect — Faculty Consultation Log

Responsive academic project prototype using separate HTML, CSS, and JavaScript files.

**Live demo:** https://i-yuvan.github.io/faculty-consultation-log/

## Files

* `index.html` — page markup and external asset references
* `css/styles.css` — layout, styling, responsive behavior
* `js/app.js` — navigation, forms, data persistence, filters, reports, CSV export

## Run

Open `index.html` in a modern browser. No install/build step is required.

## Working navigation and controls

* Consultations: add/edit/delete, search, status filter, export CSV
* Students \& Courses: add student, search directory, remove directory entry
* Follow-ups: filter overdue/upcoming/no-date, edit related consultation
* Reports: current-month count, open cases, completion rate, unique students, category chart
* Settings: save faculty/year preference, restore fictional sample data, clear records

## Data/security note

Records are saved to browser localStorage. This is a classroom prototype, not secure private storage. It has no authentication, server-side authorization, encryption, or multi-user sync. Use fictional student data only.

\##FacultyConnect - CSE326 Beginner Version (Group 7)



FOLDER STRUCTURE

index.html

css/styles.css

js/app.js



HOW TO RUN

1\. Keep the css and js folders beside index.html.

2\. Open index.html in a web browser.

3\. Enter the demo faculty access code: 326



CLASS TOPICS USED

HTML: HTML document structure, metadata, semantic elements, headings, paragraphs, links/buttons, forms, labels, inputs, select, textarea and tables.

CSS: element/class/id selectors, universal selector, pseudo-classes, box model, colors, backgrounds, typography, Flexbox, Grid, positioning/layout, transitions and media queries.

JavaScript: let/const, strings, arrays, objects, functions, for loops, if/else, comparisons, document.getElementById(), innerHTML, input values, onclick, alert() and confirm().



IMPORTANT LIMITATIONS

\- This is a front-end class prototype. The access code check is written in JavaScript and is not secure authentication or real access control.

\- Consultation and student data are kept in JavaScript arrays while the page is open. Refreshing the page reloads the sample records. This version does not use browser storage or a server database.

\- The history button shows earlier details after a consultation is edited during the current session.

\- Use fictional or test information only. Do not enter private student information.



The sample student names and IDs are fictional test data. The registration IDs shown in the assigned problem statement identify the project team, not the sample students.



For GitHub Pages, upload the full folder structure. Do not put styles.css and app.js in the same folder as index.html unless you also change the file paths in index.html.

\---

Created by Yuvan

