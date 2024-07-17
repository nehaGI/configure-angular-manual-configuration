https://medium.com/@udayvmenon/building-an-angular-application-from-scratch-without-the-cli-0e5e17b09d11

In summary, the process starts with the web server serving `index.html`. This file links to the JavaScript bundles generated from your Angular project. When these scripts are loaded and executed in the browser, they start the Angular application by bootstrapping the root module and component as defined in `main.ts`. The result is that the initial Angular component’s view is rendered within the root element in `index.html`.

**What is webpack and why we need it?**

Sure, let’s break it down:

- **Webpack**: Think of this as a factory worker who takes in raw materials (your code and other files) and assembles them into a finished product (a version of your website that can run in a browser). This worker is smart and can handle different types of materials (JavaScript, HTML, CSS, images, etc.) and knows how to put them together efficiently.
- **Webpack CLI**: This is like the control panel for the factory worker. It allows you to give instructions to the worker directly from your command line, telling it when to start building, when to stop, and what to do.
- **Webpack Dev Server**: This is like a mini-website server that runs on your computer. It’s useful when you’re building your website because it lets you see your changes in real-time, just like if it were live on the internet.
- **Html Webpack Plugin**: This is a helper for the factory worker. When the worker is putting together the finished product, this plugin helps by connecting the JavaScript logic of your website with the HTML structure, ensuring everything loads correctly when someone visits your website.

In summary, these tools work together to help you build your website, making the process more efficient and manageable. They handle the complex parts of assembling your code into a working website, allowing you to focus on writing the code itself. 😊
