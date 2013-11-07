# Get the directory that this configuration file exists in
dir = File.dirname(__FILE__)

# Look for any *.scss files in same directory as this file and
# Place compiled *.css files in the css directory
sass_path = dir
css_path = File.join(dir, '..', 'css')

# Setting up images paths for proper use compass image mixins
images_dir = File.join('..', 'assets')
http_images_path = File.join('..', 'assets')

output_style = :expanded
environment = :development
sass_options = {:debuginfo => true}
