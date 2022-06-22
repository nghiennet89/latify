<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <!--[if IE]><link rel="icon" href="/webapp/favicon.ico"><![endif]-->
    <title>{{env('APP_NAME')}}</title>
    <script src="/js/app.js"></script>
<link href="/webapp/js/0.js" rel="prefetch"><link href="/webapp/js/1.js" rel="prefetch"><link href="/webapp/js/13.js" rel="prefetch"><link href="/webapp/js/14.js" rel="prefetch"><link href="/webapp/js/19.js" rel="prefetch"><link href="/webapp/js/2.js" rel="prefetch"><link href="/webapp/js/20.js" rel="prefetch"><link href="/webapp/js/3.js" rel="prefetch"><link href="/webapp/js/4.js" rel="prefetch"><link href="/webapp/js/7.js" rel="prefetch"><link href="/webapp/js/admin.js" rel="preload" as="script"><link href="/webapp/js/chunk-common.js" rel="preload" as="script"><link href="/webapp/js/chunk-vendors.js" rel="preload" as="script"><link rel="icon" type="image/png" sizes="32x32" href="/webapp/./img/icons/vuetify.svg"><link rel="icon" type="image/png" sizes="16x16" href="/webapp/./img/icons/vuetify.svg"><link rel="manifest" href="/webapp/manifest.json"><meta name="theme-color" content="#4DBA87"><meta name="apple-mobile-web-app-capable" content="no"><meta name="apple-mobile-web-app-status-bar-style" content="default"><meta name="apple-mobile-web-app-title" content="nghiennet89"><link rel="apple-touch-icon" href="/webapp/img/icons/apple-touch-icon-152x152.png"><link rel="mask-icon" href="/webapp/img/icons/safari-pinned-tab.svg" color="#4DBA87"><meta name="msapplication-TileImage" content="/webapp/img/icons/msapplication-icon-144x144.png"><meta name="msapplication-TileColor" content="#000000"></head>
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
<div id="admin"></div>
<!-- built files will be auto injected -->
<script type="text/javascript" src="/webapp/js/chunk-vendors.js"></script><script type="text/javascript" src="/webapp/js/chunk-common.js"></script><script type="text/javascript" src="/webapp/js/admin.js"></script></body>
</html>
