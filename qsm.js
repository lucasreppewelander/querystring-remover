"use strict";var add=function(e,r){var t=e,n=e.split("?");if(r.constructor===Object)for(var a in r)r.hasOwnProperty(a)&&(t+=t.indexOf("?")>=0?_add(e,r[a],a,!0):_add(e,r[a],a,!1));else if(n.length>=2)for(var l=0;l<r.length;l++)t+=_add(e,r[l],null,!0);else for(var l=0;l<r.length;l++)t+=0===l?_add(e,r[l],null,!1):_add(e,r[l],null,!0);return t},_add=function(e,r,t,n){return t?n?"&"+t+"="+r:"?"+t+"="+r:n?"&"+r.query+"="+r.value:"?"+r.query+"="+r.value},clear=function(e){var r=e.split("?");return r.length>=2?r[0]:e},decode=function(e,r){var t=get(e,r),n=new Buffer(t,"base64").toString();try{return JSON.parse(n)}catch(e){return n}},encode=function(e,r){var t=JSON.stringify(r),n=new Buffer(t).toString("base64");return add(e,{q:n})},exist=function(e,r){var t=e.split("?");if(t.length>=2){for(var n=encodeURIComponent(r)+"=",a=t[1].split(/[&;]/g),l=!1,i=a.length;i-- >0;)a[i].lastIndexOf(n,0)!==-1&&(l=!0);return!!l}return!1},extract=function(e,r){var t=e.split("?");if(t.length>=2){for(var n=[],a=t[1].split(/[&;]/g),l=0;l<a.length;l++){var i=a[l].split("=")[1];if(a[l].split("=")[1].indexOf(",")>=0){for(var u=[],s=a[l].split("=")[1].split(","),o=0;o<s.length;o++)u.push(parseInt(s[o])?parseInt(s[o]):s[o]);i=u}"plain"===r?n.push(parseInt(i)?parseInt(i):i):Array.isArray(i)?n.push({query:a[l].split("=")[0],value:i}):n.push({query:a[l].split("=")[0],value:parseInt(i)?parseInt(i):i})}return n}return null},get=function(e,r){var t=e.split("?");if(t.length>=2){for(var n=encodeURIComponent(r)+"=",a=t[1].split(/[&;]/g),l=null,i=a.length;i-- >0;)a[i].lastIndexOf(n,0)!==-1&&(l=a[i].split("=")[1]);return l}return null},_parseValue=function e(r){if(r.indexOf(",")!==-1){for(var t=[],n=r.split(","),a=n.length;a-- >0;)t[a]=e(n[a]);return t}return"true"===r||"false"!==r&&(isNaN(parseFloat(r))?r:parseFloat(r))},objectify=function(e){var r={},t=e.split("?");if(t.length>=2)for(var n=t[1].split(/[&;]/g),a=n.length;a-- >0;){var l=n[a].split(/=(.+)/);l[1]?r[l[0]]=_parseValue(l[1]):r[l[0]]=null}return r},remove=function(e,r){var t=e.split("?");if(t.length>=2){for(var n=encodeURIComponent(r)+"=",a=t[1].split(/[&;]/g),l=a.length;l-- >0;)a[l].lastIndexOf(n,0)!==-1&&a.splice(l,1);return a.length>0?t[0]+"?"+a.join("&"):t[0]}return e},replace=function(e,r){var t=clear(e);return add(t,r)},replaceSpecific=function(e,r,t){var e=remove(e,t),n=add(e,r);return n};module.exports={remove:remove,add:add,clear:clear,replace:replace,replaceSpecific:replaceSpecific,get:get,exist:exist,extract:extract,objectify:objectify,encode:encode,decode:decode};