'use strict';

/**
 * clap router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::clap.clap');
