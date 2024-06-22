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
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

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
define( 'AUTH_KEY',          '1`XgW5(TO]P}nf-u !G*m5ht9+uj}G.;G/zUL>N(cT=}|RP 7F(rFj,CT_h{GL=E' );
define( 'SECURE_AUTH_KEY',   'KZ 4eAu&ydH}&=F6DWJ*wx4%};C,CL>er<gG2w:H}DF%%Su.0cH7{hoP1x|?22Cc' );
define( 'LOGGED_IN_KEY',     '9icLI$R;-Jg-F{R},/sV]J5f0qaSI5AES{-En2okQWC>S`S{2(VX|> RIsn{X(yR' );
define( 'NONCE_KEY',         'oGXG!p)H3+^D!WS2A5Z6H@]]rv5?<~qi_J^{1Y_>NApbJ&g_K7D+&D,*[MIGf&}<' );
define( 'AUTH_SALT',         '5sBkxi[Whj!?J{}zJy|#Qu$G ^A} YXVKEd-jd<Zdv>M[i{Lz}aFrR_i&n&`1P.I' );
define( 'SECURE_AUTH_SALT',  'B5HN)R~wknN7bN8qAXpudyI gN~kL|p:^>3^@+Z0_#)Fr=*E6Rtb-2Fg)Mqg-W!j' );
define( 'LOGGED_IN_SALT',    'ouNx/`.plV*J,{JnAkCbzk+$+9S%A<RTt/F]=]F2.a#uEX= >)o`;m%i5<dL5)Oa' );
define( 'NONCE_SALT',        '%<,wa;z9ov1d-^k7*5O`nA/&3J # F#MN!4J8l^u@eKVh[]g,  dB*j?vxQ&*Kzv' );
define( 'WP_CACHE_KEY_SALT', 'wkvhjQ EbJO[I(EN&D?Vh8}Bmookns_?wR_2]dvYGU}P-c5~Ab# I0~sS*)[YtD.' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



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
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
