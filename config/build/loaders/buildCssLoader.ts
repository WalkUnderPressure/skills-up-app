import MiniCssExtractPlugin from 'mini-css-extract-plugin';

type BuildCssLoaderOptions = {
  isDev: boolean;
};

function buildCssLoader(options: BuildCssLoaderOptions) {
  const { isDev } = options;

  return {
    test: /\.s[ac]ss$/i,
    use: [
      // !IMPORTANT: Order of loaders matters
      isDev
        ? // Creates `style` nodes from JS strings
          'style-loader'
        : // Extracts CSS into separate files
          MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: true,
            localIdentName: isDev ? '[path][name]__[local]--[hash:base64:8]' : '[hash:base64:8]',
          },
        },
      },
      // Compiles Sass to CSS
      'sass-loader',
    ],
  };
}

export default buildCssLoader;
