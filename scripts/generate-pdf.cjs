const puppeteer = require('puppeteer');
const http = require('http');
const fs = require('fs');
const path = require('path');

// Simple static file server
function startServer(port) {
  const distPath = path.join(__dirname, '../out');

  const server = http.createServer((req, res) => {
    // Parse URL to get pathname without query string
    const urlPath = req.url.split('?')[0];
    let filePath = path.join(distPath, urlPath === '/' ? 'index.html' : urlPath);

    // Handle Next.js static export - try .html extension for routes
    if (!fs.existsSync(filePath)) {
      // File doesn't exist - try adding .html extension (Next.js static export format)
      const htmlPath = filePath + '.html';
      if (fs.existsSync(htmlPath)) {
        filePath = htmlPath;
      }
    } else if (fs.statSync(filePath).isDirectory()) {
      // Path is a directory - try index.html inside it
      const indexPath = path.join(filePath, 'index.html');
      if (fs.existsSync(indexPath)) {
        filePath = indexPath;
      }
    }

    const extname = path.extname(filePath);
    const contentTypes = {
      '.html': 'text/html',
      '.js': 'text/javascript',
      '.css': 'text/css',
      '.json': 'application/json',
      '.png': 'image/png',
      '.jpg': 'image/jpg',
      '.gif': 'image/gif',
      '.svg': 'image/svg+xml',
      '.woff': 'font/woff',
      '.woff2': 'font/woff2',
    };

    const contentType = contentTypes[extname] || 'application/octet-stream';

    fs.readFile(filePath, (error, content) => {
      if (error) {
        if (error.code === 'ENOENT') {
          res.writeHead(404, { 'Content-Type': 'text/html' });
          res.end('404 Not Found');
        } else {
          res.writeHead(500);
          res.end('Server Error: ' + error.code);
        }
      } else {
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content, 'utf-8');
      }
    });
  });

  return new Promise((resolve) => {
    server.listen(port, () => {
      console.log(`Server running at http://localhost:${port}/`);
      resolve(server);
    });
  });
}

async function generatePDF() {
  const PORT = 8080;
  let server;

  try {
    // Start local server
    server = await startServer(PORT);

    // Launch Puppeteer
    console.log('Launching browser...');
    const browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    const page = await browser.newPage();

    // Navigate to resume page
    console.log('Navigating to resume page...');
    await page.goto(`http://localhost:${PORT}/resume`, {
      waitUntil: 'networkidle0',
      timeout: 30000,
    });

    // Wait for content to be fully loaded
    await page.waitForSelector('.resume-content', { timeout: 10000 });

    // Wait a bit more for fonts and animations
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Generate PDF
    console.log('Generating PDF...');
    const pdfPath = path.join(__dirname, '../public/resume.pdf');

    await page.pdf({
      path: pdfPath,
      format: 'A4',
      margin: {
        top: '0.5in',
        right: '0.75in',
        bottom: '0.5in',
        left: '0.75in',
      },
      printBackground: true,
      preferCSSPageSize: false,
    });

    console.log(`✅ PDF generated successfully at: ${pdfPath}`);

    await browser.close();
  } catch (error) {
    console.error('❌ Error generating PDF:', error);
    process.exit(1);
  } finally {
    if (server) {
      server.close();
      console.log('Server stopped');
    }
  }
}

generatePDF();
