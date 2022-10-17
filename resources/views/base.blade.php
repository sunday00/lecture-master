<!doctype html>
<html lang="en" data-theme="city">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Load-test-login</title>
    <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22>
        <text y=%22.9em%22 font-size=%2290%22>🙋</text>
    </svg>">
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdn.jsdelivr.net/npm/daisyui@2.31.0/dist/full.css" rel="stylesheet" type="text/css"/>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
<header>
    <nav class="navbar bg-base-100">
        <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal p-0">
                <li>
                    <a href="/login">login</a>
                </li>
                <li>
                    <a href="/lazy">lazy</a>
                </li>
                <li>
                    <a href="/eager">eager</a>
                </li>
                <li>
                    <a href="/conditional-eager">conditionalEager</a>
                </li>
                <li>
                    <a href="/lazy-eager">lazyEager</a>
                </li>
            </ul>
        </div>
    </nav>
</header>
<main>
    @yield('main')
</main>
</body>
</html>
