Login Credentials

Username: admin
Password: ?!^)[zV{q?fM5:9`

/**********************/

To compile scss files, use 'gulp sass' command within the theme directory. 

I built this site using a bootstrap subtheme to aid in responsiveness,
Even though the site is bootstrap based, I made use of flexbox styling to position items particularly on
desktop version.

For the footer, I made use of custom blocks rather than to add copy changes in twig, this is mainly for a much easier
user experience, user may control what is added solely using the CMS.

carousel banners - Owl carousel module was used to achieve simple scroll functionality on main banner, with a separate image uploaded for
mobile version.

Cards section - fields were added within the landing page for the cards section, to achieve the tiles with different height,
the intention was to use masonary functionality using a module, I resorted to using a less complex solution using CSS grids and manipulating the htm.twig file
to function as intended.

Contact Form - webform module was installed and made use of to achieve the appearance and functionality of the webform. Webform UI
module was also installed to make it much simpler for the user to edit fields within the form.

Slider cards component - Owl carousel module used for this section with view implentation to show paragraph, this works as intended in preview mode, however,
displays card components one below the other (this may be a bug)
