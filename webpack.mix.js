const mix = require('laravel-mix');
require('laravel-mix-serve');

mix.disableNotifications();

mix.js('resources/js/app.js', 'public/js').postCss('resources/css/app.css', 'public/css', [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
]);

mix.version();

mix.serve();

mix.browserSync({
    proxy: 'localhost:8000'
});
