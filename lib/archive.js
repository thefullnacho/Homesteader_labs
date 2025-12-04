import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Use path.join to ensure correct directory separators
const contentDir = path.join(process.cwd(), 'content', 'logs');

export function getArchiveLogs() {
  const fileNames = fs.readdirSync(contentDir);

  const allPostsData = fileNames.map(fileName => {
    // Remove ".mdx" or ".md" from file name to use as slug
    const slug = fileName.replace(/\.mdx?$/, '');

    // Read markdown file as string
    const fullPath = path.join(contentDir, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata (frontmatter)
    const { data, content } = matter(fileContents);

    // Combine the data with the slug
    return {
      slug,
      content,
      ...data,
    };
  });

  // Sort posts by date or title if needed
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
