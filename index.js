import './components/graphdrawer2000/index.js'
/**
 * This page shows the usage of the graphdrawer2000 element.
 *
 * Simply import the element and use it like this:
 *   1) Import the element.
 *
 *   2a HTML) Create an instance of the element. If you want to use the element in HTML, you can simply use the element tag.
 *      Don't forget to add any options you want to pass to the element as attributes, see the README.MD file.
 *      Don't forget to close the tag.
 *
 *  2b JavaScript) Create an instance of the element.
 *      If you want to use the element in JavaScript, you can use the document.createElement method.
 *      Any options you want to pass to the element can be passed as attributes and need to be done at this point.
 *      Don't forget to append the element to the DOM.
 *      See the example in the commented out code below.
 *
 *   3) Call the render method with a dataset.
 *      The dataset should be an array of numbers.
 */

/**
 * Example of how to use the element in pure javascript.
 * Uncomment the code below to use it.
 * Don't forget to comment out the HTML example.
 * Note that the custom element is already imported in the head of this document.
 *
 * @example
 * const graphdrawer2000 = document.createElement('jk224jv-graphdrawer2000')
 * graphdrawer2000.setAttribute('width', '100%')
 * graphdrawer2000.setAttribute('height', '100%')
 * document.body.appendChild(graphdrawer2000)
 * const dataset = [2, 1, 3, 3, 4, 5, 5, 7, 7, -9, 2, 1, 3, 3, 4, 5, 5, 7, 7, 8]
 * document.querySelector('jk224jv-graphdrawer2000').render(dataset)
 */


/**
 * Example of how to use the element in HTML/JS.
 * This code is active by default in this document.
 * Note that the element is already imported in the  of this document and already present in the DOM via the index.html file.
 *
 *@example
 */
const dataset2 = [8,7,7,5,5,4,3,3,1,2,-9,7,7,5,5,4,3,3,1,2]
const graphdrawer2000 = document.querySelector('jk224jv-graphdrawer2000')
graphdrawer2000.render(dataset2)