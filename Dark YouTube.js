// ==UserScript==
// @name          Dark YouTube
// @namespace     YouTube
// @description   A dark theme for YouTube
// @author        Peter Stockwell
// @include       http://youtube.com/*
// @include       https://youtube.com/*
// @include       http://*.youtube.com/*
// @include       https://*.youtube.com/*
// @include       https://apis.google.com/*
// @version       0.3
// @grant         none
// @run-at        document-start
// ==/UserScript==

(function() {


if(window.location.toString().match(/parent=http.+?www.youtube.com/gi)){


	var css = "";
	
	css += ".yJa,.DJa,.dn,.Aq,.ot-hashtag, .proflink,a,a span,.xN .d-y-r-c-ha, .Pga.d-A .d-A-B,.xN .d-y-r-c-ha, .Pga.d-A .d-A-B,.r3 .r0,.r3 .PA,.d-A, .d-Kl,.ve.oba,.OF{color:#999 !important}";
	css += ".DJa,.mj,.BJa,.yJa,.xN.d-y-r-c, .xN.d-y-r-c.d-y-r-c-eb,.d-r,.r3 .r0,.r3 .PA,.nbc{background-color:#1b1b1b !important}";
	css += ".r3 .r0:hover,.dga{background-color:#333 !important}";
	css += ".d-y-r-c,.r3 .r0,.nbc,.d-r,.dga{border-color:#505050 !important}";
	css += ".MJa,.LJa {background-color:#999 !important;opacity:0.7 !important;border-radius:4px !important}";
	css += ".oba .MJa:hover, .oba .LJa:hover, .via .MJa:hover, .via .LJa:hover {opacity: 1 !important}";
	css += ".r3 .r0,.r3 .r0:hover,.r3 .PA{background-image:none !important}";
	css += ".o-ms-fk {box-shadow:0 2px 8px #505050 !important}";
	css += ".yDa {background-color:#505050 !important}";
	css += ".oba .Zld {background-color: #A00 !important}";

	//comment box
	css += ".all-comments, .all-comments a {background-color: transparent;}";
	css += ".comment-item .channel-owner {background-color: #128EE9;}";

	// show more comments
	// css += ".comments .paginator {padding: 0px !important; margin: 0px !important; margin-bottom: -15px !important; font-size: 11px !important; outline: 0px none !important; color: #333 !important; background-color: #1b1b1b !important; border-top: 1px solid #171717 !important; text-transform: uppercase !important;}";
	// css += ".comments .paginator:hover {color: #999 !important;}";


	css += ".E5, .e4 {background-color: #222 !important; border-color: #444; color: #666}";
	css += ".Jea, .Mga {border-color: #333;}";
	css += ".Mga, .Jea {border-bottom-color: transparent !important; border-left-color: transparent !important;}";

	css += ".mj .g-h-f-vc-B {border-color: #333;}";
	css += ".g-h-f-V-nb {background-color: #333;}";
	css += ".d-cm {border-color: #222;}";

	//also share on google+ popup
	css += ".b-p {background-color: #1b1b1b !important; color: #666 !important; box-shadow: none !important; border-radius: 0px !important;}";
	css += ".b-p-Aa .b-p-T, .b-p-Fa .b-p-T {border-color: #1b1b1b transparent !important;}";
	css += ".b-p-Aa .b-p-Q, .b-p-Fa .b-p-Q {border-color: #333 transparent !important;}";

	css += ".ytcenter-branding-remove-background.site-as-giant-card #watch7-sidebar {background-color #1b1b1b !important;}";

	if (typeof GM_addStyle != "undefined") {
		GM_addStyle(css);
	} else if (typeof PRO_addStyle != "undefined") {
		PRO_addStyle(css);
	} else if (typeof addStyle != "undefined") {
		addStyle(css);
	} else {
		var node = document.createElement("style");
		node.type = "text/css";
		node.appendChild(document.createTextNode(css));
		var heads = document.getElementsByTagName("head");
		if (heads.length > 0) {
			heads[0].appendChild(node); 
		} else {
			// no head yet, stick it whereever
			document.documentElement.appendChild(node);
		}
	}
} else if (window.location.host == 'www.youtube.com')
{


	var css = "";
	
	/**************
	 * Background *
	 **************/	

	css += "body {background-color: #171717 !important;}";
	//subscription feed item background colour
	css += ".yt-ui-ellipsis {background-color: transparent !important;}";
	css += ".feed-header {border-color: #CC151E !important}";
	css += "#masthead-search-terms {box-shadow: none !important;}";
	css += "#masthead-search .search-btn-component .yt-uix-button-content {filter: invert(50%);}";

	css += "masthead-search-terms {background-color: #1b1b1b !important; border-color: #333 !important; color: #999 !important;}";
	css += "#masthead-search.consolidated-form input:hover, #masthead-search-terms:hover {border-color: #444 !important;}";
	css += "#masthead-search.consolidated-form input:focus, #masthead-search-term:focus {background-color: #222 !important; border-color: #444 !important;}";
	css += ".yt-uix-button-default:hover, .yt-uix-button-text:hover {background-color: #222 !important; border-color: #444 !important; color: #999 !important}";
	css += ".yt-uix-button-default:active, .yt-uix-button-text:active {background-color: #1a1a1a !important; border-color: #444 !important; color: #999 !important}";


	/******************
	 * Leftside Guide *
	 ******************/

	// icon
	css += "#masthead-positioner .yt-uix-button-icon-appbar-guide {filter: brightness(0.3);}";
	css += "#masthead-positioner:hover .yt-uix-button-icon-appbar-guide {filter: brightness(1);}";
	css += "#masthead-positioner:active .yt-uix-button-icon-appbar-guide {filter: brightness(1);}";
	css += "#appbar-guide-button .yt-uix-button-arrow {filter: brightness(0.3);}";
	css += "#appbar-guide-button-container#hover .yt-uix-button-arrow {filter: invert(50%);}";
	css += "#appbar-guide-button#hover .yt-uix-button-arrow {filter: invert(50%);}";
	css += "#appbar-guide-button-container#active .yt-uix-button-arrow {filter: brightness(1);}";

	// borders
	css += ".guide-pinned .guide-pinning-enabled #appbar-guide-menu, .guide-section-separator {border-color: #171717 !important;}";
	css += "#yt-masthead-container,body #footer-container,#masthead-appbar,.guide-pinned .guide-pinning-enabled #appbar-guide-menu,#watch7-action-buttons,#watch7-action-panels,#watch-discussion,.watch-playlists-drawer ul,.branded-page-v2-primary-col .branded-page-box,.yt-horizontal-rule,.site-center-aligned .branded-page-v2-subnav-container,.feed-item-container.legacy-style .feed-item-main,.feed-item-content-wrapper.playlist-promo, .feed-item-content-wrapper.channel-lockup,.c4-welcome-primary-col,.welcome.c4-spotlight-module-component,.pl-video,.site-center-aligned #masthead-positioner:hover #appbar-guide-button,.yt-uix-button-subscribe-unbranded, .yt-uix-button-subscribe-unbranded[disabled], .yt-uix-button-subscribe-unbranded[disabled]:hover, .yt-uix-button-subscribe-unbranded[disabled]:active, .yt-uix-button-subscribe-unbranded[disabled]:focus,#watch-response-content{border-color:#171717 !important}";
	css += "#footer-main, .yt-picker-header, .yt-picker-hr, #safety-form p.safety-submit {border-color: #171717 !important;}";


	//mouse hover over "more ->"
	css += ".guide-flyout-trigger.on-hover,.guide-item:hover,.guide-item:hover .yt-deemphasized-text,.guide-collection-item:hover .guide-item,.guide-collapsible-item .yt-uix-expander-head:hover {background: #171717 !important;}";

	css += "li.guide-section h3 a {color: #CC151E !important;}";
	//
	css += "#guide-container .guide-item.guide-item-selected {text-shadow: none; !important;}";
	//remove drop shadow
	css += ".show-guide #appbar-guide-menu {box-shadow: none !important;}";



	css += ".guide-item, .guide-item:visited {color: #999 !important;}";
	css += ".guide-item:hover {color: #fff !important; background-color: #171717 !important;}";
	css += ".guide-item.guide-item-selected, .guide-item.guide-item-selected:hover, .guide-item.guide-item-selected .yt-deemphasized-text, .guide-item.guide-item-selected:hover .yt-deemphasized-text, .guide-collection-item .guide-item.guide-item-selected,.yt-uix-form-input-checkbox-container input:checked + .yt-uix-form-input-checkbox-element{color:#fff !important; background-color #CC151E !important;}";
	css += ".guide-item-selected:hover {background-color: #CC151E !important;}";

	//hover background colour
	css += ".guide-flyout-trigger.on-hover, .guide-item:hover, .guide-item:hover .yt-deemphasized-text, .guide-collection-item:hover .guide-item{color: #fff !important: background-color:#171717 !important;}";
	css += ".guide-flyout {border-color: #999 !important;}";


	css += ".shelf-item .branded-page-module-title {overflow: hidden !important; display: none !important;}";


	/*********************
	 * Subscription Feed *
	 *********************/
	//Video title colours
	css += ".yt-lockup-title a, .yt-lockup-title a:hover, .yt-lockup-mini:hover .yt-lockup-title {color: #CC151E !important;}";
	css += ".yt-lockup-title a:hover, .yt-lockup-mini:hover .yt-lockup-title:hover {color: #FF9F23 !important;}";
	css += ".yt-lockup-title a:visited {color: #999 !important;}";

	css += ".yt-lockup .yt-lockup-meta .yt-lockup-meta-info a {color: #999 !important}";
	css += ".yt-lockup .yt-lockup-meta .yt-lockup-meta-info a:visited {color: #999 !important}";

	css += "a.yt-uix-button.yt-uix-button-epic-nav-item, button.yt-uix-button-epic-nav-item, .epic-nav-item {color: #999 !important;}";

	css += ".epic-nav-item-heading {color: #CC151E !important;}";


	css += "#browse-items-primary .item-section > li > .yt-lockup-tile, .branded-page-v2-primary-col .branded-page-box, .section-list li .item-section .branded-page-box {border-bottom: 10px solid #171717 !important;}";

	/**************
	 * Video Page *
	 **************/

	css += "#results {width: 750px}"

	/**************
	 * Video Page *
	 **************/

	//large player background
	css += ".watch-stage-mode #theater-background {background-color: inherit !important}"

	css += ".not-watch8 .toggle-button {background-color: #1b1b1b !important;}";
	css += ".watch-title {color: #999 !important;}";

	//301+ views hover card
	css += ".yt-uix-clickcard-card-border, .yt-uix-hovercard-card-border {background: none repeat scroll 0% 0% #1b1b1b !important; border: 1px solid #333 !important}";
	css += ".yt-uix-clickcard-card-reverse .yt-uix-card-body-arrow-vertical, .yt-uix-hovercard-card-reverse .yt-uix-card-body-arrow-vertical {border-bottom-color: #1b1b1b !important;}";
	css += ".yt-uix-card-border-arrow, .yt-uix-card-body-arrow {border-top-color: #333 !important; border-bottom-color: #333 !important;}";

	//add to menu
	css += ".yt-ui-menu-content {background: #1b1b1b !important}";
	css += "#yt-uix-videoactionmenu-menu {border:1px solid #999 !important;}";
	css += "#yt-uix-videoactionmenu-menu h3, .add-to-widget .create-playlist-item {color: #999 !important;}";
	css += ".add-to-widget .addto-playlist-item:hover, .add-to-widget .create-playlist-item:hover {color: #fff !important; background-color: #171717 !important;}";

	//add to playlist ui
	css += ".add-to-widget .addto-playlist-item {color: #fff !important;}";
	css += "#yt-uix-videoactionmenu-menu li {opacity: 0.5 !important;}";
	css += "#yt-uix-videoactionmenu-menu li:hover {opacity: 1 !important;}";
	css += "#yt-uix-videoactionmenu-menu {border-color: #333 !important;}";
	css += ".add-to-widget .playlists {border-color: #333 !important}";


	//description box
	css += "#watch-description {color: #666 !important;}";
	css += "#watch-description a {color: #167AC6 !important;}";
	css += "#watch-description a:visited {color: #167AC6 !important;}";
	css += "#watch8-action-buttons {border-color: #171717 !important;}";
	
	//show more button on description / suggested vids
	css += ".yt-uix-expander-head {border-top-color: #171717 !important;}";
	// css += ".yt-card .yt-uix-expander .yt-uix-button-expander, .yt-card .yt-uix-expander .yt-uix-button-expander {border-top: 1px solid #171717 !important};";
	css += ".yt-card .yt-uix-button-expander {border-top-color: #171717 !important; color: #666 !important;}";
	css += ".yt-card .yt-uix-button-expander:hover {color: #999 !important;}";

	//video interaction buttons
	css += ".yt-uix-menu-trigger-selected .yt-ui-menu-item, .yt-ui-menu-item:hover {background-color: #171717 !important; color: #FFF}";
	css += ".yt-ui-menu-content {border-color: #999 !important;}"


	//side bar seperator
	css += "#watch7-sidebar .watch-sidebar-separation-line {border-bottom: 1px solid #171717 !important;}";

	//check boxes
	// css += ".yt-uix-checkbox-on-off input[type=\"checkbox\"]:checked + label {background-color: rgba(200, 0, 0, 0.5) !important;}";
	css += ".yt-uix-checkbox-on-off input[type=\"checkbox\"]:checked + label {background-color: #167AC6 !important;}";
	css += ".yt-uix-checkbox-on-off input[type=\"checkbox\"]:checked + label .checked {filter: invert(0.88);}";
	css += ".yt-uix-checkbox-on-off label {background-color: #333 !important;}";
	css += ".yt-uix-checkbox-on-off label .toggle {background-color: #1b1b1b !important;}";
	// css += ".yt-uix-checkbox-on-off input[type=\"checkbox\"]:checked + label .toggle {background-color: #c80000 !important;}";

	//chat box for livestreams
	css += ".live-chat-widget .comment:nth-of-type(2n) {background-color: #1f1f1f !important;}";
	css += ".live-chat-widget .comment-text {color: #999999 !important;}";
	css += ".live-chat-widget .comment .author a {color: #7a7a7a !important; font-weight: 600;}";
	css += ".live-comments-emoji-picker-tab-row {background-color: #252525 !important;}";
	css += ".live-comments-emoji-picker-open {filter: invert(50%);}";
	css += ".yt-ui-menu-content {border-color: #333 !important;}";

	css += ".yt-uix-form-input-select, .yt-uix-form-input-text, .yt-uix-form-input-textarea {border-color: #333 !important;}";
	css += ".yt-uix-form-input-select:hover, .yt-uix-form-input-text:hover, .yt-uix-form-input-textarea:hover {border-color: #444 !important;}";
	css += ".yt-uix-form-input-select:active, .yt-uix-form-input-text:active, .yt-uix-form-input-textarea:active {background-color: #222 !important; border-color: #444 !important;}";
	css += ".yt-uix-form-input-select:active, .yt-uix-form-input-text:focus, .yt-uix-form-input-textarea:focus {background-color: #222 !important; border-color: #444 !important;}";
	css += ".live-chat-widget #comments-scroller {border-bottom-color: #171717 !important}";

	// comments
	css += "#yt-comments-sb-standin .callout-outer {border: 6px solid #353535 !important}";
	css += "#yt-comments-sb-standin .callout-inner {border: 7px solid #222 !important}";
	css += "#yt-comments-sb-standin .callout-inner, #yt-comments-sb-standin .callout-outer { position: absolute !important; border-bottom-color: transparent !important; border-left-color: transparent !important; }";
	css += "#yt-comments-sb-standin .box {border-color: #333 !important; background-color: #222 !important}";
	css += ".all-comments, .all-comments a {background-color: transparent !important;}";

	
	/****************
	 * Channel Page *
	 ****************/

	/*	css += "#logo, #masthead-search .search-btn-component .yt-uix-button-content, #yt-masthead-user .yt-uix-button-icon-bell, .yt-uix-button-icon-watch-dislike, .yt-uix-button-icon-watch-like, .yt-uix-button-icon-action-panel-stats, .yt-uix-button-icon-action-panel-report, .feed-author-bubble, .compact-shelf .yt-uix-shelfslider-prev:hover .yt-uix-shelfslider-prev-arrow, .compact-shelf .yt-uix-shelfslider-next:hover .yt-uix-shelfslider-next-arrow, #footer-logo img, #footer .yt-uix-button-icon-footer-language {
		filter: url(\"data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'grayscale\'><feColorMatrix type=\'matrix\' values=\'0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\'/></filter></svg>#grayscale\");
		filter: url(\"data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'invert\'><feColorMatrix type=\'matrix\' values=\'-1 0 0 0 1 0 -1 0 0 1 0 0 -1 0 1 0 0 0 1 0\'/></filter></svg>#invert\");}";
	*/

	//channel intro video description background
	css += ".yt-uix-expander-ellipsis {background-color: transparent !important;}";

	css += ".yt-uix-button-subscribe-unbranded, .yt-uix-button-subscribe-unbranded[disabled], .yt-uix-button-subscribe-unbranded[disabled]:hover, .yt-uix-button-subscribe-unbranded[disabled]:active, .yt-uix-button-subscribe-unbranded[disabled]:focus {background-color: #333 !important; color: #CC151E !important; border-color: #000 !important;}";
	css += ".yt-uix-button-subscribe-unbranded:hover {background-color: #CC151E !important; color: #FFF !important; border-color: #000 !important;}";

	//share tab, share/embed/email bottom border
	css += ".yt-card .yt-uix-tabs {border-color: #171717 !important;}";
	

	//remove box-shadow from buttons after clicking
	css += ".yt-uix-button:focus, .yt-uix-button:focus:hover, .yt-uix-button-focused, .yt-uix-button-focused:hover {box-shadow: none !important;}";

	css += "body,a,.not-exp-new-metadata-style .yt-lockup,ul.appbar-nav-menu li a,a.yt-uix-button-epic-nav-item.selected, a.yt-uix-button-epic-nav-item.yt-uix-button-toggled, button.yt-uix-button-epic-nav-item.selected, button.yt-uix-button-epic-nav-item.yt-uix-button-toggled, .epic-nav-item.selected, .epic-nav-item.yt-uix-button-toggled,button,.yt-uix-button-menu .yt-uix-button-menu-item,#watch7-headline h1 .long-title,.video-list .video-list-item .title,#watch-description-extras .title,.watch-view-count,input,#c4-about-tab, .about-metadata-container,#c4-about-tab .about-stats .about-stat,.branded-page-module-title,#yt-masthead-user-displayname,.yt-badge,#vm-page-subheader h3,.vm-list-view .vm-video-list .vm-video-desc,#non-appbar-vm-video-actions-bar .vm-video-actions-inner #vm-view-filter-label, .vm-copyright-filter-wrapper,input,.share-panel,.not-exp-new-metadata-style .video-player-view-component .view-count .count,.not-exp-new-metadata-style .video-player-view-component,#watch7-sidebar .watch-sidebar-head, #watch7-sidebar .watch-sidebar-foot,#watch7-action-buttons .yt-uix-button-content,.yt-lockup{color:#999 !important}";
	css += "button:hover .yt-ui-menu-item .has-icon .yt-uix-menu-close-on-select .action-panel-trigger {color: #FFF !important;}";


	css += "a:visited,ul#watch-related a:visited span,.yt-picker-content strong{color:#2793E6 !important}";
	css += "#masthead-appbar,.site-center-aligned .yt-card,#watch7-headline,#watch7-user-header,.watch-playlists-drawer ul,#yt-picker-country-footer, #yt-picker-language-footer, #yt-picker-safetymode-footer,#non-appbar-vm-video-actions-bar, #non-appbar-vm-video-actions-bar .vm-video-actions-bar,.vm-list-view .vm-video-list li,.site-center-aligned #masthead-positioner:hover #appbar-guide-button,#watch-response{background-color:#1b1b1b !important}";



	css += ".site-center-aligned #yt-masthead-container,.site-center-aligned #masthead-expanded-container,.site-center-aligned #footer-container,#appbar-guide-menu, .guide-flyout,.yt-thumb,#yt-masthead-user #sb-button-notify{background-color:#1b1b1b !important}";


	css += ".yt-uix-button-default, .yt-uix-button-default[disabled], .yt-uix-button-default[disabled]:hover, .yt-uix-button-default[disabled]:active, .yt-uix-button-default[disabled]:focus, #watch7-action-panels #watch7-action-panel-footer,.metadata-inline,.exp-appbar-onebar #masthead-positioner:hover #appbar-guide-button,.compact-shelf .yt-uix-button-shelf-slider-pager,.yt-uix-button-subscribed-branded, .yt-uix-button-subscribed-branded[disabled], .yt-uix-button-subscribed-branded[disabled]:hover, .yt-uix-button-subscribed-branded[disabled]:active, .yt-uix-button-subscribed-branded[disabled]:focus, .yt-uix-button-subscribed-unbranded, .yt-uix-button-subscribed-unbranded[disabled], .yt-uix-button-subscribed-unbranded[disabled]:hover, .yt-uix-button-subscribed-unbranded[disabled]:active, .yt-uix-button-subscribed-unbranded[disabled]:focus,.yt-uix-form-input-select, .yt-uix-form-input-text, .yt-uix-form-input-textarea,select,.yt-uix-button-menu,.yt-uix-button-subscribe-branded.yt-is-buffered, .yt-uix-button-subscribe-branded:active, .yt-uix-button-subscribe-branded.yt-uix-button-toggled, .yt-uix-button-subscribe-branded.yt-uix-button-active, #masthead-search-terms, .yt-uix-button-subscribed-branded.external, .yt-uix-button-subscribed-branded.external[disabled], .yt-uix-button-subscribed-branded.external:active, .yt-uix-button-subscribed-branded.external.yt-uix-button-toggled, .yt-uix-button-subscribed-branded.external.yt-uix-button-active,.yt-uix-button-subscribe-branded, .yt-uix-button-subscribe-branded[disabled], .yt-uix-button-subscribe-branded[disabled]:hover, .yt-uix-button-subscribe-branded[disabled]:active, .yt-uix-button-subscribe-branded[disabled]:focus {background-color: #1b1b1b !important; border-color: #333 !important; color: #999 !important}";
	//	css += "#masthead-search-terms,.watch-playlists-drawer ul,.feed-item-content-wrapper.playlist-promo, .feed-item-content-wrapper.channel-lockup{box-shadow: 0 1px 2px #777777 inset !important}";
	css += ".yt-uix-button-subscribed-branded, .yt-uix-button-subscribed-branded[disabled], .yt-uix-button-subscribed-branded[disabled]:hover, .yt-uix-button-subscribed-branded[disabled]:active, .yt-uix-button-subscribed-branded[disabled]:focus, .yt-uix-button-subscribed-unbranded, .yt-uix-button-subscribed-unbranded[disabled], .yt-uix-button-subscribed-unbranded[disabled]:hover, .yt-uix-button-subscribed-unbranded[disabled]:active, .yt-uix-button-subscribed-unbranded[disabled]:focus,.yt-uix-form-input-select,.yt-uix-button-subscribe-branded.yt-is-buffered, .yt-uix-button-subscribe-branded:active, .yt-uix-button-subscribe-branded.yt-uix-button-toggled, .yt-uix-button-subscribe-branded.yt-uix-button-active, .yt-uix-button-subscribed-branded.external, .yt-uix-button-subscribed-branded.external[disabled], .yt-uix-button-subscribed-branded.external:active, .yt-uix-button-subscribed-branded.external.yt-uix-button-toggled, .yt-uix-button-subscribed-branded.external.yt-uix-button-active,.yt-uix-button-subscribe-branded, .yt-uix-button-subscribe-branded[disabled], .yt-uix-button-subscribe-branded[disabled]:hover, .yt-uix-button-subscribe-branded[disabled]:active, .yt-uix-button-subscribe-branded[disabled]:focus,.yt-uix-button-subscribe-unbranded, .yt-uix-button-subscribe-unbranded[disabled], .yt-uix-button-subscribe-unbranded[disabled]:hover, .yt-uix-button-subscribe-unbranded[disabled]:active, .yt-uix-button-subscribe-unbranded[disabled]:focus{background-image:none !important}";
	css += ".yt-uix-button-subscribe-branded, .yt-uix-button-subscribe-branded[disabled], .yt-uix-button-subscribe-branded[disabled]:hover, .yt-uix-button-subscribe-branded[disabled]:active, .yt-uix-button-subscribe-branded[disabled]:focus {border-width:1px !important}";

	css += ".yt-uix-button .yt-uix-button-icon-action-panel-transcript,.yt-uix-button-icon-action-panel-stats,.yt-uix-button-icon-action-panel-report,.yt-uix-button-icon-watch-dislike,.yt-uix-button-icon-watch-like{background-color:#505050 !important;border-radius:4px !important}";
	css += ".yt-uix-button-icon-action-panel-report{border:4px solid #505050 !important}";
	css += "#watch7-action-buttons .yt-uix-button-content{text-shadow:none}";
	css += ".yt-uix-button-default, .not-watch8 .yt-uix-button-expander, .yt-uix-button-default[disabled], .not-watch8 .yt-uix-button-expander[disabled], .yt-uix-button-default[disabled]:hover, .not-watch8 .yt-uix-button-expander[disabled]:hover, .yt-uix-button-default[disabled]:active, .yt-uix-button-default[disabled]:focus, .not-watch8 .yt-uix-button-expander[disabled]:active {color: #999 !important;}";
	css += ".yt-uix-button-default:visited {color: #999 !important;}";
	
	// chanel owner comments
	// css += "comments .channel-owner .comment-header .user-name {background-color: transparent !important; color: rgba(200,0,0,0.5) !important;}";
	css += ".channel-owner .comment-header .user-name {background-color: transparent !important; color: rgba(200,0,0,0.5) !important;}";

	//	css += ".watch-sidebar {width:400px}";
	
	/*
	css += ".site-center-aligned #player.watch-medium {max-width: 1217px !important;min-width: 1000px !important;width: auto !important}";
	css += ".site-center-aligned #player.watch-large #player-api, .site-center-aligned #player.watch-medium #player-api{float:left !important}";
	css += ".watch-wide{margin-left:-90px}.watch-wide #watch7-content {width:854px !important}body#body .watch-wide #watch7-sidebar{margin-top: -525px !important;margin-left: 860px}";
	
	css += ".watch-wide #watch-discussion .comments-iframe-container{max-width: 830px !important}.watch-wide #comments-test-iframe {width:825px !important}.watch-wide #comments-test-iframe iframe{width:825px !important} ";
	css += ".watch-wide .action-panel-content{width:814px !important}";
	
	
	css += ".gsok_a{background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAALCAMAAACqC0YIAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDg3MDUyRDJBOURFMTFFM0FBRDhFOThDQUFBOTNDMTgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDg3MDUyRDNBOURFMTFFM0FBRDhFOThDQUFBOTNDMTgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowODcwNTJEMEE5REUxMUUzQUFEOEU5OENBQUE5M0MxOCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowODcwNTJEMUE5REUxMUUzQUFEOEU5OENBQUE5M0MxOCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrwmKVgAAAAJUExURdTU1N3d3RwcHPviKB4AAAAaSURBVHjaYmAgGjChQXqpA6pEAAYSAECAAQAdiABHfgRDMQAAAABJRU5ErkJggg==) !important}";
	css += "#masthead-search .search-btn-component .yt-uix-button-content,#channel-search .show-search img, #channel-search .yt-uix-button-icon-search{background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDUxNjEzMjhBOURGMTFFM0E4OEE5NjYxMUJBOEZGRUIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDUxNjEzMjlBOURGMTFFM0E4OEE5NjYxMUJBOEZGRUIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpENTE2MTMyNkE5REYxMUUzQTg4QTk2NjExQkE4RkZFQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpENTE2MTMyN0E5REYxMUUzQTg4QTk2NjExQkE4RkZFQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkgeBA8AAADYSURBVHjanJI9DoJAEIUHpPEeFnoEQmEsrWi0AoyF99h4l6WzIRbWFBIP4T2szPqib5NxoSC85AvZ2X2ZP6Ku6wSKQAFykMlPd9CAGjhRStNUEpoM0dqRBTiH5piZDC8s2BPLmOGbPyUsT1hSpe4u/JZ8Y8OMvqdG+vKxLLyIZaJiTk9UyVq5mnCvx4bTK4LychW7DhlrjtxwEOVA5g3fvbXRcU/P4Ad4gBVYgiNjJ29OGPA7tEGmObiBNc0zcBgz1RfYgpbnyrcyZh2h+VtV5JybtMePAAMAJ0Uw03R7ewkAAAAASUVORK5CYII=) 0 0 !important}";
	
	css += "#yt-masthead-user .sb-notif-on .yt-uix-button-icon-bell{background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAUCAYAAABroNZJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzdGREI1QzZBRkZEMTFFMzhDNTZDMEUwNUIzRUQ3QjUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzdGREI1QzdBRkZEMTFFMzhDNTZDMEUwNUIzRUQ3QjUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozN0ZEQjVDNEFGRkQxMUUzOEM1NkMwRTA1QjNFRDdCNSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozN0ZEQjVDNUFGRkQxMUUzOEM1NkMwRTA1QjNFRDdCNSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvOz+EwAAADuSURBVHjaYvj//z8DHtwBxJ+AuA2fOkYQgQcgSzLiUsSEQ9wNiFehiYH4rtitwnTetP/4wRR0PegGTP1PHJiIyxC7/6QBc2yGrCfRkNXoscMCxE+AWJyBePAUiOWB+C8sdriAmI+BNCAE1QePYpBz/pJoyF9Y2mHCkbCIAf9hepgYqACoasg3IP5Hot5/UH1wQ3hhIU0C4ILqAxtiAsQ7gZiVRENYofpMQIntGZAhCcSf0RR9Rot2ZpjNSADEfw4yRALI+IrFJpD4F3QNWNRx4yvVlkLzyCcovQKXWnyG6ADxGagBZ4FYF5dagAADAFmovN7d8en7AAAAAElFTkSuQmCC) no-repeat scroll 3px  5px !important} ";
	css += "#yt-masthead-user .yt-uix-button-icon-bell{background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAUCAYAAABroNZJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODFGRTY3MTVBRkZFMTFFMzlFRUZCMzRDQzQwMTUwOTAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODFGRTY3MTZBRkZFMTFFMzlFRUZCMzRDQzQwMTUwOTAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4MUZFNjcxM0FGRkUxMUUzOUVFRkIzNENDNDAxNTA5MCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4MUZFNjcxNEFGRkUxMUUzOUVFRkIzNENDNDAxNTA5MCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhaAw7sAAAEsSURBVHjaYvj//z8DHtwBxJ+AuA2fOkYQgQcgSzLiUsSEQ9wNiNegiYH4rtitwnTetP8I8A/qHWQwBV0PugFTkRTXArESEPMCsQoQ1yPJTcJliC1UwR8gtsQRiPZIBplhM2QjVLKOQIw1Q9WtRTeEBYi/QCXlCRiiAFX3AYiZQWKw2OECYm4o+y0DfvAcSvND9cENQU4P7AQMYUVPO9jSCSMBQxjREyMTAxUAVQyB5R1mIP4DFWMD4t8E9MHCkAWI/7JAObxICqQJxBAP1BBGqL4PoHg3AeKT/8kDIH0mIO88A5omCcSf0Vz1DeRUJBcww9IFEHyBugak9jnIEAkg4ysWZ0tAFTMgGf4cizpufMl7KdTJsKJgBS61+AzRAeIzUAPOArEuLrUAAQYAiJIhdezgjT0AAAAASUVORK5CYII=) no-repeat scroll 3px  5px !important; opacity: 0.5 !important} ";
	*/

	if (typeof GM_addStyle != "undefined") {
		GM_addStyle(css);
	} else if (typeof PRO_addStyle != "undefined") {
		PRO_addStyle(css);
	} else if (typeof addStyle != "undefined") {
		addStyle(css);
	} else {
		var node = document.createElement("style");
		node.type = "text/css";
		node.appendChild(document.createTextNode(css));
		var heads = document.getElementsByTagName("head");
		if (heads.length > 0) {
			heads[0].appendChild(node); 
		} else {
			// no head yet, stick it wherever
			document.documentElement.appendChild(node);
		}
	}
  
  //vid = window.location.search.match(/(?:\&|\?)v=(.+)(?:\&|$)/);
}

})();