import path from 'path';
import buildWebpackConfig from './config/build/buildWebpackConfig';
export default (function (env) {
    var API_URL = env.apiUrl || 'http://localhost:7000';
    var BUILD_MODE = env.mode || 'development';
    var WITH_ANALYZE = env.analyze || false;
    var PORT = env.port || 3000;
    var options = {
        mode: BUILD_MODE,
        isDev: BUILD_MODE === 'development',
        apiUrl: API_URL,
        withAnalyze: WITH_ANALYZE,
        paths: {
            entry: path.resolve(__dirname, 'src', 'index.tsx'),
            output: path.resolve(__dirname, 'build'),
            html: path.resolve(__dirname, 'public', 'index.html'),
            src: path.resolve(__dirname, 'src'),
        },
        port: PORT,
    };
    var config = buildWebpackConfig(options);
    return config;
});
