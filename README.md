---

# Layer7 DStat

Layer7 DStat is a modern, high-performance distributed system statistics monitoring tool. This project leverages React with Vite and Shadcn for the frontend, and Actix-Web in Rust for the backend to provide real-time insights into your network's performance.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Real-time Monitoring**: Get real-time statistics of your distributed system's performance.
- **Modern Frontend**: Built with React, Vite, and Shadcn for a fast and responsive user interface.
- **Robust Backend**: Powered by Rust and Actix-Web for high performance and reliability.
- **Extensible**: Easily extend and customize to fit your specific monitoring needs.

## Installation

### Prerequisites

Ensure you have the following installed:
- Node.js (v14 or higher)
- Rust (latest stable version)
- Cargo (Rust package manager)

### Clone the Repository

```bash
git clone https://github.com/yourusername/layer7-dstat.git
cd layer7-dstat
```

### Frontend Setup
Navigate to the `frontend` directory and install the dependencies:

```bash
cd frontend
pnpm i
```

### Backend Setup

Navigate to the `reoot` directory and build the project:
```bash
cd ..
cargo build
```

## Usage

### Running the Frontend

From the `frontend` directory, start the development server:

```bash
pnpm dev
```

### Running the Backend

From the `root` directory, start the backend server:

```bash
cargo run
```

The frontend will be available at `http://localhost:3000` and the backend at `http://localhost:8080`.

## Contributing

We welcome contributions from the community! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature`).
6. Open a pull request.

Please ensure your code adheres to the project's coding standards and includes appropriate tests.
---
