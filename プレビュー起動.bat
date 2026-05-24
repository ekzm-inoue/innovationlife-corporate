@echo off
chcp 65001 >nul
title イノベーションライフ プレビューサーバー
cd /d "%~dp0"

echo.
echo  ============================================
echo    イノベーションライフ プレビューサーバー
echo  ============================================
echo.
echo   URL     : http://localhost:8000
echo   フォルダ : %CD%
echo.

REM Python の存在確認
python --version >nul 2>&1
if errorlevel 1 (
    echo  [エラー] Python が見つかりません。
    echo  python を PATH に追加してから再度お試しください。
    echo.
    pause
    exit /b 1
)

REM index.html の存在確認（フォルダが正しいかチェック）
if not exist "index.html" (
    echo  [エラー] index.html が見つかりません。
    echo  このバッチファイルはイノベーションライフのフォルダ直下に置いてください。
    echo.
    pause
    exit /b 1
)

REM ポート 8000 が既に使用中かチェック
netstat -an | findstr ":8000 " | findstr "LISTENING" >nul
if not errorlevel 1 (
    echo  [警告] ポート 8000 は既に使われています。
    echo  既に別のサーバーが起動中の可能性があります。
    echo.
    echo  対処法:
    echo   1. このウィンドウを閉じる
    echo   2. タスクマネージャーで python.exe を全終了
    echo   3. もう一度ダブルクリック
    echo.
    pause
    exit /b 1
)

REM ブラウザを2秒後に開く（バックグラウンド）
start "" /b cmd /c "ping -n 3 127.0.0.1 >nul && start http://localhost:8000"

echo  サーバー起動後、自動でブラウザが開きます
echo  終了するには、このウィンドウを閉じるか Ctrl+C
echo.
echo  --------------------------------------------
echo.

REM Python の HTTP サーバーを起動（127.0.0.1 限定 = 自分だけ）
python -m http.server 8000 --bind 127.0.0.1

echo.
echo  サーバーが停止しました。
pause
