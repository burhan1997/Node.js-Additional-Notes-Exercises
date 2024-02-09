# Introduction to Node.js

Node.js is a runtime environment that enables the execution of JavaScript not only within browsers but also on servers and computers. It wraps the V8 engine, allowing JavaScript to run directly on computers by compiling it into machine code. This breaks the traditional confinement of JavaScript to browsers.

## Understanding Computer Code:

- Computers primarily understand machine code, but languages like C++ and JavaScript provide abstractions.
- JavaScript, designed for browser interactivity, relies on the V8 engine in browsers to compile and execute code.
- Node.js, written in C++, extends this capability to servers, allowing JavaScript execution beyond the browser environment.

## Node.js Functionality:

- Beyond being a V8 engine wrapper, Node enhances JavaScript functionality for server-side tasks.
- Features include file manipulation, database connectivity, and serving content as a server.
- JavaScript, originally designed for browser interactivity, gains server-side capabilities through Node.js.

## Advantages of Node.js:

- Node.js allows JavaScript developers to run the same language on both the front end and back end.
- Code sharing becomes seamless, and the vast JavaScript community offers support and numerous third-party tools.

# Node.js Basics 

This repository contains sample code and explanations for working with Node.js basics and performing file system operations using the built-in `fs` module.

## Notes

### Introduction to Node.js Basics

- Node.js allows running JavaScript on the server-side.
- Key concepts:
  - Setting up Node.js and running JavaScript files.
  - Global object (`global`) in Node.js.
  - Accessing file paths with `__dirname` and `__filename`.
  - Using `setTimeout` and `setInterval`.
- Differences between Node.js global object and browser (`window` object).

### Modules and `require`

- Node.js module system:
  - Creating and exporting modules with `module.exports`.
  - Importing modules with `require`.
  - Destructuring in imports for cleaner code.
  - Modularization benefits for code organization and reusability.

### Core Modules and `require`

- Exploring built-in core modules:
  - `os` module for system information.
  - `fs` module for file system operations.
  - Requiring and utilizing core modules in applications.

### File System Operations with `fs` Module

- Performing file system operations:
  - Reading files asynchronously with `fs.readFile`.
  - Writing files asynchronously with `fs.writeFile`.
  - Creating directories with `fs.mkdir`.
  - Deleting files and directories with `fs.unlink` and `fs.rmdir`.
  - Handling callbacks for error and data retrieval in asynchronous operations.

### Streams and Buffers

- Introduced the concept of streams and buffers to efficiently handle large data.
- Compared streams to real-life scenarios, like filling a pool with water.
- Implemented read streams to read data from a file chunk by chunk.
- Implemented write streams to write data to a file chunk by chunk.
- Explained the usage of pipe to simplify piping data from a readable stream to a writable stream.

### Critical Points

- **Asynchronous Nature:** Node.js operations, including file system operations, are asynchronous, allowing non-blocking code execution.
- **Streams:** Streams are used to handle large amounts of data efficiently, allowing processing of data while it's being read.
- **Event-Driven Architecture:** Node.js is event-driven, where actions like reading data from a stream trigger events, enabling asynchronous handling of tasks.
- **Error Handling:** It's essential to handle errors properly, especially in asynchronous operations, to ensure robustness and reliability of the application.
- **Duplex Streams:** Mentioned the existence of duplex streams, which allow both reading from and writing to a stream.

# Clients & Servers

## Overview

This section provides an introduction to client-server communication in web development, focusing on Node.js server-side programming.

## Basics of Communication

When a user interacts with a website, the browser (client) sends requests to the server. The server processes these requests and responds with appropriate data, such as HTML pages, images, CSS stylesheets, or JSON data.

## IP Addresses & Domains

IP addresses are unique identifiers for computers connected to the internet. Domains serve as human-readable aliases for IP addresses, making it easier for users to access websites. For example, "google.com" represents an IP address behind the scenes.

## HTTP Protocol

HTTP (Hypertext Transfer Protocol) is the foundation of communication on the web. It defines a set of rules for exchanging data between clients and servers. HTTP enables effective transmission of hypertext, multimedia files, and other resources.

## Creating a Server with Node.js

In Node.js, developers manually create servers to handle incoming requests. This differs from languages like PHP, where servers are managed by tools like Apache. To create a server in Node.js, developers use the built-in HTTP module.

## Localhost & Port Numbers

- **Localhost**: Refers to the loopback IP address (127.0.0.1), which points to the local computer. Developers use localhost during development to host websites locally.
- **Port Numbers**: Port numbers designate specific communication channels on a computer. For local web development, port 3000 is commonly used. However, developers should ensure port numbers don't conflict with other services.

## Handling Requests & Responses

When a request is received by the server, it triggers a callback function. This function has access to request and response objects, containing information about the incoming request and allowing the server to send an appropriate response.

## Running the Server

To run a Node.js server, developers execute the server file using the Node.js runtime environment. The terminal displays messages indicating the server's status, such as "listening for requests on port 3000."

# Requests & Responses

### Setting up a Server:

- The process starts with creating a server using Node.js, which listens for incoming HTTP requests on a specified port (in this case, port 3000).
- The server is configured to respond to requests made to localhost:3000.

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Server is running!');
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
```

### Handling Requests:

- Requests made to the server trigger a designated function.
- Initially, the server responds with a simple text message ("request made").
- Later, the server is modified to log information about the request object, including its URL and method (e.g., GET, POST).

### Sending Responses:

- The response sent from the server can include various types of data, such as plain text or HTML.
- Initially, the server sends plain text responses like "hello ninjas" and "hello again ninjas."
- Later, the server is modified to send HTML responses, which are constructed dynamically or read from separate HTML files.

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, ninjas!');
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});

```

### Routing Requests:

- Routing is introduced to handle different URLs by serving different HTML content.
- A switch statement is used to determine the requested URL and respond accordingly:
- If the URL is "/", the server responds with the index page.
- If the URL is "/about", the server responds with the about page.
- If the URL does not match any defined routes, the server responds with a 404 error page.

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Welcome to the homepage!</h1>');
    } else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>About Us</h1><p>This is the about page</p>');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Not Found</h1><p>The requested URL was not found on this server.</p>');
    }
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});

```

### Setting Status Codes:

- HTTP status codes are used to indicate the outcome of a request.
- Different status codes convey different meanings, such as success (200), redirection (301), or client/server errors (404, 500).
- The server is updated to set appropriate status codes for different responses, such as 200 for successful responses and 404 for not found errors.

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>404 Not Found</h1><p>The requested URL was not found on this server.</p>');
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});

```

### Implementing Redirects:

- Redirects are used to automatically forward users from one URL to another.
- For example, old URLs can be redirected to new URLs to maintain backward compatibility.
- The server can be configured to detect specific URLs and redirect users to alternative URLs using the appropriate HTTP status code (e.g., 301 for permanent redirects).

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/old-url') {
        res.writeHead(301, { 'Location': '/new-url' });
        res.end();
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Welcome to the homepage!</h1>');
    }
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});

```