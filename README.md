Boomerang ported for App Engine (Python)
==============================
This is forked from the [GDG-X boomerang] project.
GDG boilerplate, feeds from DevSite and Google+ using AngularJS and Twitter Bootstrap.

This verson was designed to be used with the [CodEnvy IDE].

View [GDG Kansas City]'s site to see a working version of this application.

### Steps to setup for your own GDG website:
1. Fork this project into your own repository
2. Open the CodEnvy IDE and log in
  * Create a new Python project and select App Engine as your PaaS
  * Create an [App Engine project]
  * Clone the repository
3. Open 'app.yaml' and add the name of the GAE project you just created
4. Open 'index.html'
  * Edit the "title" tag with your GDG name
  * Edit the "meta" tags with your GDG name and URL
  * Edit the Google Analytics tracking script with your tracking code
5. Open 'sitemap.xml' and edit with your GDG URL
6. Open 'js/config.js' and fill out the top section with your GDG info

### Add your sponsors:
1. Open 'js/config.js'
  * Add a new section for each sponser
  * Make sure to incriment the IDs
  * Include the sponsor name, URL, image

[GDG-X boomerang]: https://github.com/gdg-x/boomerang
[GDG Kansas City]: http://gdgkc.org
[App Engine project]: https://appengine.google.com/
[CodEnvy IDE]: https://codenvy.com
