# Portfolio Website - Content Management Guide

## 📁 File Structure

Your GitHub repository should have these files:

```
yourusername.github.io/
├── index.html              ← Projects page (home)
├── creative.html           ← Creative work page
├── about.html              ← About page
├── projects-data.js        ← EDIT THIS to update projects
├── creative-data.js        ← EDIT THIS to update creative work
└── images/                 ← Folder for all your images
    ├── project1.jpg
    ├── project2.jpg
    └── creative1.jpg
```

## ✏️ How to Update Content

### Adding/Editing Projects

1. Open `projects-data.js`
2. To add a new project, copy this template:

```javascript
{
    title: "Your Project Title",
    date: "Month Year",
    tags: ["tag1", "tag2"],  // Choose from existing tags or add new ones
    image: "images/your-image.jpg",
    link: "#"  // Or link to project details
}
```

3. Add it to the `projects` array
4. Upload your image to the `images/` folder
5. Commit and push to GitHub

**Example:**
```javascript
const projects = [
    {
        title: "My New ML Project",
        date: "December 2024",
        tags: ["machine-learning", "research"],
        image: "images/ml-project.jpg",
        link: "https://github.com/yourusername/project"
    },
    // ... other projects
];
```

### Adding/Editing Creative Work

1. Open `creative-data.js`
2. Follow the same pattern as projects
3. You can add a `description` field for more details

```javascript
{
    title: "Photo Series Name",
    date: "2024",
    tags: ["photography"],
    image: "images/photo-series.jpg",
    description: "Brief description of the work",
    link: "#"
}
```

### Updating About Page

1. Open `about.html`
2. Edit the text directly in the HTML
3. Find sections like `<p>i'm a software engineer...</p>` and replace with your info
4. Update experience, education, and interests sections

### Adding New Filter Categories

In `projects-data.js` or `creative-data.js`, update the filter arrays:

```javascript
const filterCategories = [
    { id: "all", label: "all" },
    { id: "new-category", label: "new category" },  // Add your new category
    // ... existing categories
];
```

Then use the new category ID in your project tags:
```javascript
tags: ["new-category", "other-tag"]
```

## 🖼️ Adding Images

1. Save your images in the `images/` folder
2. Keep file names simple (no spaces): `project-name.jpg`
3. Reference them in your data files: `"images/project-name.jpg"`

**Recommended image sizes:**
- Project/Creative images: 1600x1000px (16:10 ratio)
- File format: JPG or PNG
- Optimize for web (keep under 500KB per image)

## 🔄 Publishing Changes

After editing any files:

```bash
git add .
git commit -m "Update projects"
git push
```

Your site will update automatically at `https://yourusername.github.io` within a few minutes.

## 🎨 Customizing Intro Text

**Projects page** (`index.html`):
```html
<div class="intro">
    i'm a software engineer and researcher...  ← Edit this text
</div>
```

**Creative page** (`creative.html`):
```html
<div class="intro">
    creative explorations in...  ← Edit this text
</div>
```

## 🔗 Updating Social Links

Update these in the footer of each HTML file:

```html
<footer>
    <a href="https://linkedin.com/in/YOURPROFILE">linkedin</a>
    <a href="https://github.com/YOURUSERNAME">github</a>
    <a href="mailto:your@email.com">email</a>
</footer>
```

## 💡 Tips

- Always test locally before pushing (open HTML files in your browser)
- Keep tags consistent across projects for better filtering
- Optimize images before uploading to keep site fast
- Add new projects at the top of the array to show them first

## ❓ Common Issues

**Images not showing?**
- Check the path: `images/filename.jpg` (not `Images/` or `/images/`)
- Make sure the image file is actually in the images folder
- File names are case-sensitive on GitHub Pages

**Filters not working?**
- Make sure tag names in `filterCategories` match exactly with project tags
- Tags are case-sensitive: `"machine-learning"` ≠ `"Machine-Learning"`

**Changes not appearing?**
- Wait 2-3 minutes for GitHub Pages to rebuild
- Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)
- Check GitHub Actions tab to see if build succeeded
