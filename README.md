WINE & FOOD PAIRING SYSTEM

Intelligent Recommendation System using Rules Engine
A full-stack web application that helps users choose the perfect wine based on their meal, preferences, and taste — powered by a rule-based inference system.

OVERVIEW

The Wine & Food Pairing System is an intelligent recommendation platform that suggests the most compatible wine for a given meal.

Instead of requiring the user to manually enter ingredients, the system asks a short quiz and infers the type of meat, sauces, and spices using a Drools rules engine.

It also allows users to:

  - Filter wines by different criteria
  - Enter a wine and receive compatible recipes
  - View detailed compatibility rankings

The ADMIN has full control over the system and can manage:
  - Wines
  - Meats
  - Sauces
  - Spices
  - Users
    
Each entity can be added, edited, deleted, and viewed through an admin dashboard with table views.

USER

The USER can:
  - Answer a quiz and receive the best matching wine
  - Anwer a quiz and receive a list of wines sorted by compatibility
  - View wine details in a large highlighted card
  - Filter wines based on selected criteria
  - Enter a wine and receive a ranked list of compatible recipes
  - Open a modal with detailed compatibility lists and star ratings ⭐

Recommendation Modes (Quiz)

The system offers two intelligent quiz-based recommendation modes:

1. Best Match Mode (Single Wine)

  After answering the quiz, the system:
    - Infers meat, sauces, and spices
    - Applies Drools rules
    - Returns one best matching wine

Displayed as a large feature card with full details.

2. Ranked Matches Mode (Multiple Wines)

    In this mode, the user answers the same quiz, but instead of one result, the system returns:

      - A list of wines sorted by compatibility score
    Each wine is shown as a card, ranked from:

     - ⭐ Most compatible
       to
     - ☆ Least compatible

    Clicking a card opens a modal with:

     - Matching meat, sauces, spices
     - Star ranking

This simulate a SMART SOMMELIER ASSISTANT

WINE FILTERING

Users can filter wines by different criteria and view them as cards.

Each card includes:

  - Wine name
  - Quick info
  - A button that opens a modal with details

Inside the modal:
  - Compatibility lists
  - Star rating system ⭐


TECHNOLOGIES USED

  Backend: Java, Spring Boot
  
  Rules Engine:	Drools
  
  Frontend: Angular, TypeScript, HTML
  
  Database:	MySQL
  
  Styling: CSS


FEATURES SUMMARY

  - Rule-based recommendation system
  - Quiz for smart pairing
  - Wine filtering
  - Recipe ranking
  - Modal detailed views
  - Star compatibility score
  - Admin CRUD dashboard
  - Login & role-based views

AUTHOR
  Developed by Sandra
  
  Full-stack student developer
  
  Java | Spring | Angular | Drools

  

