'use strict';

/**
 * toast service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::toast.toast');
