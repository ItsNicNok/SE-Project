/*! For license information please see editor-app-bar.js.LICENSE.txt */
!function(){"use strict";var e={react:function(e){e.exports=window.React},"@elementor/editor":function(e){e.exports=window.elementorV2.editor},"@elementor/editor-app-bar-ui":function(e){e.exports=window.elementorV2.editorAppBarUi},"@elementor/editor-documents":function(e){e.exports=window.elementorV2.editorDocuments},"@elementor/editor-v1-adapters":function(e){e.exports=window.elementorV2.editorV1Adapters},"@elementor/icons":function(e){e.exports=window.elementorV2.icons},"@elementor/ui":function(e){e.exports=window.elementorV2.ui},"@wordpress/i18n":function(e){e.exports=window.wp.i18n}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};!function(){n.r(o),n.d(o,{documentOptionsMenu:function(){return c},injectIntoPageIndication:function(){return e.__privateInjectIntoPageIndication},injectIntoPrimaryAction:function(){return e.__privateInjectIntoPrimaryAction},injectIntoResponsive:function(){return e.__privateInjectIntoResponsive},integrationsMenu:function(){return e.__privateIntegrationsMenu},mainMenu:function(){return e.__privateMainMenu},toolsMenu:function(){return e.__privateToolsMenu},utilitiesMenu:function(){return e.__privateUtilitiesMenu}});var e=n("@elementor/editor-app-bar-ui"),t=n("@elementor/editor"),i=n("@elementor/editor-v1-adapters"),r=n("react"),s=n("@elementor/ui"),a=n("@wordpress/i18n"),l=n("@elementor/icons"),u=n("@elementor/editor-documents"),c=(0,e.__privateCreateMenu)(["save"]);function p(){const e=(0,u.__useActiveDocument)(),t=(0,u.__useHostDocument)(),n=e&&"kit"!==e.type.value?e:t,{isActive:o,isBlocked:c}=(0,i.__privateUseRouteStatus)("panel/page-settings");if(!n)return null;const p=(0,a.__)("%s Settings","elementor").replace("%s",n.type.label);return r.createElement(d,{title:p},r.createElement(s.Box,{component:"span","aria-label":void 0},r.createElement(s.ToggleButton,{value:"document-settings",selected:o,disabled:c,onChange:()=>(0,i.__privateOpenRoute)("panel/page-settings/settings"),"aria-label":p,size:"small",sx:{border:0,"&.Mui-disabled":{border:0}}},r.createElement(l.SettingsIcon,{fontSize:"small"}))))}function d(e){return r.createElement(s.Tooltip,{PopperProps:{sx:{"&.MuiTooltip-popper .MuiTooltip-tooltip.MuiTooltip-tooltipPlacementBottom":{mt:1.7}}},...e})}function m(){const e=(0,u.__useActiveDocument)();return{icon:l.EyeIcon,title:(0,a.__)("Preview Changes","elementor"),onClick:()=>e&&(0,i.__privateRunCommand)("editor/documents/preview",{id:e.id,force:!0})}}function _(){const e=(0,u.__useActiveDocument)(),{saveDraft:t}=(0,u.__useActiveDocumentActions)();return{icon:l.FileReportIcon,title:(0,a.__)("Save Draft","elementor"),onClick:t,disabled:!e||e.isSaving||e.isSavingDraft||!e.isDirty}}function v(){const{saveTemplate:e}=(0,u.__useActiveDocumentActions)();return{icon:l.FolderIcon,title:(0,a.__)("Save as Template","elementor"),onClick:e}}function g(){const e=(0,u.__useActiveDocument)();return{icon:l.EyeIcon,title:(0,a.__)("View Page","elementor"),onClick:()=>e?.id&&(0,i.__privateRunCommand)("editor/documents/view",{id:e.id})}}var{useMenuItems:f}=c,b=(0,s.styled)(e.__privatePopoverMenu)`
	& > .MuiPopover-paper > .MuiList-root > .MuiDivider-root {
		&:only-child, /* A divider is being rendered lonely */
		&:last-child, /* The last group renders empty but renders a divider */
		& + .MuiDivider-root /* Multiple dividers due to multiple empty groups */ {
			display: none;
		}
	}
`;function y(e){const{save:t,default:n}=f();return r.createElement(b,{...e,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},marginThreshold:4,PaperProps:{sx:{mt:.5}}},t.map((({MenuItem:e,id:t},n)=>[n>0&&r.createElement(s.Divider,{key:`${t}-divider`}),r.createElement(e,{key:t})])),n.length>0&&r.createElement(s.Divider,null),n.map((({MenuItem:e,id:t})=>r.createElement(e,{key:t}))))}function A(){const e=(0,u.__useActiveDocument)(),{save:t}=(0,u.__useActiveDocumentActions)(),n=(0,i.__privateUseIsPreviewMode)(),o=(0,s.usePopupState)({variant:"popover",popupId:"document-save-options"});if(!e)return null;const c=n||!function(e){return"kit"!==e.type.value&&(e.isDirty||"draft"===e.status.value)}(e),p=n||"kit"===e.type.value,d=e.isSaving&&!c;return r.createElement(r.Fragment,null,r.createElement(s.ButtonGroup,{size:"large",variant:"contained"},r.createElement(s.Button,{onClick:()=>!e.isSaving&&t(),sx:{height:"100%",borderRadius:0,maxWidth:"158px","&.MuiButtonBase-root.MuiButtonGroup-grouped":{minWidth:"110px"}},disabled:c},d?r.createElement(s.CircularProgress,{color:"inherit",size:"1.5em"}):function(e){return e.userCan.publish?(0,a.__)("Publish","elementor"):(0,a.__)("Submit","elementor")}(e)),r.createElement(s.Tooltip,{title:(0,a.__)("Save Options","elementor"),PopperProps:{sx:{"&.MuiTooltip-popper .MuiTooltip-tooltip.MuiTooltip-tooltipPlacementBottom":{mt:1,mr:.25}}}},r.createElement(s.Box,{component:"span","aria-label":void 0},r.createElement(s.Button,{size:"small",...(0,s.bindTrigger)(o),sx:{px:0,height:"100%",borderRadius:0},disabled:p,"aria-label":(0,a.__)("Save Options","elementor")},r.createElement(l.ChevronDownIcon,null))))),r.createElement(y,{...(0,s.bindMenu)(o),onClick:o.close}))}function M(){const e=(0,u.__useActiveDocument)(),{copyAndShare:t}=(0,u.__useActiveDocumentActions)();return{icon:l.LinkIcon,title:(0,a.__)("Copy and Share","elementor"),onClick:t,disabled:!e||e.isSaving||e.isSavingDraft||!("publish"===e.status.value),visible:e?.permissions?.showCopyAndShare}}function P(e){window.elementor?.getPanelView?.()?.getHeaderView?.()?.setTitle?.(e)}function h(e){const t=document.querySelector('.elementor-component-tab[data-tab="categories"]');t&&(t.textContent=e)}function I(){const{isActive:e,isBlocked:t}=(0,i.__privateUseRouteStatus)("panel/elements");return{title:(0,a.__)("Add Element","elementor"),icon:l.PlusIcon,onClick:()=>(0,i.__privateOpenRoute)("panel/elements/categories"),selected:e,disabled:t}}function w(){const{isBlocked:e}=(0,i.__privateUseRouteStatus)("finder",{blockOnKitRoutes:!1,blockOnPreviewMode:!1});return{title:(0,a.__)("Finder","elementor"),icon:l.SearchIcon,onClick:()=>(0,i.__privateRunCommand)("finder/toggle"),disabled:e}}function S(){const{isActive:e,isBlocked:t}=(0,i.__privateUseRouteStatus)("panel/history");return{title:(0,a.__)("History","elementor"),icon:l.HistoryIcon,onClick:()=>(0,i.__privateOpenRoute)("panel/history/actions"),selected:e,disabled:t}}function k(){return{icon:l.KeyboardIcon,title:(0,a.__)("Keyboard Shortcuts","elementor"),onClick:()=>(0,i.__privateRunCommand)("shortcuts/open")}}function C(e){const t=(0,i.__privateUseListenTo)([(0,i.routeOpenEvent)("panel/global"),(0,i.routeCloseEvent)("panel/global")],E);return t.current?r.createElement(s.Portal,{container:t.current,...e}):null}function E(){return(0,i.__privateIsRouteActive)("panel/global")?{current:document.querySelector("#elementor-panel-inner")}:{current:null}}function T(){const e=(0,u.__useActiveDocument)(),{save:t}=(0,u.__useActiveDocumentActions)();return r.createElement(s.Paper,{sx:{px:5,py:4,borderTop:1,borderColor:"divider"}},r.createElement(s.Button,{variant:"contained",disabled:!e||!e.isDirty,size:"medium",sx:{width:"100%"},onClick:()=>e&&!e.isSaving?t():null},e?.isSaving?r.createElement(s.CircularProgress,null):(0,a.__)("Save Changes","elementor")))}function R(){return r.createElement(C,null,r.createElement(T,null))}function x(){const{isActive:e,isBlocked:t}=(0,i.__privateUseRouteStatus)("panel/global",{blockOnKitRoutes:!1});return{title:(0,a.__)("Site Settings","elementor"),icon:l.AdjustmentsHorizontalIcon,onClick:()=>e?(0,i.__privateRunCommand)("panel/global/close"):(0,i.__privateRunCommand)("panel/global/open"),selected:e,disabled:t}}function D(){const{isActive:e,isBlocked:t}=(0,i.__privateUseRouteStatus)("navigator");return{title:(0,a.__)("Structure","elementor"),icon:l.StructureIcon,onClick:()=>(0,i.__privateRunCommand)("navigator/toggle"),selected:e,disabled:t}}function B(){return{icon:l.ThemeBuilderIcon,title:(0,a.__)("Theme Builder","elementor"),onClick:()=>(0,i.__privateRunCommand)("app/open")}}function O(){const{isActive:e,isBlocked:t}=(0,i.__privateUseRouteStatus)("panel/editor-preferences");return{icon:l.ToggleRightIcon,title:(0,a.__)("User Preferences","elementor"),onClick:()=>(0,i.__privateOpenRoute)("panel/editor-preferences"),selected:e,disabled:t}}(0,i.__privateListenTo)((0,i.routeOpenEvent)("panel/menu"),(()=>{(0,i.__privateOpenRoute)("panel/elements/categories")})),(0,e.__privateInjectIntoPageIndication)({id:"document-settings-button",component:p,options:{priority:20}}),e.__privateUtilitiesMenu.registerAction({id:"document-preview-button",priority:30,useProps:m}),(0,e.__privateInjectIntoPrimaryAction)({id:"document-primary-action",component:A}),c.registerAction({group:"save",id:"document-save-draft",priority:10,useProps:_}),c.registerAction({group:"save",id:"document-save-as-template",priority:20,useProps:v}),c.registerAction({group:"save",id:"document-view-page",priority:30,useProps:g}),c.registerAction({group:"save",id:"document-copy-and-share",priority:40,useProps:M}),function(){const e=(0,a.__)("Elements","elementor"),t=(0,a.__)("Widgets","elementor");(0,i.__privateListenTo)((0,i.routeOpenEvent)("panel/elements"),(()=>{P(e),h(t)})),(0,i.__privateListenTo)((0,i.v1ReadyEvent)(),(()=>{(0,i.__privateIsRouteActive)("panel/elements")&&(P(e),h(t))}))}(),e.__privateToolsMenu.registerToggleAction({id:"open-elements-panel",priority:1,useProps:I}),e.__privateUtilitiesMenu.registerAction({id:"toggle-finder",priority:10,useProps:w}),e.__privateUtilitiesMenu.registerLink({id:"open-help-center",priority:20,useProps:()=>({title:(0,a.__)("Help","elementor"),href:"https://go.elementor.com/editor-top-bar-learn/",icon:l.HelpIcon,target:"_blank"})}),e.__privateMainMenu.registerToggleAction({id:"open-history",priority:20,useProps:S}),e.__privateMainMenu.registerAction({id:"open-keyboard-shortcuts",group:"default",priority:40,useProps:k}),(0,t.injectIntoTop)({id:"site-settings-primary-action-portal",component:R}),e.__privateToolsMenu.registerToggleAction({id:"toggle-site-settings",priority:2,useProps:x}),e.__privateToolsMenu.registerToggleAction({id:"toggle-structure-view",priority:3,useProps:D}),e.__privateMainMenu.registerAction({id:"open-theme-builder",useProps:B}),e.__privateMainMenu.registerToggleAction({id:"open-user-preferences",priority:30,useProps:O}),e.__privateMainMenu.registerLink({id:"exit-to-wordpress",group:"exits",useProps:()=>{const e=(0,u.__useActiveDocument)();return{title:(0,a.__)("Exit to WordPress","elementor"),href:e?.links?.platformEdit,icon:l.WordpressIcon}}}),(0,t.injectIntoTop)({id:"app-bar",component:e.__privateAppBar})}(),(window.elementorV2=window.elementorV2||{}).editorAppBar=o}();