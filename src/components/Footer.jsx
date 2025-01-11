import React, { useState, useEffect } from 'react';

function Footer() {
  const [commitHash, setCommitHash] = useState(null);

  useEffect(() => {
    const fetchCommitHash = async () => {
      try {
        // Fetch the commit hash from the specified URL
        // This URL should point to the file containing the commit hash,
        // which is generated by GitLab CI and saved in the 'dist/commit_hash' file.
        // For details on how the commit hash is created, refer to the .gitlab-ci.yml file.
        const response = await fetch('https://links.ummit.dev/commit_hash');
        if (response.ok) {
          const text = await response.text();
          setCommitHash(text.trim());
        } else {
          console.error('Failed to fetch commit hash:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching commit hash:', error);
      }
    };

    fetchCommitHash();
  }, []);

  return (
    <footer className="footer footer-center bg-base-100 text-gray-300 p-5">
      <div className="container mx-auto">
        <p className="text-sm mb-2">
          &copy; {new Date().getFullYear()} <span className="font-semibold text-rose-200">UmmIt</span>. This site is fully open source and licensed under the <a href="https://opensource.org/licenses/MIT" className="text-rose-200 hover:text-rose-300 font-semibold">MIT License</a>.
        </p>
        <p className="text-sm text-rose-200 font-semibold">
          Hosted on GitHub Pages (CI/CD)
        </p>
        {commitHash && (
          <p className="text-sm text-rose-200 font-semibold">
            <span className="text-sm text-rose-100 font-semibold">Updated with commit hash: </span>
            <a
              href={`https://github.com/UmmItC/Links/commit/${commitHash}`}
              className="text-rose-100 hover:text-rose-500 font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              {commitHash}
            </a>
          </p>
        )}
      </div>
    </footer>
  );
}

export default Footer;