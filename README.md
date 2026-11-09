# FacultyConnect — Faculty Consultation Log

**CSE326 Internet Programming | CA1 Project | Group 7**

FacultyConnect is a beginner-level front-end project prototype for recording student consultations and keeping track of academic concerns and follow-up actions.

**Live demo:** [https://i-yuvan.github.io/faculty-consultation-log/](https://i-yuvan.github.io/faculty-consultation-log/)

## Project purpose

FacultyConnect provides a simple place for a faculty member to record a student consultation, note the discussion and agreed action items, set a follow-up date, and check the consultation status.

## Main features

- **Faculty access screen:** Opens the demo workspace using the demo access code **`326`**.
- **Consultations:** Add, view, edit and delete consultation records. Each record includes student and course details, consultation date, category, notes, action items, assigned faculty member, follow-up date and status.
- **Consultation history:** Shows the previous consultation details after a record has been edited during the current session.
- **Students & Courses:** Add student and course references and view them in a directory, including the number of consultations for each student.
- **Follow-ups:** View pending consultations and filter them by all follow-ups, overdue, upcoming or no date. Open a related consultation for editing.
- **Reports:** View simple totals for consultations, open cases, completed cases and students, along with consultation counts by category.
- **Settings:** Change the faculty display name and academic year shown in the workspace, or clear the current demo records.
- **Responsive layout:** The interface adjusts for laptop and mobile screen sizes.

## Project files
```
faculty-consultation-log/
│
├── index.html
├── README.md
├── css/
│   └── styles.css
└── js/
    └── app.js
```

- `index.html` — page structure, navigation, forms, tables and content.
- `css/styles.css` — page layout, colours, typography, buttons, tables and responsive design.
- `js/app.js` — demo records and the functions for navigation, consultation forms, student references, follow-ups, reports and settings.

## How to run

1. Open `index.html` in a modern web browser.
2. Enter the demo faculty access code: **`326`**.

The project does not require an installation or build step.

## Class topics used

The project applies the basic HTML, CSS and JavaScript concepts covered in the CSE326 Unit 1–4 class material.

- **HTML:** HTML document structure, metadata, semantic elements, headings, paragraphs, forms, labels, input fields, select menus, textareas and tables.
- **CSS:** Universal, element and class selectors, pseudo-classes, box model, colours, backgrounds, typography, Flexbox, Grid, transitions and media queries.
- **JavaScript:** `let` and `const`, strings, arrays, objects, functions, `for` loops, `if...else`, comparisons, `document.getElementById()`, `innerHTML`, form input values, `onclick`, `alert()` and `confirm()`.

## Demo limitations

- This is a front-end classroom prototype. The access code is checked in JavaScript and is **not secure authentication or real access control**.
- Consultation and student data are held in JavaScript arrays while the page is open. Refreshing the page reloads the sample records, so changes made during a session are not permanently saved.
- Consultation history is kept during the current session and is shown after a consultation is edited.
- The project does not use a server database, secure institutional storage or multi-user synchronisation.
- Use fictional or test information only. Do not enter private student information.

The sample student names and IDs are fictional. The registration IDs in the assigned problem statement identify the project team, not the sample students shown in the application.

For GitHub Pages, upload the complete folder structure. Keep `styles.css` inside `css/` and `app.js` inside `js/`, as referenced by `index.html`.

---

**Created by Yuvan**
