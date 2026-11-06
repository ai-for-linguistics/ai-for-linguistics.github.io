# Publishing

Each repository publishes its own site through `.github/workflows/pages.yml` on pushes to `main`. A manual run is also available in the Actions tab. No hosting credentials or passwords are needed.

| Repository | Website |
| --- | --- |
| `aiforlinguistics` | https://ai-for-linguistics.github.io/aiforlinguistics/ |
| `linglab` | https://ai-for-linguistics.github.io/linglab/ |
| `lingrev` | https://ai-for-linguistics.github.io/lingrev/ |

To configure a new repository, select **Settings → Pages → Source → GitHub Actions**. Workflows build the site and upload only its output, rather than the full repository. See [GitHub's guide](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).
