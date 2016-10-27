#!/usr/bin/env python
# -*- coding: utf-8 -*-

# ------------------------------------------------------------------------
# Copyright © 2014 - 2016, Sequømics Corporation. All rights reserved.
# Licensed under the MIT License (the "License");
# you may not use this file except in compliance with the License.
# ========================================================================
#  ,-.
#  ,     ,-.   ,-.
# / \   (   )-(   )
# \ |  ,.>-( * )-<
#  \|,' (   )-(   )
#   Y ___`-'   `-'
#   |/__/   `-'
#   |
#   |
#   |  -~PRABHAT~-
# __|_____________
# -------------------------------------------------
__authors__       = [
    '"Prabhat Kumar" <prabhat.genome@gmail.com>',
    '"Sequømics Corporation" <admin@sequomics.com>'
    ]
__license__       = 'Apache License'
__date__          = '28-10-2016'

module            = 'alfredNobel'
input_path        = 'core/src/'
output_path       = 'index.js'

import os
import sys
import re
import time
import tempfile
import warnings

localtime = time.asctime(time.localtime(time.time()))
header ='''
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
 * @license   : Apache, version 2.0
 * @require   : d3.js®
 * @build     : SEED™ — Stockholm
 *              |---- A Sequømics Product.
 * ___________________________________________________________________________
 */
'''
