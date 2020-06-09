module.exports = {
  ci: {
    collect: {
      staticDistDir: '/home/runner/work/seiteta.github.io/seiteta.github.io'
    },
    assert: {
      assertions: {
        "categories:performance": ["warn", {"minScore": 1}],
        "categories:performance": ["error", {"minScore": 0.8}],
        "categories:accessibility": ["warn", {"minScore": 1}],
        "categories:accessibility": ["error", {"minScore": 0.8}],
        "categories:best-practices": ["warn", {"minScore": 1}],
        "categories:best-practices": ["error", {"minScore": 0.7}],
        "categories:seo": ["warn", {"minScore": 1}],
        "categories:seo": ["error", {"minScore": 0.8}],
      },
    },
  },
};
