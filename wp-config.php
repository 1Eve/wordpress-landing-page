<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'landing-page' );

/** Database username */
define( 'DB_USER', 'group1' );

/** Database password */
define( 'DB_PASSWORD', 'group1' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'pVcTdpri!XLq=,y_H#?g_67}.kT,QFko5I`Wd4N(!$FwqrM+>^#o#2OdbuXMun8&' );
define( 'SECURE_AUTH_KEY',  'a8)syo*S5gf|L9mB9w9@=d.>^*G:}6MD#pD;J`rUf%=yV$<+Z.<(,X]]wBEZ0M91' );
define( 'LOGGED_IN_KEY',    'Oxaw1*%+.!7.[H[<&d@cY5R2=R<wCu=Qoz%8X~e!DNt?^EOaqlRO?0Pc3Z]w13Av' );
define( 'NONCE_KEY',        'V#,${iuj`p0(!=&;7.Xp %xvfnu`e$a 3h6vK<I9VBUBS&%c4r_m5>iK)!W  KnI' );
define( 'AUTH_SALT',        'o#7hT[k2Qfa`h7sKSY.yqOD-QS6Mj3>ctdK0N6SW;M953xX,z}$ iXdh9Rs:^0>o' );
define( 'SECURE_AUTH_SALT', 'nGY|?pT:c!TD97tq)j~5&l%`ZcJ`.KBFyn:,f(_.YxV/s=y7@CqlC7A|$_jj|u$g' );
define( 'LOGGED_IN_SALT',   '-#1|ZtHH(bku%rjfy!$n@gJ|?PvKAOVn`hDTifoOQ6JdwyW:7&e/?NN-VL$aTRl:' );
define( 'NONCE_SALT',       'oqi>[u<VYGVPkpB8}|T^f!3liNY:gM~#D$f}Cxmwv5L2*KU$i0mtY$.$dc~xvWDb' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
