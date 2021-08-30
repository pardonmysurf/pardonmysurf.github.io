module.exports = {
  ci: {
    collect: {
      staticDistDir: '/home/runner/work/hackerspublics.github.io/hackerspublics.github.io',
      url: ['http://localhost/site/index.html'],
      numberOfRuns: 1
    },
    assert: {
      assertions: {
        "categories:performance": ["warn", {"minScore": 1}],
        "categories:performance": ["error", {"minScore": 0.7}],
        "categories:accessibility": ["warn", {"minScore": 1}],
        "categories:accessibility": ["error", {"minScore": 0.9}],
        "categories:best-practices": ["warn", {"minScore": 1}],
        "categories:best-practices": ["error", {"minScore": 0.9}],
        "categories:seo": ["warn", {"minScore": 1}],
        "categories:seo": ["error", {"minScore": 0.9}],
      },
    },
    upload: {
      target: 'filesystem',
      outputDir: '/home/runner/work/lhci_results'
    },
  },
};
