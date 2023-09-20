﻿/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.plugins.add( 'smiley', {
	requires: 'dialog',
	// jscs:disable maximumLineLength
	lang: 'af,ar,az,bg,bn,bs,ca,cs,cy,da,de,de-ch,el,en,en-au,en-ca,en-gb,eo,es,es-mx,et,eu,fa,fi,fo,fr,fr-ca,gl,gu,he,hi,hr,hu,id,is,it,ja,ka,km,ko,ku,lt,lv,mk,mn,ms,nb,nl,no,oc,pl,pt,pt-br,ro,ru,si,sk,sl,sq,sr,sr-latn,sv,th,tr,tt,ug,uk,vi,zh,zh-cn', // %REMOVE_LINE_CORE%
	// jscs:enable maximumLineLength
	icons: 'smiley', // %REMOVE_LINE_CORE%
	hidpi: true, // %REMOVE_LINE_CORE%
	init: function( editor ) {
		editor.config.smiley_path = editor.config.smiley_path || ( this.path + 'images/' );
		editor.config.lingling_path = editor.config.lingling_path || ( this.path + 'lingling/' );
		editor.addCommand( 'smiley', new CKEDITOR.dialogCommand( 'smiley', {
			allowedContent: 'img[alt,height,!src,title,width]',
			requiredContent: 'img'
		} ) );
		editor.ui.addButton && editor.ui.addButton( 'Smiley', {
			label: editor.lang.smiley.toolbar,
			command: 'smiley',
			toolbar: 'insert,50'
		} );
		CKEDITOR.dialog.add( 'smiley', this.path + 'dialogs/smiley.js' );
	}
} );

/**
 * The base path used to build the URL for the smiley images. It must end with a slash.
 *
 *		config.smiley_path = 'http://www.example.com/images/smileys/';
 *
 *		config.smiley_path = '/images/smileys/';
 *
 * @cfg {String} [smiley_path=CKEDITOR.basePath + 'plugins/smiley/images/']
 * @member CKEDITOR.config
 */

/**
 * The file names for the smileys to be displayed. These files must be
 * contained inside the URL path defined with the {@link #smiley_path} setting.
 *
 *		// This is actually the default value.
 *		config.smiley_images = [
 *			'regular_smile.png','sad_smile.png','wink_smile.png','teeth_smile.png','confused_smile.png','tongue_smile.png',
 *			'embarrassed_smile.png','omg_smile.png','whatchutalkingabout_smile.png','angry_smile.png','angel_smile.png','shades_smile.png',
 *			'devil_smile.png','cry_smile.png','lightbulb.png','thumbs_down.png','thumbs_up.png','heart.png',
 *			'broken_heart.png','kiss.png','envelope.png'
 *		];
 *
 * @cfg
 * @member CKEDITOR.config
 */
CKEDITOR.config.smiley_images = [
	'01.png', '02.png', '03.png', '04.png', '05.png', '06.png','07.png', '08.png', '09.png', '10.png', '11.png', 
	'12.png','13.png','14.png', '15.png', '16.png', '17.png','18.png','19.png','20.png', '21.png', '22.png', '23.png',
	'24.png','25.png','26.png', '27.png', '28.png', '29.png','30.png','31.png', '32.png', '33.png',
	'regular_smile.gif', 'sad_smile.gif', 'wink_smile.gif', 'teeth_smile.gif', 'confused_smile.gif', 'tongue_smile.gif',
	'embarrassed_smile.gif', 'omg_smile.gif', 'whatchutalkingabout_smile.gif', 'angry_smile.gif', 'angel_smile.gif', 'shades_smile.gif',
	'devil_smile.gif', 'cry_smile.gif', 'lightbulb.gif', 'thumbs_down.gif', 'thumbs_up.gif', 'heart.gif',
	'broken_heart.gif', 'kiss.gif', 'envelope.gif'
];

/**
 * The description to be used for each of the smileys defined in the
 * {@link CKEDITOR.config#smiley_images} setting. Each entry in this array list
 * must match its relative pair in the {@link CKEDITOR.config#smiley_images}
 * setting.
 *
 *		// Default settings.
 *		config.smiley_descriptions = [
 *			'smiley', 'sad', 'wink', 'laugh', 'frown', 'cheeky', 'blush', 'surprise',
 *			'indecision', 'angry', 'angel', 'cool', 'devil', 'crying', 'enlightened', 'no',
 *			'yes', 'heart', 'broken heart', 'kiss', 'mail'
 *		];
 *
 *		// Use textual emoticons as description.
 *		config.smiley_descriptions = [
 *			':)', ':(', ';)', ':D', ':/', ':P', ':*)', ':-o',
 *			':|', '>:(', 'o:)', '8-)', '>:-)', ';(', '', '', '',
 *			'', '', ':-*', ''
 *		];
 *
 * @cfg
 * @member CKEDITOR.config
 */
CKEDITOR.config.smiley_descriptions = [
	'01', '02', '03', '04', '05', '06','07', '08', '09', '10', '11', 
	'12','13','14', '15', '16', '17','18','19','20', '21', '22', '23',
	'24','25','26', '27', '28', '29','30','31','32', '33',
	'smiley', 'sad', 'wink', 'laugh', 'frown', 'cheeky', 'blush', 'surprise',
	'indecision', 'angry', 'angel', 'cool', 'devil', 'crying', 'enlightened', 'no',
	'yes', 'heart', 'broken heart', 'kiss', 'mail'
];

/**
 * The number of columns to be generated by the smilies matrix.
 *
 *		config.smiley_columns = 6;
 *
 * @since 3.3.2
 * @cfg {Number} [smiley_columns=8]
 * @member CKEDITOR.config
 */