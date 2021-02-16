# ReactJS
ReactJS | Phone Directory Application

### Learn how to [Set Up](#set-up) your environment to run a React application and codebase to create the Phone Directory application. the following concepts of React implemented in this application:

[Understand Files Structure and Requirments](#notes)

- JSX
- Differences between JSX and HTML
- Injecting data using curly braces {} in React
- React.createElement() method
- Rendering elements into DOM in React
- Components
- Styling components and elements in React 
- Rendering content dynamically in React

### Set Up

  1.  Go to Command Prompat : win+r -> cmd (hit enter)
      ```shell
      > node -v
      v10.18.0
      ```
      - if you see "'node' is not recognized as an internal or external command, operable program or batch file." it means it's not installed. use step 2 otherwise step 3.
      
  2.  Go <a href="https://nodejs.org/en/download">here</a>. and download latest version. do follow setup and jumpback to step 1.
  
  3.  Write cmd,
      ```shell
      > npm i -g -create-react-application
      ```
      <div style="margin:20px;">
      <p><b><u>npm</u></b> stands for Node Package Manager, which gets installed while installing Node.js. <b><u>i</u></b>  stands for install, which is a command. You can also           write install in place of i. <u><b>g</b></u> stands for global and is preceded with a hyphen because it is a flag. <b><u>create-react-app</u></b> is the name of the             package that you need to install. It is a CLI tool that allows you to quickly create and run React applications, with no configuration required from the user.
      </p>
      <p>
        This command will make <b><u>npm install create-react-app</u></b> package globally on your machine so that you can create a React application at any valid path on your           system.
      </p>
      </div>
     
   4. Now to create application use cmd <b>create-react-app</b> which package we installed globaly, and provide your app name,
      ```shell
      > create-react-app phone-directory-app
      ```
      
        - Now you can able to see somthing like this,
   
      ![create-react-app](https://github.com/nemishzalavadiya/ReactJS/blob/master/Screenshots/create-react-app.png)
      
      - which in turn create all pre-requisite files and configurations. now we are ready. So start server for development
      
      ```shell
      > npm start
      ```
      
      ![npm-start](https://github.com/nemishzalavadiya/ReactJS/blob/master/Screenshots/npm-start.PNG)
      
      now server have been stared and you can code your own web application.
      
### Notes
   
   Following are the basic points to note about some files that you see inside your application folder:

 

> .gitignore file

  ```
  It is used by Git to determine which files and directories to ignore before a commit is made.

  It should be committed into the repository to share ignore rules with other users who clone the repository.

  The node_modules  folder is included inside the .gitignore file so that the user who clones the application is not required to clone this folder. The user simply needs to run   the command 

  npm install

  in the root folder of the project. This command creates the node_modules folder and installs all the dependencies (packages) needed for the application.
  ```
 

> package.json file

  ```
  It consists of the name and version of the application, the combination of which should be unique in order to publish the package.

  It comprises of dependencies that list all the packages needed to be installed for the application.

  It also includes scripts that specify the commands to be run at various points in the application lifecycle.
  ```
 

> package-lock.json file

  ```
  It is automatically generated for any operation where npm modifies either the node_modules  tree or the package.json  file.

  It locks the version of the full dependency tree of packages.

  It guarantees the generation of an identical dependency tree when the application is cloned by other developers.
  ```
 

> node_modules folder
  ```
  Its contents are defined by the package.json file and it consists of all the packages required for running your application.
  ```
 

> public folder
  ```
  Nothing inside this folder is processed by Webpack.

  It is used for keeping small files that are not required to be bundled.

  It can be used to contain images when there are thousands of them, and their paths need to be referenced dynamically.

  Any file inside this folder needs to be referenced at other places using the %PUBLIC_URL%/  keyword, which gets replaced with the path of the public folder during the           application's build process.
  ```
 

> index.html file
  ```
  It is the starting point of the application.

  It should always remain with the name index.html and inside the public folder; otherwise, the code will fail to run.

  It can only reference files that are inside the public  folder.
  ```
 

> manifest.json file
  ```
  It is a simple JSON file telling the browser about the web application and how the application should behave when it is installed on the user’s mobile device or computer.
  ```
 

> src folder
  ```
  It consists of the real application code.

  It consists of all the files that are needed to get bundled by Webpack.
  ```
 

> index.js file
  ```
  It is the entry point for JavaScript.

  The filename should remain index.js and the location should be inside the src folder; otherwise, the code will not run.
  ```
  

> index.css file
  ```
  It is the stylesheet for index.html.
  ``` 

> registerServiceWorker.js file
  ```
  It is the web browser API that is used to cache assets and other files to work passively in the background. It helps offline users or the ones who are on the slow network to     see results on the screen faster.

  It adds offline capabilities to the application.
  ```
 

> App.js file
  ```
  It is the JavaScript file for the App component.
  ```
 

> App.css file
  ```
  It is the stylesheet for the App component.
  ```    

> App.test.js file
  ```
  It is the test file for the App component.

  It contains unit tests for the application.

  It runs test cases for all the files that changed since the last commit of the application.
  ``` 

> logo.svg file
  ```
  SVG is an acronym for Scalable Vector Graphics.

  An SVG file is an XML-based vector image format for 2D graphics with support for interactivity and animation.

  It is similar to raster-based image formats such as JPEG, PNG, BMP, GIF, etc.

  It offers a bandwidth-friendly way of rendering images; no matter how large a graphic gets, it transmits only the XML describing the graphic to the client.

  It helps to render resolution-independent and SEO-friendly images.

  It makes up the icon for your application and appears alongside the title in the browser tab.

  It gets saved along with the bookmark.
  ```
