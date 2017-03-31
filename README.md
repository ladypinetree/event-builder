# Event Builder

### ERD, User Stories, Wireframes
https://www.evernote.com/l/AozltvpNfYJC6586hfKSEEPUxX_zC9EA1u8

### About the application:
Event Builder is a multi phase app that will feature 4 additional versions rolled out over the next several weeks. The application aims to help event owners keep track of due dates and contacts for planning items, while allowing them to share their event information with guests. The current application was built using a rails API with the goal of familiarizing the developer with Ember and the ideals of scalable feature based development.

### Technology I Used for Event Builder:
- Rails
- Bootstrap
- Ember
- Sass
- Handlebars

### Routes I used
```
this.route('sign-up');
this.route('sign-in');
this.route('change-password');
this.route('users');
this.route('events');
this.route('not-found', { path: '/*wildcard' });
this.route('event', { path: '/events/:event_id' });
this.route('new');
this.route('edit', { path: '/events/:event_id/edit' });
```

### To build my site I used:
- I used rails to build an API.
- We created an API using 2 related models, one is the User, the other is Events
- The User can:
- Create an event.
- Index their events.
- Update their event.
- Delete their event.
- View their single event.

### Some of the technical hurdles I solved:

- Getting the delete button for the index to return the correct event.
- Managing urls that did not exist.
- Managing guests accessing restricted URLs.
- Inputting the date into the event form.
- Glyphicons in my buttons.
- Cancel buttons
- Clearing forms

### Feature-Based Scale-Up:

#### V 1.0 (Present version):
- Create API with user and event models.
- Create user ownership of all events.
- Create all CRUD functions for users' events.
- Create scalable front end foundation using a front end framework (Ember).
- Build out user authentication.
- Create all CRUD, and separate index and single event show.

#### V 1.1
- Add location to event-index using Google Maps 3rd party API.
- Add in another join table for event items with item, category, due date, contact info and notes.
- Make events and items private or public.

#### V 1.2
- Add in about page.
- Add in date calculator function for "to do items" that will return a suggested due date.
- And in toggle complete for all to do items, and for events.
- Add in event search by name/ category.
- Sort user event index and to do items by date.

#### V 1.3
- Add in yelp fusion API for event items, business contact information and location.
- Allow owner to tag other users in to-do items.
- Allow commenting.

#### V 1.4
- Allow users to save to do items to Google calendar.
- Allow users to customize event listing appearance.

This is the link to me User Stories, ERDs and Wireframes : https://www.evernote.com/l/AozltvpNfYJC6586hfKSEEPUxX_zC9EA1u8
This is my app deployment:
https://ladypinetree.github.io/event-builder/
This is my link to the back end:
https://fierce-thicket-93557.herokuapp.com/
Here is the link to the front end Github:
https://github.com/ladypinetree/event-builder
Here is the link to the back end Github: https://github.com/ladypinetree/event_builder_api

Find my on LinkedIn:
https://www.linkedin.com/in/maurapine/
