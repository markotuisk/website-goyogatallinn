# Goyoga Journal Upload Protocol (The Skill)

Follow this protocol strictly for every new article uploaded to the Goyoga Journal Hub to ensure maximum SEO, social engagement, and cross-site conversion.

---

## Phase 1: Data Entry (`js/journal-data.js`)

Add a new object to the `articles` array. Use the following schema:

```javascript
{
    id: 'seo-slug-here', // Lowercase, hyphenated (e.g., 'ashtanga-for-beginners')
    date: 'YYYY-MM-DD', // Publishing date
    category: { 
        en: 'Practice', et: 'Praktika', fi: 'Harjoitus', ru: 'Практика' 
    },
    image: 'https://images.unsplash.com/...', // High-res featured image
    author: 'Author Name',
    teacherId: 'teacher-slug', // Must match ID in teachers-detail.js
    practiceId: 'practice-slug', // Must match ID in class.html logic
    hashtags: ['keyword1', 'keyword2', 'tallinn', 'yoga'], // 10-15 high-intent SEO keywords
    readTime: { 
        en: 'X min read', et: 'X min lugemist', fi: 'X min lukuaika', ru: 'X мин чтения' 
    },
    translations: {
        en: { title: '', excerpt: '', content: '' },
        et: { title: '', excerpt: '', content: '' },
        fi: { title: '', excerpt: '', content: '' },
        ru: { title: '', excerpt: '', content: '' }
    }
}
```

---

## Phase 2: SEO & Content Optimization

1.  **Keyword Density**: Weave at least 5 of the `hashtags` into the actual `content` HTML (using `<strong>` for prominence).
2.  **Location Tagging**: Always include "Tallinn" once in the intro or author bio section for local SEO.
3.  **Images**: Ensure the featured image is visually "premium" and matches the sanctuary aesthetic.
4.  **Blockquotes**: Wrap key wisdom or teacher quotes in `<blockquote>` tags to trigger the Journal's styled typography.

---

## Phase 3: Internal Linking Checklist

1.  **Teacher Profile**: Ensure `teacherId` links to a valid teacher card.
2.  **Practice Conversion**: Ensure `practiceId` links to the correct class page to convert readers into students.
3.  **Sitemap**: Add the new article path to `sitemap.xml` for all languages if it's a major cornerstone piece.
    - Example: `/journal/?id=slug`

---

## Phase 4: Final Verification

1.  **Direct Link Test**: Visit `goyoga.ee/journal/?id=your-slug` and verify it loads directly.
2.  **Social Preview**: Use a tool (or WhatsApp/Slack) to verify that `og:image`, `og:title`, and `og:description` pull correctly from the new article.
3.  **Language Toggle**: Switch between EN and ET to ensure the content stays synced.
4.  **Back Button**: Verify "Back to Journal" restores the regular hub metadata.

---

## Phase 5: Deployment

1.  `git add .`
2.  `git commit -m "feat(journal): Add new article: [Title]"`
3.  `git push origin main`
4.  Confirm Cloudflare build is successful.
