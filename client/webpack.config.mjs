import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    entry: path.resolve(__dirname, 'src/index.js'), // se ajusta la ruta absoluta
    output: {
        filename: 'bundle.js',
        path: path.resolve(process.cwd(), '../server/dist'), // salida para el servidor
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'buble-loader',
                options: {
                    objectAssign: 'Object.assign',
                    transforms: {
                        modules: false,
                        asyncAwait: false
                    }
                },
            },
        ],
    },
    mode: 'development',
};