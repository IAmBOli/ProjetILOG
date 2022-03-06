Requirements
- vscode/vscodium
- chrome/chromium
- typescript
- live-server
- IntersectionObserver

Information about the code in the folder OnlyIntersectionObserver :

In this case, we only use IntesectionObserver.

In an html file ("index.html"), the entire content of the web page is 
in a <template> element. 
The <template> HTML element is a mechanism for holding HTML that is not 
to be rendered immediately when a page is loaded but may be instantiated 
subsequently during runtime using JavaScript.

The web page is divided in <div> elements (in the <template>) with a 
special id that will progressively be copied in the <main> element and 
therefore will appear in the web page thanks to "index.js".

When you scroll down and arrive at the end of a part, IntersectionObserver
enables you to detect this event and execute a callback function when
it happens.
It is in this callback function that the <div> elements will 
progressively be copied into the <main> element.

- If intersection Observer is not installed :
> npm install intersection-observer


- To see the result:
For this example, you may download the Live-Server extension directly 
from Visual Studio Code. For this when you are in the home page of 
VSCode, press Ctrl+Shift+X. Then search for Live Server and download it.
From now on, you only need to right click on index.html and 
"Open with Live Server".