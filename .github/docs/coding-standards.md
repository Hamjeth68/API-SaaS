# Coding Standards - Smart School Manager

## Table of Contents

- [General Principles](#general-principles)
- [Naming Conventions](#naming-conventions)
- [JavaScript/Node.js Standards](#javascriptnodejs-standards)
- [React/Frontend Standards](#reactfrontend-standards)
- [Database Standards](#database-standards)
- [API Standards](#api-standards)
- [Error Handling](#error-handling)
- [Comments and Documentation](#comments-and-documentation)
- [Security Standards](#security-standards)
- [Performance Standards](#performance-standards)

## General Principles

### Code Quality Principles

1. **Readability First** - Code should be self-documenting
2. **DRY (Don't Repeat Yourself)** - Avoid code duplication
3. **SOLID Principles** - Follow object-oriented design principles
4. **KISS (Keep It Simple, Stupid)** - Prefer simple solutions
5. **YAGNI (You Aren't Gonna Need It)** - Don't over-engineer

### Code Style

### General Naming Rules

- Use descriptive names that explain purpose
- Avoid abbreviations unless commonly understood
- Use consistent terminology across the codebase

### JavaScript/Node.js Naming

```javascript
// Variables and functions - camelCase
const studentName = 'John Doe';
const calculateGrade = () => {};

// Constants - UPPER_SNAKE_CASE
const MAX_STUDENTS_PER_CLASS = 30;
const API_BASE_URL = 'https://api.school.com';

// Classes - PascalCase
class StudentManager {}
class GradeCalculator {}

// Files and directories - kebab-case
student - controller.js;
grade - calculator.js;
(academic -
  management /
    // Database tables and columns - snake_case
    students,
  student_grades,
  class_schedules);
(student_id, first_name, created_at);
```

### React Component Naming

```javascript
// Components - PascalCase
const StudentList = () => {};
const GradeCalculator = () => {};

// Props - camelCase
<StudentCard studentId={123} isActive={true} />;

// Hooks - camelCase starting with 'use'
const useStudentData = () => {};
const useAuthentication = () => {};

// Event handlers - handle + EventName
const handleSubmit = () => {};
const handleStudentSelect = () => {};
```

## JavaScript/Node.js Standards

### Variable Declarations

```javascript
// Use const by default, let when reassignment needed
const students = [];
let currentIndex = 0;

// Destructuring for object properties
const { name, email, classId } = student;
const [first, second] = grades;

// Template literals for string interpolation
const message = `Welcome ${studentName} to ${className}`;
```

### Function Definitions

```javascript
// Prefer arrow functions for short functions
const calculateGrade = (scores) =>
  scores.reduce((a, b) => a + b) / scores.length;

// Use regular functions for methods and constructors
function StudentManager() {
  this.students = [];
}

// Async/await for asynchronous operations
const fetchStudentData = async (studentId) => {
  try {
    const response = await api.get(`/students/${studentId}`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch student data:', error);
    throw error;
  }
};
```

### Object and Array Handling

```javascript
// Object property shorthand
const createStudent = (name, email, classId) => ({
  name,
  email,
  classId,
  createdAt: new Date(),
});

// Array methods over loops
const activeStudents = students.filter(
  (student) => student.status === 'active',
);
const studentNames = students.map((student) => student.name);
const totalGrades = grades.reduce((sum, grade) => sum + grade, 0);

// Spread operator for copying/merging
const updatedStudent = { ...student, lastLoginAt: new Date() };
const allStudents = [...classAStudents, ...classBStudents];
```

### Module Organization

```javascript
// Named exports for utilities
export const validateEmail = (email) => {
  /* ... */
};
export const formatDate = (date) => {
  /* ... */
};

// Default export for main class/component
export default class StudentService {
  // ...
}

// Import organization
import React from 'react';
import { useState, useEffect } from 'react';

import { validateEmail } from '../utils/validation';
import { api } from '../services/api';

import StudentCard from './StudentCard';
import GradeDisplay from './GradeDisplay';
```

## React/Frontend Standards

### Component Structure

```javascript
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const StudentCard = ({ student, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Component setup logic
  }, [student.id]);

  const handleEdit = async () => {
    setLoading(true);
    try {
      await onEdit(student);
      setIsEditing(false);
    } catch (error) {
      console.error('Failed to edit student:', error);
    } finally {
      setLoading(false);
    }
  };

  return <div className="student-card">{/* JSX content */}</div>;
};

StudentCard.propTypes = {
  student: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string,
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default StudentCard;
```

### State Management

```javascript
// Local state for component-specific data
const [formData, setFormData] = useState({
  name: '',
  email: '',
  classId: null,
});

// Global state for application-wide data
import { useSelector, useDispatch } from 'react-redux';

const StudentList = () => {
  const students = useSelector((state) => state.students.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);
};

// Custom hooks for reusable logic
const useStudentForm = (initialData) => {
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validation and submission logic
  };

  return { formData, setFormData, errors, handleSubmit };
};
```

### Event Handling

```javascript
// Event handler naming
const handleFormSubmit = (e) => {
  e.preventDefault();
  // Handle form submission
};

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
};

const handleStudentSelect = (studentId) => {
  // Handle student selection
};

// Avoid inline functions in JSX for performance
// Bad
<button onClick={() => handleDelete(student.id)}>Delete</button>;

// Good
const handleDeleteClick = useCallback(() => {
  handleDelete(student.id);
}, [student.id, handleDelete]);

<button onClick={handleDeleteClick}>Delete</button>;
```

## Database Standards

### Table Design

```sql
-- Use descriptive table names (plural)
students, classes, assignments, grade_submissions

-- Column naming conventions
id                  -- Primary key
student_id          -- Foreign key
first_name          -- Descriptive names
created_at          -- Timestamp columns
is_active           -- Boolean columns
```

## API Standards

### Endpoint Naming

```
GET    /api/v1/students              # List all students
GET    /api/v1/students/{id}         # Get specific student
POST   /api/v1/students              # Create new student
PUT    /api/v1/students/{id}         # Update entire student
PATCH  /api/v1/students/{id}         # Partial update
DELETE /api/v1/students/{id}         # Delete student

# Nested resources
GET    /api/v1/students/{id}/grades  # Get student's grades
POST   /api/v1/classes/{id}/students # Add student to class
```

### Request Validation

## Error Handling

### JavaScript Error Handling

```javascript
// Async/await with try-catch
const fetchStudentData = async (studentId) => {
  try {
    const response = await api.get(`/students/${studentId}`);
    return response.data;
  } catch (error) {
    if (error.response?.status === 404) {
      throw new Error('Student not found');
    }

    console.error('API Error:', error);
    throw new Error('Failed to fetch student data');
  }
};

// Error boundaries for React
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }

    return this.props.children;
  }
}
```

## Comments and Documentation

### Code Comments

```javascript
/**
 * Calculates the final grade for a student based on multiple assessments
 * @param {Array<Object>} assessments - Array of assessment objects
 * @param {Object} weights - Weight configuration for different assessment types
 * @returns {number} Final calculated grade (0-100)
 */
const calculateFinalGrade = (assessments, weights) => {
  // Group assessments by type for weighted calculation
  const groupedAssessments = groupBy(assessments, 'type');

  let totalWeightedScore = 0;
  let totalWeight = 0;

  // Calculate weighted average for each assessment type
  Object.entries(groupedAssessments).forEach(([type, typeAssessments]) => {
    const typeWeight = weights[type];
    const typeScore =
      typeAssessments.reduce((sum, assessment) => sum + assessment.score, 0) /
      typeAssessments.length;

    totalWeightedScore += typeScore * typeWeight;
    totalWeight += typeWeight;
  });

  return totalWeightedScore / totalWeight;
};
```
