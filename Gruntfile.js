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
var pkg      = require('./package.json');
var tag      = ['/*!', pkg.name, pkg.version, pkg.author, '*/\n'].join(' ');

// ----------------------------------------------------------------------------
// All Grunt Operations Defined...  | 28/October/2016
// ----------------------------------------------------------------------------
module.exports = function(grunt) {
  
  // Force use of Unix newlines.
  grunt.util.linefeed = '\n';
  
  // A regular expression.
  RegExp.quote = function(string) {
    return string.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&');
  };
  
  // 1. time-grunt
  // Display the elapsed execution time of grunt tasks.
  require('time-grunt')(grunt);
  
  // 2. load-grunt-tasks
  // Load multiple grunt tasks using globbing patterns.
  require('load-grunt-tasks')(grunt, {scope: ['devDependencies', 'dependencies']});
  
  // Project configuration for -//d3-alfred-nobel®//- Build.
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  grunt.initConfig({
    
    pkg: grunt.file.readJSON('package.json'), /* reading 'package.json' for sync package(s) updates, mainly. */
    
    // ---------------------------------------------------------------------------|
    // Task(s) for SEED™ Building System ||                                       |
    // -----------------------------------                                        |
    // 1. Assembly --> HTML - Lint + Minify                                       |
    // 2. CSS Lint + Minify                                                       |
    // 3. Data Build + Lint                                                       |
    // 4. JavaScript Lint + Concatenation + Minify                                |
    // 5. Cleaning of temporary files or directories                              |
    // 6. Localhost Server + Watch                                                |
    // 7. Development dependencies updates                                        |
    // 8. Release(s) with version updates                                         |
    // ---------------------------------------------------------------------------|
    // 1. Assembly --> 1.1 HTML Hint
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    htmlhint: {
      options: {
        htmlhintrc: './config/rules/.htmlhintrc'
      },
      html1: {
        src: ['./app/*.html']
      },
      html2: {
        src: ['./app/en/**/*.html']
      }
    },
    // 1. Assembly --> 1.2 HTML Minify
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    htmlmin: {
      dist: {
        options: {
          html5: true,
          collapseWhitespace: true,
          conservativeCollapse: true,
          minifyCSS: true,
          minifyJS: true,
          removeAttributeQuotes: true,
          removeComments: true
        },
        expand: true,
        cwd: '',
        dest: './build',
        src: [
          './app/**/*.html' // for all files in `app` directory.
        ]
      }
    },
