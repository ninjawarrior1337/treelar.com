// See http://brunch.io for documentation.
module.exports = {
  files: {
    javascripts: {
      joinTo: {
        'app.js': /^app/
      }
    },
    stylesheets: {joinTo: 'app.css'},
  },
  server: 
  {
    port: 25565,
    hostname: "0.0.0.0"
  },
  notifications: false,
  plugins: {
    uglify: {
      mangle: false,
      compress: {
        global_defs: {
          DEBUG: true
        }
      }
    }
  }
}

