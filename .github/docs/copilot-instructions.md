# GitHub Copilot Custom Instructions - SMART SCHOOL MANAGER

## Project Context

You are working on a comprehensive school management system called SMART SCHOOL MANAGER that handles all aspects of educational institution operations, from student management to financial transactions.

## User Roles & Permissions

When generating code, always consider these user roles and their access levels:

- **Master Admin**: Full system control, user management, global settings
- **Admin**: School operations, attendance, payroll, events management
- **Teacher**: Class management, assignments, exams, student progress
- **Student**: View schedules, assignments, grades, study materials
- **Parent**: Monitor child's attendance, homework, performance
- **Accountant**: Fee management, payroll, financial reporting
- **Librarian**: Book tracking, checkout management
- **Transport Manager**: Route assignment, bus tracking
- **Hostel Manager**: Room allocation, maintenance oversight

## Core Functional Areas

### 1. Academic Management

- Digital homework assignment and submission
- Academic year and semester setup
- Online study materials (PDFs, videos)
- Class schedules and exam timetables
- Grade and progress tracking

### 2. Communication System

- Internal messaging board
- Bulk SMS/email notifications
- Live online classes integration
- Parent-teacher communication

### 3. Attendance & HR

- Digital attendance tracking (students/staff)
- Online leave application system
- Employee data and contract management
- Payroll processing

### 4. Financial Management

- Multi-gateway online fee payments
- Invoice generation and tracking
- Financial reporting and analytics
- Payment history management

### 5. Operations Management

- Multi-branch campus support
- Transportation route management
- Hostel operations
- Library management with barcode scanning

## Code Generation Guidelines

### Security & Authentication

- Always implement proper JWT token validation
- Use bcrypt for password hashing
- Implement rate limiting on sensitive endpoints
- Validate and sanitize all user inputs
- Use parameterized queries to prevent SQL injection

### Database Design

- Follow normalized database structure
- Use appropriate foreign key constraints
- Implement soft deletes for important records
- Add proper indexing for performance
- Include audit trails for critical data

### API Development

- RESTful endpoint naming conventions
- Consistent error handling and status codes
- Proper request validation using middleware
- API versioning support
- Comprehensive logging

### Frontend Development

- Mobile-first responsive design
- Component-based architecture
- State management (Redux/Vuex)
- Form validation and error handling
- Accessibility compliance (WCAG 2.1)

### Performance Requirements

- Support 1000+ concurrent users
- Implement caching strategies
- Optimize database queries
- Use pagination for large datasets
- Implement lazy loading for images/content

## Feature-Specific Instructions

### When working on User Management:

- Implement RBAC with granular permissions
- Include user profile management
- Add password reset functionality
- Support multi-language preferences

### When working on Academic Features:

- Include file upload capabilities for assignments
- Implement deadline tracking and notifications
- Add grade calculation and GPA systems
- Support multiple assessment types

### When working on Communication:

- Real-time messaging with WebSocket
- Email/SMS template management
- Notification preferences per user
- Message archiving and search

### When working on Financial Features:

- PCI DSS compliance for payment processing
- Multi-currency support
- Automated invoice generation
- Financial reporting with charts

### When working on Mobile Features:

- Touch-friendly interfaces
- Offline capability for critical features
- Push notifications
- Camera integration for QR/barcode scanning

## Error Handling & Validation

- Implement comprehensive input validation
- Use try-catch blocks for async operations
- Provide meaningful error messages
- Log errors with context for debugging
- Implement graceful fallbacks
