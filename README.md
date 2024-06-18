# Resume Portfolio📜
- ## Goal🥅
  - To demonstrate how to use components to create aResume Portfolio utilizing ReactJS and NodeJS
---
- ### Create an empty folder with your Project's name

- ### Create a vite project
  - Open the terminal
  - Navigate to outside your Project Folder
    - *Hint*: Navigate outside the folder with `cd ../`
  - Create a vite project with your project name (Here, its `01 Resume Portfolio`) and template `react`
    ```bash
    npm create vite "01 Resume Portfolio" --template react
    ```
  
  - If prompted with a request to install *create-vite*, enter `y`
    - Prompt:
      ```bash
      Need to install the following packages:
      create-vite@5.2.3
      Ok to proceed? (y)
      ```
    - If prompted to take action on non-empty project folder, choose `Ignore files and continue` but **BEWARE**, it will **overwrite** any matched files it finds within that folder
      - Prompt:
        ```bash
        ? Target directory "01 Resume Portfolio" is not empty. Please choose how to proceed: » - Use arrow-keys. Return to submit.
        >   Remove existing files and continue
            Cancel operation
            Ignore files and continue
        ```
  - Now run the terminal commands displayed by the terminal:
    Terminal view: 
    ```bash
    Done. Now run:

      cd "01 Resume Portfolio"
      npm install
      npm run dev
    ```
    - Commands explaination:
      - 1st Command:
        ```bash
        cd "01 Resume Portfolio"
        ```
        - This will navigate the terminal back into your Project folder
      - 2nd Command:
        ```bash
        npm install
        ```
        - This will install all packages defined in the `package.json` file within your project's direcory
      - 3rd Command:
        ```bash
        npm run dev
        ```
          - This will run the `dev` script defined in the `package.json`, file which by default is assigned `vite`
  - ^(Optional)^ Follow the IP address provided by the terminal:
  <small>*Terminal view*:</small>
    ```bash
    VITE v5.3.0  ready in 764 ms

    ➜  Local:   http://localhost:5173/
    ➜  Network: use --host to expose
    ➜  press h + enter to show help
    ```
  &emsp;
  - Note: To locally run your server, use `npm run dev`

- ### Clean up Vite's React Template
  - #### index.html
    - Open `src\index.html`
    - Overwrite its content with:
      ```HTML
      <!doctype html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Resume Portfolio</title>
        </head>
        <body>
          <div id="root"></div>
          <script type="module" src="/src/main.jsx"></script>
        </body>
      </html>
      ```
  - #### App.jsx
    - Open `src\App.jsx`
    - Overwrite its content with:
        ```JSX
        import React from 'react';

        function App() {
          return (
            <div className='app'>
              <h1>Welcome to My Resume</h1>
              <p>This is a simple resume page built with React.</p>
            </div>
          );
        }

        export default App;
        ```
  - #### Others
    - Empty out file `\src\App.css`
    - Empty out file `\src\index.css`
    - Delete file `\src\assets\react.svg`

- ### The Components
  - #### Setup File Directory:
    - Within the folder `src\`, create a folder `components`
      - This will contain folders for each individual component (.jsx) and their associated css file
  - #### Planning
      - For this `Resume Porfolio`, we'll need a `Home` page or a `Landing` page, so we'll start laying out our requirements
      - A typical landing page for this purpose would include:
        - Navigation Bar
        - Contact Me
        - Home Page
        - Biography
        - Technical Skills
        - Projects
        - Certificates
        - Achievements
        - Education History
        - Linguistic Languages
  - #### Whats left to be taught:
    - For this tutorial, I'll only demonstrate the some important features and methods for efficient development of your Portfolio, you can design and build the rest of your portfolio using your knowledge of HTML and CSS
  
  - #### Component Creation
    - For the Navigation Bar, create a folder `Navbar` within the `src\components\` folder
    - Create 2 files for this component with the name of the component
      - A `JSX` file `Navbar.jsx`
      - A `CSS` file `Navbar.css`
  - #### Create a Navigation Bar
    - Open the `Navbar.jsx` file
    - ##### Importing
      - Import`Navbar.css` file into the file
        ```JSX
        import "./Navbar.css";
        ```
    - ##### Creating the function
      - Create a function `Navbar` that will return the content of your Navigation bar
        ```JSX
        function Navbar(){
            return(
                <div className="navbar_container">
                    <div className="navbar_left">
                        <p>Mebanseibor Lyngdoh</p>
                    </div>
                    <div className="navbar_right">
                        <a href="">About</a>
                        <a href="">Contact Me</a>
                        <a href="">Projects</a>
                        <a href="https://github.com/Mebanseibor">Github</a>
                    </div>
                </div>
            );
        };
        ```
        - Things to Note:
          - In JSX, the normal HTML attribute `class` is named as `className`
    - ##### Exporting the function
      - Export the function
        - Add the code to export the function:
          ```JSX
          export default Navbar;
          ```
    <small>*Progress Reference: (src\components\Navbar\Navbar.jsx)*</small>
    ```JSX
    import "./Navbar.css";

    function Navbar(){
        return(
            <div className="navbar_container">
                <div className="navbar_left">
                    <p>Mebanseibor Lyngdoh</p>
                </div>
                <div className="navbar_right">
                    <a href="">About</a>
                    <a href="">Contact Me</a>
                    <a href="">Projects</a>
                    <a href="https://github.com/Mebanseibor">Github</a>
                </div>
            </div>
        );
    };

    export default Navbar;
      ```
  - #### Import the component
    - Open the `App.jsx` file
    - Import the function from `Navbar.jsx` into the file
      ```JSX
      import Navbar from './components/Navbar/Navbar';
      ```
    <!-- - <soft>Possible Error Messages:</soft>
      - Root file specified for compilation -->

    - Delete the existing content of the `div` element

    - Include the component `Navbar` via its function into the div element
      ```JSX
      <Navbar/>
      ```
  <small>*Progress Reference(src\App.jsx)*</small>

    ```JSX
    import React from 'react';
    import Navbar from './components/Navbar/Navbar';

    function App() {
      return (
        <div className='app'>
          <Navbar/>
        </div>
      );
    }

    export default App;
    ```


Your Resume Portfolio:
  - <img src="./README%20Assets/Webpage Without CSS.png" style="border:1px solid black;">


  - #### Add life to your Navigation Bar🪄
    - Right now your Navigation Bar is created, but it looks dull, so we should beautify it
    - Open `Navbar.css`
    - Utilize the class name of the elements in the component to target the element and change their attributes
      <br><small>*Tip:*
      - *Use `.` to refer to the class attribute*
      - *Use `>` to refer to all the elements of a particular type under the specified class*
      </small>
    - Either design your own style or add the following css code:
      ```CSS
      .navbar_container{
          background-color: #C9ADA7;
          display: flex;
          align-items: center;
          justify-content: space-between;
      }

      .navbar_left{
          font-size: 26px;
          font-weight: 700;
          color: #22223B;
      }

      .navbar_right{
          display: flex;
      }

      .navbar_right > a{
          margin-right: 10px;
          padding: 8px 10px;
          font-size: 12px;
      }

      .navbar_right > a:hover{
          background-color: #4A4E69;
          color: #F2E9E4;
          cursor: pointer;
          border-radius: 8px;
      }
      ```

    - Your beautiful navgiation bar should be sparkling with some life:
      - <img src="./README%20Assets/Webpage With CSS.png" style="border:1px solid black;">
- ### Proceed ahead
  - Now that you know the basics of how to create some simple components and rendering them, proceed ahead and create the remaining components

- ### Future Additions
  - Fully made Resume Portfolio

- ### Tutorial Corrections:
  - Changed file name from `APP.jsx` -> `App.jsx`



---
- ## Links:
  - [Repository](https://github.com/Mebanseibor/MERN-Training):
    - [Project]() Directory
    - File an [issue](https://github.com/Mebanseibor/MERN-Training/issues)
  - JavaScripts provided by UNPKG:
    - [React v18.3.1 umd production min](https://unpkg.com/react@18.3.1/umd/react.production.min.js)
    - [React-DOM v18.3.1 umd production min](https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js)
    - [Babel Standalone v6.26.0 min](https://unpkg.com/babel-standalone@6.26.0/babel.min.js)
  - [Color Themes](https://coolors.co/)

---