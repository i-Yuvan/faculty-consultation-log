// FacultyConnect - simple JavaScript for CSE326 Unit 4 topics
// This file uses variables, arrays, objects, loops, conditions and functions.

const facultyCode = "326";

// Sample consultation records for the demonstration.
// The records are stored in an array while the page is open.
let records = [
    {
        student: "Aarav Mehta",
        sid: "STU-001",
        course: "Web Technology",
        date: "2026-11-07",
        category: "Academic performance",
        notes: "Discussed assignment performance and a study plan.",
        actions: "Revise HTML forms and complete the practice task.",
        followDate: "2026-11-04",
        status: "In Progress",
        assigned: "Dr. Sharma",
        history: []
    },
    {
        student: "Priya Nair",
        sid: "STU-002",
        course: "Database Systems",
        date: "2026-11-06",
        category: "Attendance",
        notes: "Discussed missed practical classes.",
        actions: "Share the practical catch-up schedule.",
        followDate: "",
        status: "Open",
        assigned: "Dr. Sharma",
        history: []
    },
    {
        student: "Rohan Das",
        sid: "STU-003",
        course: "Programming Fundamentals",
        date: "2026-11-05",
        category: "Course clarification",
        notes: "Explained loops and functions.",
        actions: "No further action is required.",
        followDate: "",
        status: "Completed",
        assigned: "Dr. Sharma",
        history: []
    }
];

// Student and course references used by the consultations.
let students = [
    { name: "Aarav Mehta", sid: "STU-001", course: "Web Technology" },
    { name: "Priya Nair", sid: "STU-002", course: "Database Systems" },
    { name: "Rohan Das", sid: "STU-003", course: "Programming Fundamentals" }
];

let editingIndex = -1;

// Check the simple demo access code.
function checkAccess() {
    let code = document.getElementById("accessCode").value;

    if (code === facultyCode) {
        document.getElementById("loginPage").style.display = "none";
        document.getElementById("appPage").style.display = "";
        showAllData();
    } else {
        alert("Incorrect access code. Please try again.");
    }
}

// Show one page and hide the other pages.
function showPage(page) {
    document.getElementById("navConsultations").style.backgroundColor = "transparent";
    document.getElementById("navStudents").style.backgroundColor = "transparent";
    document.getElementById("navFollowups").style.backgroundColor = "transparent";
    document.getElementById("navReports").style.backgroundColor = "transparent";
    document.getElementById("navSettings").style.backgroundColor = "transparent";

    document.getElementById("consultationsPage").style.display = "none";
    document.getElementById("studentsPage").style.display = "none";
    document.getElementById("followupsPage").style.display = "none";
    document.getElementById("reportsPage").style.display = "none";
    document.getElementById("settingsPage").style.display = "none";

    if (page === "consultations") {
        document.getElementById("navConsultations").style.backgroundColor = "#30415f";
        document.getElementById("consultationsPage").style.display = "block";
        document.getElementById("pageName").innerHTML = "Consultation log";
    } else if (page === "students") {
        document.getElementById("navStudents").style.backgroundColor = "#30415f";
        document.getElementById("studentsPage").style.display = "block";
        document.getElementById("pageName").innerHTML = "Students & Courses";
    } else if (page === "followups") {
        document.getElementById("navFollowups").style.backgroundColor = "#30415f";
        document.getElementById("followupsPage").style.display = "block";
        document.getElementById("pageName").innerHTML = "Follow-ups";
    } else if (page === "reports") {
        document.getElementById("navReports").style.backgroundColor = "#30415f";
        document.getElementById("reportsPage").style.display = "block";
        document.getElementById("pageName").innerHTML = "Reports";
    } else if (page === "settings") {
        document.getElementById("navSettings").style.backgroundColor = "#30415f";
        document.getElementById("settingsPage").style.display = "block";
        document.getElementById("pageName").innerHTML = "Settings";
    }
}

// Return today's date in YYYY-MM-DD format.
function getToday() {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    if (month < 10) {
        month = "0" + month;
    }
    if (day < 10) {
        day = "0" + day;
    }

    return year + "-" + month + "-" + day;
}

// Check whether a consultation has passed its follow-up date.
function isOverdue(record) {
    if (record.followDate !== "" && record.followDate < getToday() && record.status !== "Completed") {
        return true;
    }
    return false;
}

// Return the correct status label for a consultation.
function statusLabel(record) {
    if (isOverdue(record)) {
        return '<span class="status-label status-overdue">Overdue</span>';
    } else if (record.status === "Completed") {
        return '<span class="status-label status-completed">Completed</span>';
    } else if (record.status === "In Progress") {
        return '<span class="status-label status-progress">In Progress</span>';
    }
    return '<span class="status-label status-open">Open</span>';
}

// Open the new consultation form.
function openConsultationForm() {
    editingIndex = -1;
    document.getElementById("formHeading").innerHTML = "New consultation";
    document.getElementById("studentName").value = "";
    document.getElementById("studentId").value = "";
    document.getElementById("courseName").value = "";
    document.getElementById("consultDate").value = getToday();
    document.getElementById("category").value = "Academic performance";
    document.getElementById("status").value = "Open";
    document.getElementById("notes").value = "";
    document.getElementById("actionItems").value = "";
    document.getElementById("followDate").value = "";
    document.getElementById("assignedTo").value = document.getElementById("topFaculty").innerHTML;
    document.getElementById("consultationFormBox").style.display = "block";
}

// Close the consultation form.
function closeConsultationForm() {
    document.getElementById("consultationFormBox").style.display = "none";
    editingIndex = -1;
}

// Add a student to the directory if the registration ID is not already present.
function updateStudentReference(name, sid, course) {
    let found = false;

    if (sid !== "") {
        for (let i = 0; i < students.length; i++) {
            if (students[i].sid === sid) {
                students[i].name = name;
                students[i].course = course;
                found = true;
            }
        }

        if (found === false) {
            students[students.length] = { name: name, sid: sid, course: course };
        }
    }
}

// Save a new consultation or update an existing consultation.
function saveConsultation() {
    let name = document.getElementById("studentName").value;
    let sid = document.getElementById("studentId").value;
    let course = document.getElementById("courseName").value;
    let date = document.getElementById("consultDate").value;
    let category = document.getElementById("category").value;
    let status = document.getElementById("status").value;
    let notes = document.getElementById("notes").value;
    let actions = document.getElementById("actionItems").value;
    let followDate = document.getElementById("followDate").value;
    let assigned = document.getElementById("assignedTo").value;

    if (name === "" || course === "" || date === "" || notes === "") {
        alert("Please enter the student name, course, date and consultation notes.");
        return;
    }

    if (editingIndex === -1) {
        let newRecord = {
            student: name,
            sid: sid,
            course: course,
            date: date,
            category: category,
            notes: notes,
            actions: actions,
            followDate: followDate,
            status: status,
            assigned: assigned,
            history: []
        };
        records[records.length] = newRecord;
        alert("Consultation saved.");
    } else {
        // Keep a simple copy of the old details in the history array.
        let oldRecord = records[editingIndex];
        oldRecord.history[oldRecord.history.length] = "Previous entry: " + oldRecord.date + " | " + oldRecord.status + " | " + oldRecord.notes;

        let updatedRecord = {
            student: name,
            sid: sid,
            course: course,
            date: date,
            category: category,
            notes: notes,
            actions: actions,
            followDate: followDate,
            status: status,
            assigned: assigned,
            history: oldRecord.history
        };
        records[editingIndex] = updatedRecord;
        alert("Consultation updated.");
    }

    updateStudentReference(name, sid, course);
    closeConsultationForm();
    showAllData();
}

// Display all consultation records in the table.
function showConsultations() {
    let filter = document.getElementById("statusFilter").value;
    let tableHTML = "";
    let shown = 0;
    let completed = 0;
    let follow = 0;
    let overdue = 0;

    for (let i = 0; i < records.length; i++) {
        let record = records[i];
        let matchesStatus = (filter === "All statuses" || record.status === filter);

        if (record.status === "Completed") {
            completed++;
        }
        if (record.status !== "Completed" && record.followDate !== "") {
            follow++;
        }
        if (isOverdue(record)) {
            overdue++;
        }

        if (matchesStatus) {
            let followText = "Not set";
            if (record.followDate !== "") {
                followText = record.followDate;
            }

            tableHTML += "<tr>";
            tableHTML += "<td><span class='student-name'>" + record.student + "</span><span class='sub-text'>" + record.sid + " · " + record.course + "</span></td>";
            tableHTML += "<td>" + record.date + "</td>";
            tableHTML += "<td><span class='category-label'>" + record.category + "</span></td>";
            tableHTML += "<td>" + followText + "</td>";
            tableHTML += "<td>" + statusLabel(record) + "</td>";
            tableHTML += "<td>";
            tableHTML += "<button class='action-button' onclick='editConsultation(" + i + ")'>Edit</button>";
            tableHTML += "<button class='action-button' onclick='showHistory(" + i + ")'>History</button>";
            tableHTML += "<button class='action-button' onclick='deleteConsultation(" + i + ")'>Delete</button>";
            tableHTML += "</td></tr>";
            shown++;
        }
    }

    if (shown === 0) {
        tableHTML = "<tr><td colspan='6'>No consultations found.</td></tr>";
    }

    document.getElementById("consultationRows").innerHTML = tableHTML;
    document.getElementById("totalCount").innerHTML = records.length;
    document.getElementById("followCount").innerHTML = follow;
    document.getElementById("completedCount").innerHTML = completed;
    document.getElementById("overdueCount").innerHTML = overdue;
    document.getElementById("recordCount").innerHTML = "Showing " + shown + " of " + records.length + " records";
}

// Put the selected consultation details back into the form for editing.
function editConsultation(index) {
    showPage("consultations");
    let record = records[index];
    editingIndex = index;

    document.getElementById("formHeading").innerHTML = "Edit consultation";
    document.getElementById("studentName").value = record.student;
    document.getElementById("studentId").value = record.sid;
    document.getElementById("courseName").value = record.course;
    document.getElementById("consultDate").value = record.date;
    document.getElementById("category").value = record.category;
    document.getElementById("status").value = record.status;
    document.getElementById("notes").value = record.notes;
    document.getElementById("actionItems").value = record.actions;
    document.getElementById("followDate").value = record.followDate;
    document.getElementById("assignedTo").value = record.assigned;
    document.getElementById("consultationFormBox").style.display = "block";
}

// Show the previous versions of one consultation.
function showHistory(index) {
    let record = records[index];
    let historyText = "History for " + record.student + ":\n\n";

    if (record.history.length === 0) {
        historyText += "No changes have been recorded yet.";
    } else {
        for (let i = 0; i < record.history.length; i++) {
            historyText += (i + 1) + ". " + record.history[i] + "\n";
        }
    }

    alert(historyText);
}

// Delete one consultation after confirmation.
function deleteConsultation(index) {
    if (confirm("Do you want to delete this consultation?")) {
        let newRecords = [];
        for (let i = 0; i < records.length; i++) {
            if (i !== index) {
                newRecords[newRecords.length] = records[i];
            }
        }
        records = newRecords;
        showAllData();
    }
}

// Add a student reference from the Students & Courses page.
function addStudent() {
    let name = document.getElementById("newStudentName").value;
    let sid = document.getElementById("newStudentId").value;
    let course = document.getElementById("newStudentCourse").value;
    let found = false;

    if (name === "" || sid === "" || course === "") {
        alert("Please complete all student fields.");
        return;
    }

    for (let i = 0; i < students.length; i++) {
        if (students[i].sid === sid) {
            found = true;
        }
    }

    if (found === true) {
        alert("This registration ID is already in the directory.");
    } else {
        students[students.length] = { name: name, sid: sid, course: course };
        document.getElementById("newStudentName").value = "";
        document.getElementById("newStudentId").value = "";
        document.getElementById("newStudentCourse").value = "";
        showAllData();
        alert("Student added.");
    }
}

// Display student and course references.
function showStudents() {
    let tableHTML = "";
    let shown = 0;

    for (let i = 0; i < students.length; i++) {
        let consultationTotal = 0;
            for (let j = 0; j < records.length; j++) {
                if (records[j].sid === students[i].sid) {
                    consultationTotal++;
                }
            }

            tableHTML += "<tr>";
            tableHTML += "<td>" + students[i].name + "</td>";
            tableHTML += "<td>" + students[i].sid + "</td>";
            tableHTML += "<td>" + students[i].course + "</td>";
            tableHTML += "<td>" + consultationTotal + "</td>";
            tableHTML += "</tr>";
        shown++;
    }

    if (shown === 0) {
        tableHTML = "<tr><td colspan='4'>No students found.</td></tr>";
    }

    document.getElementById("studentRows").innerHTML = tableHTML;
    document.getElementById("studentTotal").innerHTML = shown + " students";
}

// Display consultations that still need attention.
function showFollowups() {
    let filter = document.getElementById("followFilter").value;
    let tableHTML = "";
    let shown = 0;

    for (let i = 0; i < records.length; i++) {
        let record = records[i];
        let showRecord = false;

        if (record.status !== "Completed") {
            if (filter === "All follow-ups") {
                showRecord = true;
            } else if (filter === "Overdue" && isOverdue(record)) {
                showRecord = true;
            } else if (filter === "Upcoming" && record.followDate !== "" && record.followDate >= getToday()) {
                showRecord = true;
            } else if (filter === "No date" && record.followDate === "") {
                showRecord = true;
            }
        }

        if (showRecord) {
            let dateText = "Not set";
            if (record.followDate !== "") {
                dateText = record.followDate;
            }

            tableHTML += "<tr>";
            tableHTML += "<td><span class='student-name'>" + record.student + "</span><span class='sub-text'>" + record.sid + " · " + record.course + "</span></td>";
            tableHTML += "<td>" + record.actions + "</td>";
            tableHTML += "<td>" + dateText + "</td>";
            tableHTML += "<td>" + statusLabel(record) + "</td>";
            tableHTML += "<td><button class='action-button' onclick='editConsultation(" + i + ")'>Edit</button></td>";
            tableHTML += "</tr>";
            shown++;
        }
    }

    if (shown === 0) {
        tableHTML = "<tr><td colspan='5'>No follow-ups found.</td></tr>";
    }

    document.getElementById("followRows").innerHTML = tableHTML;
    document.getElementById("followTotal").innerHTML = shown + " follow-ups";
}

// Count simple report information by using arrays and loops.
function showReports() {
    let openCount = 0;
    let completedCount = 0;
    let categories = ["Academic performance", "Attendance", "Course clarification", "Project support", "Career guidance", "Other"];
    let categoryCounts = [0, 0, 0, 0, 0, 0];

    for (let i = 0; i < records.length; i++) {
        if (records[i].status === "Completed") {
            completedCount++;
        } else {
            openCount++;
        }

        for (let j = 0; j < categories.length; j++) {
            if (records[i].category === categories[j]) {
                categoryCounts[j]++;
            }
        }
    }

    document.getElementById("reportTotal").innerHTML = records.length;
    document.getElementById("reportOpen").innerHTML = openCount;
    document.getElementById("reportCompleted").innerHTML = completedCount;
    document.getElementById("reportStudents").innerHTML = students.length;

    let reportHTML = "";
    for (let i = 0; i < categories.length; i++) {
        if (categoryCounts[i] > 0) {
            reportHTML += "<div class='category-row'><span>" + categories[i] + "</span><strong>" + categoryCounts[i] + "</strong></div>";
        }
    }

    if (reportHTML === "") {
        reportHTML = "No consultation records are available.";
    }
    document.getElementById("categorySummary").innerHTML = reportHTML;
}

// Save the faculty name and academic year shown on the page.
function saveSettings() {
    let faculty = document.getElementById("facultyInput").value;
    let year = document.getElementById("yearInput").value;

    if (faculty === "" || year === "") {
        alert("Please enter the faculty name and academic year.");
    } else {
        document.getElementById("topFaculty").innerHTML = faculty;
        document.getElementById("sideYear").innerHTML = year;
        alert("Workspace details updated.");
    }
}

// Clear all current demo records after confirmation.
function clearRecords() {
    if (confirm("Clear all consultation records and student references?")) {
        records = [];
        students = [];
        showAllData();
        alert("The demo records have been cleared.");
    }
}

// Refresh the information on every page.
function showAllData() {
    showConsultations();
    showStudents();
    showFollowups();
    showReports();
}

// Show the sample information when the page is first opened.
showAllData();
