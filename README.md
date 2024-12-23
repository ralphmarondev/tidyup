# TidyUp

TidyUp is a simple and cute to-do list application that helps you stay organized and manage tasks efficiently. It
features user authentication, task management, and a settings page for updating user information. Built with React and
styled using Bootstrap, it connects to a Django Rest Framework (DRF) backend for data management.

## Features

- **User Authentication**: Register and log in to manage your tasks.
- **Task Management**: Add, edit, delete, and mark tasks as completed.
- **User Settings**: Update your profile and personal information.
- **Bootstrap Styling**: Simple, responsive, and clean user interface.

## Technologies

- **Frontend**: React, Bootstrap, TypeScript
- **Backend**: Django Rest Framework (DRF)
- **Database**: SQLite (or any database you prefer with DRF)

## Getting Started

### Prerequisites

- Node.js (v16+)
- Yarn (for package management)
- Python (for Django backend)

### Installation

#### Frontend (React + Bootstrap)

1. Clone the repository:

   ```bash
   git clone https://github.com/ralphmarondev/tidyup.git
   cd tidyup
   ```

2. Install the dependencies:

   ```bash
   yarn install
   ```

3. Run the development server:

   ```bash
   yarn dev
   ```

   The app should now be running at [http://localhost:5173](http://localhost:3000).

#### Backend (Django Rest Framework)

1. Clone the backend repository (if separate):

   ```bash
   git clone https://github.com/ralphmarondev/tidyup-backend.git
   cd tidyup-backend
   ```

2. Install the backend dependencies:

   ```bash
   pip install -r requirements.txt
   ```

3. Migrate the database:

   ```bash
   python manage.py migrate
   ```

4. Run the Django server:

   ```bash
   python manage.py runserver
   ```

   The backend API should be running at [http://localhost:8000](http://localhost:8000).

## Contributing

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Push your changes and create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.