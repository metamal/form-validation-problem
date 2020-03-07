module.exports = api => {
  api.cache(true);
  return {
    presets: [
      [
        '@babel/preset-env',
        {
          modules: process.env.NODE_ENV === 'test' ? 'auto' : false,
          useBuiltIns: 'usage',
          corejs: {version: 3, proposals: true},
        },
      ],
      '@babel/preset-react',
    ],
  };
};
