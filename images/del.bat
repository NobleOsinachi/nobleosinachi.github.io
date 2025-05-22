@echo off
setlocal

set "srcDir=C:\Users\NOBLE\source\repos\nobleosinachi.github.io\images"

echo Converting all .png files to .png in:
echo %srcDir%
echo.

powershell -Command ^
    "Get-ChildItem -Path '%srcDir%' -Filter '*.png' | ForEach-Object { ^
        $img = [System.Drawing.Image]::FromFile($_.FullName); ^
        $pngPath = [System.IO.Path]::ChangeExtension($_.FullName, 'png'); ^
        $img.Save($pngPath, [System.Drawing.Imaging.ImageFormat]::Png); ^
        $img.Dispose(); ^
    }"

echo Done!
pause



