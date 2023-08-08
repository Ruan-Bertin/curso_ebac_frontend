module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less:{
      development:{
        files:{
          'dev/styles/main.css': 'src/styles/main.less'
        }
      },
      production:{
        options:{
          compress: true,
        },
        files:{
          'dist/styles/main.min.css': 'src/styles/main.less'
        }
      }
    },
    replace:{
      dev:{
        options:{
          patterns:[
            {
              match: 'conteudo_do_css',
              replacement: './styles/main.css'
            },
            {
              match: 'conteudo_do_js',
              replacement: '../src/scripts/main.js'
            }
          ]
        },
        files: [
          {
            expand:true,
            flatten: true,
            src:['src/index.html'],
            dest: 'dev/'
          }
        ]
      },
      dist:{
        options:{
          patterns:[
            {
              match: 'conteudo_do_css',
              replacement: './styles/main.min.css'
            },
            {
              match: 'conteudo_do_js',
              replacement: './scripts/main.min.js'
            }
          ]
        },
        files:[
          {
            expand:true,
            flatten: true,
            src:['src/index.html'],
            dest: 'dist/'
          }
        ]
      }

    },
    uglify:{
      target:{
        files:{
          'dist/scripts/main.min.js': 'src/scripts/main.js'
        }
      }
    }
  })

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-replace');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('build',['less:production', 'replace:dist','uglify']);
}