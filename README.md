# Herland Project

Welcome to the **Herland** project, a React application built using Vite and Taiwind CSS. This documentation provides step-by-step instructions for various scenarios you might encounter during your work on the project.

## Table of Contents
1. Prerequisites
2. Getting Started
    - Clone the Project
    - Install Local Dependencies
    - Run the Project in Development
3. Adding a New Slide
4. Adding a New Pledge Card
5. Adding a New Image to the Carousel

---

## Prerequisites
Before you start working on the **Herland** project, make sure you have the following prerequisites:

- Node.js (v14.0.0 or higher)
- npm (v7.0.0 or higher)

## Getting Started

### Clone the Project
Clone the project repository to your local machine:

```bash
git clone https://github.com/unccd/herland.git
```

### Install Local Dependencies
Navigate to the project directory and install the required dependencies:


```bash
cd herland
npm install
```

Run the Project in Development
To run the project in development mode, execute:

```bash
npm run dev
```
Access the application by visiting http://localhost:5173 in your web browser.

## Adding a New Slide

To add a new slide to the website, follow these steps:

1. Create a new folder in the `src/slides` directory with the name of your component, e.g., *DemoComponent*.

2. Inside the folder, create a React component file (e.g., *TestComponent.jsx*).

3.  Structure the component:

```jsx
import React from 'react';

const DemoComponent = () => (
  <section className='panel-inner full-height'>
    {Your content}
  </section>
);

export default DemoComponent;
```
4. Import your component in src/Homepage.jsx:
```jsx
import TestComponent from './slides/TestComponent';
...
return (
      ...
      <div className="panel">
        <DemoComponent />
      </div>
      ...
)
...
```
***Important***: Each component must be wrapper in a `<div>` with the className `panel`, within each component we must have a `<section>` with the className `panel-inner fixed-height`, this is required for the scroll effects to function as designed. The `full-height` class add a min-height of 100vh. 

***Note***: If a panel's height exceeds `100vh` the scroll mode would switch to regular scroll, in order for the scroll effect to function each slide must be max 100vh.

## Adding a New Image to the Carousel
To add a new image to the carousel, follow these steps:

1. Add a small resolution image to `src/static/small-portraits`, to be displayed as preview in the carousel.

2. Add the corresponding full resolution image to `src/static/portraits` with the same name.


## Adding a New Event

To add a new Event Card for the Events slide, follow these steps:

1. Open `src/slides/events/eventsData.js`.

2. Add a new image for the Event Card in `src/static/events` and import it in `eventsData.js`

```js
import event1Img from "../../static/events/event-card-1.png";
import event2Img from "../../static/events/event-card-2.png";
...
import yourEventImage from "../../static/events/yourEventImage.png"

```
3. Locate the `events` array and add a new object:

```jsx
 const events = [
 ...
    {
        imageSrc: yourEventImage,
        href: "event href",
        title: "Event title",
        subtitle: "Event subtitle, can be used for locationdates",
    },
 ...
]
```
4. Customize the fields with the appropriate information.
