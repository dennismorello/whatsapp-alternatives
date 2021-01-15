module.exports = {
  images: {
    domains: ["is2-ssl.mzstatic.com", "is3-ssl.mzstatic.com"],
  },
  async headers() {
    return [
      {
        source: "/fonts/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};
