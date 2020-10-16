exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  // These are packages that use the global 'window', which is not accessible during SSR.
  // Don't load them during SSR, load them after.
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /canvas-confetti/,
            use: loaders.null(),
          },
          {
            test: /react-scrollama/,
            use: loaders.null(),
          },
          {
            test: /antd/,
            use: loaders.null(),
          },
          {
            test: /semiotic/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
