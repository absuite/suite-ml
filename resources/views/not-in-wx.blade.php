<!doctype html>
<html lang="zh-cn">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title>@section('title') {{env('APP_NAME')}} @show
  </title>
  <link rel="shortcut icon" href="{{ URL::asset('favicon.ico') }}" />
  <style>
    html,body{
      margin: 0px;
      padding: 0px;
      height: 100%;
      width: 100%;
      min-height: 100%;
    }
    body{
      height: 100%;
      background: rgba(0,0,0,0.03);
    }
    .box{
      display: flex;
      display: -webkit-flex;
      align-items:center;
      justify-content:center;
      height: 100%;
      flex-direction: column;
    }
    .qrcode svg{
      max-width: 100%;
    }
    .tip{
      text-align: center
    }
  </style>
</head>
<body>
  <div class="box">
        <div class="qrcode">{!! QrCode::size(300)->margin(0)->generate(Request::url()); !!}</div>        
        <p class="tip">请在微信端打开!</p>
  </div>
</body>
</html>
