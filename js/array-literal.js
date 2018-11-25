// Create an array and assign it
var colors = ['white', 'black', 'custom']; // Show the first item from the
var el = document.getElementById('colors');
el.textContent = colors[0];/*NOTE: textContent does not work in IE8 or earlierYou can use innerHTML on line 7, but note the security issues on p228-231*/
