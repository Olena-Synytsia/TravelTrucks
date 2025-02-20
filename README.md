# TravelTrucks - Camper Rental Web Application

## Description

**TravelTrucks** is a frontend web application for the company **TravelTrucks**, which specializes in camper rentals. The application allows users to browse a catalog of available campers, view detailed information about a selected camper, read reviews, and book a camper directly on the platform.

## Features

- **Home Page**: A welcome banner with a call to action to view the catalog.
- **Catalog Page**: Displays all available campers with the ability to filter by location, vehicle type, air conditioning, kitchen, and other criteria. Users can also add campers to the "Favorites" list.
- **Camper Detail Page**: Shows detailed information about the camper, including a photo gallery, user reviews, and a booking form.
- **Filtering**: Filters campers using the backend API by location, vehicle type, air conditioning, kitchen, etc.
- **Favorites System**: Users can add campers to their favorites list, and this information persists even after the page is refreshed.
- **Booking Form**: Users can book a camper by filling out a form on the camper's detail page.
- **Reviews**: Users can view camper reviews on a 5-star scale.
- **Load More Button**: Campers will load when the "Load More" button is clicked.

## Installation

To set up the project locally, follow these steps:

1. **Prerequisites**

- **Node.js** (version 14 or newer) - [Download Node.js](https://nodejs.org/)
- **npm** (Node Package Manager) - comes with Node.js

2. **Setup Instructions**

Clone the repository and install dependencies

## Technologies

**React** — Library for building user interfaces.  
**Redux** — Library for managing state in React.  
**React Router** — For implementing routing in the app.  
**Axios** — For making API requests.  
**Vite** — Build tool and development server.  
**CSS Modules** — For component styling.  
**Formik** — For form handling.  
**Yup** — For form validation.  
**React-Toastify** — For displaying notifications.  
**React-Datepicker** — For selecting dates.  
**React-Loader-Spinner** — For showing spinners during data loading.

## API

The application uses the following API to get camper data:

**Base URL**: `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers`

- **GET /campers**: Retrieve all available campers.
- **GET /campers/:id**: Retrieve details of a specific camper by its ID.

**Routes**

- `/` - Home page with a call to action to view the catalog.
- `/catalog` - Catalog page displaying all available campers with filtering options.
- `/catalog/:id` - Camper detail page with information, reviews, and a booking form.

## Author

Olena Synytsia  
GitHub: https://github.com/Olena-Synytsia  
LinkedIn: https://www.linkedin.com/in/olena-synytsia
