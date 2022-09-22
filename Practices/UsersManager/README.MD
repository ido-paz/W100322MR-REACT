# Users manager

UI for managing users , enabling searching ,creating updating deleting users in the system

- Components

1. Home component should display a greating , explantion about the system , should be available to all users including guests.
2. Users component should render SearchUsers ,UsersList components .
3. SearchUsers component should display text input that will causes to rerender the Users component with filtered users data , add user button .
4. UsersList component displayes the list of users and allows to delete or edit a user
5. AddUser component should display Add user as header, email , password text inputs , a button that will add the user to the users list , on successfull addition display alert with success message and returns the display to Users component, otherwise display alert error message.
6. UpdateUser component should display Update user as header, email , password text inputs , a button that will update the user in the users list , on successfull update display alert with success message and returns the display to Users component, otherwise display alert error message
7. Navigation component would display as a top navigation bar with Home , Users links  , it displays the active link (using NavLink) , when clicking on a link it will render Home or Users components.

- Input validation:

1. validate email when adding or updating user,display alert message if invalid
2. validate password when adding or updating user,display alert message if invalid (at least 4 characters)
