Requirements
- vscode
- chrome
- typescript
- live-server
- IntersectionObserver
- esbuild

Information about the code in the folder IntersectionObserver :

In this case, we use IntesectionObserver and esbuild.

Esbuild is a new javascript bundler which means that it create a single
javascript file (bundler.js) from several ones (app.js , part1.js ,
part2.js ...). It is useful because the web browsersdont support imports 
in javascript files.

The utility of a bundler is that we will be able to divide all our
content for the web page into several js files instead of having 
everything in a template element in the html file.

The global mechanism is the same as previously without esbuild.
Progressively, every part of our web page will be added to the <main>
element in the html file (index2.js)
When you scroll down and arrive at the end of a part, IntersectionObserver
enables you to detect this event and execute a callback function when
it happens.
It is in this callback function that the content will 
progressively be added into the <main> element.


Settings of esbuild : 
We want the final file to be called bundle.js.
In the package.json file, we added : 
"scripts": {
    "build": "esbuild app.js --bundle --outfile=bundle.js "
  }
From app.js and its imports, it will create a single file : bundle.js.


How to obtain bundle.js : 
In the terminal of the project > npm run build


- If intersection Observer is not installed :
> npm install intersection-observer

- If esbuild is not installed :
> npm install esbuild



- To see the result:
For this example, you may download the Live-Server extension directly 
from Visual Studio Code. For this when you are in the home page of 
VSCode, press Ctrl+Shift+X. Then search for Live Server and download it.
From now on, you only need to right click on index.html and 
"Open with Live Server".


Note:
Esbuild is supposed to be useful thanks to the --splitting option. It allows in a 
dist file to create a bundle of several files. This way, the content is not 
entirely downloaded at first but progressively downloaded along the display of the
parts. This option hasn't been integrated in this project because esbuild is still
new and still has issues with dynamic imports with template strings. (We haven't
found any solution on the internet as esbuild is recent and not finished yet.)

A different solution of dynamic import has been integrated in the hashchange 
solution.