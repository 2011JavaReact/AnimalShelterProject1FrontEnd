# Fur Haven Animal Shelter Front End
Welcome to the Fur Haven Animal Shelter! We are a no-kill shelter, and hope you can help us find the right home for our fuzzy, feathered, and scaley friends!

# Hosted
Hosted at: http://revature-karl-fur-haven-animal-shelter.s3-website-us-west-1.amazonaws.com/

# Guide
At the top of the screen is a navigation bar with four options: Home, View Animals, Manage Animals, and User Accounts

## Home
Home is the landing page and root directory for the front end. It provides a welcome to the user, and a simple description of each of the pages.

## View Animals
Shows the full roster of the animals available for adoption. Each animals is listed with their:
- ID
- Name
- Age
- Sex
- Species
- Breed
- Color
- Weight
- Temperament

Also, feature entry is accompanied by a picture of a dog, provided by the [Dog CEO API](https://dog.ceo/dog-api/).

Why? Because I couldn't find an animal API that did pictures of dogs, cats, birds, turtles, and lions on short notice, but still wanted the picture there, at least as a placeholder. Plus, all the dog pictures are pretty cute!

## Manage Animals
This page does require a user to be logged in, which can be down on the User Accounts page. Once logged in, there is a form provided for adding a new animal to the roster, and an index of all the animals, with an option to update their information or mark them for adoption (deleting an animal sounds too cruel...)

Known bug: Adoption actions are not working, issues with CORS, namely pre-flight headers.

## User Accounts
Two form are provided here, one for signing up, and a second for logging in. Signing up will require:
- First name
- Last name
- Username
- Password

And logging in will require:
- Username
- Password