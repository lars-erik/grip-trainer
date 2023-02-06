import { defineConfig } from 'vite';

export default defineConfig({
    base: './',
    plugins:[
    ],
    build: {
        lib: {
            name: 'grip-trainer',
            formats: ['es'],
            entry: {
                m: './index.html'
            }
        }
    }
});