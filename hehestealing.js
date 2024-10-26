const fetch = require('node-fetch'); // Import node-fetch for HTTP requests
const { JSDOM } = require('jsdom'); // Import jsdom for DOM parsing

// Fetch website data
async function fetchWebsiteData(url) {
  try {
    const response = await fetch(url);
    const data = await response.text();
    return data;
  } catch (error) {
    console.error('Error fetching the website:', error);
  }
}

// Parse and extract image URLs
async function extractImage(url) {
  try {
    const websiteContent = await fetchWebsiteData(url);

    // Use JSDOM to create a virtual DOM and parse the HTML
    const dom = new JSDOM(websiteContent);
    const document = dom.window.document;

    // Get all img tags and print the src
    const images = document.getElementsByTagName('img');
    for (let i = 0; i < images.length; i++) {
      console.log(`Image ${i + 1}: ${images[i].src}`);
    }
  } catch (error) {
    console.error('Error parsing the website:', error);
  }
}

// Call the function with the target website
extractImage('https://example.com');
