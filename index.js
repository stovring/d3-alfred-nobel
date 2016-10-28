/*!
 * d3-alfred-nobel®
 * ----------------
 * Using a Capacity Constrained Point Distribution to display
 * a picture of Alfred Nobel — founder of Nobel Foundation.
 * This is a variant of the original algorithm by Michael Balzer,
 * Thomas Schlömer & Oliver Deussen (University of Konstanz, Germany, 2009),
 * in which I use a Voronoi Diagram to create a topology of the current sites,
 * and only swap the points between neighbouring sites
 * (and neighbours of neighbours).
 * It appears to be much faster than the original algorithm.
 * ___________________________________________________________________________
 *
 * NobelDB®: A Manually Curated Dedicated Database of Nobel Laureates.
 * ___________________________________________________________________________
 *
 * Architecture and Code Handcrafted by Prabhat Kumar.
 * Architectuur en Code handgemaakt door Prabhat Kumar.
 * @author    : Prabhat Kumar [http://prabhatkumar.org/].
 * @copyright : Prabhat Kumar [http://prabhatkumar.org/].
 * ___________________________________________________________________________
 *
 * @date      : 28-Oct-2016
 * @license   : MIT License
 * @require   : d3.js®
 * @build     : SEED™ — Stockholm
 *              |---- A Sequømics Product.
 * ___________________________________________________________________________
 */
