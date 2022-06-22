<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <!--[if IE]><link rel="icon" href="/webapp/favicon.ico"><![endif]-->
    <title>{{env('APP_NAME')}}</title>
    <script src="/js/app.js"></script>
<link href="/webapp/js/10.js" rel="prefetch"><link href="/webapp/js/11.js" rel="prefetch"><link href="/webapp/js/12.js" rel="prefetch"><link href="/webapp/js/15.js" rel="prefetch"><link href="/webapp/js/16.js" rel="prefetch"><link href="/webapp/js/17.js" rel="prefetch"><link href="/webapp/js/18.js" rel="prefetch"><link href="/webapp/js/21.js" rel="prefetch"><link href="/webapp/js/22.js" rel="prefetch"><link href="/webapp/js/23.js" rel="prefetch"><link href="/webapp/js/24.js" rel="prefetch"><link href="/webapp/js/25.js" rel="prefetch"><link href="/webapp/js/26.js" rel="prefetch"><link href="/webapp/js/27.js" rel="prefetch"><link href="/webapp/js/28.js" rel="prefetch"><link href="/webapp/js/29.js" rel="prefetch"><link href="/webapp/js/30.js" rel="prefetch"><link href="/webapp/js/31.js" rel="prefetch"><link href="/webapp/js/32.js" rel="prefetch"><link href="/webapp/js/33.js" rel="prefetch"><link href="/webapp/js/34.js" rel="prefetch"><link href="/webapp/js/35.js" rel="prefetch"><link href="/webapp/js/36.js" rel="prefetch"><link href="/webapp/js/5.js" rel="prefetch"><link href="/webapp/js/6.js" rel="prefetch"><link href="/webapp/js/8.js" rel="prefetch"><link href="/webapp/js/9.js" rel="prefetch"><link href="/webapp/js/chunk-common.js" rel="preload" as="script"><link href="/webapp/js/chunk-vendors.js" rel="preload" as="script"><link href="/webapp/js/website.js" rel="preload" as="script"><link rel="icon" type="image/png" sizes="32x32" href="/webapp/./img/icons/vuetify.svg"><link rel="icon" type="image/png" sizes="16x16" href="/webapp/./img/icons/vuetify.svg"><link rel="manifest" href="/webapp/manifest.json"><meta name="theme-color" content="#4DBA87"><meta name="apple-mobile-web-app-capable" content="no"><meta name="apple-mobile-web-app-status-bar-style" content="default"><meta name="apple-mobile-web-app-title" content="nghiennet89"><link rel="apple-touch-icon" href="/webapp/img/icons/apple-touch-icon-152x152.png"><link rel="mask-icon" href="/webapp/img/icons/safari-pinned-tab.svg" color="#4DBA87"><meta name="msapplication-TileImage" content="/webapp/img/icons/msapplication-icon-144x144.png"><meta name="msapplication-TileColor" content="#000000"></head>
@if(isset($personalAccessToken))
<script>
    localStorage.setItem(window.location.hostname + '_personal_access_token', '{{$personalAccessToken}}');
    window.location = '/';
</script>
@endif
<body>
<noscript>
    <strong>We're sorry but our system doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
</noscript>
<div id="website"></div>
<!-- built files will be auto injected -->
<script type="text/javascript" src="/webapp/js/chunk-vendors.js"></script><script type="text/javascript" src="/webapp/js/chunk-common.js"></script><script type="text/javascript" src="/webapp/js/website.js"></script></body>
</html>
