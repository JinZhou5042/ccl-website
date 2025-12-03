# CCL Website

This repository contains the source code for the Cooperative Computing Lab (CCL) website. The site is built with Jekyll and uses the al-folio theme as a base.

## Deployment

- To deploy and test locally, see [INSTALL.md](INSTALL.md).

## Blogs

Blogging is supported with advanced features (code highlighting, Plotly graphs, image galleries, pseudo code, and more). Users should add posts and assets as follows:

- Put your post in `_posts/<year>/` (example: `_posts/2025/2025-12-03-new-post.md`).
- Put blog images and related assets under `assets/blog/<year>/<slug>/` (example: `assets/blog/2025/new-post/hero.jpg`).
- Reference these assets from your post content using relative paths.

For examples of advanced blogging features, see the [al-folio blog examples](https://alshedivat.github.io/al-folio/blog/).

## People

Lab members can add themselves to the People page:

- Add your photo to `assets/img/people/` (example: `assets/img/people/jane-doe.jpg`).
- Edit `/_pages/people.md` to include your entry and reference your photo.

## Formatting

Use Prettier to keep Markdown and code tidy. To format only the file you changed:

```bash
npx prettier README.md --write
```

Replace `README.md` with the path to the file you modified. To format all currently staged files:

```bash
git diff --name-only --cached | xargs npx prettier --write
```
