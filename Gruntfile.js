#!/usr/bin/env node


/*!
 * d3-alfred-nobel®
 * NobelDB®: A Manually Curated Dedicated Database of Nobel Laureates.
 * ____________________________________________________________________
 * Grunt, http://gruntjs.com/
 * The JavaScript Task Runner.
 * ____________________________________________________________________
 * Architecture and Code Handcrafted by Prabhat Kumar.
 * Architectuur en Code handgemaakt door Prabhat Kumar.
 * @author    : Prabhat Kumar [http://prabhatkumar.org/].
 * @copyright : Prabhat Kumar [http://prabhatkumar.org/].
 * ____________________________________________________________________
 * @date      : 28-Oct-2016
 * @license   : Apache, version 2.0
 * @require   : Node.js®
 * @require   : NPM
 * @build     : SEED™
 *              |---- A Sequømics Product.
 * ____________________________________________________________________
 *
 * --/The Heart of Build System/-- of "d3-alfred-nobel®".
 * ____________________________________________________________________
 */

// # Usage: $ node -v
// # Usage: $ npm -v
// # Usage: $ grunt -version

"use strict";

// Load required NPM modules.
var chalk = require('chalk');

// Default color defined.
var noop  = chalk.red;
var yeep  = chalk.green;
var okay  = chalk.blue;

// Global variables
// ~~~~~~~~~~~~~~~~
var rootPath = './';
var appsPath = './app/';
