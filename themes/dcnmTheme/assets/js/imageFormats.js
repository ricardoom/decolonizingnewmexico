function detectImageFormat() {
  Modernizr.on('webp', function(result) {
    if (result) {
      // supported
      console.log('webp supported');
    } else {
      console.log('webp not supported');
      // rewrite the file extensions to all images... 
    }
  });
}

export { detectImageFormat as default };