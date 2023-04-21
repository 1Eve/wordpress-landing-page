<?php
/**
 * Title: Faq Accordion
 * Slug: faq-accordion
 * Categories: faq
 * 
 */
?>
<!-- wp:group {"align":"full","style":{"spacing":{"padding":{"bottom":"0"}},"position":{"all":"relative"},"zIndex":{"all":"1"},"overflow":{"all":"visible"}},"className":"is-style-default","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull is-style-default" style="padding-bottom:0"><!-- wp:group {"style":{"position":"","zIndex":"","top":"","right":"","bottom":"","left":""},"layout":{"type":"constrained","contentSize":"720px"}} -->
<div class="wp-block-group"><!-- wp:paragraph {"align":"center","style":{"typography":{"fontStyle":"normal","fontWeight":"600"}},"gradient":"primary","fontSize":"18"} -->
<p class="aligncenter has-text-align-center has-primary-gradient-background has-background has-18-font-size aligncenter" style="font-style:normal;font-weight:600">FAQs</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textAlign":"center","gradient":"heading","className":"wp-block-heading"} -->
<h2 class="wp-block-heading has-text-align-center has-heading-gradient-background has-background">Frequently asked questions</h2>
<!-- /wp:heading --></div>
<!-- /wp:group -->

<!-- wp:columns {"align":"wide","style":{"spacing":{"padding":{"top":"var:preset|spacing|xs","bottom":"var:preset|spacing|sm","right":"0","left":"0"},"margin":{"top":"var:preset|spacing|md","bottom":"var:preset|spacing|xxs"},"blockGap":{"top":"var:preset|spacing|md","left":"var:preset|spacing|md"}}},"className":"is-style-default"} -->
<div class="wp-block-columns alignwide is-style-default" style="margin-top:var(--wp--preset--spacing--md);margin-bottom:var(--wp--preset--spacing--xxs);padding-top:var(--wp--preset--spacing--xs);padding-right:0;padding-bottom:var(--wp--preset--spacing--sm);padding-left:0"><!-- wp:column {"style":{"position":{"all":"relative"},"zIndex":{"all":"1"}},"className":"is-style-default"} -->
<div class="wp-block-column is-style-default"><!-- wp:list {"style":{"spacing":{"padding":{"top":"0","right":"0","bottom":"0","left":"0"},"blockGap":"0"},"border":{"radius":"21px","width":"0px","style":"none"}},"backgroundColor":"surface","className":"is-style-accordion"} -->
<ul class="is-style-accordion has-surface-background-color has-background" style="border-style:none;border-width:0px;border-radius:21px;padding-top:0;padding-right:0;padding-bottom:0;padding-left:0"><!-- wp:list-item {"style":{"spacing":{"padding":{"top":"var:preset|spacing|sm","right":"var:preset|spacing|sm","bottom":"var:preset|spacing|sm","left":"var:preset|spacing|sm"}},"border":{"width":"0px","style":"none"}}} -->
<li style="border-style:none;border-width:0px;padding-top:var(--wp--preset--spacing--sm);padding-right:var(--wp--preset--spacing--sm);padding-bottom:var(--wp--preset--spacing--sm);padding-left:var(--wp--preset--spacing--sm)"><strong>How to edit the static Front Page?</strong><br><br>To set up the front page template, go to Appearance > Editor and navigate to the Front Page template. Open the Document Overview panel to view the block structure tree, and copy all blocks between the Header and Footer template parts. Exit the Site Editor and navigate to Pages > Add New. Enter the title for the home page, paste the previously copied blocks into the page with Cmd + V or Ctrl + V on Windows, and save and publish the home page. Exit the Page Editor and navigate to Settings > Reading, then set the newly created home page as the Static Front Page and the blog page if necessary. Navigate back to the Front Page template in the Site Editor, open the Document Overview panel, and remove all blocks between the Header and Footer. Insert a new Post Content block between the Header and Footer, then click Save and publish your changes.</li>
<!-- /wp:list-item -->

<!-- wp:list-item {"style":{"spacing":{"padding":{"top":"var:preset|spacing|sm","right":"var:preset|spacing|sm","bottom":"var:preset|spacing|sm","left":"var:preset|spacing|sm"}},"border":{"width":"0px","style":"none"}}} -->
<li style="border-style:none;border-width:0px;padding-top:var(--wp--preset--spacing--sm);padding-right:var(--wp--preset--spacing--sm);padding-bottom:var(--wp--preset--spacing--sm);padding-left:var(--wp--preset--spacing--sm)"><strong>How to add custom SVG images?</strong><br><br>Simply open the Editor and search for the “SVG” block, add your svg/html content in the SVG String field and customize to your liking.</li>
<!-- /wp:list-item -->

<!-- wp:list-item {"style":{"spacing":{"padding":{"top":"var:preset|spacing|sm","right":"var:preset|spacing|sm","bottom":"var:preset|spacing|sm","left":"var:preset|spacing|sm"}},"border":{"width":"0px","style":"none"}}} -->
<li style="border-style:none;border-width:0px;padding-top:var(--wp--preset--spacing--sm);padding-right:var(--wp--preset--spacing--sm);padding-bottom:var(--wp--preset--spacing--sm);padding-left:var(--wp--preset--spacing--sm)"><strong>How to edit mobile navigation menu?</strong><br><br>The theme settings allow you to create separate navigation menus depending on the screen size. The video below demonstrates how to access the mobile navigation menus display settings from the Site Editor:</li>
<!-- /wp:list-item -->

<!-- wp:list-item {"style":{"spacing":{"padding":{"top":"var:preset|spacing|sm","right":"var:preset|spacing|sm","bottom":"var:preset|spacing|sm","left":"var:preset|spacing|sm"}},"border":{"width":"0px","style":"none"}}} -->
<li style="border-style:none;border-width:0px;padding-top:var(--wp--preset--spacing--sm);padding-right:var(--wp--preset--spacing--sm);padding-bottom:var(--wp--preset--spacing--sm);padding-left:var(--wp--preset--spacing--sm)"><strong>How to add template parts to templates?</strong><br><br>Below is a basic example of how to create your own template parts and add them to default or custom templates. The screen recording below demonstrates how to create a custom Footer template part which is displayed only on the Page template</li>
<!-- /wp:list-item -->

<!-- wp:list-item {"style":{"spacing":{"padding":{"top":"var:preset|spacing|sm","right":"var:preset|spacing|sm","bottom":"var:preset|spacing|sm","left":"var:preset|spacing|sm"}},"border":{"width":"0px","style":"none"}}} -->
<li style="border-style:none;border-width:0px;padding-top:var(--wp--preset--spacing--sm);padding-right:var(--wp--preset--spacing--sm);padding-bottom:var(--wp--preset--spacing--sm);padding-left:var(--wp--preset--spacing--sm)"><strong>How to edit the front page template?</strong><br><br>To edit the Front Page, first create a new page with any name you like. Add your choice of block patterns to the page, edit the content as needed and click Publish. Once published, navigate to Settings &gt; Reading and set the Front Page to the page you created. If you don’t see the changes, make sure there is no custom Front Page set in the Editor. If there is, simply clear your customizations and it will be reverted to the theme default and work correctly. It’s best to always edit the front page from the page itself and not the Site Editor.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:spacer {"height":"600px","style":{"width":{"all":"600px"},"top":{"all":""},"right":{"all":""},"position":{"all":"absolute"},"zIndex":{"all":"-1"},"bottom":{"all":"-300px"},"left":{"all":"-300px"}},"gradient":"circle"} -->
<div style="height:600px" aria-hidden="true" class="wp-block-spacer has-circle-gradient-background has-background"></div>
<!-- /wp:spacer --></div>
<!-- /wp:column -->

<!-- wp:column {"style":{"position":{"all":"relative"},"zIndex":{"all":"1"}},"className":"is-style-default"} -->
<div class="wp-block-column is-style-default"><!-- wp:spacer {"height":"600px","style":{"width":{"all":"600px"},"top":{"all":"-300px"},"right":{"all":"-300px"},"position":{"all":"absolute"},"zIndex":{"all":"-1"},"bottom":{"all":""},"left":{"all":""}},"gradient":"circle"} -->
<div style="height:600px" aria-hidden="true" class="wp-block-spacer has-circle-gradient-background has-background"></div>
<!-- /wp:spacer -->

<!-- wp:list {"style":{"spacing":{"padding":{"top":"0","right":"0","bottom":"0","left":"0"},"blockGap":"0","margin":{"top":"0","right":"0","bottom":"0","left":"0"}},"border":{"radius":"21px","width":"0px","style":"none"}},"backgroundColor":"surface","className":"is-style-accordion"} -->
<ul class="is-style-accordion has-surface-background-color has-background" style="border-style:none;border-width:0px;border-radius:21px;margin-top:0;margin-right:0;margin-bottom:0;margin-left:0;padding-top:0;padding-right:0;padding-bottom:0;padding-left:0"><!-- wp:list-item {"style":{"spacing":{"padding":{"top":"var:preset|spacing|sm","right":"var:preset|spacing|sm","bottom":"var:preset|spacing|sm","left":"var:preset|spacing|sm"}},"border":{"width":"0px","style":"none"}}} -->
<li style="border-style:none;border-width:0px;padding-top:var(--wp--preset--spacing--sm);padding-right:var(--wp--preset--spacing--sm);padding-bottom:var(--wp--preset--spacing--sm);padding-left:var(--wp--preset--spacing--sm)"><strong>How to create accordions?</strong><br><br>Accordions extend the core list block to create collapsible toggle sections for displaying FAQs on your site. Accordions require specific formatting to display correctly. First, ensure that the title of the list item is on its own line. Then hit enter/return to create a new line for the content paragraph. This is how the theme determines the accordion item title and content.</li>
<!-- /wp:list-item -->

<!-- wp:list-item {"style":{"spacing":{"padding":{"top":"var:preset|spacing|sm","right":"var:preset|spacing|sm","bottom":"var:preset|spacing|sm","left":"var:preset|spacing|sm"}},"border":{"width":"0px","style":"none"}}} -->
<li style="border-style:none;border-width:0px;padding-top:var(--wp--preset--spacing--sm);padding-right:var(--wp--preset--spacing--sm);padding-bottom:var(--wp--preset--spacing--sm);padding-left:var(--wp--preset--spacing--sm)"><strong>How to add a custom dark mode colors?</strong><br><br>To customize the Dark Mode color palette, navigate to Appearance > Editor and click on the Styles button in the top right corner (light/dark circle). Click Colors, then Palette, and finally the Custom tab. In the Custom section, click the Add ➕ button, select your colors, and give each color a name beginning with Dark Mode, for example: Dark Mode Foreground. Click Done and then click Save to save your changes.</li>
<!-- /wp:list-item -->

<!-- wp:list-item {"style":{"spacing":{"padding":{"top":"var:preset|spacing|sm","right":"var:preset|spacing|sm","bottom":"var:preset|spacing|sm","left":"var:preset|spacing|sm"}},"border":{"width":"0px","style":"none"}}} -->
<li style="border-style:none;border-width:0px;padding-top:var(--wp--preset--spacing--sm);padding-right:var(--wp--preset--spacing--sm);padding-bottom:var(--wp--preset--spacing--sm);padding-left:var(--wp--preset--spacing--sm)"><strong>How to change the site logo?</strong><br><br>To replace the regular image block with the Site Logo block in the Blockify theme preview, navigate to Appearance > Editor and click on the logo (image block). Click Replace, then click Open Media Library to upload or choose your own logo image and click Select. Add a link by clicking on the link 🔗 icon in the block toolbar, enter the URL and click the ⏎ button to apply. Save your site changes. The steps above are demonstrated in the screen recording below.</li>
<!-- /wp:list-item -->

<!-- wp:list-item {"style":{"spacing":{"padding":{"top":"var:preset|spacing|sm","right":"var:preset|spacing|sm","bottom":"var:preset|spacing|sm","left":"var:preset|spacing|sm"}},"border":{"width":"0px","style":"none"}}} -->
<li style="border-style:none;border-width:0px;padding-top:var(--wp--preset--spacing--sm);padding-right:var(--wp--preset--spacing--sm);padding-bottom:var(--wp--preset--spacing--sm);padding-left:var(--wp--preset--spacing--sm)"><strong>How do I create a child theme?</strong><br><br>We recommend using the create block theme plugin to create your own child themes. With a little know-how, they can be the perfect way to build your own website. They inherit all of the parent theme’s design which saves you a tonne of work and provides a head start for your next project.</li>
<!-- /wp:list-item -->

<!-- wp:list-item {"style":{"spacing":{"padding":{"top":"var:preset|spacing|sm","right":"var:preset|spacing|sm","bottom":"var:preset|spacing|sm","left":"var:preset|spacing|sm"}},"border":{"width":"0px","style":"none"}}} -->
<li style="border-style:none;border-width:0px;padding-top:var(--wp--preset--spacing--sm);padding-right:var(--wp--preset--spacing--sm);padding-bottom:var(--wp--preset--spacing--sm);padding-left:var(--wp--preset--spacing--sm)"><strong>Changes aren't showing on my site?</strong><br><br>This can happen for a number of reasons. One of the main causes of page content not being updated is that a custom template is set and needs to be removed. Other troubleshooting options to try are clearing customizations, removing unused templates, enabling WP_DEBUG to force regenerate theme.json. If you are not able to solve your issue, please don’t hesitate to get in touch.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></div>
<!-- /wp:column --></div>
<!-- /wp:columns -->

<!-- wp:group {"style":{"spacing":{"blockGap":"var:preset|spacing|xxs"}},"layout":{"type":"flex","flexWrap":"nowrap","justifyContent":"center"},"fontSize":"18"} -->
<div class="wp-block-group has-18-font-size"><!-- wp:paragraph {"align":"center","style":{"typography":{"fontStyle":"normal","fontWeight":"500"}}} -->
<p class="aligncenter has-text-align-center aligncenter" style="font-style:normal;font-weight:500">Question not answered above?</p>
<!-- /wp:paragraph -->

<!-- wp:buttons -->
<div class="wp-block-buttons"><!-- wp:button {"textColor":"currentColor","style":{"spacing":{"padding":{"top":"var:preset|spacing|xxs","right":"var:preset|spacing|xxs","bottom":"var:preset|spacing|xxs","left":"var:preset|spacing|xxs"}},"border":{"width":"1px"}},"className":"is-style-outline","fontSize":"14"} -->
<div class="wp-block-button has-custom-font-size is-style-outline has-14-font-size" style="border-width:1px"><a class="wp-block-button__link has-current-color-color has-text-color wp-element-button" href="/support" style="border-width:1px;padding-top:var(--wp--preset--spacing--xxs);padding-right:var(--wp--preset--spacing--xxs);padding-bottom:var(--wp--preset--spacing--xxs);padding-left:var(--wp--preset--spacing--xxs)">Contact Support</a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons --></div>
<!-- /wp:group --></div>
<!-- /wp:group -->
