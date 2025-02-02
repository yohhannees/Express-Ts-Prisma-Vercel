# Node.js Express TypeScript Prisma Boilerplate

A boilerplate for building a Node.js backend service with Express, TypeScript, and Prisma. This project is configured for seamless deployment on Vercel.

## Project Structure
```
nodejs-prisma-app
├── prisma
│   └── schema.prisma
├── src
│   ├── controllers
│   │   └── example.controller.ts
│   ├── routes
│   │   └── example.routes.ts
│   ├── services
│   │   └── example.service.ts
│   ├── app.ts
│   └── types
│       └── index.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Getting Started

### Prerequisites
- **Node.js** (>= 14.x)
- **npm** (>= 6.x)
- **PostgreSQL** (or any other Prisma-supported database)

### Installation

1. **Clone the repository**
   ```sh
   git clone https://github.com/Yohhannees/nodejs-prisma-app.git
   cd nodejs-prisma-app
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Set up the database**
   - Create a `.env` file in the root directory and add your database URL:
     ```env
     DATABASE_URL="postgresql://user:password@localhost:5432/mydb"
     ```
   
4. **Run Prisma migrations**
   ```sh
   npx prisma migrate dev
   ```

5. **Start the development server**
   ```sh
   npm run dev
   ```

## Endpoints
- **GET /example** – Returns: `"This is an example route"`
- **GET /example/help** – Returns: `"This is a help message"`

## Configuration

### Environment Variables
Create a `.env` file in the root directory and add the following:
```env
DATABASE_URL=your-database-url
PORT=3000
```

### Scripts
- **`npm run dev`** – Runs the development server using `ts-node-dev`.
- **`npm run build`** – Compiles TypeScript to JavaScript.
- **`npm start`** – Runs the compiled JavaScript code.

### Middleware
- **body-parser** – Parses incoming request bodies.
- **cors** – Enables CORS with flexible options.
- **morgan** – Logs HTTP requests.

## Error Handling
The project includes basic error-handling middleware:
- Logs errors to the console.
- Returns a `500` status code with an error message.

## Deployment on Vercel
1. **Install Vercel CLI** (if not already installed):
   ```sh
   npm install -g vercel
   ```
2. **Deploy** the project:
   ```sh
   vercel
   ```

## Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request.

## License
This project is licensed under the **MIT License**. See the `LICENSE` file for details.

## Acknowledgements
- **Express**  
- **TypeScript**  
- **Prisma**  
- **Vercel**  

## Contact
For any questions or feedback, please contact [yohannesgetachew@gmail.com].

