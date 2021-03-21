function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_classes(s,r){return Array.isArray(s)?pug_classes_array(s,r):s&&"object"==typeof s?pug_classes_object(s):s||""}
function pug_classes_array(r,a){for(var s,e="",u="",c=Array.isArray(a),g=0;g<r.length;g++)(s=pug_classes(r[g]))&&(c&&a[g]&&(s=pug_escape(s)),e=e+u+s,u=" ");return e}
function pug_classes_object(r){var a="",n="";for(var o in r)o&&r[o]&&pug_has_own_property.call(r,o)&&(a=a+n+o,n=" ");return a}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;function mruTemplate(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (mrulist) {pug_html = pug_html + "\u003Cdiv class=\"row\"\u003E\u003Cdiv class=\"column\"\u003E\u003Cspan id=\"mru\"\u003E\u003C\u002Fspan\u003E\u003Ch4\u003ERecent\u003Cul class=\"demo-list-two mdl-list mdc-list--two-line\"\u003E";
if (mrulist === undefined) {
mrulist = []
}
// iterate mrulist
;(function(){
  var $$obj = mrulist;
  if ('number' == typeof $$obj.length) {
      for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
        var item = $$obj[index];
pug_html = pug_html + "\u003Cli class=\"mdl-list__item mdl-list__item--two-line\"\u003E";
var newid = 'demo-menu-lower-right-' + index.toString()
pug_html = pug_html + "\u003Cspan class=\"mdl-list__item-primary-content\"\u003E\u003Ci class=\"material-icons mdl-list__item-avatar\"\u003Esd_storage\u003C\u002Fi\u003E\u003Cspan\u003E" + (pug_escape(null == (pug_interp = item.id) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cspan class=\"mdl-list__item-sub-title\"\u003E" + (pug_escape(null == (pug_interp = item.filename) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003Cspan class=\"mdl-list__item-secondary-content\"\u003E";
var classes = ['mdl-button', 'mdl-js-button', 'mdl-button--icon']
pug_html = pug_html + "\u003Cbutton" + (pug_attr("class", pug_classes([classes], [true]), false, false)+pug_attr("id", newid, true, false)+pug_attr("data-filename", item.filename, true, false)+pug_attr("data-mruindex", index, true, false)) + "\u003E\u003Ci class=\"material-icons\"\u003Emore_vert\u003C\u002Fi\u003E\u003C\u002Fbutton\u003E\u003C\u002Fspan\u003E\u003C\u002Fli\u003E\u003Cul" + (" class=\"mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect\""+pug_attr("for", newid, true, false)) + "\u003E\u003Cli class=\"mdl-menu__item\"\u003EOpen\u003C\u002Fli\u003E\u003Cli class=\"mdl-menu__item\"\u003EOpen in new tab\u003C\u002Fli\u003E\u003Cli class=\"mdl-menu__item mdl-menu__item--full-bleed-divider\"\u003EOpen in new window\u003C\u002Fli\u003E\u003Cli class=\"mdl-menu__item\"\u003ERemove from Recent list\u003C\u002Fli\u003E\u003C\u002Ful\u003E";
      }
  } else {
    var $$l = 0;
    for (var index in $$obj) {
      $$l++;
      var item = $$obj[index];
pug_html = pug_html + "\u003Cli class=\"mdl-list__item mdl-list__item--two-line\"\u003E";
var newid = 'demo-menu-lower-right-' + index.toString()
pug_html = pug_html + "\u003Cspan class=\"mdl-list__item-primary-content\"\u003E\u003Ci class=\"material-icons mdl-list__item-avatar\"\u003Esd_storage\u003C\u002Fi\u003E\u003Cspan\u003E" + (pug_escape(null == (pug_interp = item.id) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cspan class=\"mdl-list__item-sub-title\"\u003E" + (pug_escape(null == (pug_interp = item.filename) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003Cspan class=\"mdl-list__item-secondary-content\"\u003E";
var classes = ['mdl-button', 'mdl-js-button', 'mdl-button--icon']
pug_html = pug_html + "\u003Cbutton" + (pug_attr("class", pug_classes([classes], [true]), false, false)+pug_attr("id", newid, true, false)+pug_attr("data-filename", item.filename, true, false)+pug_attr("data-mruindex", index, true, false)) + "\u003E\u003Ci class=\"material-icons\"\u003Emore_vert\u003C\u002Fi\u003E\u003C\u002Fbutton\u003E\u003C\u002Fspan\u003E\u003C\u002Fli\u003E\u003Cul" + (" class=\"mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect\""+pug_attr("for", newid, true, false)) + "\u003E\u003Cli class=\"mdl-menu__item\"\u003EOpen\u003C\u002Fli\u003E\u003Cli class=\"mdl-menu__item\"\u003EOpen in new tab\u003C\u002Fli\u003E\u003Cli class=\"mdl-menu__item mdl-menu__item--full-bleed-divider\"\u003EOpen in new window\u003C\u002Fli\u003E\u003Cli class=\"mdl-menu__item\"\u003ERemove from Recent list\u003C\u002Fli\u003E\u003C\u002Ful\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fh4\u003E\u003Cbutton class=\"mdl-button mdl-js-button mdl-js-ripple-effect dialog-button\"\u003EChoose a file\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdialog class=\"mdl-dialog\" id=\"dialog\"\u003E\u003Ch4 class=\"mdl-dialog__title\"\u003EChoose File\u003C\u002Fh4\u003E\u003Cdiv class=\"mdl-dialog__content\"\u003E\u003Cp\u003EChoose a ROM file to examine.\u003C\u002Fp\u003E\u003Cul class=\"demo-list-two mdl-list mdc-list--two-line\"\u003E";
if (mrulist === undefined) {
mrulist = []
}
// iterate mrulist
;(function(){
  var $$obj = mrulist;
  if ('number' == typeof $$obj.length) {
      for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
        var item = $$obj[index];
pug_html = pug_html + "\u003Cli class=\"mdl-list__item mdl-list__item--two-line\"\u003E";
var newid = 'demo-menu-lower-right-' + index.toString()
pug_html = pug_html + "\u003Cspan class=\"mdl-list__item-primary-content\"\u003E\u003Ci class=\"material-icons mdl-list__item-avatar\"\u003Esd_storage\u003C\u002Fi\u003E\u003Cspan\u003E" + (pug_escape(null == (pug_interp = item.id) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cspan class=\"mdl-list__item-sub-title\"\u003E" + (pug_escape(null == (pug_interp = item.filename) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003Cspan class=\"mdl-list__item-secondary-content\"\u003E";
var classes = ['mdl-button', 'mdl-js-button', 'mdl-button--icon']
pug_html = pug_html + "\u003Cbutton" + (pug_attr("class", pug_classes([classes], [true]), false, false)+pug_attr("id", newid, true, false)+pug_attr("data-filename", item.filename, true, false)+pug_attr("data-mruindex", index, true, false)) + "\u003E\u003Ci class=\"material-icons\"\u003Emore_vert\u003C\u002Fi\u003E\u003C\u002Fbutton\u003E\u003C\u002Fspan\u003E\u003C\u002Fli\u003E\u003Cul" + (" class=\"mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect\""+pug_attr("for", newid, true, false)) + "\u003E\u003Cli class=\"mdl-menu__item\"\u003EOpen\u003C\u002Fli\u003E\u003Cli class=\"mdl-menu__item\"\u003EOpen in new tab\u003C\u002Fli\u003E\u003Cli class=\"mdl-menu__item mdl-menu__item--full-bleed-divider\"\u003EOpen in new window\u003C\u002Fli\u003E\u003Cli class=\"mdl-menu__item\"\u003ERemove from Recent list\u003C\u002Fli\u003E\u003C\u002Ful\u003E";
      }
  } else {
    var $$l = 0;
    for (var index in $$obj) {
      $$l++;
      var item = $$obj[index];
pug_html = pug_html + "\u003Cli class=\"mdl-list__item mdl-list__item--two-line\"\u003E";
var newid = 'demo-menu-lower-right-' + index.toString()
pug_html = pug_html + "\u003Cspan class=\"mdl-list__item-primary-content\"\u003E\u003Ci class=\"material-icons mdl-list__item-avatar\"\u003Esd_storage\u003C\u002Fi\u003E\u003Cspan\u003E" + (pug_escape(null == (pug_interp = item.id) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cspan class=\"mdl-list__item-sub-title\"\u003E" + (pug_escape(null == (pug_interp = item.filename) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003Cspan class=\"mdl-list__item-secondary-content\"\u003E";
var classes = ['mdl-button', 'mdl-js-button', 'mdl-button--icon']
pug_html = pug_html + "\u003Cbutton" + (pug_attr("class", pug_classes([classes], [true]), false, false)+pug_attr("id", newid, true, false)+pug_attr("data-filename", item.filename, true, false)+pug_attr("data-mruindex", index, true, false)) + "\u003E\u003Ci class=\"material-icons\"\u003Emore_vert\u003C\u002Fi\u003E\u003C\u002Fbutton\u003E\u003C\u002Fspan\u003E\u003C\u002Fli\u003E\u003Cul" + (" class=\"mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect\""+pug_attr("for", newid, true, false)) + "\u003E\u003Cli class=\"mdl-menu__item\"\u003EOpen\u003C\u002Fli\u003E\u003Cli class=\"mdl-menu__item\"\u003EOpen in new tab\u003C\u002Fli\u003E\u003Cli class=\"mdl-menu__item mdl-menu__item--full-bleed-divider\"\u003EOpen in new window\u003C\u002Fli\u003E\u003Cli class=\"mdl-menu__item\"\u003ERemove from Recent list\u003C\u002Fli\u003E\u003C\u002Ful\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"mdl-dialog__actions\"\u003E\u003Cbutton class=\"mdl-button\" type=\"button\"\u003EClose\u003C\u002Fbutton\u003E\u003Cbutton class=\"mdl-button\" type=\"button\" disabled=\"disabled\"\u003EDisabled action\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdialog\u003E";}.call(this,"mrulist" in locals_for_with?locals_for_with.mrulist:typeof mrulist!=="undefined"?mrulist:undefined));;return pug_html;}