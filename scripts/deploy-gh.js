const ghpages = require('gh-pages');
ghpages.publish(
    'public',
    {
        branch: 'master',
        repo: "https://github.com/eduardlio/eduardlio.github.io"
    },
    () => {
        console.log("Deploy complete");
    }
)
