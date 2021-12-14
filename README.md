# Address Form and Autocomplete App

A small front-end React app which is a user address form with required fields (Street, Zip code, City, Country) to fill in and submit. The user can also optionally check their address by starting to type it in the designated search bar, which will give autocomplete suggestions from the Google Maps set of APIs, as well as render a map with a marker. The view of the search bar with a map can be opened and closed, to provide a better UX and keep users focused on filling in and submitting the form. In addition, it features a neat design and responsiveness for desktop and mobile.

### Limitations:

Since the scope of the project is limited, the app at the moment does not feature the autofill of the address fields, after the user selects one of the autocomplete suggestions. The recommendation is to include this feature in order to further help users with the address input.

## How to run application

### Requirements:

- Node.js

- GIT

- IDE, i.e. Visual Studio Code

### Using GIT and IDE

1. Open your IDE Terminal and open the directory in which you will store your new application.

2. Clone this app repository and pull a copy of it to use locally by writing a command in your terminal

```
git clone https://github.com/lu-blue/New-Parcel-Tracer.git
```

3. Go into the cloned project folder and install the project dependencies by writing the following command:

```
npm install
```

4. Each time you want to run the application, use the command:

```
npm start
```

This will start the app in the development mode and open a browser. If you close the browser, you need to navigate to localhost to open it again: [http://localhost:3000](http://localhost:3000).

5. Go to https://console.cloud.google.com/google/maps-apis/, create a Google Maps JavaScript API key and remember to enable your API in Google Developer Console.

6. Create .env in a route folder of your project and provide your API key in the following format: REACT_APP_GOOGLE_MAPS_API_KEY=YOUR_KEY_GOES_HERE

7. Add .env into your .gitignore file to prevent exposure of your API key

### Dependencies

You can read documentation and customize the app further here:

[Google Maps React](https://www.npmjs.com/package/google-maps-react)

[React Places Autocomplete](https://www.npmjs.com/package/react-places-autocomplete)

## Enjoy :)!
