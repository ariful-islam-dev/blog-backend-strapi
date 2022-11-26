'use strict';

/**
 * clap controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::clap.clap');
