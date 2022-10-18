# Users manager

UI for managing users , enabling searching ,creating updating deleting users in the system

- UI , Components

1. Home component should display a greating , explantion about the system , should be available to all users including guests.
2. Users component should render SearchUsers ,UsersList components .
3. SearchUsers component should display text input that will causes to rerender the Users component with filtered users data , add user button .
4. UsersList component displayes the list of users and allows to delete or edit a user
5. AddUser component should display Add user as header, email , password text inputs , a button that will add the user to the users list , on successfull addition display alert with success message and returns the display to Users component, otherwise display alert error message.
6. UpdateUser component should display Update user as header, email , password text inputs , a button that will update the user in the users list , on successfull update display alert with success message and returns the display to Users component, otherwise display alert error message
7. Navigation component would display as a top navigation bar with Home , Users links , it displays the active link (using NavLink) , when clicking on a link it will render Home or Users components.
8. Pop up dialogs:
   a. Display alert message on succesful user add.
   b. Display alert message on succesful user update.
   c. Display alert message if invalid email  
   d. Display alert message if invalid password

- Authentication , Authorization:

9. Display Users link , component only after administrator logged in.
10. Login component,display email and password , on click validates administrator ,on success allows to enter authenticated mode , that enables to see and use Users component , link .

- Data management:

11. Create a class that manages all users data threw get,add,update,delete methods.

- Input validation:

1. Validate email before adding or updating user , in data the manager, throw Error when invalid
2. Validate password before adding or updating user (at least 4 characters) , in data the manager, throw Error when invalid.
