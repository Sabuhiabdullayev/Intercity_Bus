
$(document).ready(function(){
    fromwheretable();
    wheretable();
  

  
$(".bus-seat-div").on("click",".bus-seat-radio",function(){
    $(".click-seat").css("color","#1eff00");
    var value = $(this).val();
  $(".click-seat").html(value);
   
})
    $(".bus-seat-div").on("click",".bus-seat-radio-full",function(){
    $(".click-seat").css("color","#ff0808");
    $(".click-seat").html("Bu yer seçilib artıq");

})

$(".to-go-next").click(function(){
    $(".to-go").css("display","none")
    $(".to-go-personal-information").css("display","block");
    $(".btnback").click(function(){
        $(".to-go").css("display","block")
        $(".to-go-personal-information").css("display","none");
    })
});



});
$(".to-go-next").click(function(){
    var distance = $('.content').offset().top
    $('html,body').animate({scrollTop:distance},100);
})

$(".btnback").click(function(){
    var distance = $('.content').offset().top
    $('html,body').animate({scrollTop:distance},100);
})

/*!
 * jQuery Browser Plugin v0.0.6
 * https://github.com/gabceb/jquery-browser-plugin
 *
 * Original jquery-browser code Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors
 * http://jquery.org/license
 
 * Modifications Copyright 2013 Gabriel Cebrian
 * https://github.com/gabceb
 *
 * Released under the MIT license
 *
 * Date: 2013-07-29T17:23:27-07:00
 
 https://github.com/gabceb/jquery-browser-plugin/blob/master/dist/jquery.browser.js
 */

 (function( jQuery, window, undefined ) {
    "use strict";
  
    var matched, browser;
  
    jQuery.uaMatch = function( ua ) {
      ua = ua.toLowerCase();
  
        var match = /(opr)[\/]([\w.]+)/.exec( ua ) ||
            /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
            /(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec( ua ) ||
            /(webkit)[ \/]([\w.]+)/.exec( ua ) ||
            /(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
            /(msie) ([\w.]+)/.exec( ua ) ||
            ua.indexOf("trident") >= 0 && /(rv)(?::| )([\w.]+)/.exec( ua ) ||
            ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
            [];
  
        var platform_match = /(ipad)/.exec( ua ) ||
            /(iphone)/.exec( ua ) ||
            /(android)/.exec( ua ) ||
            /(windows phone)/.exec( ua ) ||
            /(win)/.exec( ua ) ||
            /(mac)/.exec( ua ) ||
            /(linux)/.exec( ua ) ||
            /(cros)/i.exec( ua ) ||
            [];
  
        return {
            browser: match[ 3 ] || match[ 1 ] || "",
            version: match[ 2 ] || "0",
            platform: platform_match[ 0 ] || ""
        };
    };
  
    matched = jQuery.uaMatch( window.navigator.userAgent );
    browser = {};
  
    if ( matched.browser ) {
        browser[ matched.browser ] = true;
        browser.version = matched.version;
        browser.versionNumber = parseInt(matched.version);
    }
  
    if ( matched.platform ) {
        browser[ matched.platform ] = true;
    }
  
    // These are all considered mobile platforms, meaning they run a mobile browser
    if ( browser.android || browser.ipad || browser.iphone || browser[ "windows phone" ] ) {
        browser.mobile = true;
    }
  
    // These are all considered desktop platforms, meaning they run a desktop browser
    if ( browser.cros || browser.mac || browser.linux || browser.win ) {
        browser.desktop = true;
    }
  
    // Chrome, Opera 15+ and Safari are webkit based browsers
    if ( browser.chrome || browser.opr || browser.safari ) {
        browser.webkit = true;
    }
  
    // IE11 has a new token so we will assign it msie to avoid breaking changes
    if ( browser.rv )
    {
        var ie = "msie";
  
        matched.browser = ie;
        browser[ie] = true;
    }
  
    // Opera 15+ are identified as opr
    if ( browser.opr )
    {
        var opera = "opera";
  
        matched.browser = opera;
        browser[opera] = true;
    }
  
    // Stock Android browsers are marked as Safari on Android.
    if ( browser.safari && browser.android )
    {
        var android = "android";
  
        matched.browser = android;
        browser[android] = true;
    }
  
    // Assign the name and platform variable
    browser.name = matched.browser;
    browser.platform = matched.platform;
  
  
    jQuery.browser = browser;
  })( jQuery, window );
  
  /*
      Masked Input plugin for jQuery
      Copyright (c) 2007-2011 Josh Bush (digitalbush.com)
      Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license) 
      Version: 1.3
    https://cloud.github.com/downloads/digitalBush/jquery.maskedinput/jquery.maskedinput-1.3.min.js
  */
  (function(a){var b=(a.browser.msie?"paste":"input")+".mask",c=window.orientation!=undefined;a.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},dataName:"rawMaskFn"},a.fn.extend({caret:function(a,b){if(this.length!=0){if(typeof a=="number"){b=typeof b=="number"?b:a;return this.each(function(){if(this.setSelectionRange)this.setSelectionRange(a,b);else if(this.createTextRange){var c=this.createTextRange();c.collapse(!0),c.moveEnd("character",b),c.moveStart("character",a),c.select()}})}if(this[0].setSelectionRange)a=this[0].selectionStart,b=this[0].selectionEnd;else if(document.selection&&document.selection.createRange){var c=document.selection.createRange();a=0-c.duplicate().moveStart("character",-1e5),b=a+c.text.length}return{begin:a,end:b}}},unmask:function(){return this.trigger("unmask")},mask:function(d,e){if(!d&&this.length>0){var f=a(this[0]);return f.data(a.mask.dataName)()}e=a.extend({placeholder:"_",completed:null},e);var g=a.mask.definitions,h=[],i=d.length,j=null,k=d.length;a.each(d.split(""),function(a,b){b=="?"?(k--,i=a):g[b]?(h.push(new RegExp(g[b])),j==null&&(j=h.length-1)):h.push(null)});return this.trigger("unmask").each(function(){function v(a){var b=f.val(),c=-1;for(var d=0,g=0;d<k;d++)if(h[d]){l[d]=e.placeholder;while(g++<b.length){var m=b.charAt(g-1);if(h[d].test(m)){l[d]=m,c=d;break}}if(g>b.length)break}else l[d]==b.charAt(g)&&d!=i&&(g++,c=d);if(!a&&c+1<i)f.val(""),t(0,k);else if(a||c+1>=i)u(),a||f.val(f.val().substring(0,c+1));return i?d:j}function u(){return f.val(l.join("")).val()}function t(a,b){for(var c=a;c<b&&c<k;c++)h[c]&&(l[c]=e.placeholder)}function s(a){var b=a.which,c=f.caret();if(a.ctrlKey||a.altKey||a.metaKey||b<32)return!0;if(b){c.end-c.begin!=0&&(t(c.begin,c.end),p(c.begin,c.end-1));var d=n(c.begin-1);if(d<k){var g=String.fromCharCode(b);if(h[d].test(g)){q(d),l[d]=g,u();var i=n(d);f.caret(i),e.completed&&i>=k&&e.completed.call(f)}}return!1}}function r(a){var b=a.which;if(b==8||b==46||c&&b==127){var d=f.caret(),e=d.begin,g=d.end;g-e==0&&(e=b!=46?o(e):g=n(e-1),g=b==46?n(g):g),t(e,g),p(e,g-1);return!1}if(b==27){f.val(m),f.caret(0,v());return!1}}function q(a){for(var b=a,c=e.placeholder;b<k;b++)if(h[b]){var d=n(b),f=l[b];l[b]=c;if(d<k&&h[d].test(f))c=f;else break}}function p(a,b){if(!(a<0)){for(var c=a,d=n(b);c<k;c++)if(h[c]){if(d<k&&h[c].test(l[d]))l[c]=l[d],l[d]=e.placeholder;else break;d=n(d)}u(),f.caret(Math.max(j,a))}}function o(a){while(--a>=0&&!h[a]);return a}function n(a){while(++a<=k&&!h[a]);return a}var f=a(this),l=a.map(d.split(""),function(a,b){if(a!="?")return g[a]?e.placeholder:a}),m=f.val();f.data(a.mask.dataName,function(){return a.map(l,function(a,b){return h[b]&&a!=e.placeholder?a:null}).join("")}),f.attr("readonly")||f.one("unmask",function(){f.unbind(".mask").removeData(a.mask.dataName)}).bind("focus.mask",function(){m=f.val();var b=v();u();var c=function(){b==d.length?f.caret(0,b):f.caret(b)};(a.browser.msie?c:function(){setTimeout(c,0)})()}).bind("blur.mask",function(){v(),f.val()!=m&&f.change()}).bind("keydown.mask",r).bind("keypress.mask",s).bind(b,function(){setTimeout(function(){f.caret(v(!0))},0)}),v()})}})})(jQuery);
  
  /*     My Javascript      */
  
  $(function(){
 
    $("#phone").mask("(099) 999-99-99");
  
  
    $("#phone").on("blur", function() {
        var last = $(this).val().substr( $(this).val().indexOf("-") + 1 );

        if( last.length == 5 ) {
            var move = $(this).val().substr( $(this).val().indexOf("-") + 1, 1 );
  
            var lastfour = last.substr(1,4);
  
            var first = $(this).val().substr( 0, 9 );
  
            $(this).val( first + move + '-' + lastfour );
        }
    });
  }); 



  function fromwheretable(){
    $('#fromwhere').on('input', function () {
        var value = $(this).val().toLowerCase();
  if(!$(this).val()){
    $(".fromwhere").css('display','none');
  }else{
    $(".fromwhere").css('display','block');
  }
        $('.fromwhere li').filter(function () {
    
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
      });
     
      $(".fromwhere").on('click','.fromwherename',function(){
        var fromwherecity=$(this).html();
        $('#fromwhere').val(fromwherecity);
        $(".fromwhere").css('display','none');
      });
    var fromwherecitytable='<li> <span class="fromwherename" >Agcabədi</span> </li>'+
    '<li> <span class="fromwherename" >Ağdam</span> </li>'+
    '<li> <span class="fromwherename" >Ağdaş</span> </li>'+
    '<li> <span class="fromwherename" >Ağdərə</span> </li>'+
    '<li> <span class="fromwherename" >Ağstafa</span> </li>'+
    '<li> <span class="fromwherename" >Ağsu</span> </li>'+
    '<li> <span class="fromwherename" >Astara</span> </li>'+
    '<li> <span class="fromwherename" >Bakı</span> </li>'+
    '<li> <span class="fromwherename" >Balakən</span> </li>'+
    '<li> <span class="fromwherename" >Beylaqan</span> </li>'+
    '<li> <span class="fromwherename" >Bərdə</span> </li>'+
    '<li> <span class="fromwherename" >Biləsuvar</span> </li>'+
    '<li> <span class="fromwherename" >Cəbrayıl</span> </li>'+
    '<li> <span class="fromwherename" >Cəlilabad</span> </li>'+
    '<li> <span class="fromwherename" >Culfa</span> </li>'+
    '<li> <span class="fromwherename" >Daşkəsən</span> </li>'+
    '<li> <span class="fromwherename" >Füzuli</span> </li>'+
    '<li> <span class="fromwherename" >Gədəbəy</span> </li>'+
    '<li> <span class="fromwherename" >Gəncə</span> </li>'+
    '<li> <span class="fromwherename" >Goranboy</span> </li>'+
    '<li> <span class="fromwherename" >Göyçay</span> </li>'+
    '<li> <span class="fromwherename" >Göygöl</span> </li>'+
    '<li> <span class="fromwherename" >Göytəpə</span> </li>'+
    '<li> <span class="fromwherename" >Hacıqabul</span> </li>'+
    '<li> <span class="fromwherename" >Horadiz</span> </li>'+
    '<li> <span class="fromwherename" >İmişli</span> </li>'+
    '<li> <span class="fromwherename" >İsmayıllı</span> </li>'+
    '<li> <span class="fromwherename" >Kəlbəcər</span> </li>'+
    '<li> <span class="fromwherename" >Kürdəmir</span> </li>'+
    '<li> <span class="fromwherename" >Laçın</span> </li>'+
    '<li> <span class="fromwherename" >Lerik</span> </li>'+
    '<li> <span class="fromwherename" >Lənkəran</span> </li>'+
    '<li> <span class="fromwherename" >Massallı</span> </li>'+
    '<li> <span class="fromwherename" >Mingəçəvir</span> </li>'+
    '<li> <span class="fromwherename" >Nabran</span> </li>'+
    '<li> <span class="fromwherename" >Naftalan</span> </li>'+
    '<li> <span class="fromwherename" >Naxçəvan</span> </li>'+
    '<li> <span class="fromwherename" >Neftçala</span> </li>'+
    '<li> <span class="fromwherename" >Oğuz</span> </li>'+
    '<li> <span class="fromwherename" >Ordubad</span> </li>'+
    '<li> <span class="fromwherename" >Qax</span> </li>'+
    '<li> <span class="fromwherename" >Qazax</span> </li>'+
    '<li> <span class="fromwherename" >Qəbələ</span> </li>'+
    '<li> <span class="fromwherename" >Qobustan</span> </li>'+
    '<li> <span class="fromwherename" >Quba</span> </li>'+
    '<li> <span class="fromwherename" >Qubadlı</span> </li>'+
    '<li> <span class="fromwherename" >Qusar</span> </li>'+
    '<li> <span class="fromwherename" >Saatlı</span> </li>'+
    '<li> <span class="fromwherename" >Sabirabad</span> </li>'+
    '<li> <span class="fromwherename" >Şabran</span> </li>'+
    '<li> <span class="fromwherename" >Şahbuz</span> </li>'+
    '<li> <span class="fromwherename" >Salyan</span> </li>'+
    '<li> <span class="fromwherename" >Şamaxı</span> </li>'+
    '<li> <span class="fromwherename" >Samux</span> </li>'+
    '<li> <span class="fromwherename" >Şəki</span> </li>'+
    '<li> <span class="fromwherename" >Şəmkir</span> </li>'+
    '<li> <span class="fromwherename" >Şərur</span> </li>'+
    '<li> <span class="fromwherename" >Şirvan</span> </li>'+
    '<li> <span class="fromwherename" >Siyəzən</span> </li>'+
    '<li> <span class="fromwherename" >Sumqayıt</span> </li>'+
    '<li> <span class="fromwherename" >Şuşa</span> </li>'+
    '<li> <span class="fromwherename" >Tərtər</span> </li>'+
    '<li> <span class="fromwherename" >Tovuz</span> </li>'+
    '<li> <span class="fromwherename" >Ucar</span> </li>'+
    '<li> <span class="fromwherename" >Xaçmaz</span> </li>'+
    '<li> <span class="fromwherename" >Xankəndi</span> </li>'+
    '<li> <span class="fromwherename" >Xırdalan</span> </li>'+
    '<li> <span class="fromwherename" >Xızı</span> </li>'+
    '<li> <span class="fromwherename" >Xocalı</span> </li>'+
    '<li> <span class="fromwherename" >Xocavənd</span> </li>'+
    '<li> <span class="fromwherename" >Xudat</span> </li>'+
    '<li> <span class="fromwherename" >Yardımlı</span> </li>'+
    '<li> <span class="fromwherename" >Yevlax</span> </li>'+
    '<li> <span class="fromwherename" >Zaqatala</span> </li>'+
    '<li> <span class="fromwherename" >Zəngilan</span> </li>'+
    '<li> <span class="fromwherename" >Zərdab</span> </li>'
    ;
    $(".fromwhere").html(fromwherecitytable);
  };

  function wheretable(){
    $('#where').on('input', function () {
        var value = $(this).val().toLowerCase();
        if(!$(this).val()){
            $(".where").css('display','none');
          }else{
            $(".where").css('display','block');
          }
        $('.where li').filter(function () {
           
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
      });
      $(".where").on('click','.wherename',function(){
        var fromwherecity=$(this).html();
        $('#where').val(fromwherecity);
        $(".where").css('display','none');
      })
    var wherecitytable='<li> <span class="wherename" >Agcabədi</span> </li>'+
    '<li> <span class="wherename" >Ağdam</span> </li>'+
    '<li> <span class="wherename" >Ağdaş</span> </li>'+
    '<li> <span class="wherename" >Ağdərə</span> </li>'+
    '<li> <span class="wherename" >Ağstafa</span> </li>'+
    '<li> <span class="wherename" >Ağsu</span> </li>'+
    '<li> <span class="wherename" >Astara</span> </li>'+
    '<li> <span class="wherename" >Bakı</span> </li>'+
    '<li> <span class="wherename" >Balakən</span> </li>'+
    '<li> <span class="wherename" >Beylaqan</span> </li>'+
    '<li> <span class="wherename" >Bərdə</span> </li>'+
    '<li> <span class="wherename" >Biləsuvar</span> </li>'+
    '<li> <span class="wherename" >Cəbrayıl</span> </li>'+
    '<li> <span class="wherename" >Cəlilabad</span> </li>'+
    '<li> <span class="wherename" >Culfa</span> </li>'+
    '<li> <span class="wherename" >Daşkəsən</span> </li>'+
    '<li> <span class="wherename" >Füzuli</span> </li>'+
    '<li> <span class="wherename" >Gədəbəy</span> </li>'+
    '<li> <span class="wherename" >Gəncə</span> </li>'+
    '<li> <span class="wherename" >Goranboy</span> </li>'+
    '<li> <span class="wherename" >Göyçay</span> </li>'+
    '<li> <span class="wherename" >Göygöl</span> </li>'+
    '<li> <span class="wherename" >Göytəpə</span> </li>'+
    '<li> <span class="wherename" >Hacıqabul</span> </li>'+
    '<li> <span class="wherename" >Horadiz</span> </li>'+
    '<li> <span class="wherename" >İmişli</span> </li>'+
    '<li> <span class="wherename" >İsmayıllı</span> </li>'+
    '<li> <span class="wherename" >Kəlbəcər</span> </li>'+
    '<li> <span class="wherename" >Kürdəmir</span> </li>'+
    '<li> <span class="wherename" >Laçın</span> </li>'+
    '<li> <span class="wherename" >Lerik</span> </li>'+
    '<li> <span class="wherename" >Lənkəran</span> </li>'+
    '<li> <span class="wherename" >Massallı</span> </li>'+
    '<li> <span class="wherename" >Mingəçəvir</span> </li>'+
    '<li> <span class="wherename" >Nabran</span> </li>'+
    '<li> <span class="wherename" >Naftalan</span> </li>'+
    '<li> <span class="wherename" >Naxçəvan</span> </li>'+
    '<li> <span class="wherename" >Neftçala</span> </li>'+
    '<li> <span class="wherename" >Oğuz</span> </li>'+
    '<li> <span class="wherename" >Ordubad</span> </li>'+
    '<li> <span class="wherename" >Qax</span> </li>'+
    '<li> <span class="wherename" >Qazax</span> </li>'+
    '<li> <span class="wherename" >Qəbələ</span> </li>'+
    '<li> <span class="wherename" >Qobustan</span> </li>'+
    '<li> <span class="wherename" >Quba</span> </li>'+
    '<li> <span class="wherename" >Qubadlı</span> </li>'+
    '<li> <span class="wherename" >Qusar</span> </li>'+
    '<li> <span class="wherename" >Saatlı</span> </li>'+
    '<li> <span class="wherename" >Sabirabad</span> </li>'+
    '<li> <span class="wherename" >Şabran</span> </li>'+
    '<li> <span class="wherename" >Şahbuz</span> </li>'+
    '<li> <span class="wherename" >Salyan</span> </li>'+
    '<li> <span class="wherename" >Şamaxı</span> </li>'+
    '<li> <span class="wherename" >Samux</span> </li>'+
    '<li> <span class="wherename" >Şəki</span> </li>'+
    '<li> <span class="wherename" >Şəmkir</span> </li>'+
    '<li> <span class="wherename" >Şərur</span> </li>'+
    '<li> <span class="wherename" >Şirvan</span> </li>'+
    '<li> <span class="wherename" >Siyəzən</span> </li>'+
    '<li> <span class="wherename" >Sumqayıt</span> </li>'+
    '<li> <span class="wherename" >Şuşa</span> </li>'+
    '<li> <span class="wherename" >Tərtər</span> </li>'+
    '<li> <span class="wherename" >Tovuz</span> </li>'+
    '<li> <span class="wherename" >Ucar</span> </li>'+
    '<li> <span class="wherename" >Xaçmaz</span> </li>'+
    '<li> <span class="wherename" >Xankəndi</span> </li>'+
    '<li> <span class="wherename" >Xırdalan</span> </li>'+
    '<li> <span class="wherename" >Xızı</span> </li>'+
    '<li> <span class="wherename" >Xocalı</span> </li>'+
    '<li> <span class="wherename" >Xocavənd</span> </li>'+
    '<li> <span class="wherename" >Xudat</span> </li>'+
    '<li> <span class="wherename" >Yardımlı</span> </li>'+
    '<li> <span class="wherename" >Yevlax</span> </li>'+
    '<li> <span class="wherename" >Zaqatala</span> </li>'+
    '<li> <span class="wherename" >Zəngilan</span> </li>'+
    '<li> <span class="wherename" >Zərdab</span> </li>'
    ;
    $(".where").html(wherecitytable);
  };
  