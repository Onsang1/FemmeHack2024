# FemmeHack2024
FemmeHack2024Project
## Inspiration

The inspiration for the Gender-Inclusive Restroom Finder was sparked by the critical need to enhance inclusivity and accessibility on the University of Pennsylvania's campus. Recognizing the diverse campus community, including individuals with health conditions, parents with young children, breastfeeding mothers, and those who value privacy, we aimed to address the absence of easily locatable gender-inclusive restrooms. The project was driven by the understanding that such facilities are not just a convenience but a necessity for many, impacting daily campus life and productivity significantly. Our vision extends beyond Penn, hoping to eventually expand this solution to all Pennsylvania schools, including high schools, fostering an inclusive environment for students and staff across the state.

## What it does

The Gender-Inclusive Restroom Finder is a web application that helps users locate gender-inclusive restrooms across Penn’s campus. It provides an interactive map that shows the nearest restrooms based on the user's location, detailed information about each restroom, including accessibility features, and real-time directions. Additionally, it offers a platform for user feedback and community voting on restroom facilities, ensuring the data remains up-to-date and reflective of the users' needs.

## How we built it

We built this application using a blend of HTML, CSS, and JavaScript for the frontend, crafting a responsive and user-friendly interface that adapts seamlessly across devices. The backend is anchored by Firebase, utilizing its NoSQL database capabilities for real-time data storage, including restroom locations, details, and user feedback. This NoSQL design provided the flexibility and scalability essential for managing our application's dynamic content and ensuring real-time updates, a critical feature for our users. For mapping and routing functionality, we integrated the Leaflet library and its Routing Machine plugin, leveraging the power of open-source tools and the MapQuest API for precise directions. Deployment was streamlined through Netlify for the frontend and Google Cloud for backend services, ensuring our application's reliability and scalability. Navigating the complexities of a NoSQL database like Firebase introduced a significant learning curve, particularly in terms of database design, data synchronization, and managing asynchronous operations within our application.

## Challenges we ran into

Embarking on this project, we encountered a steep learning curve, grappling with full-stack development concepts and the intricacies of map-based web applications. One of the most formidable challenges was mastering the Document Object Model (DOM) in JavaScript, crucial for dynamically updating the user interface based on real-time data. Understanding and implementing asynchronous versus synchronous programming in JavaScript added another layer of complexity, especially when dealing with real-time data updates and API responses for map routing. Integrating various APIs and plugins, particularly for map functionality and real-time data synchronization, demanded extensive research, experimentation, and a deep dive into asynchronous programming patterns. Additionally, the responsive design and cross-device compatibility required meticulous attention to CSS and JavaScript's nuances, ensuring a seamless user experience regardless of the device used. Learning Firebase's NoSQL database structure and security rules posed its challenges, demanding a comprehensive understanding of non-relational data models, effective data organization, and retrieval strategies. The shift from traditional SQL databases to a NoSQL model like Firebase required a paradigm shift in our approach to database design, emphasizing flexibility and scalability but also introducing complexities in data management and synchronization.

## Accomplishments that we're proud of

We are proud of developing a functional and impactful application despite the steep learning curve and the technical complexities involved. Our project not only addresses a significant need on campus but also promotes inclusivity and accessibility. The positive feedback from initial user testing and the potential impact of our application on thousands of individuals across campus are accomplishments that underscore the value of our work.

## What we learned

This project was an intensive learning experience for our team. We gained hands-on experience with full-stack development, from frontend design to backend integration and deployment. Working with Leaflet and Firebase introduced us to the intricacies of map-based web applications and real-time databases. Most importantly, we learned the importance of community engagement in developing technology solutions that address real-world problems. The feedback and insights from our user interviews were invaluable in shaping our application.

## What's next for Gender-Inclusive Restroom Finder

Looking ahead, we plan to expand our restroom database, incorporate more comprehensive user feedback mechanisms, and continuously update our application based on community needs. Our goal is to extend the functionality of our application, possibly integrating it with other campus resources, and exploring partnerships that could help scale our solution to other universities and public spaces across Pennsylvania, including high schools. By continuously improving the Gender-Inclusive Restroom Finder, we aim to make Penn’s campus—and potentially others—a more welcoming and inclusive environment for everyone.

## Resources used:
https://leafletjs.com/
https://leafletjs.com/plugins.html
https://www.liedman.net/leaflet-routing-machine/api/

