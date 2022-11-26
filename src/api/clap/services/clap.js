'use strict';

/**
 * clap service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::clap.clap');
