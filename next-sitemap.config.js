/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://rohrritter-minden.de', // ton domaine principal
  generateRobotsTxt: true, // génère aussi robots.txt automatiquement
  sitemapSize: 7000, // utile si ton site devient gros
  changefreq: 'monthly', // fréquence d’update suggérée
  priority: 0.7,
};
