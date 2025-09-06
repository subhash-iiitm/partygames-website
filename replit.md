# Overview

This is a full-stack web application built with React and Express.js that serves as a platform for online party games. The application features a modern UI built with shadcn/ui components and Tailwind CSS, with a PostgreSQL database using Drizzle ORM for data persistence. The current implementation shows a "coming soon" landing page with animated floating game cards showcasing different party games like Codenames, Social Humor, Tambola, and movie guessing games.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Styling**: Tailwind CSS with custom dark theme and CSS variables for theming
- **Routing**: Wouter for client-side routing (lightweight React router alternative)
- **State Management**: TanStack Query (React Query) for server state management
- **Animations**: Framer Motion for smooth animations and transitions
- **Form Handling**: React Hook Form with Zod validation resolvers

### Backend Architecture
- **Framework**: Express.js with TypeScript running on Node.js
- **API Design**: RESTful API structure with `/api` prefix for all endpoints
- **Request Handling**: Express middleware for JSON parsing, URL encoding, and request logging
- **Error Handling**: Centralized error handling middleware with status code management
- **Development**: Hot reload support with tsx for TypeScript execution

### Data Storage
- **Database**: PostgreSQL as the primary database
- **ORM**: Drizzle ORM for type-safe database operations and schema management
- **Connection**: Neon Database serverless PostgreSQL adapter
- **Schema**: User management system with username/password authentication
- **Migrations**: Drizzle Kit for database schema migrations
- **Fallback Storage**: In-memory storage implementation for development/testing

### Development Environment
- **Build System**: Vite for fast development and optimized production builds
- **TypeScript**: Strict TypeScript configuration with path mapping for clean imports
- **Code Quality**: ESM modules throughout the application
- **Development Tools**: Replit integration with error overlay and cartographer plugins
- **Asset Management**: Centralized asset handling with alias resolution

### Authentication & Session Management
- **Session Storage**: PostgreSQL-based session storage using connect-pg-simple
- **User Schema**: Basic user model with ID, username, and password fields
- **Validation**: Zod schemas for runtime type validation and data integrity

## External Dependencies

### UI and Styling
- **@radix-ui/***: Comprehensive set of unstyled, accessible UI primitives for building the component system
- **tailwindcss**: Utility-first CSS framework for styling with custom theme configuration
- **class-variance-authority & clsx**: For conditional CSS class management and component variants
- **framer-motion**: Animation library for smooth interactions and page transitions

### Data Management
- **@tanstack/react-query**: Server state management and caching for efficient data fetching
- **drizzle-orm & drizzle-zod**: Type-safe ORM with Zod integration for PostgreSQL operations
- **@neondatabase/serverless**: Serverless PostgreSQL adapter for database connectivity

### Development Tools
- **vite**: Fast build tool and development server with React plugin support
- **typescript**: Static type checking and enhanced developer experience
- **@replit/vite-plugin-***: Replit-specific plugins for development environment integration
- **tsx**: TypeScript execution engine for running server-side code

### Form and Validation
- **react-hook-form**: Performant form library with minimal re-renders
- **@hookform/resolvers**: Integration adapters for various validation libraries
- **zod**: Schema validation library for runtime type safety

### Utilities
- **date-fns**: Modern date utility library for date manipulation and formatting
- **nanoid**: Secure URL-friendly unique string ID generator
- **wouter**: Minimalist routing library for React applications