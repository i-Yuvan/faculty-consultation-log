# FacultyConnect — Faculty Consultation Log

Responsive academic project prototype using separate HTML, CSS, and JavaScript files.

**Live demo:** https://i-yuvan.github.io/faculty-consultation-log/

## Files

- `index.html` — page structure, forms, navigation and content
- `css/styles.css` — layout, styling and responsive behavior
- `js/app.js` — navigation, consultation forms, student references, follow-ups, reports and settings

## Run

Open `index.html` in a modern browser. No installation or build step is required.

Enter the demo faculty access code: **`326`**

## Working navigation and controls

- **Consultations:** Add, view, edit and delete consultation records; filter records by status.
- **Students & Courses:** Add student references and view the student directory with consultation counts.
- **Follow-ups:** View pending consultations and filter by overdue, upcoming or no follow-up date; edit related consultations.
- **Reports:** View total consultations, open cases, completed cases, student count and consultation counts by category.
- **Settings:** Change the faculty display name and academic year, and clear demo records.
- **Consultation History:** View previous consultation details after editing a record during the current session.

## Folder Structure

```text
faculty-consultation-log/
│
├── index.html
├── README.md
│
├── css/
│   └── styles.css
│
└── js/
    └── app.js
```

## Class Topics Used

**HTML:** HTML document structure, metadata, semantic elements, headings, paragraphs, links, buttons, forms, labels, input fields, select menus, textareas and tables.

**CSS:** Element, class and universal selectors, pseudo-classes, box model, colours, backgrounds, typography, Flexbox, Grid, positioning, transitions and media queries.

**JavaScript:** `let`, `const`, strings, arrays, objects, functions, `for` loops, `if...else`, comparison operators, `document.getElementById()`, `innerHTML`, input values, `onclick`, `alert()` and `confirm()`.

## Important Limitations

- This is a front-end classroom prototype. The access code is checked in JavaScript and is not secure authentication or real access control.

- Consultation and student data are kept in JavaScript arrays while the page is open. Refreshing the page reloads the sample records. This version does not use browser storage or a server database.

- The history feature shows previous consultation details after a record is edited during the current session.

- The project does not provide secure institutional storage or multi-user synchronisation.

- Use fictional or test information only. Do not enter private student information.

The sample student names and IDs are fictional test data. The registration IDs shown in the assigned problem statement identify the project team, not the sample students.

For GitHub Pages, upload the complete folder structure. Keep `styles.css` inside the `css` folder and `app.js` inside the `js` folder, as referenced in `index.html`.

---

**Created by Yuvan**
