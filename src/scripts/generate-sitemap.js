const fs = require('fs');
const path = require('path');

// ============================================
// YOUR BLOG DATA - Copy exactly from your BlogCarousel.js
// ============================================
const blogs = [
  {
    id: 1,
    title: "AI-Powered Surgery Innovations",
    slug: "ai-powered-surgery-innovations",
    date: "2024-01-14",
    category: "Healthcare"
  },
  {
    id: 2,
    title: "CCTV Smart Monitoring with AI",
    slug: "cctv-smart-monitoring-with-ai",
    date: "2024-01-13",
    category: "CCTV"
  },
  {
    id: 3,
    title: "AI in Patient Care Systems",
    slug: "ai-in-patient-care-systems",
    date: "2024-01-12",
    category: "Healthcare"
  },
  {
    id: 4,
    title: "AI Robots for Surgery Assistance",
    slug: "ai-robots-for-surgery-assistance",
    date: "2024-01-11",
    category: "Surgery"
  },
  {
    id: 5,
    title: "Smart AI CCTV Analytics",
    slug: "smart-ai-cctv-analytics",
    date: "2024-01-10",
    category: "CCTV"
  },
  {
    id: 6,
    title: "E-Commerce Solutions",
    slug: "e-commerce-solutions",
    date: "2024-01-09",
    category: "E-Commerce Solutions"
  },
  {
    id: 7,
    title: "ERP Solutions",
    slug: "erp-solutions",
    date: "2024-01-08",
    category: "ERP Solutions"
  },
  {
    id: 8,
    title: "CRM Solutions",
    slug: "crm-solutions",
    date: "2024-01-07",
    category: "CRM Solutions"
  },
  {
    id: 9,
    title: "AI and Machine Learning Solutions",
    slug: "ai-and-machine-learning-solutions",
    date: "2024-01-06",
    category: "AI and Machine Learning Solutions"
  },
  {
    id: 10,
    title: "Cybersecurity Solutions",
    slug: "cybersecurity-solutions",
    date: "2024-01-05",
    category: "Cybersecurity Solutions"
  },
  {
    id: 11,
    title: "Digital Marketing Services",
    slug: "digital-marketing-services",
    date: "2024-01-04",
    category: "Digital Marketing Services"
  }
];

// ============================================
// CONFIGURATION - CHANGE THIS TO YOUR DOMAIN
// ============================================
const baseUrl = 'https://yourdomain.com'; // <--- CHANGE THIS to your actual domain
const currentDate = new Date().toISOString().split('T')[0];

// ============================================
// STATIC PAGES (Add all your website pages here)
// ============================================
const staticPages = [
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/about', priority: '0.8', changefreq: 'weekly' },
  { url: '/services', priority: '0.8', changefreq: 'weekly' },
  { url: '/blog', priority: '0.9', changefreq: 'daily' },
  { url: '/contact', priority: '0.7', changefreq: 'monthly' },
  { url: '/privacy-policy', priority: '0.3', changefreq: 'yearly' },
  { url: '/terms-of-service', priority: '0.3', changefreq: 'yearly' }
];

// ============================================
// GENERATE SITEMAP XML
// ============================================
function generateSitemap() {
  console.log('🔄 Generating sitemap.xml for 11 blog posts...');
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  // Add static pages
  staticPages.forEach(page => {
    sitemap += `  <!-- Static Page: ${page.url} -->
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
  });

  // Add blog posts
  blogs.forEach(blog => {
    sitemap += `
  <!-- Blog: ${blog.title} (ID: ${blog.id}) -->
  <url>
    <loc>${baseUrl}/blog/${blog.slug}</loc>
    <lastmod>${blog.date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
  });

  sitemap += `
</urlset>`;

  // Write the file to public folder
  const outputPath = path.join(__dirname, '../public/sitemap.xml');
  
  try {
    fs.writeFileSync(outputPath, sitemap);
    console.log(`✅ Sitemap generated successfully!`);
    console.log(`📊 Summary:`);
    console.log(`   - Static pages: ${staticPages.length}`);
    console.log(`   - Blog posts: ${blogs.length}`);
    console.log(`   - Total URLs: ${staticPages.length + blogs.length}`);
    console.log(`📍 Location: ${outputPath}`);
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
  }
}

// Run the generator
generateSitemap();