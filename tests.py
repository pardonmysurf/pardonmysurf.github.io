import glob
import unittest
import frontmatter

class TestPodcastPosts(unittest.TestCase):
    PODCAST_REQUIRED_KEYS = [
        "title",
        "date",
        "file",
        "duration",
        "guid",
        "spotify_url",
        "itunes_url",
        "description"
    ]

    def test_podcast_posts(self):
        tags = []
        for file in glob.glob("_hackerspublics/*.md"):

            with open(file) as f:
                post = frontmatter.load(f)

            for key in self.PODCAST_REQUIRED_KEYS:
                if key not in post:
                    self.fail(
                        f"La clé `{key}` est absente de `{file}` et est obligatoire"
                    )
