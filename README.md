# Employee Management System

A responsive and modern **Employee Management Application** built with **React, TypeScript, Redux Toolkit, Tailwind CSS, and Material UI (MUI)**.

This project was developed as part of the **Frontend Engineering Internship** and has been extended from **Assignment No. 4 — Part 1** to include additional features and improvements in **Part 2**.

---

## 🚀 Features

### Employee Management

- Employee listing
- Add new employees
- Edit existing employees
- Delete employees with confirmation
- View detailed employee information
- Unique employee IDs using `crypto.randomUUID()`

### Search & Filtering

- Search employees by:
  - Name
  - Job role
  - Department
  - Location
  - Email
- Filter employees by department
- Filter employees by status
- Display filtered employee count
- Reset and manage filters through Redux state

### Form Management & Validation

- Form handling with React Hook Form
- Schema validation with Zod
- Real-time validation
- Required field validation
- Email validation
- Salary validation
- Reusable employee form for both Add and Edit operations

### State Management

- Centralized employee state using Redux Toolkit
- Add employee actions
- Update employee actions
- Delete employee actions
- Search state management
- Department filter state management
- Status filter state management
- Employee hydration on application load

### Data Persistence

- Employee data persisted using Local Storage
- Employees restored when the application loads
- Redux store automatically syncs employee data with Local Storage

### UI & UX

- Responsive design
- Desktop and mobile navigation
- Responsive sidebar
- Mobile menu with backdrop
- Dark mode and light mode support
- Theme toggle
- Loading skeleton during initial application load
- Empty state when no employee data exists
- Different empty states for:
  - No employees added
  - No search or filter results
- Toast notifications
- Delete confirmation dialog
- Reusable UI components
- Modern Tailwind CSS styling
- Material UI components and icons

### Navigation

- React Router DOM
- Protected application routes
- Dynamic employee detail routes
- Dynamic employee edit routes
- Navigation between employee pages
- Redirect handling for invalid employee IDs

---
---

## 🛠️ Technologies Used

- React
- TypeScript
- Vite
- Redux Toolkit
- React Redux
- Tailwind CSS
- Material UI (MUI)
- React Hook Form
- Zod
- React Router DOM
- React Toastify
- Local Storage

---

## 📁 Project Structure

```text
src/
├── components/
│   └── ui/
│
├── context/
│   ├── AuthContext.tsx
│   └── ThemeContext.tsx
│
├── features/
│   ├── Directory/
│   │   ├── components/
│   │   ├── services/
│   │   ├── types/
│   │   └── utils/
│   │
│   ├── AddEmployee/
│   │   ├── components/
│   │   ├── constants/
│   │   └── schemas/
│   │
│   ├── EditEmployee/
│   │   └── components/
│   │
│   ├── EmployeeDetail/
│   │   └── components/
│   │
│   └── Auth/
│       ├── components/
│       └── schemas/
│
├── layouts/
│   └── components/
│       └── Sidebar/
│
├── store/
│   ├── employees/
│   │   └── employeeSlice.ts
│   ├── hooks.ts
│   └── store.ts
│
├── App.tsx
├── main.tsx
└── index.css
```

---

## 💻 Getting Started

### Clone the repository

```bash
git clone https://github.com/Mtalha350/Employee-Management.git
```

### Navigate to the project

```bash
cd Employee-Management
```

### Install dependencies

```bash
npm install
```

### Run the application

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

---

## 🔐 Demo Credentials

```text
Email: admin@peopleflow.com
Password: 123456
```

---

## 📌 Assignment Details

### Assignment No. 4 — Part 1

**Week:** 4  
**Assignment:** React Employee Management Application — Part 1

#### Focus Areas

- React Fundamentals
- Components
- Props
- State Management with React Hooks
- Forms
- Validation
- Routing
- CRUD Operations
- Component Reusability

---

### Assignment No. 4 — Part 2

#### Additional Features Added

- Redux Toolkit for centralized state management
- Typed Redux hooks
- Employee state hydration
- Local Storage synchronization
- Loading state management
- Initial page loading skeleton
- Search state moved to Redux
- Department filter state moved to Redux
- Status filter state moved to Redux
- Improved empty state handling
- Separate empty states for:
  - No employee data
  - No matching search/filter results
- Dark and Light theme support
- Responsive sidebar navigation
- Mobile navigation support
- Authentication flow
- Login page
- Logout confirmation
- Protected navigation flow
- Improved responsive UI
- Reusable UI architecture
- Improved application state handling

---

## Program Details

**Program:** Frontend Engineering Internship  
**Trainer & Program Manager:** Maheen Nasir

---

## 📄 Acknowledgement

This project was developed for educational purposes as part of the **Frontend Engineering Internship**.

The application started with **Assignment No. 4 — React Employee Management Application (Part 1)** and was further extended in **Part 2** with improved state management, application architecture, authentication, theme support, loading states, Local Storage synchronization, and enhanced user experience.
